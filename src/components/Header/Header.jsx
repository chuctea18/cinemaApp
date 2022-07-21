import { Component } from "react";
import LogOut from "../shared/LogOut";
import "../Header/style.css";
import avt from "../../assets/img/man.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isShowing: false,
      search: '',

    };
    this.onClickSearch = this.onClickSearch.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
    this.openModalHandler = this.openModalHandler(this)
    this.closeModalHandler = this.closeModalHandler(this)
  }

  componentDidMount() {
    const jsonStr = localStorage.getItem("user");
    if (jsonStr != null) {
      this.setState({ user: JSON.parse((jsonStr)) });
    }

  }
  onClickSearch() {
    fetch(`http://localhost:8000/api/search?title=${this.state.search}`)
      .then((response) => response.json())
      .then((data) => {
        this.props.updateMovieData(data);
      });

  }
  onSearchChange(e) {
    this.setState({ search: e.target.value })
  }
  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  }

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  }
 notify(){
  toast.success("Chào bạn đã đến với chúng tôi!!!")
 }
  render() {
    const isLoggedIn = this.state.user != null;
    let component;
    var letterStyle = {
      marginLeft: "8px",
      padding: "revert",
      background: "black",
      color: "white",
      fontWeight: "bold",
      textTransform: "capitalize",
      zIndex: '100'
    };

    if (isLoggedIn) {
      component = (
        <div className="name_text">
          {this.state.isShowing ? 
            <div onClick={this.closeModalHandler} className="back-shed"></div>
           : null}
          <img className="img_avt" src={avt} />
          <a type="button" className="open-modal-btn"  onClick={this.notify} style={{color:'white', fontSize:'16px'}}>{this.state.user.response.name}</a>
          {/* <LogOut
            className="modal"
            style={letterStyle}
            isShowing={this.state.isShowing}
            close={this.closeModalHandler}>
          </LogOut> */}
        </div>
      );
    } else {
      component = (
        <div className="member-register">
          <a href="/sign-in" className="login-btn">
            đăng nhập
          </a>
          <a href="/sign-up" className="register-btn">
            đăng ký
          </a>
        </div>
      );
    }
    return (
      <header id="lotto-header">
        <h1 className="title">
          <a href="/">LOTTO CINEMA</a>
        </h1>
        <div className="search-form rounded-pill bg-light">
          <input type="text" id="search" onChange={this.onSearchChange} placeholder="Tìm kiếm phim..." />
          <a type="button" className="icon" onClick={this.onClickSearch} style={{color:'#ffff'}}>
            <i class="fa fa-search"></i>
          </a>
        </div>
        <div className="component">{component}</div>
      </header>
    );
  }
}

export default Header;
