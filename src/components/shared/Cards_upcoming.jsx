import { Component } from "react";

class Cards_upcoming extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     movies: [],
    //   };
  }

  // componentDidMount() {
  //   fetch("http://localhost:8000/api/movie/upcoming")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.setState({ movies: data }, () => {
  //         console.log(this.state.movies);
  //       });
  //     });
  // }
  render() {
    const movieElement = 
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
                <a href={`/movie/${movie.id_movie}`}className="cart-btn">
                  MUA VÉ
                </a>
              </div>
            </a>
          </div>
          </>
        );
      })
    
    return <div className="movieElement">{movieElement}</div>;
  }
}

export default Cards_upcoming;
