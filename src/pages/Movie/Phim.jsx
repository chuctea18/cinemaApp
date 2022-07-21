import React from "react";
import BuyTicket from "../../components/Buyticket/BuyTicket";
import Banner from "../../components/shared/Banner";
import Cards from "../../components/shared/Cards_playing";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import "../Movie/style.css";
class Phim extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      movies: [],
    };
    this.updateMovieData = this.updateMovieData.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/movie/playing")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ movies: data });
      });
  }
  updateMovieData(movies) {
    this.setState({ movies: movies }, () => {
      console.log(this.state.movies);
    });

  }

  render() {
    return (
      <div>
        <Header updateMovieData={this.updateMovieData} />
        <Menu />
        <br/>
        <Banner />
        <BuyTicket/>
        <div className="sub-tab">
          <ul>
            <li className="active">
              <a href="/phim_dang_chieu">Phim đang chiếu</a>
            </li>
            <li>
              <a href="/phim_sap_chieu">Phim sắp chiếu</a>
            </li>
          </ul>
        </div>
        <Cards movies={this.state.movies} />
        <Footer />
      </div>
    );
  }
}

export default Phim;
