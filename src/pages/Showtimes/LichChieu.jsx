import BuyTicket from "../../components/Buyticket/BuyTicket";
import { Component } from "react";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import "../Showtimes/style.css";
import Banner from "../../components/shared/Banner";
import Footer from "../../components/Footer/Footer";
import Cards_Schedule from "../../components/shared/Cards_Schedule";
import introItem from "../../assets/img/intro-item-pic.jpg";
class LichChieu extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:8000/api/schedule")
    .then((response) => response.json())
    .then((data) => {
      this.setState({ movies: data }, () => {
        console.log(this.state.movies);
      });
    });
  }


  render() {
    return (
      <div>
        <Header />
        <Menu />
        <br/>
        <Banner />
        <BuyTicket/>
        <br/>
        <div className="intro-wrap">
              <div className="item" >
                <div className="text">
                  <h3>Lotto Cinema</h3>
                  <p>
                    <span>
                      <span>
                        Địa chỉ: Ký túc xá khu A, Đông Hòa, Dĩ An, Bình Dương
                      </span>
                    </span>
                  </p>

                  <p>
                    <span>
                      <span>Hotline: (+84) 387 451 318</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
        <Cards_Schedule movies={this.state.movies} />
        <Footer />
      </div>
    );
  }
}
export default LichChieu;
