import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import "../components/Log.css";
import { Footer } from "../components/Footer";
import axios from "axios";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");
  const Daragc = async () => {
    await axios({
      url: `http://localhost:8000/login/`,
      method: "POST",
      data: {
        email: email,
        password: password,
      },
    }).then((res) => {
      console.log(res);
      if (
        res?.data == " You don't have any user account, please sign up " ||
        res?.data == "Invalid password or email"
      ) {
        alert("Invalid password or email");
      } else {
        localStorage.setItem("token", res?.data?.token);
        localStorage.setItem("name", res?.config?.data);
        window.location.href = "/";
      }
    });

    // if (password === result?.data?.config?.data?.password) {
    //   console.log("successfully logged in bro");
    //   navigate("/");
    // } else {
    //   console.log("incorrect password");
    // }
  };
  return (
    <div className="logdiv">
      <Link className="hh">
        <h2>Хэрхэн ажилладаг вэ?</h2>
      </Link>
      <Logo />
      <div className="ug">НЭВТРЭХ</div>
      <div className="bataa">
        <div>
          Цахим хаяг
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="name@mail.domain"
            className="input"
          />
        </div>
        <div className="holboos2">
          Нууц үг
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="••••••••••"
            className="input"
          />
        </div>
        <div className="check">
          <div className="check2">
            <input type="checkbox" /> Намайг сана
          </div>
          <div className="href">
            <a href="/forgotpassword">Нууц үгээ мартсан</a>
          </div>
        </div>
        <div className="nevtreh">
          <button
            onClick={() => Daragc()}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "23px",
              height: "43px",
              width: "383px",
              border: "1px solid #02B589",
              borderRadius: "50px",
              backgroundColor: "#02B589",
              color: "white",
            }}
          >
            {" "}
            НЭВТРЭХ
          </button>
        </div>
      </div>

      <a href="/signup" className="signup">
        Шинэ хэрэглэгч бол энд дарна уу?
      </a>
      <Footer />
    </div>
  );
};
