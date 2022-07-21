import { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import BuyTicket from "../../components/Buyticket/BuyTicket";
import Banner from "../../components/shared/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Movie/style.css";

class ChiTiet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_movie: this.props.match.params.id_movie,
    };
  }

  componentDidMount() {
    const id_movie = this.props.match.params.id_movie;
    fetch(`http://localhost:8000/api/movie/${id_movie}`)
      .then((res) => res.json())
      .then((data) => this.setState({ id_movie: data }));
  }
  render() {
    return (
      <>
        <Header />
        <Menu />
        <br/>
        <Banner />
        <BuyTicket/>
        <div id="lotto-app" style={{height: "auto"}}>
          <div className="container">
            <div className="row">
              {/* <!-- ======= Content page ======= --> */}
              <div className="content-page">
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
                <div className="film-details-content">
                  <div className="film-details-wrap">
                    <div className="film-item">
                      <div className="film-item-pic">
                        <img src={this.state.id_movie.image} alr=" "/>
                      </div>
                      <div className="film-item-txt">
                        <h3>{this.state.id_movie.title}</h3>
                        <div className="film-overview">
                          <span className="l-title">Khởi chiếu:</span>
                          <span className="l-value">
                            {this.state.id_movie.time_movie}
                          </span>
                        </div>
                        <div className="film-overview">
                          <span className="l-title">Thể loại:</span>
                          <span className="l-value">
                            {this.state.id_movie.category}
                          </span>
                        </div>
                        <div className="film-overview">
                          <span className="l-title">Diễn viên:</span>
                          <span className="l-value">
                            {this.state.id_movie.actor}
                          </span>
                        </div>
                        <div className="film-overview">
                          <span className="l-title">Đạo diễn:</span>
                          <span className="l-value">
                            {this.state.id_movie.director}
                          </span>
                        </div>
                        <div className="film-item-type">
                          <span className="icon-2d"></span>
                        </div>
                        <p>{this.state.id_movie.content}</p>
                        <div className="film-item-but">
                          <a
                            href={`/trailer/${this.state.id_movie.id_movie}`}
                            className="trailer-btn"
                          >
                            TRAILER
                          </a>
                          <a href={`/movie/${this.state.id_movie.id_movie}`} className="cart-btn">
                            MUA VÉ
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- ======= End Content page ======= --> */}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
    // return <div className="movieElement">{movieDetail}</div>;
  }
}

export default ChiTiet;
