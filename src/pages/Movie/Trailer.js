import { Component } from "react";
import ReactPlayer from "react-player";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
class Trailer extends Component {
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

        <div className="Trailer">
          <ReactPlayer
            url={this.state.id_movie.link}
            controls={true}
            width="80%"
            height="100%"
          />
        </div>
        <Footer />
      </>
    );
  }
}

export default Trailer;
