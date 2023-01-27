import Bgn from "../link.png";
import Bogino from "../Boginoo.png";
import "../components/Log.css";

export const Logo = () => {
  return (
    <div className="bginodiv">
      <div className="img">
        <img
          style={{
            width: "50px",
            height: "30px",
          }}
          src={Bgn}
        />
      </div>
      <div className="imag">
        <img
          style={{
            width: "200px",
            height: "70px",
          }}
          src={Bogino}
        />
      </div>
    </div>
  );
};
