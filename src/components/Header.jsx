import { Link } from "react-router-dom";
import "../components/Log.css";

export const Header = () => {
  return (
    <div className="headdiv">
      <div className="hhh">
        <Link className="hh">
          <h2>Хэрхэн ажилладаг вэ?</h2>
        </Link>
        <a href="/login" className="log">
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "23px",
              height: "23px",
              width: "93px",
              border: "1px solid #02B589",
              borderRadius: "50px",
              backgroundColor: "#02B589",
              color: "white",
            }}
          >
            {" "}
            НЭВТРЭХ
          </button>
        </a>
      </div>
    </div>
  );
};