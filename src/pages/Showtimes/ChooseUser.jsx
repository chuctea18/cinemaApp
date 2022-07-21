import React from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import "../Showtimes/style.css";
import Footer from "../../components/Footer/Footer";
import queryString from "query-string";
class ChooseUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      id_showtimes: this.props.match.params.id_showtimes,
      schedule: this.props.location.search,
      counter_old: 0,
      counter_children: 0,
      sum_old: 0,
      sum_children: 0,
    };
    this.handleAdditionOld = this.handleAdditionOld.bind(this);
    this.handleSubtractionOld = this.handleSubtractionOld.bind(this);
    this.handleAdditionChildren = this.handleAdditionChildren.bind(this);
    this.handleSubtractionChildren = this.handleSubtractionChildren.bind(this);
    this.handleBack = this.handleBack.bind(this);
    // this.onChangeQuantity = this.onChangeQuantity.bind(this);
    // this.onChangeSum = this.onChangeSum.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const jsonStr = localStorage.getItem("user");
    if (jsonStr != null) {
      this.setState({ user: JSON.parse((jsonStr)) }, ()=>{
        console.log((this.state.user.response))
      });
    }
    const id_showtimes = this.state.id_showtimes;
    this.state.schedule = queryString.parse(this.state.schedule).schedule;
    console.log(this.state.schedule);
    fetch(`http://localhost:8000/api/schedule/show/${id_showtimes}`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({ id_showtimes: data }, () => {
          console.log(this.state.id_showtimes);
        })
      );
  }
  handleAdditionOld() {
    this.setState({ counter_old: this.state.counter_old + 1 });
    this.setState({ sum_old: this.state.sum_old + 65000 });
  }
  handleSubtractionOld() {
    this.setState({
      counter_old: this.state.counter_old > 0 ? this.state.counter_old - 1 : 0,
    });
    this.setState({
      sum_old: this.state.sum_old > 0 ? this.state.sum_old - 65000 : 0,
    });
  }
  handleAdditionChildren() {
    this.setState({ counter_children: this.state.counter_children + 1 });
    this.setState({ sum_children: this.state.sum_children + 45000 });
  }
  handleSubtractionChildren() {
    this.setState({
      counter_children:
        this.state.counter_children > 0 ? this.state.counter_children - 1 : 0,
    });
    this.setState({
      sum_children:
        this.state.sum_children > 0 ? this.state.sum_children - 45000 : 0,
    });
  }
  handleBack(id_movie) {
    window.location.href = `/movie/${id_movie}`;
  }
  onChangeQuantity(event) {
    this.setState({ quantity: event.target.quantity });
  }
  onChangeSum(event) {
    this.setState({ sum: event.target.sum });
  }
  handleSubmit(id_user,id_movie, title, schedule,date_time, quantity_ticket, summary,image) {
    const body_data = { quantity_ticket, summary };
    console.log("body_data : ", body_data);
            window.location.href =
              `/choose-chair?id_user=${id_user}&id_movie=${id_movie}&title=${title}&schedule=${schedule}&date_time=${date_time}&quantity_ticket=${quantity_ticket}&summary=${summary}&image=${image}`;
  }

  render() {
    return (
      <div>
        <Header />
        <Menu />
        <br />
        <div
          className="section-order"
          style={{ height: "fit-content", display: "block" }}
        >
          <p className="close-order"  onClick={() =>
                      this.handleBack(this.state.id_showtimes.id_movie)
                    }></p> {/* close-order ---- */}
          <div className="order-title">
            <div className="order-wrap">
              <div className="order-overview">
                <h2>
                  <strong>Tên phim</strong>
                  <br />
                  <span id="title" style={{color:'#ffff', fontWeight:'bold'}}>{this.state.id_showtimes.title}</span>
                </h2>

                <ul className="about-ticket">
                  <li>
                    <p className="caption">Suất chiếu</p>
                    <p className="value" id="schedule">
                      {this.state.schedule}
                    </p>
                  </li>
                  <li>
                    <p className="caption">Ngày</p>
                    <p className="value" id="date_time">
                      {this.state.id_showtimes.date_time}
                    </p>
                  </li>
                  <li>
                    <p className="caption">Số lượng</p>
                    <p className="value">
                      <span id="quantity">
                        {this.state.counter_old + this.state.counter_children}
                      </span>
                      <span style={{ fontSize: "18px" }}> vé</span>
                    </p>
                  </li>
                  <li>
                    <p className="caption">Tổng số tiền</p>
                    <p className="value">
                      <span id="sum">
                        {this.state.sum_old + this.state.sum_children}
                      </span>
                      <sup>đ</sup>
                    </p>
                  </li>
                </ul>
                <ul className="about-seat">
                  <li>Số ghế</li>
                  <li className="seat-number" id="chair"></li>
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
            </div>
            <div className="ticket-content " style={{ display: "block" }}>
              <div className="ticket-wrap">
                <div className="tbl-wrap">
                  <table>
                    <thead style={{textAlign: 'center'}}>
                      <tr>
                        <th>Loại vé</th>
                        <th>Số lượng</th>
                        <th >Giá (VNĐ)</th>
                        <th>Tổng tiền (VNĐ)</th>
                      </tr>
                    </thead>

                    <tbody id="content-price">
                      <tr data-seatstyle-id="29" data-ticket-id="26">
                        <td>Người Lớn</td>
                        <td className="ticket-num">
                          <button
                            onClick={this.handleSubtractionOld}
                            className="minus"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            value={this.state.counter_old}
                            id="old"
                            readonly=""
                            size="3"
                          />
                          <button
                            onClick={this.handleAdditionOld}
                            className="add"
                          >
                            +
                          </button>
                        </td>
                        <td className="ticket-price" data-price="65000">
                          65000<sup>đ</sup>
                        </td>
                        <td className="ticket-total" data-total="0">
                          <span>{this.state.sum_old}</span>
                          <sup>đ</sup>
                        </td>
                      </tr>
                      <tr data-seatstyle-id="29" data-ticket-id="26">
                        <td>Trẻ em</td>
                        <td className="ticket-num">
                          <button
                            onClick={this.handleSubtractionChildren}
                            className="minus"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            value={this.state.counter_children}
                            id="children"
                            readonly=""
                            size="3"
                          />
                          <button
                            onClick={this.handleAdditionChildren}
                            className="add"
                          >
                            +
                          </button>
                        </td>
                        <td className="ticket-price" data-price="65000">
                          45000<sup>đ</sup>
                        </td>
                        <td className="ticket-total" data-total="0">
                          <span>{this.state.sum_children}</span>
                          <sup>đ</sup>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <ul className="ticket-cal">
                  <li className="total-ticket-num">
                    Số lượng:
                    <span>
                      {this.state.counter_old + this.state.counter_children}
                    </span>
                    <mark>vé</mark>
                  </li>
                  <li className="total-ticket-amount">
                    Tổng số tiền:
                    <span>{this.state.sum_old + this.state.sum_children}</span>
                    <sup>đ</sup>
                  </li>
                </ul>
                <br/>
                <div className="cinema-btn" style={{textAlign: 'center' }}>
                  <input  style={{ borderRadius: '30px 30px 30px 0'}}
                    type="button"
                    value="Quay lại"
                    id="ticket-back"
                    onClick={() =>
                      this.handleBack(this.state.id_showtimes.id_movie)
                    }
                  />
                  {this.state.counter_old + this.state.counter_children > 0 ? (
                    <input style={{ borderRadius: '30px 0px 30px 30px'}}
                      type="button"
                      value="Chọn ghế"
                      id="ticket-next"
                      onClick={() =>
                        this.handleSubmit(
                          this.state.user.response.id_user,
                          this.state.id_showtimes.id_movie,
                          this.state.id_showtimes.title,
                          this.state.schedule,
                          this.state.id_showtimes.date_time,
                          this.state.counter_old + this.state.counter_children,
                          this.state.sum_old + this.state.sum_children,
                          this.state.id_showtimes.image
                        )
                      }
                    />
                  ) : (
                    <input
                    style={{ borderRadius: '30px 0px 30px 30px', opacity: '0.5',
                    pointerEvents: 'none' }}
                      type="button"
                      value="Chọn ghế"
                      id="ticket-next-ticket"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
export default ChooseUser;
