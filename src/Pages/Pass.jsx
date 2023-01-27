import "../components/Log.css";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { Footer } from "../components/Footer";

export const Pass = () => {
  return (
    <div className="pwdiv">
      <Link className="hh">
        <h2>Хэрхэн ажилладаг вэ?</h2>
      </Link>
      <Logo />
      <div className="nuuts">Нууц үг сэргээх</div>
      <div className="nuutsug">
        Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.
      </div>
      <div className="bataa">
        <div className="holboos">
          Цахим хаяг
          <input type="text" placeholder="name@mail.domain" className="input" />
        </div>
        <div className="ilgeeh">
          <button
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
              textTransform: "uppercase",
            }}
          >
            {" "}
            Илгээх
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
