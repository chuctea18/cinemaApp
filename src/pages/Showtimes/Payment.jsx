import { Component } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import "../Showtimes/style.css";
import Footer from "../../components/Footer/Footer";
import queryString from "query-string";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.match,
      menu: this.props.location.search,
      sum: 0
    };
    this.onSubmit=this.onSubmit.bind(this)
    
  }
  componentDidMount() {
    fetch("http://localhost:8000/payment")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ user: data }, () => {
          console.log(this.state.user);
        });
      });
      this.setState({ sum: parseInt(queryString.parse(this.state.menu).summary) + parseInt(queryString.parse(this.state.menu).sum_food) }, () => {
        console.log(this.state.sum);
      });
  }

  onSubmit(){
    const id_user = queryString.parse(this.state.menu).id_user;
    const id_movie = queryString.parse(this.state.menu).id_movie;
    const day_order = queryString.parse(this.state.menu).day_order;
    const time = queryString.parse(this.state.menu).time;
    const quantity_ticket = queryString.parse(this.state.menu).quantity_ticket;
    const summary = queryString.parse(this.state.menu).summary;
    const chair = queryString.parse(this.state.menu).chair;
    const body_data = {id_user,id_movie, day_order, time, quantity_ticket, summary, chair };
    console.log("body_data : ", body_data);
    fetch(
      `http://localhost:8000/api/price/${id_user}/${id_movie}`,
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(body_data),
      }
    )
      // .then((res) => res.json())
      .then((res) => {
        if (res.status == 200) {
          toast.success("Chào bạn đã đến với chúng tôi!!!")
          window.location.href = "/";
        }
      });
  }
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <br/>
        <div
        className="section-order"
        style={{ height: "fit-content", display: "block" }}
      >
        <a className="close-order" href="#"></a> {/* close-order ---- */}
        {/* movie-part */}
        <div className="order-title">
          <div className="order-wrap">
            {/* <!--<div className="order-pic"><img src="https://cinestar.com.vn/pictures/films/6.jpg" /></div>--> */}
            <div className="order-overview">
              <h2>
                <strong>Tên phim</strong>
                <br />
                <span style={{color:'#ffff', fontWeight:'bold'}}>{queryString.parse(this.state.menu).title}</span>
              </h2>

              <ul className="about-ticket">
                <li>
                  <p className="caption">Suất chiếu</p>
                  <p className="value">{queryString.parse(this.state.menu).time}</p>
                </li>
                <li>
                  <p className="caption">Ngày</p>
                  <p className="value">{queryString.parse(this.state.menu).day_order}</p>
                </li>
                <li>
                  <p className="caption">Số lượng</p>
                  <p className="value">
                    <span>{queryString.parse(this.state.menu).quantity_ticket}</span>
                    <span style={{fontSize: '18px'}}> vé</span>
                  </p>
                </li>
                <li>
                  <p className="caption">Tổng số tiền</p>
                  <p className="value">
                    <span>{this.state.sum}</span>
                    <sup>đ</sup>
                  </p>
                </li>
              </ul>
              <ul className="about-seat">
                <li>Số ghế</li>
                <li className="seat-number">{queryString.parse(this.state.menu).chair}</li>
              </ul>
            </div>
          </div>
        </div>
        {/* movie-part */}
        <div className="order-content" style={{ display: "block" }}>
          {/* <!--//payment-part//--> */}
          <div className="final-content ">
            <div className="cinema-name">
              <h2>Lotto Cinema</h2>
            </div>
            <div className="final-confirm">
              <p>
                Cảm ơn quý khách đã đến với <strong>Lottocinema</strong> !<br />{" "}
                Xin quý khách vui lòng kiểm tra lại thông tin đặt vé{" "}
              </p>
              <div className="confirm-box">
                <div className="confirm-cus">
                  <p>
                    Họ tên: <strong></strong>{this.state.user.name}
                  </p>
                  <p>
                    Email: <strong></strong>{this.state.user.email}
                  </p>
                  <p>
                    Phone: <strong></strong>{this.state.user.phone}
                  </p>
                </div>

                <div className="confirm-film">
                  <div className="confirm-film-pic">
                    <img src={queryString.parse(this.state.menu).image}  alt="ảnh phim" />
                  </div>
                  <div className="confirm-film-text">
                    <h3>{queryString.parse(this.state.menu).title}</h3>
                    <p>
                      Ngày chiếu: <b>{queryString.parse(this.state.menu).day_order}</b>
                    </p>
                    <p>
                      Xuất chiếu: <b>{queryString.parse(this.state.menu).time}</b>
                    </p>
                  </div>
                </div>
                <div className="confirm-ticket">
                  <div className="confirm-mark">Ghế</div>
                  <div className="confirm-text">
                    <div className="confirm-mark">{queryString.parse(this.state.menu).chair}</div>
                    <div className="confirm-value">
                      <span>{queryString.parse(this.state.menu).summary}</span>
                      <sup>đ</sup>
                    </div>
                  </div>
                </div>
                <div class="confirm-cons">
                  <div class="confirm-mark">Combo</div>
                  <div className="confirm-text">
                    <div className="confirm-mark"></div>
                    <div className="confirm-value">
                      <span>{queryString.parse(this.state.menu).sum_food}</span>
                      <sup>đ</sup>
                    </div>
                  </div>
                </div>
                <div class="confirm-total">
                  <div class="confirm-mark">Tổng tiền</div>
                  <div class="confirm-value">
                    <span>{this.state.sum}</span>
                    <sup>đ</sup>
                  </div>
                </div>
                <div className="print"></div>
              </div>
            </div>

            <div className="final-form">
              <form id="final">
                <div className="input-text">
                  <h2>ĐIỀU KHOẢN CHUNG</h2>
                  <div className="terms_condition_paypal">
                    <p>&nbsp;</p>
                    <p>
                      Việc bạn sử dụng website này đồng nghĩa với việc bạn đồng
                      ý với những thỏa thuận dưới đây.
                    </p>
                    <p>
                      Nếu bạn không đồng ý, xin vui lòng không sử dụng website.
                    </p>
                    <br />
                    <div>
                      <strong>1. Trách nhiệm của người sử dụng</strong>
                      <p>
                        Khi truy cập vào trang web này, bạn đồng ý chấp nhận mọi
                        rủi ro. Lottocinema và các bên đối tác khác không chịu
                        trách nhiệm về bất kỳ tổn thất nào do những hậu quả trực
                        tiếp, tình cờ hay gián tiếp; những thất thoát, chi phí
                        (bao gồm chi phí pháp lý, chi phí tư vấn hoặc các khoản
                        chi tiêu khác) có thể phát sinh trực tiếp hoặc gián tiếp
                        do việc truy cập trang web hoặc khi tải dữ liệu về máy;
                        những tổn hại gặp phải do virus, hành động phá hoại trực
                        tiếp hay gián tiếp của hệ thống máy tính khác, đường dây
                        điện thoại, phần cứng, phần mềm, lỗi chương trình, hoặc
                        bất kì các lỗi nào khác; đường truyền dẫn của máy tính
                        hoặc nối kết mạng bị chậm…
                      </p>
                    </div>
                    <br />
                    <div>
                      <strong>2. Về nội dung trên trang web:</strong>
                      <p>
                        Tất cả những thông tin ở đây được cung cấp cho bạn một
                        cách trung thực như bản thân sự
                        việc.&nbsp;Cinestar&nbsp;và các bên liên quan không bảo
                        đảm, hay có bất kỳ tuyên bố nào liên quan đến tính chính
                        xác, tin cậy của việc sử dụng hay kết quả của việc sử
                        dụng nội dung trên trang web này. Nột dung trên website
                        được cung cấp vì lợi ích của cộng đồng và có tính phi
                        thương mại. Các cá nhân và tổ chức không được phếp sử
                        dụng nội dung trên website này với mục đích thương mại
                        mà không có sự ưng thuận của&nbsp;Cinestar&nbsp;bằng văn
                        bản. Mặc dù&nbsp;Cinestar&nbsp;luôn cố gắng cập nhật
                        thường xuyên các nội dung tại trang web, nhưng chúng tôi
                        không bảo đảm rằng các thông tin đó là mới nhất, chính
                        xác hay đầy đủ. Tất cả các nội dung website có thể được
                        thay đổi bất kỳ lúc nào.
                      </p>
                    </div>
                    <br />
                    <div>
                      <strong>3. Về bản quyền:</strong>
                      <p>
                        Cinestar&nbsp;là chủ bản quyền của trang web này. Việc
                        chỉnh sửa trang, nội dung, và sắp xếp thuộc về thẩm
                        quyền của&nbsp;Cinestar. Sự chỉnh sửa, thay đổi, phân
                        phối hoặc tái sử dụng những nội dung trong trang này vì
                        bất kì mục đích nào khác được xem như vi phạm quyền lợi
                        hợp pháp của&nbsp;Cinestar.
                      </p>
                    </div>
                    <br />
                    <div>
                      <strong>4. Về việc sử dụng thông tin:</strong>
                      <p>
                        Chúng tôi sẽ không sử dụng thông tin cá nhân của bạn
                        trên website này nếu không được phép. Nếu bạn đồng ý
                        cung cấp thông tin cá nhân, bạn sẽ được bảo vệ. Thông
                        tin của bạn sẽ được sử dụng với mục đích, liên lạc với
                        bạn để thông báo các thông tin cập nhật
                        của&nbsp;Cinestar&nbsp;như lịch chiếu phim, khuyến mại
                        qua email hoặc bưu điện. Thông tin cá nhân của bạn sẽ
                        không được gửi cho bất kỳ ai sử dụng ngoài trang
                        web&nbsp;Cinestar, ngoại trừ những mở rộng cần thiết để
                        bạn có thể tham gia vào trang web (những nhà cung cấp
                        dịch vụ, đối tác, các công ty quảng cáo) và yêu cầu cung
                        cấp bởi luật pháp. Nếu chúng tôi chia sẻ thông tin cá
                        nhân của bạn cho các nhà cung cấp dịch vụ, công ty quảng
                        cáo, các công ty đối tác liên quan, thì chúng tôi cũng
                        yêu cầu họ bảo vệ thông tin cá nhân của bạn như cách
                        chúng tôi thực hiện.
                      </p>
                    </div>
                    <br />
                    <div>
                      <strong>5. Vể việc tải dữ liệu:</strong>
                      <p>
                        Nếu bạn tải về máy những phần mềm từ trang này, thì phần
                        mềm và các dữ liệu tải sẽ thuộc bản quyền
                        của&nbsp;Cinestar&nbsp;và cho phép bạn sử dụng. Bạn
                        không được sở hữu những phầm mềm đã tải
                        và&nbsp;Cinestar&nbsp;không nhượng quyền cho bạn. Bạn
                        cũng không được phép bán, phân phối lại, hay bẻ khóa
                        phần mềm…
                      </p>
                    </div>
                    <br />
                    <div>
                      <strong>6. Thay đổi nội dung:</strong>
                      <p>
                        Cinestar&nbsp;giữ quyền thay đổi, chỉnh sửa và loại bỏ
                        những thông tin hợp pháp vào bất kỳ thời điểm nào vì bất
                        kỳ lý do nào.
                      </p>
                    </div>
                    <div>
                      <strong>7. Liên kết với các trang khác:</strong>
                      <p>
                        Mặc dù trang web này có thể được liên kết với những
                        trang khác,&nbsp;Cinestar&nbsp;không trực tiếp hoặc gián
                        tiếp tán thành, tổ chức, tài trợ, đứng sau hoặc sát nhập
                        với những trang đó, trừ phi điều này được nêu ra rõ
                        ràng. Khi truy cập vào trang web bạn phải hiểu và chấp
                        nhận rằng&nbsp;Cinestar&nbsp;không thể kiểm soát tất cả
                        những trang liên kết với trang&nbsp;Cinestar&nbsp;và
                        cũng không chịu trách nhiệm cho nội dung của những trang
                        liên kết.
                      </p>
                    </div>
                    <br />
                    <div>
                      <strong>8. Đưa thông tin lên trang web:</strong>
                      <p>
                        Bạn không được đưa lên, hoặc chuyển tải lên trang web
                        tất cả những hình ảnh, từ ngữ khiêu dâm, thô tục, xúc
                        phạm, phỉ báng, bôi nhọ, đe dọa, những thông tin không
                        hợp pháp hoặc những thông tin có thể đưa đến việc vi
                        phạm pháp luật, trách nhiệm pháp
                        lý.&nbsp;Cinestar&nbsp;và tất cả các bên có liên quan
                        đến việc xây dựng và quản lý trang web không chịu trách
                        nhiệm hoặc có nghĩa vụ pháp lý đối với những phát sinh
                        từ nội dung do bạn tải lên trang web.
                      </p>
                    </div>
                    <br />
                    <div>
                      <strong>9. Luật áp dụng:</strong>
                      <p>
                        Mọi hoạt động phát sinh từ trang web có thể sẽ được phân
                        tích và đánh giá theo luật pháp Việt Nam và toà án Tp.
                        Hồ Chí Minh. Và bạn phải đồng ý tuân theo các điều khoản
                        riêng của các toà án này.
                      </p>
                    </div>
                  </div>

                  {/* <div className="payment_check">
                                <div><input className="check_terms_condition" type="checkbox" value="Tôi bảo đảm mua vé xem phim này theo đúng độ tuổi quy định" /><label htmlFor="customCheckboxInput"></label> Tôi bảo đảm mua vé xem phim này theo đúng độ tuổi quy định.</div>

                            </div> */}

                  <label className="payment_check">
                    Tôi bảo đảm mua vé xem phim này theo đúng độ tuổi quy định.
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>

                  <div className="payment_method">
                    <label className="payment_method_radio">
                      {" "}
                      Quốc tế
                      <input type="radio" name="radio" id="3" />
                      <span className="payment_method_icon"></span>
                    </label>
                    <br />
                    <label className="payment_method_radio">
                      {" "}
                      Nội địa
                      <input type="radio" name="radio" id="3" />
                      <span className="payment_method_icon"></span>
                    </label>
                    <br />
                    <label className="payment_method_radio">
                      {" "}
                      Thanh toán qua ví MoMo
                      <input type="radio" name="radio" id="3" />
                      <span className="payment_method_icon"></span>
                    </label>
                  </div>
       
                </div>
                <div className="input-but">
                  <input
                   style={{fontFamily: 'inherit', fontWeight: 'bold'}}
                    type="button"
                    className="cancel"
                    value="Quay lại"
                    id="payment-back"
                  />
                  <input
                    style={{fontFamily: 'inherit', fontWeight: 'bold'}}
                    type="button"
                    className="ok"
                    value="Thanh toán"
                    id="payment-next"
                    onClick={this.onSubmit}
                  />
                </div>
              </form>
            </div>
          </div>
          {/* <!--//end payment-part//--> */}

        </div>
      </div>
        <Footer />
      </div>
    );
  }
}
export default Payment;
