import BuyTicket from "../../components/Buyticket/BuyTicket";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import { Component } from "react";
import introItem from "../../assets/img/intro-item-pic.jpg";
import intro1 from "../../assets/img/intro1.jpg";
import intro2 from "../../assets/img/intro2.jpg";
import intro3 from "../../assets/img/intro3.jpg";
import intro4 from "../../assets/img/intro4.jpg";
import intro5 from "../../assets/img/intro5.jpg";
import intro6 from "../../assets/img/intro6.jpg";
import Banner from "../../components/shared/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Information/style.css";
class GioiThieu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:8000/api/movie/playing")
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
              <a href={`/lich-chieu/${movie.id_movie}`} className="cart-btn">
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
      <div>
        <Header />
        <Menu />
        <br/>
        <Banner />
        <BuyTicket />
        <div className="intro-section">
          <div className="intro-title">
            <h2>Giới Thiệu</h2>
          </div>
          <div className="intro-box" data-open="1">
            <div className="intro-wrap">
              <div className="intro-item">
                <div className="intro-pic">
                  <img src={introItem} alt="Lotto Cinema" />
                </div>
                <div className="intro-text">
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
            <div className="intro-note">
              <p>
                <span>
                  <span>
                    LOTTO CINEMA, ĐIỂM ĐẾN GIẢI TRÍ TRẺ TRUNG VÀ SÔI ĐỘNG
                  </span>
                </span>
              </p>

              <p className="welcome">
                Đến Lotto Cinema để trải nghiệm những bộ phim điện ảnh đính
                thực.
              </p>
            </div>
            <div className="section-image-title">
              <h2>Một số hình ảnh của rạp Lotto Cinema</h2>
            </div>
            <div className="cinema-img-wrap">
              <div className="slide-wrapper-outer">
                <div className="slide-item">
                  <div className="cinema-img-item">
                    <div className="cinema-pic">
                      <img src={intro1} alt="" className="cinema-img" />
                    </div>
                    <div className="cinema-pic">
                      <img src={intro2} alt="" className="cinema-img" />
                    </div>
                  </div>
                </div>

                <div className="slide-item">
                  <div className="cinema-img-item">
                    <div className="cinema-pic">
                      <img src={intro3} alt="" className="cinema-img" />
                    </div>
                    <div className="cinema-pic">
                      <img src={intro4} alt="" className="cinema-img" />
                    </div>
                  </div>
                </div>

                <div className="slide-item">
                  <div className="cinema-img-item">
                    <div className="cinema-pic">
                      <img src={intro5} alt="" className="cinema-img" />
                    </div>
                    <div className="cinema-pic">
                      <img src={intro6} alt="" className="cinema-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="PlayingMovie-section">
              <div className="intro-title">
                <h2>Các phim đang chiếu</h2>
              </div>
              <div className="PlayingMovie-content-transparent">
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
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
export default GioiThieu;
