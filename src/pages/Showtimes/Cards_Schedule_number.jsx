import { Component } from "react";
import "../../components/shared/style_cards.css";
import BuyTicket from "../../components/Buyticket/BuyTicket";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Banner from "../../components/shared/Banner";
import Footer from "../../components/Footer/Footer";
class Cards_Schedule_number extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_showtimes: this.props.match.params.id_movie,
    };
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    fetch(`http://localhost:8000/api/schedule/show/${this.state.id_showtimes}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({ id_showtimes: data }, () => {
          console.log( this.state.id_showtimes);
        })
      );
  }
  onSubmit(id_showtimes,schedule,image){
    const jsonStr = localStorage.getItem("user");
    if (jsonStr != null) {
      window.location.href = `/choose-user/${id_showtimes}?schedule=${schedule}&image=${image}`
    }
    else window.location.href = "/sign-in";
  }
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <br />
        <Banner />
        <BuyTicket />
        <br />
        <div id="lotto-app-cards">
          <div className="container-cards">
            <div className="row_lichchieu">
              {/* <!-- Schedule-list --> */}
              <div className="schedule-list-content-cards">
                <div className="schedule-list-wrap-cards">
                  <div className="schedule-item-cards">
                    <div className="film-item-cards">
                      <a href={`/phim/${this.state.id_showtimes.id_movie}`}>
                        <div className="film-item-pic-cards">
                          <img src={this.state.id_showtimes.image} alt=""/>
                        </div>
                        <div className="film-item-txt-cards">
                          <h3>{this.state.id_showtimes.title}</h3>
                          <p>{this.state.id_showtimes.content}</p>
                        </div>
                      </a>
                      <div class="film-item-type-cards">
                        <span class="icon-2d-cards"></span>
                      </div>
                    </div>
                    <div className="schedule-cards">
                      <div className="row-cards">
                        <div className="row-date-cards">
                          <span>{this.state.id_showtimes.date_time}</span>
                        </div>
                        <div className="row-hour-cards">
                          <ul>
                            <button className="btn_schedule" onClick={()=>this.onSubmit(this.state.id_showtimes.id_showtimes, this.state.id_showtimes.schedule_1,this.state.id_showtimes.image)}>
                              {this.state.id_showtimes.schedule_1}
                            </button>
                            <button className="btn_schedule" onClick={()=>this.onSubmit(this.state.id_showtimes.id_showtimes, this.state.id_showtimes.schedule_2,this.state.id_showtimes.image)}>
                              {this.state.id_showtimes.schedule_2}
                            </button>
                            <button className="btn_schedule" onClick={()=>this.onSubmit(this.state.id_showtimes.id_showtimes, this.state.id_showtimes.schedule_3,this.state.id_showtimes.image)}>
                              {this.state.id_showtimes.schedule_3}
                            </button>
                            <button className="btn_schedule" onClick={()=>this.onSubmit(this.state.id_showtimes.id_showtimes, this.state.id_showtimes.schedule_4,this.state.id_showtimes.image)}>
                              {this.state.id_showtimes.schedule_4}
                            </button>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Schedule-list --> */}

              {/* */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Cards_Schedule_number;
