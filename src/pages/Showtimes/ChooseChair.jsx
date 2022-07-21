import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import "../Showtimes/style.css";
import Footer from "../../components/Footer/Footer";
import queryString from "query-string";

class ChooseChair extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seat: [
        "A01",
        "A02",
        "A03",
        "A04",
        "A05",
        "A06",
        "A07",
        "A08",
        "A09",
        "A10",
        "A11",
        "A12",
        "B01",
        "B02",
        "B03",
        "B04",
        "B05",
        "B06",
        "B07",
        "B08",
        "B09",
        "B10",
        "B11",
        "B12",
        "C01",
        "C02",
        "C03",
        "C04",
        "C05",
        "C06",
        "C07",
        "C08",
        "C09",
        "C10",
        "C11",
        "C12",
        "D01",
        "D02",
        "D03",
        "D04",
        "D05",
        "D06",
        "D07",
        "D08",
        "D09",
        "D10",
        "D11",
        "D12",
        "E01",
        "E02",
        "E03",
        "E04",
        "E05",
        "E06",
        "E07",
        "E08",
        "E09",
        "E10",
        "E11",
        "E12",
        "F01",
        "F02",
        "F03",
        "F04",
        "F05",
        "F06",
        "F07",
        "F08",
        "F09",
        "F10",
        "F11",
        "F12",
        "G01",
        "G02",
        "G03",
        "G04",
        "G05",
        "G06",
        "G07",
        "G08",
        "G09",
        "G10",
        "G11",
        "G12",
        "H01",
        "H02",
        "H03",
        "H04",
        "H05",
        "H06",
        "H07",
        "H08",
        "H09",
        "H10",
        "H11",
        "H12",
        "J01",
        "J02",
        "J03",
        "J04",
        "J05",
        "J06",
        "J07",
        "J08",
        "J09",
        "J10",
        "J11",
        "J12",
        "K01",
        "K02",
        "K03",
        "K04",
        "K05",
        "K06",
        "K07",
        "K08",
        "K09",
        "K10",
        "K11",
        "K12",
      ],
      seatAvailable: [
        "A02",
        "A03",
        "A04",
        "A05",
        "A06",
        "A07",
        "A08",
        "A09",
        "A10",
        "A11",
        "A12",
        "B01",
        "B02",
        "B03",
        "B04",
        "B05",
        "B06",
        "B07",
        "B08",
        "B09",
        "B10",
        "B11",
        "B12",
        "C01",
        "C02",
        "C03",
        "C04",
        "C05",
        "C06",
        "C07",
        "C08",
        "C09",
        "C10",
        "C11",
        "C12",
        "D01",
        "D02",
        "D03",
        "D04",
        "D05",
        "D06",
        "D07",
        "D08",
        "D09",
        "D10",
        "D11",
        "D12",
        "E01",
        "E02",
        "E03",
        "E04",
        "E05",
        "E06",
        "E07",
        "E08",
        "E09",
        "E10",
        "E11",
        "E12",
        "F01",
        "F02",
        "F03",
        "F04",
        "F05",
        "F06",
        "F07",
        "F08",
        "F09",
        "F10",
        "F11",
        "F12",
        "G01",
        "G02",
        "G03",
        "G04",
        "G05",
        "G06",
        "G07",
        "G08",
        "G09",
        "G10",
        "G11",
        "G12",
        "H01",
        "H02",
        "H03",
        "H04",
        "H05",
        "H06",
        "H07",
        "H08",
        "H09",
        "H10",
        "H11",
        "H12",
        "J01",
        "J02",
        "J03",
        "J04",
        "J05",
        "J06",
        "J07",
        "J08",
        "J09",
        "J10",
        "J11",
        "J12",
        "K01",
        "K02",
        "K03",
        "K04",
        "K05",
        "K06",
        "K07",
        "K08",
        "K09",
        "K10",
        "K11",
        "K12",
      ],
      seatReserved: [], //danh sach dang chọn
      seatChoosed: [], //danh sach ghe da dat ve
      menu: this.props.location.search,
    };
    this.onClickData = this.onClickData.bind(this);
    this.checktrue = this.checktrue.bind(this);
    this.handleFood = this.handleFood.bind(this);
    this.handleSubmited = this.handleSubmited.bind(this);
    this.handleBack = this.handleBack.bind(this)
  }
  componentDidMount() {
    const id_movie = queryString.parse(this.state.menu).id_movie;
    const day_order = queryString.parse(this.state.menu).date_time;
    const time = queryString.parse(this.state.menu).schedule;
    console.log(id_movie, day_order, time)
    fetch(`http://localhost:8000/chair_order/${id_movie}/${day_order}/${time}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ seatChoosed: this.state.seatChoosed.concat(data) });
      });

  }
  handleBack(id_movie, schedule, image) {
    window.location.href =
      window.location.href = `/choose-user/${id_movie}?schedule=${schedule}&image=${image}`
  }
  onClickData(seat) {
    if (this.state.seatReserved.indexOf(seat) > -1) {
      this.setState({
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter((res) => res != seat),
        //seatChoosed: this.state.seatChoosed.filter(res => res != seat)
      });
    } else {
      this.setState({
        seatReserved: this.state.seatReserved.concat(seat),
        //seatChoosed: this.state.seatChoosed.concat(seat),
        seatAvailable: this.state.seatAvailable.filter((res) => res != seat),
      });
    }
  }
  checktrue(row) {
    if (this.state.seatChoosed.indexOf(row) > -1) {
      return false;
    } else {
      return true;
    }
  }

  handleSubmited(id_user, id_movie, title, time, day_order, quantity_ticket, summary, chair, image, sum_food) {
    window.location.href =
      `/payment?id_user=${id_user}&id_movie=${id_movie}&title=${title}&time=${time}&day_order=${day_order}&quantity_ticket=${quantity_ticket}&summary=${summary}&chair=${chair}&image=${image}&sum_food=${sum_food}`;
  }
  handleFood(id_user, id_movie, title, time, day_order, quantity_ticket, summary, chair, image) {
    window.location.href =
      `/food?id_user=${id_user}&id_movie=${id_movie}&title=${title}&time=${time}&day_order=${day_order}&quantity_ticket=${quantity_ticket}&summary=${summary}&chair=${chair}&image=${image}`;
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
          <a className="close-order" href="#"></a> {/* close-order ---- */}
          <div className="order-title">
            <div className="order-wrap">
              <div className="order-overview">
                <h2>
                  <strong>Tên phim</strong>
                  <br />
                  <span style={{ color: '#ffff', fontWeight: 'bold' }}>{queryString.parse(this.state.menu).title}</span>
                </h2>

                <ul className="about-ticket">
                  <li>
                    <p className="caption">Suất chiếu</p>
                    <p className="value">
                      {queryString.parse(this.state.menu).schedule}
                    </p>
                  </li>
                  <li>
                    <p className="caption">Ngày</p>
                    <p className="value">
                      {queryString.parse(this.state.menu).date_time}
                    </p>
                  </li>
                  <li>
                    <p className="caption">Số lượng</p>
                    <p className="value">
                      <span>
                        {queryString.parse(this.state.menu).quantity_ticket}
                      </span>
                      <span style={{ fontSize: "18px" }}> vé</span>
                    </p>
                  </li>
                  <li>
                    <p className="caption">Tổng số tiền</p>
                    <p className="value">
                      <span>{queryString.parse(this.state.menu).summary}</span>
                      <sup>đ</sup>
                    </p>
                  </li>
                </ul>
                <ul className="about-seat">
                  <li>Số ghế</li>
                  <li className="seat-number"></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="order-content" style={{ display: "block" }}>
            <div
              id="cinema-content"
              className="cinema-content"
              style={{ display: "block" }}
            >
              <div className="cinema-name">
                <h2>Lotto Cinema</h2>
              </div>
              <div className="cinema-wrap">
                <h3 className="cinema-title">Màn hình</h3>
                <div
                  className="cinema-wrap seat-scroll "
                  style={{ opacity: "1" }}
                >
                  <div className="cinema-seat " style={{ display: "block" }}>
                    <div className="seat-container">
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[0]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[0]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[0]}
                        style={{ left: "503px", top: "49px" }}
                        onClick={
                          this.checktrue(this.state.seat[0])
                            ? (e) => this.onClickData(this.state.seat[0])
                            : null
                        }
                      >
                        {this.state.seat[0]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[1]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[1]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[1]}
                        style={{ left: "457px", top: "49px" }}
                        onClick={
                          this.checktrue(this.state.seat[1])
                            ? (e) => this.onClickData(this.state.seat[1])
                            : null
                        }
                      >
                        {this.state.seat[1]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[2]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[2]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[2]}
                        style={{ left: "411px", top: "49px" }}
                        onClick={
                          this.checktrue(this.state.seat[2])
                            ? (e) => this.onClickData(this.state.seat[2])
                            : null
                        }
                      >
                        {this.state.seat[2]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[3]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[3]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[3]}
                        style={{ left: "365px", top: "49px" }}
                        onClick={
                          this.checktrue(this.state.seat[3])
                            ? (e) => this.onClickData(this.state.seat[3])
                            : null
                        }
                      >
                        {this.state.seat[3]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[4]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[4]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[4]}
                        style={{ left: "320px", top: "49px" }}
                        onClick={
                          this.checktrue(this.state.seat[4])
                            ? (e) => this.onClickData(this.state.seat[4])
                            : null
                        }
                      >
                        {this.state.seat[4]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[5]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[5]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[5]}
                        style={{ left: "274px", top: "49px" }}
                        onClick={
                          this.checktrue(this.state.seat[5])
                            ? (e) => this.onClickData(this.state.seat[5])
                            : null
                        }
                      >
                        {this.state.seat[5]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[6]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[6]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[6]}
                        style={{ left: "228px", top: "49px" }}
                        onClick={
                          this.checktrue(this.state.seat[6])
                            ? (e) => this.onClickData(this.state.seat[6])
                            : null
                        }
                      >
                        {this.state.seat[6]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[7]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[7]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[7]}
                        style={{ left: "182px", top: "49px" }}
                        onClick={
                          this.checktrue(this.state.seat[7])
                            ? (e) => this.onClickData(this.state.seat[7])
                            : null
                        }
                      >
                        {this.state.seat[7]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[8]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[8]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[8]}
                        style={{ left: "137px", top: "49px" }}
                        onClick={
                          this.checktrue(this.state.seat[8])
                            ? (e) => this.onClickData(this.state.seat[8])
                            : null
                        }
                      >
                        {this.state.seat[8]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[9]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[9]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[9]}
                        style={{ left: "91px", top: "49px" }}
                        onClick={
                          this.checktrue(this.state.seat[9])
                            ? (e) => this.onClickData(this.state.seat[9])
                            : null
                        }
                      >
                        {this.state.seat[9]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[10]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[10]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[10]}
                        style={{ left: "45px", top: "49px" }}
                        onClick={
                          this.checktrue(this.state.seat[10])
                            ? (e) => this.onClickData(this.state.seat[10])
                            : null
                        }
                      >
                        {this.state.seat[10]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[11]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[11]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[11]}
                        style={{ left: "0px", top: "49px" }}
                        onClick={
                          this.checktrue(this.state.seat[11])
                            ? (e) => this.onClickData(this.state.seat[11])
                            : null
                        }
                      >
                        {this.state.seat[11]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[12]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[12]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[12]}
                        style={{ left: "503px", top: "99px" }}
                        onClick={
                          this.checktrue(this.state.seat[12])
                            ? (e) => this.onClickData(this.state.seat[12])
                            : null
                        }
                      >
                        {this.state.seat[12]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[13]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[13]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[13]}
                        style={{ left: "457px", top: "99px" }}
                        onClick={
                          this.checktrue(this.state.seat[13])
                            ? (e) => this.onClickData(this.state.seat[13])
                            : null
                        }
                      >
                        {this.state.seat[13]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[14]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[14]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[14]}
                        style={{ left: "411px", top: "99px" }}
                        onClick={
                          this.checktrue(this.state.seat[14])
                            ? (e) => this.onClickData(this.state.seat[14])
                            : null
                        }
                      >
                        {this.state.seat[14]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[15]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[15]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[15]}
                        style={{ left: "365px", top: "99px" }}
                        onClick={
                          this.checktrue(this.state.seat[15])
                            ? (e) => this.onClickData(this.state.seat[15])
                            : null
                        }
                      >
                        {this.state.seat[15]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[16]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[16]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[16]}
                        style={{ left: "320px", top: "99px" }}
                        onClick={
                          this.checktrue(this.state.seat[16])
                            ? (e) => this.onClickData(this.state.seat[16])
                            : null
                        }
                      >
                        {this.state.seat[16]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[17]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[17]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[17]}
                        style={{ left: "274px", top: "99px" }}
                        onClick={
                          this.checktrue(this.state.seat[17])
                            ? (e) => this.onClickData(this.state.seat[17])
                            : null
                        }
                      >
                        {this.state.seat[17]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[18]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[18]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[18]}
                        style={{ left: "228px", top: "99px" }}
                        onClick={
                          this.checktrue(this.state.seat[18])
                            ? (e) => this.onClickData(this.state.seat[18])
                            : null
                        }
                      >
                        {this.state.seat[18]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[19]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[19]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[19]}
                        style={{ left: "182px", top: "99px" }}
                        onClick={
                          this.checktrue(this.state.seat[19])
                            ? (e) => this.onClickData(this.state.seat[19])
                            : null
                        }
                      >
                        {this.state.seat[19]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[20]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[20]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[20]}
                        style={{ left: "137px", top: "99px" }}
                        onClick={
                          this.checktrue(this.state.seat[20])
                            ? (e) => this.onClickData(this.state.seat[20])
                            : null
                        }
                      >
                        {this.state.seat[20]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[21]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[21]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[21]}
                        style={{ left: "91px", top: "99px" }}
                        onClick={
                          this.checktrue(this.state.seat[21])
                            ? (e) => this.onClickData(this.state.seat[21])
                            : null
                        }
                      >
                        {this.state.seat[21]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[22]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[22]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[22]}
                        style={{ left: "45px", top: "99px" }}
                        onClick={
                          this.checktrue(this.state.seat[22])
                            ? (e) => this.onClickData(this.state.seat[22])
                            : null
                        }
                      >
                        {this.state.seat[22]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[23]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[23]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[23]}
                        style={{ left: "0px", top: "99px" }}
                        onClick={
                          this.checktrue(this.state.seat[23])
                            ? (e) => this.onClickData(this.state.seat[23])
                            : null
                        }
                      >
                        {this.state.seat[23]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[24]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[24]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[24]}
                        style={{ left: "503px", top: "148px" }}
                        onClick={
                          this.checktrue(this.state.seat[24])
                            ? (e) => this.onClickData(this.state.seat[24])
                            : null
                        }
                      >
                        {this.state.seat[24]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[25]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[25]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[25]}
                        style={{ left: "457px", top: "148px" }}
                        onClick={
                          this.checktrue(this.state.seat[25])
                            ? (e) => this.onClickData(this.state.seat[25])
                            : null
                        }
                      >
                        {this.state.seat[25]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[26]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[26]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[26]}
                        style={{ left: "411px", top: "148px" }}
                        onClick={
                          this.checktrue(this.state.seat[26])
                            ? (e) => this.onClickData(this.state.seat[26])
                            : null
                        }
                      >
                        {this.state.seat[26]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[27]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[27]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[27]}
                        style={{ left: "365px", top: "148px" }}
                        onClick={
                          this.checktrue(this.state.seat[27])
                            ? (e) => this.onClickData(this.state.seat[27])
                            : null
                        }
                      >
                        {this.state.seat[27]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[28]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[28]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[28]}
                        style={{ left: "320px", top: "148px" }}
                        onClick={
                          this.checktrue(this.state.seat[28])
                            ? (e) => this.onClickData(this.state.seat[28])
                            : null
                        }
                      >
                        {this.state.seat[28]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[29]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[29]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[29]}
                        style={{ left: "274px", top: "148px" }}
                        onClick={
                          this.checktrue(this.state.seat[29])
                            ? (e) => this.onClickData(this.state.seat[29])
                            : null
                        }
                      >
                        {this.state.seat[29]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[30]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[30]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[30]}
                        style={{ left: "228px", top: "148px" }}
                        onClick={
                          this.checktrue(this.state.seat[30])
                            ? (e) => this.onClickData(this.state.seat[30])
                            : null
                        }
                      >
                        {this.state.seat[30]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[31]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[31]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[31]}
                        style={{ left: "182px", top: "148px" }}
                        onClick={
                          this.checktrue(this.state.seat[31])
                            ? (e) => this.onClickData(this.state.seat[31])
                            : null
                        }
                      >
                        {this.state.seat[31]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[32]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[32]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[32]}
                        style={{ left: "137px", top: "148px" }}
                        onClick={
                          this.checktrue(this.state.seat[32])
                            ? (e) => this.onClickData(this.state.seat[32])
                            : null
                        }
                      >
                        {this.state.seat[32]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[33]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[33]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[33]}
                        style={{ left: "91px", top: "148px" }}
                        onClick={
                          this.checktrue(this.state.seat[33])
                            ? (e) => this.onClickData(this.state.seat[33])
                            : null
                        }
                      >
                        {this.state.seat[33]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[34]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[34]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[34]}
                        style={{ left: "45px", top: "148px" }}
                        onClick={
                          this.checktrue(this.state.seat[34])
                            ? (e) => this.onClickData(this.state.seat[34])
                            : null
                        }
                      >
                        {this.state.seat[34]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[35]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[35]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[35]}
                        style={{ left: "0px", top: "148px" }}
                        onClick={
                          this.checktrue(this.state.seat[35])
                            ? (e) => this.onClickData(this.state.seat[35])
                            : null
                        }
                      >
                        {this.state.seat[35]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[36]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[36]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[36]}
                        style={{ left: "503px", top: "198px" }}
                        onClick={
                          this.checktrue(this.state.seat[36])
                            ? (e) => this.onClickData(this.state.seat[36])
                            : null
                        }
                      >
                        {this.state.seat[36]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[37]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[37]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[37]}
                        style={{ left: "457px", top: "198px" }}
                        onClick={
                          this.checktrue(this.state.seat[37])
                            ? (e) => this.onClickData(this.state.seat[37])
                            : null
                        }
                      >
                        {this.state.seat[37]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[38]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[38]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[38]}
                        style={{ left: "411px", top: "198px" }}
                        onClick={
                          this.checktrue(this.state.seat[38])
                            ? (e) => this.onClickData(this.state.seat[38])
                            : null
                        }
                      >
                        {this.state.seat[38]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[39]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[39]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[39]}
                        style={{ left: "365px", top: "198px" }}
                        onClick={
                          this.checktrue(this.state.seat[39])
                            ? (e) => this.onClickData(this.state.seat[39])
                            : null
                        }
                      >
                        {this.state.seat[39]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[40]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[40]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[40]}
                        style={{ left: "320px", top: "198px" }}
                        onClick={
                          this.checktrue(this.state.seat[40])
                            ? (e) => this.onClickData(this.state.seat[40])
                            : null
                        }
                      >
                        {this.state.seat[40]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[41]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[41]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[41]}
                        style={{ left: "274px", top: "198px" }}
                        onClick={
                          this.checktrue(this.state.seat[41])
                            ? (e) => this.onClickData(this.state.seat[41])
                            : null
                        }
                      >
                        {this.state.seat[41]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[42]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[42]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[42]}
                        style={{ left: "228px", top: "198px" }}
                        onClick={
                          this.checktrue(this.state.seat[42])
                            ? (e) => this.onClickData(this.state.seat[42])
                            : null
                        }
                      >
                        {this.state.seat[42]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[43]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[43]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[43]}
                        style={{ left: "182px", top: "198px" }}
                        onClick={
                          this.checktrue(this.state.seat[43])
                            ? (e) => this.onClickData(this.state.seat[43])
                            : null
                        }
                      >
                        {this.state.seat[43]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[44]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[44]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[44]}
                        style={{ left: "137px", top: "198px" }}
                        onClick={
                          this.checktrue(this.state.seat[44])
                            ? (e) => this.onClickData(this.state.seat[44])
                            : null
                        }
                      >
                        {this.state.seat[44]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[45]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[45]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[45]}
                        style={{ left: "91px", top: "198px" }}
                        onClick={
                          this.checktrue(this.state.seat[45])
                            ? (e) => this.onClickData(this.state.seat[45])
                            : null
                        }
                      >
                        {this.state.seat[45]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[46]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[46]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[46]}
                        style={{ left: "45px", top: "198px" }}
                        onClick={
                          this.checktrue(this.state.seat[46])
                            ? (e) => this.onClickData(this.state.seat[46])
                            : null
                        }
                      >
                        {this.state.seat[46]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[47]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[47]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[47]}
                        style={{ left: "0px", top: "198px" }}
                        onClick={
                          this.checktrue(this.state.seat[47])
                            ? (e) => this.onClickData(this.state.seat[47])
                            : null
                        }
                      >
                        {this.state.seat[47]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[48]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[48]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[48]}
                        style={{ left: "503px", top: "248px" }}
                        onClick={
                          this.checktrue(this.state.seat[48])
                            ? (e) => this.onClickData(this.state.seat[48])
                            : null
                        }
                      >
                        {this.state.seat[48]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[49]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[49]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[49]}
                        style={{ left: "457px", top: "248px" }}
                        onClick={
                          this.checktrue(this.state.seat[49])
                            ? (e) => this.onClickData(this.state.seat[49])
                            : null
                        }
                      >
                        {this.state.seat[49]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[50]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[50]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[50]}
                        style={{ left: "411px", top: "248px" }}
                        onClick={
                          this.checktrue(this.state.seat[50])
                            ? (e) => this.onClickData(this.state.seat[50])
                            : null
                        }
                      >
                        {this.state.seat[50]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[51]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[51]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[51]}
                        style={{ left: "365px", top: "248px" }}
                        onClick={
                          this.checktrue(this.state.seat[51])
                            ? (e) => this.onClickData(this.state.seat[51])
                            : null
                        }
                      >
                        {this.state.seat[51]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[52]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[52]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[52]}
                        style={{ left: "320px", top: "248px" }}
                        onClick={
                          this.checktrue(this.state.seat[52])
                            ? (e) => this.onClickData(this.state.seat[52])
                            : null
                        }
                      >
                        {this.state.seat[52]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[53]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[53]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[53]}
                        style={{ left: "274px", top: "248px" }}
                        onClick={
                          this.checktrue(this.state.seat[53])
                            ? (e) => this.onClickData(this.state.seat[53])
                            : null
                        }
                      >
                        {this.state.seat[53]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[54]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[54]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[54]}
                        style={{ left: "228px", top: "248px" }}
                        onClick={
                          this.checktrue(this.state.seat[54])
                            ? (e) => this.onClickData(this.state.seat[54])
                            : null
                        }
                      >
                        {this.state.seat[54]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[55]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[55]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[55]}
                        style={{ left: "182px", top: "248px" }}
                        onClick={
                          this.checktrue(this.state.seat[55])
                            ? (e) => this.onClickData(this.state.seat[55])
                            : null
                        }
                      >
                        {this.state.seat[55]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[56]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[56]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[56]}
                        style={{ left: "137px", top: "248px" }}
                        onClick={
                          this.checktrue(this.state.seat[56])
                            ? (e) => this.onClickData(this.state.seat[56])
                            : null
                        }
                      >
                        {this.state.seat[56]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[57]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[57]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[57]}
                        style={{ left: "91px", top: "248px" }}
                        onClick={
                          this.checktrue(this.state.seat[57])
                            ? (e) => this.onClickData(this.state.seat[57])
                            : null
                        }
                      >
                        {this.state.seat[57]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[58]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[58]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[58]}
                        style={{ left: "45px", top: "248px" }}
                        onClick={
                          this.checktrue(this.state.seat[58])
                            ? (e) => this.onClickData(this.state.seat[58])
                            : null
                        }
                      >
                        {this.state.seat[58]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[59]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[59]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[59]}
                        style={{ left: "0px", top: "248px" }}
                        onClick={
                          this.checktrue(this.state.seat[59])
                            ? (e) => this.onClickData(this.state.seat[59])
                            : null
                        }
                      >
                        {this.state.seat[59]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[60]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[60]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[60]}
                        style={{ left: "503px", top: "297px" }}
                        onClick={
                          this.checktrue(this.state.seat[60])
                            ? (e) => this.onClickData(this.state.seat[60])
                            : null
                        }
                      >
                        {this.state.seat[60]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[61]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[61]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[61]}
                        style={{ left: "457px", top: "297px" }}
                        onClick={
                          this.checktrue(this.state.seat[61])
                            ? (e) => this.onClickData(this.state.seat[61])
                            : null
                        }
                      >
                        {this.state.seat[61]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[62]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[62]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[62]}
                        style={{ left: "411px", top: "297px" }}
                        onClick={
                          this.checktrue(this.state.seat[62])
                            ? (e) => this.onClickData(this.state.seat[62])
                            : null
                        }
                      >
                        {this.state.seat[62]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[63]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[63]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[63]}
                        style={{ left: "365px", top: "297px" }}
                        onClick={
                          this.checktrue(this.state.seat[63])
                            ? (e) => this.onClickData(this.state.seat[63])
                            : null
                        }
                      >
                        {this.state.seat[63]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[64]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[64]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[64]}
                        style={{ left: "320px", top: "297px" }}
                        onClick={
                          this.checktrue(this.state.seat[64])
                            ? (e) => this.onClickData(this.state.seat[64])
                            : null
                        }
                      >
                        {this.state.seat[64]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[65]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[65]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[65]}
                        style={{ left: "274px", top: "297px" }}
                        onClick={
                          this.checktrue(this.state.seat[65])
                            ? (e) => this.onClickData(this.state.seat[65])
                            : null
                        }
                      >
                        {this.state.seat[65]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[66]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[66]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[66]}
                        style={{ left: "228px", top: "297px" }}
                        onClick={
                          this.checktrue(this.state.seat[66])
                            ? (e) => this.onClickData(this.state.seat[66])
                            : null
                        }
                      >
                        {this.state.seat[66]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[67]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[67]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[67]}
                        style={{ left: "182px", top: "297px" }}
                        onClick={
                          this.checktrue(this.state.seat[67])
                            ? (e) => this.onClickData(this.state.seat[67])
                            : null
                        }
                      >
                        {this.state.seat[67]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[68]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[68]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[68]}
                        style={{ left: "137px", top: "297px" }}
                        onClick={
                          this.checktrue(this.state.seat[68])
                            ? (e) => this.onClickData(this.state.seat[68])
                            : null
                        }
                      >
                        {this.state.seat[68]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[69]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[69]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[69]}
                        style={{ left: "91px", top: "297px" }}
                        onClick={
                          this.checktrue(this.state.seat[69])
                            ? (e) => this.onClickData(this.state.seat[69])
                            : null
                        }
                      >
                        {this.state.seat[69]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[70]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[70]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[70]}
                        style={{ left: "45px", top: "297px" }}
                        onClick={
                          this.checktrue(this.state.seat[70])
                            ? (e) => this.onClickData(this.state.seat[70])
                            : null
                        }
                      >
                        {this.state.seat[70]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[71]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[71]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[71]}
                        style={{ left: "0px", top: "297px" }}
                        onClick={
                          this.checktrue(this.state.seat[71])
                            ? (e) => this.onClickData(this.state.seat[71])
                            : null
                        }
                      >
                        {this.state.seat[71]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[72]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[72]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[72]}
                        style={{ left: "503px", top: "347px" }}
                        onClick={
                          this.checktrue(this.state.seat[72])
                            ? (e) => this.onClickData(this.state.seat[72])
                            : null
                        }
                      >
                        {this.state.seat[72]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[73]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[73]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[73]}
                        style={{ left: "457px", top: "347px" }}
                        onClick={
                          this.checktrue(this.state.seat[73])
                            ? (e) => this.onClickData(this.state.seat[73])
                            : null
                        }
                      >
                        {this.state.seat[73]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[74]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[74]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[74]}
                        style={{ left: "411px", top: "347px" }}
                        onClick={
                          this.checktrue(this.state.seat[74])
                            ? (e) => this.onClickData(this.state.seat[74])
                            : null
                        }
                      >
                        {this.state.seat[74]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[75]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[75]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[75]}
                        style={{ left: "365px", top: "347px" }}
                        onClick={
                          this.checktrue(this.state.seat[75])
                            ? (e) => this.onClickData(this.state.seat[75])
                            : null
                        }
                      >
                        {this.state.seat[75]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[76]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[76]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[76]}
                        style={{ left: "320px", top: "347px" }}
                        onClick={
                          this.checktrue(this.state.seat[76])
                            ? (e) => this.onClickData(this.state.seat[76])
                            : null
                        }
                      >
                        {this.state.seat[76]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[77]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[77]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[77]}
                        style={{ left: "274px", top: "347px" }}
                        onClick={
                          this.checktrue(this.state.seat[77])
                            ? (e) => this.onClickData(this.state.seat[77])
                            : null
                        }
                      >
                        {this.state.seat[77]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[78]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[78]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[78]}
                        style={{ left: "228px", top: "347px" }}
                        onClick={
                          this.checktrue(this.state.seat[78])
                            ? (e) => this.onClickData(this.state.seat[78])
                            : null
                        }
                      >
                        {this.state.seat[78]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[79]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[79]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[79]}
                        style={{ left: "182px", top: "347px" }}
                        onClick={
                          this.checktrue(this.state.seat[79])
                            ? (e) => this.onClickData(this.state.seat[79])
                            : null
                        }
                      >
                        {this.state.seat[79]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[80]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[80]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[80]}
                        style={{ left: "137px", top: "347px" }}
                        onClick={
                          this.checktrue(this.state.seat[80])
                            ? (e) => this.onClickData(this.state.seat[80])
                            : null
                        }
                      >
                        {this.state.seat[80]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[81]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[81]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[81]}
                        style={{ left: "91px", top: "347px" }}
                        onClick={
                          this.checktrue(this.state.seat[81])
                            ? (e) => this.onClickData(this.state.seat[81])
                            : null
                        }
                      >
                        {this.state.seat[81]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[82]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[82]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[82]}
                        style={{ left: "45px", top: "347px" }}
                        onClick={
                          this.checktrue(this.state.seat[82])
                            ? (e) => this.onClickData(this.state.seat[82])
                            : null
                        }
                      >
                        {this.state.seat[82]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[83]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[83]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[83]}
                        style={{ left: "0px", top: "347px" }}
                        onClick={
                          this.checktrue(this.state.seat[83])
                            ? (e) => this.onClickData(this.state.seat[83])
                            : null
                        }
                      >
                        {this.state.seat[83]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[84]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[84]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[84]}
                        style={{ left: "503px", top: "397px" }}
                        onClick={
                          this.checktrue(this.state.seat[84])
                            ? (e) => this.onClickData(this.state.seat[84])
                            : null
                        }
                      >
                        {this.state.seat[84]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[85]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[85]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[85]}
                        style={{ left: "457px", top: "397px" }}
                        onClick={
                          this.checktrue(this.state.seat[85])
                            ? (e) => this.onClickData(this.state.seat[85])
                            : null
                        }
                      >
                        {this.state.seat[85]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[86]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[86]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[86]}
                        style={{ left: "411px", top: "397px" }}
                        onClick={
                          this.checktrue(this.state.seat[86])
                            ? (e) => this.onClickData(this.state.seat[86])
                            : null
                        }
                      >
                        {this.state.seat[86]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[87]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[87]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[87]}
                        style={{ left: "365px", top: "397px" }}
                        onClick={
                          this.checktrue(this.state.seat[87])
                            ? (e) => this.onClickData(this.state.seat[87])
                            : null
                        }
                      >
                        {this.state.seat[87]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[88]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[88]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[88]}
                        style={{ left: "320px", top: "397px" }}
                        onClick={
                          this.checktrue(this.state.seat[88])
                            ? (e) => this.onClickData(this.state.seat[88])
                            : null
                        }
                      >
                        {this.state.seat[88]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[89]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[89]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[89]}
                        style={{ left: "274px", top: "397px" }}
                        onClick={
                          this.checktrue(this.state.seat[89])
                            ? (e) => this.onClickData(this.state.seat[89])
                            : null
                        }
                      >
                        {this.state.seat[89]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[90]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[90]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[90]}
                        style={{ left: "228px", top: "397px" }}
                        onClick={
                          this.checktrue(this.state.seat[90])
                            ? (e) => this.onClickData(this.state.seat[90])
                            : null
                        }
                      >
                        {this.state.seat[90]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[91]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[91]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[91]}
                        style={{ left: "182px", top: "397px" }}
                        onClick={
                          this.checktrue(this.state.seat[91])
                            ? (e) => this.onClickData(this.state.seat[91])
                            : null
                        }
                      >
                        {this.state.seat[91]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[92]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[92]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[92]}
                        style={{ left: "137px", top: "397px" }}
                        onClick={
                          this.checktrue(this.state.seat[92])
                            ? (e) => this.onClickData(this.state.seat[92])
                            : null
                        }
                      >
                        {this.state.seat[92]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[93]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[93]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[93]}
                        style={{ left: "91px", top: "397px" }}
                        onClick={
                          this.checktrue(this.state.seat[93])
                            ? (e) => this.onClickData(this.state.seat[93])
                            : null
                        }
                      >
                        {this.state.seat[93]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[94]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[94]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[94]}
                        style={{ left: "45px", top: "397px" }}
                        onClick={
                          this.checktrue(this.state.seat[94])
                            ? (e) => this.onClickData(this.state.seat[94])
                            : null
                        }
                      >
                        {this.state.seat[94]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[95]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[95]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[95]}
                        style={{ left: "0px", top: "397px" }}
                        onClick={
                          this.checktrue(this.state.seat[95])
                            ? (e) => this.onClickData(this.state.seat[95])
                            : null
                        }
                      >
                        {this.state.seat[95]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[96]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[96]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[96]}
                        style={{ left: "503px", top: "447px" }}
                        onClick={
                          this.checktrue(this.state.seat[96])
                            ? (e) => this.onClickData(this.state.seat[96])
                            : null
                        }
                      >
                        {this.state.seat[96]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[97]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[97]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[97]}
                        style={{ left: "457px", top: "447px" }}
                        onClick={
                          this.checktrue(this.state.seat[97])
                            ? (e) => this.onClickData(this.state.seat[97])
                            : null
                        }
                      >
                        {this.state.seat[97]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[98]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[98]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[98]}
                        style={{ left: "411px", top: "447px" }}
                        onClick={
                          this.checktrue(this.state.seat[98])
                            ? (e) => this.onClickData(this.state.seat[98])
                            : null
                        }
                      >
                        {this.state.seat[98]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(this.state.seat[99]) >
                            -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[99]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[99]}
                        style={{ left: "365px", top: "447px" }}
                        onClick={
                          this.checktrue(this.state.seat[99])
                            ? (e) => this.onClickData(this.state.seat[99])
                            : null
                        }
                      >
                        {this.state.seat[99]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(
                            this.state.seat[100]
                          ) > -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[100]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[100]}
                        style={{ left: "320px", top: "447px" }}
                        onClick={
                          this.checktrue(this.state.seat[100])
                            ? (e) => this.onClickData(this.state.seat[100])
                            : null
                        }
                      >
                        {this.state.seat[100]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(
                            this.state.seat[101]
                          ) > -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[101]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[101]}
                        style={{ left: "274px", top: "447px" }}
                        onClick={
                          this.checktrue(this.state.seat[101])
                            ? (e) => this.onClickData(this.state.seat[101])
                            : null
                        }
                      >
                        {this.state.seat[101]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(
                            this.state.seat[102]
                          ) > -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[102]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[102]}
                        style={{ left: "228px", top: "447px" }}
                        onClick={
                          this.checktrue(this.state.seat[102])
                            ? (e) => this.onClickData(this.state.seat[102])
                            : null
                        }
                      >
                        {this.state.seat[102]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(
                            this.state.seat[103]
                          ) > -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[103]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[103]}
                        style={{ left: "182px", top: "447px" }}
                        onClick={
                          this.checktrue(this.state.seat[103])
                            ? (e) => this.onClickData(this.state.seat[103])
                            : null
                        }
                      >
                        {this.state.seat[103]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(
                            this.state.seat[104]
                          ) > -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[104]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[104]}
                        style={{ left: "137px", top: "447px" }}
                        onClick={
                          this.checktrue(this.state.seat[104])
                            ? (e) => this.onClickData(this.state.seat[104])
                            : null
                        }
                      >
                        {this.state.seat[104]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(
                            this.state.seat[105]
                          ) > -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[105]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[105]}
                        style={{ left: "91px", top: "447px" }}
                        onClick={
                          this.checktrue(this.state.seat[105])
                            ? (e) => this.onClickData(this.state.seat[105])
                            : null
                        }
                      >
                        {this.state.seat[105]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(
                            this.state.seat[106]
                          ) > -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[106]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[106]}
                        style={{ left: "45px", top: "447px" }}
                        onClick={
                          this.checktrue(this.state.seat[106])
                            ? (e) => this.onClickData(this.state.seat[106])
                            : null
                        }
                      >
                        {this.state.seat[106]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(
                            this.state.seat[107]
                          ) > -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[107]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[107]}
                        style={{ left: "0px", top: "447px" }}
                        onClick={
                          this.checktrue(this.state.seat[107])
                            ? (e) => this.onClickData(this.state.seat[107])
                            : null
                        }
                      >
                        {this.state.seat[107]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(
                            this.state.seat[108]
                          ) > -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[108]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[108]}
                        style={{ left: "503px", top: "497px" }}
                        onClick={
                          this.checktrue(this.state.seat[108])
                            ? (e) => this.onClickData(this.state.seat[108])
                            : null
                        }
                      >
                        {this.state.seat[108]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(
                            this.state.seat[109]
                          ) > -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[109]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[109]}
                        style={{ left: "457px", top: "497px" }}
                        onClick={
                          this.checktrue(this.state.seat[109])
                            ? (e) => this.onClickData(this.state.seat[109])
                            : null
                        }
                      >
                        {this.state.seat[109]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(
                            this.state.seat[110]
                          ) > -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[110]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[110]}
                        style={{ left: "411px", top: "497px" }}
                        onClick={
                          this.checktrue(this.state.seat[110])
                            ? (e) => this.onClickData(this.state.seat[110])
                            : null
                        }
                      >
                        {this.state.seat[110]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(
                            this.state.seat[111]
                          ) > -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[111]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[111]}
                        style={{ left: "365px", top: "497px" }}
                        onClick={
                          this.checktrue(this.state.seat[111])
                            ? (e) => this.onClickData(this.state.seat[111])
                            : null
                        }
                      >
                        {this.state.seat[111]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(
                            this.state.seat[112]
                          ) > -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[112]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[112]}
                        style={{ left: "320px", top: "497px" }}
                        onClick={
                          this.checktrue(this.state.seat[112])
                            ? (e) => this.onClickData(this.state.seat[112])
                            : null
                        }
                      >
                        {this.state.seat[112]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(
                            this.state.seat[113]
                          ) > -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[113]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[113]}
                        style={{ left: "274px", top: "497px" }}
                        onClick={
                          this.checktrue(this.state.seat[113])
                            ? (e) => this.onClickData(this.state.seat[113])
                            : null
                        }
                      >
                        {this.state.seat[113]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(
                            this.state.seat[114]
                          ) > -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[114]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[114]}
                        style={{ left: "228px", top: "497px" }}
                        onClick={
                          this.checktrue(this.state.seat[114])
                            ? (e) => this.onClickData(this.state.seat[114])
                            : null
                        }
                      >
                        {this.state.seat[114]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(
                            this.state.seat[115]
                          ) > -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[115]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[115]}
                        style={{ left: "182px", top: "497px" }}
                        onClick={
                          this.checktrue(this.state.seat[115])
                            ? (e) => this.onClickData(this.state.seat[115])
                            : null
                        }
                      >
                        {this.state.seat[115]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(
                            this.state.seat[116]
                          ) > -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[116]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[116]}
                        style={{ left: "137px", top: "497px" }}
                        onClick={
                          this.checktrue(this.state.seat[116])
                            ? (e) => this.onClickData(this.state.seat[116])
                            : null
                        }
                      >
                        {this.state.seat[116]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(
                            this.state.seat[117]
                          ) > -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[117]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[117]}
                        style={{ left: "91px", top: "497px" }}
                        onClick={
                          this.checktrue(this.state.seat[117])
                            ? (e) => this.onClickData(this.state.seat[117])
                            : null
                        }
                      >
                        {this.state.seat[117]}
                      </div>
                      <div
                        className={
                          this.state.seatChoosed.indexOf(
                            this.state.seat[118]
                          ) > -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[118]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[118]}
                        style={{ left: "45px", top: "497px" }}
                        onClick={
                          this.checktrue(this.state.seat[118])
                            ? (e) => this.onClickData(this.state.seat[118])
                            : null
                        }
                      >
                        {this.state.seat[118]}
                      </div>

                      <div
                        className={
                          this.state.seatChoosed.indexOf(
                            this.state.seat[119]
                          ) > -1
                            ? "singleChooosed"
                            : this.state.seatReserved.indexOf(
                              this.state.seat[119]
                            ) > -1
                              ? "singleChooose"
                              : "single"
                        }
                        key={this.state.seat[119]}
                        style={{ left: "0px", top: "497px" }}
                        onClick={
                          this.checktrue(this.state.seat[119])
                            ? (e) => this.onClickData(this.state.seat[119])
                            : null
                        }
                      >
                        {this.state.seat[119]}
                      </div>
                    </div>
                  </div>
                  <div style={{ width: "550px", height: "500px" }}></div>
                </div>
                <ul className="cinema-note">
                  <li className="single">Ghế thường</li>
                  <li className="choosing">Ghế đang chọn</li>
                  <li className="busy">Ghế đã chọn</li>
                  <li className="road">Lối đi</li>
                </ul>

                <div className="cinema-btn">
                  <input type="button" id="cinema-back" value="Quay lại"
                    onClick={() => this.handleBack(
                      queryString.parse(this.state.menu).id_movie,
                      queryString.parse(this.state.menu).schedule,
                      queryString.parse(this.state.menu).image
                    )} />
                  <input
                    type="button"
                    id="cons-chose"
                    className="cons-chose"
                    value="Chọn Đồ Ăn"
                    onClick={() => this.handleFood(queryString.parse(this.state.menu).id_user,
                      queryString.parse(this.state.menu).id_movie,
                      queryString.parse(this.state.menu).title,
                      queryString.parse(this.state.menu).schedule,
                      queryString.parse(this.state.menu).date_time,
                      queryString.parse(this.state.menu).quantity_ticket,
                      queryString.parse(this.state.menu).summary,
                      this.state.seatReserved,
                      queryString.parse(this.state.menu).image
                    )}
                  />
                  {(queryString.parse(this.state.menu).sum_food > 0) || (this.state.seatReserved[0] != null) ? (
                  <input
                    type="button"
                    id="cinema-next"
                    value="Thanh toán"
                    onClick={() => this.handleSubmited(queryString.parse(this.state.menu).id_user,
                      queryString.parse(this.state.menu).id_movie,
                      queryString.parse(this.state.menu).title,
                      queryString.parse(this.state.menu).schedule,
                      queryString.parse(this.state.menu).date_time,
                      queryString.parse(this.state.menu).quantity_ticket,
                      queryString.parse(this.state.menu).summary,
                      this.state.seatReserved,
                      queryString.parse(this.state.menu).image,
                      queryString.parse(this.state.menu).sum_food
                    )}
                    />): <input
                    style={{ borderRadius: '30px 0px 30px 30px', opacity: '0.5',
                    pointerEvents: 'none' }}
                    type="button"
                    id="cinema-next"
                    value="Thanh toán"
                  
                    />}

                  
                  {/* {this.state.seatReserved.length ==
                  queryString.parse(this.state.menu).quantity_ticket ? (
                    (
                      <CAlert
                        color="primary"
                        className="d-flex align-items-center"
                      >
                        <div>An example alert with an icon</div>
                      </CAlert>
                    ) && (
                      <input
                        type="button"
                        id="cinema-next"
                        value="Thanh toán"
                        onClick={() => this.handleSubmited(this.state.seatReserved)}
                      />
                    )
                  ) : (
                    <input
                      type="button"
                      id="cinema-next-opacity"
                      value="Thanh toán"
                      onClick={() => this.handleSubmited(this.state.seatReserved)}
                    />
                  )} */}
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

export default ChooseChair;
