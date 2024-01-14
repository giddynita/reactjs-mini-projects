const MenuBtn = ({ data, selectTab }) => {
  return (
    <div className="menu-tab">
      {data.map((initialData) => {
        const { id, company, order } = initialData
        return (
          <button
            type="button"
            className="menu-btn"
            onClick={() => {
              selectTab(order)
            }}
            key={id}
          >
            {company}
          </button>
        )
      })}
    </div>
  )
}
export default MenuBtn
