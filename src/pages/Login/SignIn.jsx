import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import visibilityIcon from "../../assets/svg/visibilityIcon.svg";
import "../Register/register.css"


function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    birth: "",
    phone: "",
  });

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const body_data = { name, email, password };
    console.log("body_data : ", body_data);

    fetch("http://localhost:8000/authenticate", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify(body_data),
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log(response)
        window.localStorage.setItem("user", JSON.stringify({ response }));
        window.location.href = "/";
      });
  };

  return (
      <div class="register_container" id="container" style={{ background: "#0000" }} >
        <div class="form-container log-in-container" style={{ marginTop: '10%' }}>
          <form style={{ borderRadius: '30px'}}  className="form">
            <h1 style={{ marginTop: '20px' }}>Đăng nhập</h1>
            <div class="form__icons">
              <img class="form__icon"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI1MHB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjUwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGUvPjxkZWZzLz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIj48ZyBmaWxsPSIjMDAwMDAwIiBpZD0iRmFjZWJvb2siPjxwYXRoIGQ9Ik0yNSw1MCBDMzguODA3MTE5NCw1MCA1MCwzOC44MDcxMTk0IDUwLDI1IEM1MCwxMS4xOTI4ODA2IDM4LjgwNzExOTQsMCAyNSwwIEMxMS4xOTI4ODA2LDAgMCwxMS4xOTI4ODA2IDAsMjUgQzAsMzguODA3MTE5NCAxMS4xOTI4ODA2LDUwIDI1LDUwIFogTTI1LDQ3IEMzNy4xNTAyNjUxLDQ3IDQ3LDM3LjE1MDI2NTEgNDcsMjUgQzQ3LDEyLjg0OTczNDkgMzcuMTUwMjY1MSwzIDI1LDMgQzEyLjg0OTczNDksMyAzLDEyLjg0OTczNDkgMywyNSBDMywzNy4xNTAyNjUxIDEyLjg0OTczNDksNDcgMjUsNDcgWiBNMjYuODE0NTE5NywzNiBMMjYuODE0NTE5NywyNC45OTg3MTIgTDMwLjA2ODc0NDksMjQuOTk4NzEyIEwzMC41LDIxLjIwNzYwNzIgTDI2LjgxNDUxOTcsMjEuMjA3NjA3MiBMMjYuODIwMDQ4NiwxOS4zMTAxMjI3IEMyNi44MjAwNDg2LDE4LjMyMTM0NDIgMjYuOTIwNzIwOSwxNy43OTE1MzQxIDI4LjQ0MjU1MzgsMTcuNzkxNTM0MSBMMzAuNDc2OTYyOSwxNy43OTE1MzQxIEwzMC40NzY5NjI5LDE0IEwyNy4yMjIyNzY5LDE0IEMyMy4zMTI4NzU3LDE0IDIxLjkzNjg2NzgsMTUuODM5MDkzNyAyMS45MzY4Njc4LDE4LjkzMTg3MDkgTDIxLjkzNjg2NzgsMjEuMjA4MDM2NiBMMTkuNSwyMS4yMDgwMzY2IEwxOS41LDI0Ljk5OTE0MTMgTDIxLjkzNjg2NzgsMjQuOTk5MTQxMyBMMjEuOTM2ODY3OCwzNiBMMjYuODE0NTE5NywzNiBaIE0yNi44MTQ1MTk3LDM2IiBpZD0iT3ZhbC0xIi8+PC9nPjwvZz48L3N2Zz4="
                alt="" />
              <img class="form__icon"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI1MHB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjUwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGUvPjxkZWZzLz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIj48ZyBmaWxsPSIjMDAwMDAwIiBpZD0iTGlua2VkSW4iPjxwYXRoIGQ9Ik0yNSw1MCBDMzguODA3MTE5NCw1MCA1MCwzOC44MDcxMTk0IDUwLDI1IEM1MCwxMS4xOTI4ODA2IDM4LjgwNzExOTQsMCAyNSwwIEMxMS4xOTI4ODA2LDAgMCwxMS4xOTI4ODA2IDAsMjUgQzAsMzguODA3MTE5NCAxMS4xOTI4ODA2LDUwIDI1LDUwIFogTTI1LDQ3IEMzNy4xNTAyNjUxLDQ3IDQ3LDM3LjE1MDI2NTEgNDcsMjUgQzQ3LDEyLjg0OTczNDkgMzcuMTUwMjY1MSwzIDI1LDMgQzEyLjg0OTczNDksMyAzLDEyLjg0OTczNDkgMywyNSBDMywzNy4xNTAyNjUxIDEyLjg0OTczNDksNDcgMjUsNDcgWiBNMTQsMjAuMTE4MDQ3OSBMMTQsMzQuNjU4MTgzNCBMMTguNzEwMDg1MSwzNC42NTgxODM0IEwxOC43MTAwODUxLDIwLjExODA0NzkgTDE0LDIwLjExODA0NzkgWiBNMTYuNjY0Njk2MiwxMyBDMTUuMDUzNDA1OCwxMyAxNCwxNC4wODU4NjExIDE0LDE1LjUxMTUxMjIgQzE0LDE2LjkwNzYzMzEgMTUuMDIyMjcxMSwxOC4wMjQ3NjE0IDE2LjYwMzU1NTYsMTguMDI0NzYxNCBMMTYuNjMzNjU1NiwxOC4wMjQ3NjE0IEMxOC4yNzU5ODY3LDE4LjAyNDc2MTQgMTkuMjk4ODIyMiwxNi45MDc2MzMxIDE5LjI5ODgyMjIsMTUuNTExNTEyMiBDMTkuMjY4MjUxOSwxNC4wODU4NjExIDE4LjI3NTk4NjcsMTMgMTYuNjY0Njk2MiwxMyBaIE0zMC41NzY5MjEzLDIwLjExODA0NzkgQzI4LjA3NjE3NiwyMC4xMTgwNDc5IDI2Ljk1NjU1MDEsMjEuNTI5MzE5OSAyNi4zMzE0MTA4LDIyLjUxOTM1MjcgTDI2LjMzMTQxMDgsMjAuNDU5ODY0NCBMMjEuNjIwNzYxNCwyMC40NTk4NjQ0IEMyMS42ODI4NDI3LDIxLjgyNDIzNTYgMjEuNjIwNzYxNCwzNSAyMS42MjA3NjE0LDM1IEwyNi4zMzE0MTA4LDM1IEwyNi4zMzE0MTA4LDI2Ljg3OTU4ODcgQzI2LjMzMTQxMDgsMjYuNDQ1MDMyIDI2LjM2MTk4MTIsMjYuMDExNTM2OCAyNi40ODY1MTk5LDI1LjcwMDQwODQgQzI2LjgyNjkzMiwyNC44MzIyNiAyNy42MDIwMDY5LDIzLjkzMzQyMzMgMjguOTAzMjY3NCwyMy45MzM0MjMzIEMzMC42MDgzMzgxLDIzLjkzMzQyMzMgMzEuMjg5OTE0OSwyNS4yNjY3MjAyIDMxLjI4OTkxNDksMjcuMjIwNjMzMyBMMzEuMjg5OTE0OSwzNC45OTk2MTQgTDM1Ljk5OTgxMTksMzQuOTk5NjE0IEwzNiwyNi42NjI3NDQ2IEMzNiwyMi4xOTY2NDM5IDMzLjY3NjM3NDMsMjAuMTE4MDQ3OSAzMC41NzY5MjEzLDIwLjExODA0NzkgWiBNMzAuNTc2OTIxMywyMC4xMTgwNDc5IiBpZD0iT3ZhbC0xIi8+PC9nPjwvZz48L3N2Zz4=" />
              <img
                class="form__icon"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI1MHB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjUwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGUvPjxkZWZzLz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIj48ZyBmaWxsPSIjMDAwMDAwIiBpZD0iVHdpdHRlciI+PHBhdGggZD0iTTI1LDUwIEMzOC44MDcxMTk0LDUwIDUwLDM4LjgwNzExOTQgNTAsMjUgQzUwLDExLjE5Mjg4MDYgMzguODA3MTE5NCwwIDI1LDAgQzExLjE5Mjg4MDYsMCAwLDExLjE5Mjg4MDYgMCwyNSBDMCwzOC44MDcxMTk0IDExLjE5Mjg4MDYsNTAgMjUsNTAgWiBNMjUsNDcgQzM3LjE1MDI2NTEsNDcgNDcsMzcuMTUwMjY1MSA0NywyNSBDNDcsMTIuODQ5NzM0OSAzNy4xNTAyNjUxLDMgMjUsMyBDMTIuODQ5NzM0OSwzIDMsMTIuODQ5NzM0OSAzLDI1IEMzLDM3LjE1MDI2NTEgMTIuODQ5NzM0OSw0NyAyNSw0NyBaIE0yNC42ODIyNTU0LDIwLjU1NDI5NzUgTDI0LjcyOTk0NCwyMS4zNzYxMDExIEwyMy45MzUxMzMzLDIxLjI3NTQ3MjEgQzIxLjA0MjAyMjUsMjAuODg5NzI3NSAxOC41MTQ1MjQ2LDE5LjU4MTU1MDQgMTYuMzY4NTM1OCwxNy4zODQ0ODM3IEwxNS4zMTkzODU3LDE2LjI5NDMzNjEgTDE1LjA0OTE1MDEsMTcuMDk5MzY4MSBDMTQuNDc2ODg2NCwxOC44OTM5MTg4IDE0Ljg0MjQ5OTMsMjAuNzg5MDk4NSAxNi4wMzQ3MTUzLDIyLjA2MzczMjYgQzE2LjY3MDU2MzgsMjIuNzY4MTM1NyAxNi41Mjc0OTc5LDIyLjg2ODc2NDcgMTUuNDMwNjU5MiwyMi40NDk0NzcyIEMxNS4wNDkxNTAxLDIyLjMxNTMwNTEgMTQuNzE1MzI5NiwyMi4yMTQ2NzYxIDE0LjY4MzUzNzEsMjIuMjY0OTkwNyBDMTQuNTcyMjYzNywyMi4zODIzOTEyIDE0Ljk1Mzc3MjgsMjMuOTA4NTk3OCAxNS4yNTU4MDA4LDI0LjUxMjM3MTkgQzE1LjY2OTEwMjQsMjUuMzUwOTQ3IDE2LjUxMTYwMTcsMjYuMTcyNzUwNSAxNy40MzM1ODIsMjYuNjU5MTI0MSBMMTguMjEyNDk2NSwyNy4wNDQ4Njg2IEwxNy4yOTA1MTYxLDI3LjA2MTY0MDEgQzE2LjQwMDMyODIsMjcuMDYxNjQwMSAxNi4zNjg1MzU4LDI3LjA3ODQxMTYgMTYuNDYzOTEzMSwyNy40MzA2MTMxIEMxNi43ODE4Mzc0LDI4LjUyMDc2MDggMTguMDM3NjM4MiwyOS42Nzc5OTQ0IDE5LjQzNjUwNSwzMC4xODExMzk0IEwyMC40MjIwNzAxLDMwLjUzMzM0MSBMMTkuNTYzNjc0NiwzMS4wNzAwMjkgQzE4LjI5MTk3NzYsMzEuODQxNTE4MSAxNi43OTc3MzM1LDMyLjI3NzU3NzIgMTUuMzAzNDg5NSwzMi4zMTExMjAyIEMxNC41ODgxNTk5LDMyLjMyNzg5MTYgMTQsMzIuMzk0OTc3NiAxNCwzMi40NDUyOTIyIEMxNCwzMi42MTMwMDcxIDE1LjkzOTMzOCwzMy41NTIyMTEzIDE3LjA2Nzk2OTIsMzMuOTIxMTg0MyBDMjAuNDUzODYyNiwzNS4wMTEzMzE5IDI0LjQ3NTYwNDYsMzQuNTQxNzI5OCAyNy40OTU4ODUxLDMyLjY4MDA5MzIgQzI5LjY0MTg3MzksMzEuMzU1MTQ0NSAzMS43ODc4NjI4LDI4LjcyMjAxODggMzIuNzg5MzI0MiwyNi4xNzI3NTA1IEMzMy4zMjk3OTU0LDI0LjgxNDI1ODkgMzMuODcwMjY2NywyMi4zMzIwNzY3IDMzLjg3MDI2NjcsMjEuMTQxMyBDMzMuODcwMjY2NywyMC4zNjk4MTEgMzMuOTE3OTU1MywyMC4yNjkxODIgMzQuODA4MTQzMiwxOS4zNDY3NDk0IEMzNS4zMzI3MTgzLDE4LjgxMDA2MTMgMzUuODI1NTAwOSwxOC4yMjMwNTg4IDM1LjkyMDg3ODIsMTguMDU1MzQzNyBDMzYuMDc5ODQwMywxNy43MzY2ODUyIDM2LjA2Mzk0NDIsMTcuNzM2Njg1MiAzNS4yNTMyMzczLDE4LjAyMTgwMDcgQzMzLjkwMjA1OTEsMTguNTI0OTQ1OCAzMy43MTEzMDQ1LDE4LjQ1Nzg1OTggMzQuMzc4OTQ1NSwxNy43MDMxNDIyIEMzNC44NzE3MjgxLDE3LjE2NjQ1NDEgMzUuNDU5ODg4LDE2LjE5MzcwNzEgMzUuNDU5ODg4LDE1LjkwODU5MTUgQzM1LjQ1OTg4OCwxNS44NTgyNzcgMzUuMjIxNDQ0OCwxNS45NDIxMzQ2IDM0Ljk1MTIwOTIsMTYuMDkzMDc4IEMzNC42NjUwNzczLDE2LjI2MDc5MzEgMzQuMDI5MjI4OCwxNi41MTIzNjU2IDMzLjU1MjM0MjQsMTYuNjYzMzA5MSBMMzIuNjkzOTQ2OSwxNi45NDg0MjQ2IEwzMS45MTUwMzI0LDE2LjM5NDk2NSBDMzEuNDg1ODM0NiwxNi4wOTMwNzggMzAuODgxNzc4NiwxNS43NTc2NDggMzAuNTYzODU0MywxNS42NTcwMTkgQzI5Ljc1MzE0NzQsMTUuNDIyMjE4IDI4LjUxMzI0MjgsMTUuNDU1NzYxIDI3Ljc4MjAxNjksMTUuNzI0MTA1IEMyNS43OTQ5OTAzLDE2LjQ3ODgyMjYgMjQuNTM5MTg5NCwxOC40MjQzMTY4IDI0LjY4MjI1NTQsMjAuNTU0Mjk3NSBDMjQuNjgyMjU1NCwyMC41NTQyOTc1IDI0LjUzOTE4OTQsMTguNDI0MzE2OCAyNC42ODIyNTU0LDIwLjU1NDI5NzUgWiBNMjQuNjgyMjU1NCwyMC41NTQyOTc1IiBpZD0iT3ZhbC0xIi8+PC9nPjwvZz48L3N2Zz4=" />
            </div>
            <span style={{ marginBottom: '10px' }}>Hoặc sử dụng tài khoản của bạn</span>
            <input style={{ marginBottom: '10px' }}
              type="text"
              className="input"
              placeholder="Tên đăng nhập" />
            <input style={{ marginBottom: '10px' }}
              type="email"
              value={email}
              id="email"
              className="input"
              onChange={onChange}
               placeholder="Email" />
            <input type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu"
              id="password"
              className="input"
              value={password}
              onChange={onChange} />

            <img
              src={visibilityIcon}
              alt="show password"
              className="showPassword"
              style={{ marginTop: '43%' }}
              onClick={() => setShowPassword((prevState) => !prevState)}
            />

            <a href="/forgot-password"  style={{  marginTop: '10px' }}className="forgotPasswordLink">
              Quên mật khẩu?
            </a>
            <a href="/sign-up" style={{ fontSize: '14px', marginTop: '15px', marginBottom: '10px', color: 'black' }}><i>Bạn đã có tài khoản?</i></a>
          <button style={{ marginBottom: '20px', minHeight: '50px', minWidth: '100px', background: '#f18720', borderRadius: "10px", fontSize: '16px' }} type="button"  onClick={onSubmit}>Đăng nhập</button>
          </form>
        </div>
    </div>
  );
}

export default SignIn;