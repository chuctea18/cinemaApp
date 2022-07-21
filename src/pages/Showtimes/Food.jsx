import { Component } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import "../Showtimes/style.css";
import Footer from "../../components/Footer/Footer";
import queryString from "query-string";
class Combo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      menu: this.props.location.search,
      combo: [
        "1 Bắp Ngọt 60oz + 1 Coke 22oz - V",
        "2 Coke 32oz + 1 Bắp Ngọt 60oz ",
        "4 Coke 22oz + 2 Bắp Ngọt 60oz",
        "Bắp rang bơ caramel 60oz",
        "Bắp ngọt 60oz",
        "Nước Suối Dasani 500ml"],
      combo_1: 0,
      combo_2: 0,
      combo_3: 0,
      combo_4: 0,
      combo_5: 0,
      combo_6: 0,
      sum_1: 0,
      sum_2: 0,
      sum_3: 0,
      sum_4: 0,
      sum_5: 0,
      sum_6: 0,
    };
    this.handleAddCombo_1 = this.handleAddCombo_1.bind(this);
    this.handleSubCombo_1 = this.handleSubCombo_1.bind(this);
    this.handleAddCombo_2 = this.handleAddCombo_2.bind(this);
    this.handleSubCombo_2 = this.handleSubCombo_2.bind(this);
    this.handleAddCombo_3 = this.handleAddCombo_3.bind(this);
    this.handleSubCombo_3 = this.handleSubCombo_3.bind(this);
    this.handleAddCombo_4 = this.handleAddCombo_4.bind(this);
    this.handleSubCombo_4 = this.handleSubCombo_4.bind(this);
    this.handleAddCombo_5 = this.handleAddCombo_5.bind(this);
    this.handleSubCombo_5 = this.handleSubCombo_5.bind(this);
    this.handleAddCombo_6 = this.handleAddCombo_6.bind(this);
    this.handleSubCombo_6 = this.handleSubCombo_6.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onCancel(id_user,id_movie, title, schedule,date_time, quantity_ticket, summary,chair,image) {
    window.location.href =`/choose-chair?id_user=${id_user}&id_movie=${id_movie}&title=${title}&schedule=${schedule}&date_time=${date_time}&quantity_ticket=${quantity_ticket}&summary=${summary}&chair=${chair}&image=${image}`;

  }

  onSubmit(id_user,id_movie, title, schedule,date_time, quantity_ticket, summary,chair,image, food) {
            window.location.href =
              `/choose-chair?id_user=${id_user}&id_movie=${id_movie}&title=${title}&schedule=${schedule}&date_time=${date_time}&quantity_ticket=${quantity_ticket}&summary=${summary}&chair=${chair}&image=${image}&sum_food=${food}`;
  }

  handleAddCombo_1() {
    this.setState({ combo_1: this.state.combo_1 + 1 });
    this.setState({ sum_1: this.state.sum_1 + 75000 });
  }
  handleSubCombo_1() {
    this.setState({
      combo_1: this.state.combo_1 > 0 ? this.state.combo_1 - 1 : 0,
    });
    this.setState({
      sum_1: this.state.sum_1 > 0 ? this.state.sum_1 - 75000 : 0,
    });
  }
  handleAddCombo_2() {
    this.setState({ combo_2: this.state.combo_2 + 1 });
    this.setState({ sum_2: this.state.sum_2 + 105000 });
  }
  handleSubCombo_2() {
    this.setState({
      combo_2: this.state.combo_2 > 0 ? this.state.combo_2 - 1 : 0,
    });
    this.setState({
      sum_2: this.state.sum_2 > 0 ? this.state.sum_2 - 105000 : 0,
    });
  }
  handleAddCombo_3() {
    this.setState({ combo_3: this.state.combo_3 + 1 });
    this.setState({ sum_3: this.state.sum_3 + 199000 });
  }
  handleSubCombo_3() {
    this.setState({
      combo_3: this.state.combo_3 > 0 ? this.state.combo_3 - 1 : 0,
    });
    this.setState({
      sum_3: this.state.sum_3 > 0 ? this.state.sum_3 - 199000 : 0,
    });
  }
  handleAddCombo_4() {
    this.setState({ combo_4: this.state.combo_4 + 1 });
    this.setState({ sum_4: this.state.sum_4 + 50000 });
  }
  handleSubCombo_4() {
    this.setState({
      combo_4: this.state.combo_4 > 0 ? this.state.combo_4 - 1 : 0,
    });
    this.setState({
      sum_4: this.state.sum_4 > 0 ? this.state.sum_4 - 50000 : 0,
    });
  }
  handleAddCombo_5() {
    this.setState({ combo_5: this.state.combo_5 + 1 });
    this.setState({ sum_5: this.state.sum_5 + 50000 });
  }
  handleSubCombo_5() {
    this.setState({
      combo_5: this.state.combo_5 > 0 ? this.state.combo_5 - 1 : 0,
    });
    this.setState({
      sum_5: this.state.sum_5 > 0 ? this.state.sum_5 - 50000 : 0,
    });
  }
  handleAddCombo_6() {
    this.setState({ combo_6: this.state.combo_6 + 1 });
    this.setState({ sum_6: this.state.sum_6 + 16000 });
  }
  handleSubCombo_6() {
    this.setState({
      combo_6: this.state.combo_6 > 0 ? this.state.combo_6 - 1 : 0,
    });
    this.setState({
      sum_6: this.state.sum_6 > 0 ? this.state.sum_6 - 16000 : 0,
    });
  }
  componentDidMount() {
    const jsonStr = localStorage.getItem("user");
    if (jsonStr != null) {
      this.setState({ user: JSON.parse((jsonStr)) }, ()=>{
        console.log((this.state.user.response))
      });
    }
    console.log(this.state.menu)
  }
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <br />
        <div className="section-order" style={{ height: "fit-content", display: "block" }}>
          <a className="close-order" href="#"></a> {/* close-order ---- */}
          {/* movie-part */}
          <div className="order-title">
            <div className="order-wrap">
              <div className="order-overview">
                <h2>
                  <strong>Tên phim</strong>
                  <br />
                  <span  style={{color:'#ffff', fontWeight:'bold'}}>{queryString.parse(this.state.menu).title}</span>
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
                      <span style={{ fontSize: '18px' }}> vé</span>
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
                  <li className="seat-number">{queryString.parse(this.state.menu).chair}</li>
                </ul>
              </div>
            </div>
          </div>
          {/* movie-part */}
          <div className="order-content" style={{ display: "block", background: "whitesmoke", height: '1100px' }}>
            {/* <!--//combo-part//--> */}
            <div className="cons-content show" style={{ display: "block" }}>

              <div className="cons-box">
                <ul className="cons-box-list">
                  <li data-group="217">
                    <h2>COMBO</h2>
                    <div className="combo-item">
                      <div className="combo-text">
                        <h3>Combo Solo</h3>
                        <p>{this.state.combo[0]}</p>
                        <div className="combo-price">giá:<span className="text-price">75000</span><sup>đ</sup></div>
                      </div>

                      <div className="combo-input">
                        <a type="button" onClick={this.handleSubCombo_1} className="cmb-minus">-</a>
                        <input data-id="1101596" data-price="105000" data-name="Combo Couple" type="text" value={this.state.combo_1} size="3" />
                        <a type="button" onClick={this.handleAddCombo_1} className="cmb-add">+</a>
                      </div>
                      <div className="combo-total">
                        <div className="combo-total-outer">
                          <span>{this.state.sum_1}</span><sup>đ</sup>
                        </div>
                      </div>
                    </div>
                    <div className="combo-item">
                      <div className="combo-text">
                        <h3>Combo Couple</h3>
                        <p>{this.state.combo[1]} </p>
                        <div className="combo-price">giá:<span className="text-price">105000</span><sup>đ</sup></div>
                      </div>
                      <div className="combo-input">
                        <a type="button" onClick={this.handleSubCombo_2} className="cmb-minus">-</a>
                        <input data-id="1101596" data-price="105000" data-name="Combo Couple" type="text" value={this.state.combo_2} size="3" />
                        <a type="button" onClick={this.handleAddCombo_2} className="cmb-add">+</a>
                      </div>
                      <div className="combo-total">
                        <div className="combo-total-outer">
                          <span>{this.state.sum_2}</span><sup>đ</sup>
                        </div>
                      </div>
                    </div>
                    <div className="combo-item">
                      <div className="combo-text">
                        <h3>Combo Party</h3>
                        <p>{this.state.combo[2]}</p>
                        <div className="combo-price">giá:<span className="text-price">199000</span><sup>đ</sup></div>
                      </div>
                      <div className="combo-input">
                        <a type="button" onClick={this.handleSubCombo_3} className="cmb-minus">-</a>
                        <input data-id="1101597" data-price="199000" data-name="Combo Party" type="text" value={this.state.combo_3} size="3" />
                        <a type="button" onClick={this.handleAddCombo_3} className="cmb-add">+</a>
                      </div>
                      <div className="combo-total">
                        <div className="combo-total-outer">
                          <span>{this.state.sum_3}</span><sup>đ</sup>
                        </div>
                      </div>
                    </div>
                  </li>


                  <li data-group="80">
                    <h2>BẮP RANG</h2>
                    <div className="combo-item">
                      <div className="combo-text">
                        <h3>Bắp rang bơ caramel 60oz</h3>
                        <p>{this.state.combo[3]}</p>
                        <div className="combo-price">giá:<span className="text-price">50000</span><sup>đ</sup></div>
                      </div>
                      <div className="combo-input">
                        <a type="button" onClick={this.handleSubCombo_4} className="cmb-minus">-</a>
                        <input data-id="265" data-price="16000" data-name="Nước Suối Dasani 500ml" type="text" value={this.state.combo_4} size="3" />
                        <a type="button" onClick={this.handleAddCombo_4} className="cmb-add">+</a>
                      </div>
                      <div className="combo-total">
                        <div className="combo-total-outer">
                          <span>{this.state.sum_4}</span><sup>đ</sup></div></div>
                    </div>

                    <div className="combo-item">
                      <div className="combo-text">
                        <h3>Bắp ngọt 60oz</h3>
                        <p>{this.state.combo[4]}</p>
                        <div className="combo-price">giá:<span className="text-price">50000</span><sup>đ</sup></div>
                      </div>
                      <div className="combo-input">
                        <a type="button" onClick={this.handleSubCombo_5} className="cmb-minus">-</a>
                        <input data-id="265" data-price="16000" data-name="Nước Suối Dasani 500ml" type="text" value={this.state.combo_5} size="3" />
                        <a type="button" onClick={this.handleAddCombo_5} className="cmb-add">+</a>
                      </div><div className="combo-total">
                        <div className="combo-total-outer">
                          <span>{this.state.sum_5}</span><sup>đ</sup></div></div>
                    </div>
                  </li>

                  <li data-group="75">
                    <h2>NƯỚC ĐÓNG CHAI</h2>
                    <div className="combo-item">
                      <div className="combo-text">
                        <h3>Nước Suối Dasani 500ml</h3>
                        <p>{this.state.combo[5]}</p>
                        <div className="combo-price">giá:<span className="text-price">16000</span><sup>đ</sup></div>
                      </div>
                      <div className="combo-input">
                        <a type="button" onClick={this.handleSubCombo_6} className="cmb-minus">-</a>
                        <input data-id="265" data-price="16000" data-name="Nước Suối Dasani 500ml" type="text" value={this.state.combo_6} size="3" />
                        <a type="button" onClick={this.handleAddCombo_6} className="cmb-add">+</a>
                      </div><div className="combo-total">
                        <div className="combo-total-outer">
                          <span>{this.state.sum_6}</span><sup>đ</sup>
                        </div></div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="cons-input">
                <input type="button" className="cons-cancel" id="cons-cancel" 
                onClick={() => this.onCancel(
                  queryString.parse(this.state.menu).id_user,
                  queryString.parse(this.state.menu).id_movie,
                  queryString.parse(this.state.menu).title,
                  queryString.parse(this.state.menu).time,
                  queryString.parse(this.state.menu).day_order,
                  queryString.parse(this.state.menu).quantity_ticket,
                  queryString.parse(this.state.menu).summary,
                  queryString.parse(this.state.menu).chair,
                  queryString.parse(this.state.menu).image,
                )} value="Hủy" />
                <input type="button" className="cons-ok" id="cons-ok" 
                 onClick={() => this.onSubmit(
                  queryString.parse(this.state.menu).id_user,
                  queryString.parse(this.state.menu).id_movie,
                  queryString.parse(this.state.menu).title,
                  queryString.parse(this.state.menu).time,
                  queryString.parse(this.state.menu).day_order,
                  queryString.parse(this.state.menu).quantity_ticket,
                  queryString.parse(this.state.menu).summary,
                  queryString.parse(this.state.menu).chair,
                  queryString.parse(this.state.menu).image,
                  this.state.sum_1 + this.state.sum_2 + this.state.sum_3 + this.state.sum_4 + this.state.sum_5 + this.state.sum_6
                  )}
                  value="Đồng ý" />
              </div>
            </div>

            {/* <!--//end combo-part//--> */}

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Combo;



