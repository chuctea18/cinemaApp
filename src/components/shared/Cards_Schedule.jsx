import { Component } from "react";
import "../shared/style_cards.css";

class Cards_Schedule extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   id_showtimes: [],
    // };
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    // fetch("http://localhost:8000/api/schedule")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.setState({ id_showtimes: data }, () => {
    //       console.log(this.state.id_showtimes);
    //     });
    //   });
  }
  onSubmit(id_showtimes, schedule, image){
    const jsonStr = localStorage.getItem("user");
    if (jsonStr != null) {
      window.location.href = `/choose-user/${id_showtimes}?schedule=${schedule}&image=${image}`
    }
    else window.location.href = "/sign-in";
  }
  render() {
    const movieElement = this.props.movies ? (
      this.props.movies.map((schedule) => {
        return (
          <>
            <div>

              <div id="lotto-app-cards">
              
                <div className="container-cards">
                  <div className="row_lichchieu">
                    <div className="schedule-list-content-cards">
                      <div className="schedule-list-wrap-cards">
                        <div className="schedule-item-cards">
                          <div className="film-item-cards">
                            <a href={`/phim/${schedule.id_showtimes}`}>
                              <div className="film-item-pic-cards">
                                <img src={schedule.image} />
                              </div>
                              <div className="film-item-txt-cards">
                                <h3>{schedule.title}</h3>
                                <p>{schedule.content}</p>
                              </div>
                            </a>
                            <div class="film-item-type-cards">
                              <span class="icon-2d-cards"></span>
                            </div>
                          </div>
                          <div className="schedule-cards">
                            <div className="row-cards">
                              <div className="row-date-cards">
                                <span>{schedule.date_time}</span>
                              </div>
                              <div className="row-hour-cards">
                                <ul>
                                  <button className = "btn_schedule" onClick={()=>this.onSubmit(schedule.id_showtimes, schedule.schedule_1,schedule.image)}>{schedule.schedule_1}</button>
                                  <button className = "btn_schedule" onClick={()=>this.onSubmit(schedule.id_showtimes, schedule.schedule_2,schedule.image)}>{schedule.schedule_2}</button>
                                  <button className = "btn_schedule" onClick={()=>this.onSubmit(schedule.id_showtimes, schedule.schedule_3,schedule.image)}>{schedule.schedule_3}</button>
                                  <button className = "btn_schedule" onClick={()=>this.onSubmit(schedule.id_showtimes, schedule.schedule_4,schedule.image)}>{schedule.schedule_4}</button>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })
    ) : null
    return <div className="movieElement">{movieElement}</div>;
  }
}

export default Cards_Schedule;
