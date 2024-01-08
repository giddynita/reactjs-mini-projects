import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-toastify'

export const useFetchTasks = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['task'],
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:5000/api/tasks/')
      const { taskList } = data
      return taskList
    },
  })
  return { data, isLoading, isError }
}

export const useCreateTask = (setNewItemName) => {
  const queryClient = useQueryClient()
  const { mutate: createTask, isLoading: createTaskLoading } = useMutation({
    mutationFn: async (newItemName) => {
      await axios.post('http://localhost:5000/api/tasks/', {
        title: newItemName,
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['task'] })
      toast.success('task added')
      setNewItemName('')
    },
    onError: (error) => {
      toast.error(error.response.data.msg)
    },
  })
  return { createTask, createTaskLoading }
}
export const useEditTask = () => {
  const queryClient = useQueryClient()
  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }) => {
      axios.patch(`http://localhost:5000/api/tasks/${taskId}`, {
        isDone: isDone,
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['task'] })
    },
  })
  return { editTask }
}
export const useDeleteTask = () => {
  const queryClient = useQueryClient()
  const { mutate: deleteTask, isLoading: deleteTaskLoading } = useMutation({
    mutationFn: (taskId) => {
      axios.delete(`http://localhost:5000/api/tasks/${taskId}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['task'] })
    },
  })
  return { deleteTask, deleteTaskLoading }
}
