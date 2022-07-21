import { Component } from "react";

class Cards_playing extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   user: null,
    // };
  }

  componentDidMount() {
    // const jsonStr = localStorage.getItem("user");
    // if (jsonStr != null) {
    //   this.setState({ user: JSON.parse(jsonStr) }, () => {
    //     // console.log((this.state.user.response))
    //   });
    // }
  }
  render() {

    const movieElement = this.props.movies ? (
      this.props.movies.map((movie) => {
        return (
          <>
          <div className="content-page">
            <a
              href={`/phim/${movie.id_movie}`}
              className="film-item cl-purple"
            >
              <img className="film-item-pic img" src={movie.image} />
              <div className="film-item-txt ">
                <h3 className="txtbongden">{movie.title}</h3>
                <p className="txtbongden">{movie.content}</p>
              </div>
              <div className="film-item-but ">
                <a href={`/trailer/${movie.id_movie}`} className="trailler-btn">
                  TRAILER
                </a>
                <a href={`/movie/${movie.id_movie}`} className="cart-btn">
                  MUA VÉ
                </a>
              </div>
            </a>
          </div>
          </>
        );
      })
    ) : <p>Không tìm thấy kết quả phù hợp</p>
    return <div className="movieElement">{movieElement}</div>;
  }
}

export default Cards_playing;
