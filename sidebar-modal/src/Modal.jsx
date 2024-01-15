import { FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const Modal = () => {
  const [toggleModal, setToggleModal] = useState(false)

  return (
    <>
      <div className="modal-btn">
        <button
          type="button"
          className="btn"
          onClick={() => {
            setToggleModal(true)
          }}
        >
          show modal
        </button>
      </div>

      <div className={toggleModal ? 'modal show-modal' : 'modal'}>
        <div className="modal-content">
          <p>modal content</p>
          <button
            className="modal-cancel"
            onClick={() => {
              setToggleModal(false)
            }}
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </>
  )
}
export default Modal
