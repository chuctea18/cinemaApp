import { Component } from "react"
import "../Buyticket/style.css"
class BuyTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            dates: [],
            times: [],
            selectedMovie: -1,
            selectedDate: -1,
            selectedTime: -1
        }
        this.handleSelectMovie = this.handleSelectMovie.bind(this)
        this.handleSelectDate = this.handleSelectDate.bind(this)
        this.handleSelectTime = this.handleSelectTime.bind(this)
    }
    componentDidMount() {
        fetch(`http://localhost:8000/api/movie/playing`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ movies: data }, () => {
                    console.log("movie: ", this.state.movies)
                });
            });
    }
    handleSelectMovie(e) {
        const movie_id = e.target.value;
        this.setState({ selectedMovie: movie_id }, () => {
            if (this.state.selectedMovie != -1) {
                fetch(`http://localhost:8000/api/movie/buyonline/${this.state.selectedMovie}`)
                    .then((response) => response.json())
                    .then((data) => {
                        this.setState({ dates: data }, () => {
                            console.log("dates: ", this.state.dates)
                        });
                    });
            }
        })

    }
    handleSelectDate(e) {
        const date_id = e.target.value;
        this.setState({ selectedDate: date_id }, () => {
            if (this.state.selectedDate != -1) {
                fetch(`http://localhost:8000/api/movie/buyonline/${this.state.selectedMovie}/${this.state.selectedDate}`)
                    .then((response) => response.json())
                    .then((data) => {
                        this.setState({ times: data }, () => {
                            console.log("dates: ", this.state.times)
                        });
                    });
            }
        })
    }

    handleSelectTime(e) {
        const time_id = e.target.value;
        this.setState({ selectedTime: time_id }, () => {
            if(this.state.selectedMovie != -1 && this.state.selectedDate != -1 && this.state.selectedTime != -1){
                const movie = this.state.movies.filter(movie => movie.id_movie == this.state.selectedMovie)[0]
                window.location.href = `/choose-user/${this.state.selectedDate}?schedule=${this.state.selectedTime}&image=${movie.image}`
    
            }
        })
    }
    render() {
        const movieComponent = this.state.movies.map(movie => (
            <option value={movie.id_movie}>{movie.title}</option>
        ))
        const dateComponent = this.state.dates.map(date => (
            <option value={date.id_showtimes}>{date.date_time}</option>
        ))
        const timeComponent = this.state.times.map(time => (
            <option value={time.schedule_1}>{time.schedule_1}</option>
            // <option value={time.schedule_2}>{time.schedule_2}</option>
            // <option value={time.schedule_3}>{time.schedule_3}</option>
            // <option value={time.schedule_4}>{time.schedule_4}</option>
        ))
        return (

            // <!-- ======= Mua vé nhanh ======= -->
            <div className="cart-content">
                <div className="cart-wrap">
                    <div className="block-title">
                        <h2>mua vé nhanh</h2>
                    </div>
                    <div className="block-list">
                        <div className="select-list " data-cate='film'>
                            <select onChange={this.handleSelectMovie} class="form-select select-header " aria-label="Default select example">
                                <option value={-1}>Chọn phim</option>
                                {movieComponent}
                            </select>
                        </div>
                        <div className="select-list" data-cate='film'>
                            <select onChange={this.handleSelectDate} class="form-select select-header " aria-label="Default select example">
                                <option value={-1}>Chọn ngày</option>
                                {dateComponent}
                            </select>
                        </div>
                        <div className="select-list" data-cate='film'>
                            <select onChange={this.handleSelectTime} class="form-select select-header " aria-label="Default select example">
                                <option value={-1}>Chọn suất</option>
                                {timeComponent}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BuyTicket