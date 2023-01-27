import "../components/Log.css";
import { Logo } from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import axios from "axios";
import { useState } from "react";

export const Signup = () => {
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate("");
  const Daragch = () => {
    if (password === passwordRepeat) {
      axios.post("http://localhost:8000/signup", {
        password: password,
        email: email,
      });
      navigate("/login");
    } else {
      alert("incorrect password");
    }
  };

  return (
    <div className="signdiv">
      <div>
        <Link className="hh">
          <h2>Хэрхэн ажилладаг вэ?</h2>
        </Link>
      </div>
      <div className="bataa">
        <Logo />
        <div className="ug">Бүртгүүлэх</div>
        <div className="holboos">Цахим хаяг</div>

        <div className="hha">
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
        <div className="holboos2">
          Нууц үгээ давтана уу?
          <input
            onChange={(e) => setPasswordRepeat(e.target.value)}
            type="password"
            placeholder="••••••••••"
            className="input"
          />
        </div>

        <div className="nevtreh">
          <button
            onClick={() => Daragch()}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "43px",
              width: "383px",
              border: "1px solid #02B589",
              borderRadius: "50px",
              backgroundColor: "#02B589",
              color: "white",
              textTransform: "uppercase",
            }}
          >
            {" "}
            Бүртгүүлэх
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
