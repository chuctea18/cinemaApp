import '@fortawesome/fontawesome-free/css/all.min.css';
import "../Menu/style.css"
function Menu() {
  return (
    <div className = "row">
    <div className="d-flex justify-content-center">
    
      <nav id="nav">
          <ul className="nav justify-content-center ">
              <a href='/phim_dang_chieu'><li className="nav-item"><p className="nav-link"><i className="fa fa-film icon"></i>Phim</p></li> </a>
              <a href='/lich-chieu'><li className="nav-item"><p className="nav-link"><i className="fa fa-calendar icon"></i>Lịch chiếu</p></li></a>
              <a href='/uu-dai'><li className="nav-item"><p className="nav-link"><i className="fa fa-gift icon"></i>Ưu đãi</p></li></a>
              <a href='/gia-ve'><li className="nav-item"><p className="nav-link"><i className="fa fa-money-bill icon"></i>Giá vé</p></li></a>
              <a href='/gioi-thieu'><li className="nav-item"><p className="nav-link"><i className="fa fa-circle-info icon"></i>Giới thiệu</p></li></a>
              <a href='/ho-tro'><li className="nav-item"><p className="nav-link"><i className="fa fa-question-circle icon"></i>Hỗ trợ</p></li></a>
          </ul>
      </nav>
    </div>

</div>
  )
}

export default Menu