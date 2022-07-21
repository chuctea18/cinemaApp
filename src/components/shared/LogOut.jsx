import { Component } from "react";

class LogOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    const jsonStr = localStorage.getItem("user");
    if (jsonStr != null) {
      this.setState({ user: JSON.parse((jsonStr)) });
    }

  }
  onClickRemove() {
    window.localStorage.clear();
    window.location.href = "/sign-in";
  }

  render() {
    return (
      <div>
        <div
          className="wrap"
          style={{
          transform: this.props.isShowing ? "translateY(0vh)" : "translateY(-100vh)",
          opacity: this.props.isShowing ? "1" : "0",
          }}
        >
          <div className="modal-header">
            <h3 className="header-title">thông tin tài khoản</h3>
            <span className="close-modal-btn" onClick={this.props.close}>
              ×
          </span>
          </div>

          <div className="modal-body">
            <div className="account-overview">
              <span className="list-title">Họ tên:</span>
              <span className="list-value">{this.state.user?.response.name}</span>
            </div>
            <div className="account-overview">
              <span className="list-title">Ngày sinh:</span>
              <span className="list-value">{this.state.user?.response.birth}</span>
            </div>
            <div className="account-overview">
              <span className="list-title">Email:</span>
              <span className="list-value">{this.state.user?.response.email}</span>
            </div>
            <div className="account-overview">
              <span className="list-title">Điện thoại</span>
              <span className="list-value">{this.state.user?.response.phone}</span>
            </div>
          </div>
          <button type="button" className="logout-btn" onClick={this.onClickRemove}>đăng xuất</button>
        </div>
      </div>
    );
  }
}

export default LogOut;
