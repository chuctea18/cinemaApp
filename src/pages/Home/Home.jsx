import Banner from "../../components/shared/Banner";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import BuyTicket from "../../components/Buyticket/BuyTicket";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import uudaiHS from '../../assets/img/uudai_hs.png'
import uudaiTV from '../../assets/img/uudai_thanhvien.png'
import uudaiT3 from '../../assets/img/uudai_thu3.png'

import "../Home/style.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:8000/api/movie")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ movies: data }, () => {
          console.log(this.state.movies);
        });
      });
  }
  getSlides() {
    return this.state.movies.map((movie) => (
      <div className="slide-movie-item">
        <div className="movie-item n_2d hide">
          <div className="movie-pic">
            <img src={movie.image} className="lazyload" />
          </div>
          <div className="movie-txt">
            <h3>{movie.title} </h3>
          </div>
          <div className="movie-over">
            <a href={`/phim/${movie.id_movie}`}>
              <p>{movie.content}</p>
              <span className="atc">...</span>
              <span className="detail-link">Chi tiết</span>
              <a href={`/trailer/${movie.id_movie}`} className="trailler-btn">
                Xem Trailer
              </a>
              <a href={`/movie/${movie.id_movie}`} className="cart-btn">
                Mua vé
              </a>
            </a>
          </div>
        </div>
      </div>
    ));
  }
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    };
    const slides = this.getSlides();
    return (
      <>
        <Header />
        <Menu />
        <br/>
        <Banner />
        <BuyTicket />
        <div className="sub-tab">
          <ul>
            <li>
              <a href="/phim_dang_chieu">Phim đang chiếu</a>
            </li>
            <li>
              <a href="/phim_sap_chieu">Phim sắp chiếu</a>
            </li>
          </ul>
        </div>
        <div className="PlayingMovie-section">
          <div className="PlayingMovie-content">
            <div className="PlayingMovie-wrap">
              <div className="movie-slide slide-slidebox">
                <div className="slide-wrapper-outer-movie">
                  <div className="slide-wrapper">
                    <Slider {...settings}>{slides}</Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <!-- Promotion --> */}
          <div className="promotion-content">
                    <div className="promotion-wrap">
                        <div className="promotion-title">
                        <h2><b>Ưu đãi</b></h2>
                        </div>
                        <div className="promotion-slide">
                            <div className="slide-wrapper-promotion">
                                <div className="slide-item">
                                    <div className="promotion-item">
                                        <a href="">
                                            <div className="promotion-pic">
                                                <img className="lazyload" 
                                                    src={uudaiHS}/>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="slide-item">
                                    <div className="promotion-item">
                                        <a href="#">
                                            <div className="promotion-pic">
                                                <img className="lazyload" 
                                                    src={uudaiT3} />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="slide-item">
                                    <div className="promotion-item">
                                        <a href="#">
                                            <div className="promotion-pic">
                                                <img className="lazyload" 
                                                    src={uudaiTV} />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Promotion --> */}
            {/* <!-- ======= End Lịch chiếu ======= --> */}

      </div>
        <Footer />
      </>
    );
  }
}

export default Home;
