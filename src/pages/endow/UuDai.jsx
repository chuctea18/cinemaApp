import Banner from "../../components/shared/Banner";
import BuyTicket from "../../components/Buyticket/BuyTicket";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import uudai_hs from "../../assets/img/uudai_hs.png";
import uudai_thanhvien from "../../assets/img/uudai_thanhvien.png";
import uudai_thu3 from "../../assets/img/uudai_thu3.png";
import "../endow/style.css";
function UuDai() {

  return (
    <div>
      <Header />
      <Menu />
      <br/>
      <Banner />
      <BuyTicket
      />
      <div className="preferential">
        <h3 className="tittle">CÁC ƯU ĐÃI</h3>
        <div className="preferential-list">
          <div className="preferential-item">
            <div className="preferential-img">
              <img src={uudai_hs} alt="banner uudai_hs" />
            </div>

            <div className="preferential-content">
              <h3 className="preferential-name">
                ƯU ĐÃI HỌC SINH - SINH VIÊN{" "}
              </h3>
              <p className="preferential-detail">
                Áp dụng dành cho giáo viên, giảng viên, học sinh, sinh viên.{" "}
                <br />
                Ưu đãi giá vé xem phim chỉ 45,000đ/vé. <br />
                LƯU Ý: <br />
                - Vui lòng mua TRỰC TIẾP TẠI RẠP và xuất trình thẻ HSSV-GV hoặc
                CMND có dán ảnh và còn hiệu lực khi mua vé. <br />
                - Mỗi thẻ mua được một vé. <br />- Không áp dụng cho các ngày
                Lễ, Tết, hoặc suất chiếu có phụ thu từ nhà phát hành phim.
              </p>
            </div>
          </div>

          <div className="preferential-item">
            <div className="preferential-img">
              <img src={uudai_thanhvien} alt="banner uudai_thanhvien" />
            </div>
            <div className="preferential-content">
              <h3 className="preferential-name">MỪNG THÀNH VIÊN MỚI</h3>
              <p className="preferential-detail">
                - Giá vé ưu đãi: Giảm 25% cho đơn đặt vé đầu tiên ( bao gồm vé +
                bắp nước ). <br />
                - Đối tượng: dành cho khách hàng lần đầu đăng ký tài khoản thanh
                toán online. <br />- Lưu ý: Không áp dụng cho các ngày lễ/tết.
              </p>
            </div>
          </div>

          <div className="preferential-item">
            <div className="preferential-img">
              <img src={uudai_thu3} alt="banner uudai_thu3" />
            </div>
            <div className="preferential-content">
              <h3 className="preferential-name">THỨ BA VUI VẺ </h3>
              <p className="preferential-detail">
                - Giá vé ưu đãi: 50.000 đ/vé. <br />
                - Thời gian: Áp dụng cho tất cả các suất chiếu ngày Thứ Ba hàng
                tuần. <br />- Lưu ý: Không áp dụng cho các ngày lễ/tết.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default UuDai;
