const SingleMenu = ({ img, title, price, desc }) => {
  return (
    <div className="single-menu">
      <img src={img} alt={title} className="single-menu_img" />
      <div className="single-menu_info">
        <div className="header">
          <h5 className="single-menu_title">{title}</h5>
          <span className="single-menu_price">${price}</span>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  )
}
export default SingleMenu
