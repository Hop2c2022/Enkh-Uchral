import { Footer } from "./Footer";
import { Logo } from "./Logo";
import "./Log.css";

export const HomePage = () => {
  return (
    <div className="container">
      <div>
        <Logo />
      </div>
      <div className="hihuurhnu">
        <div className="intn">
          <input
            type="text"
            placeholder="https://www.web-huudas.mn"
            className="inp"
          />
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "15px",
              height: "44px",
              border: "1px solid #02B589",
              borderRadius: "50px",
              backgroundColor: "#02B589",
              color: "white",
            }}
          >
            БОГИНОСГОХ
          </button>
        </div>
        <div className="history">түүх</div>
      </div>

      <div className="ftr">
        <Footer />
      </div>
    </div>
  );
};
