import "../styles/Os.css";

const Os = () => {
  return (
    <div className="os">
      <div className="auto1">
        <div>
          <img
            src="https://clockify.me/assets/images/time-tracking-app-mobile.png"
            width="500px"
          />
          <p>MOBILE APP</p>
          <button className="sign">Android</button>
          <button className="sign">iOS</button>
        </div>
        <div>
          <img
            src="https://clockify.me/assets/images/time-tracking-app-kiosk.png"
            width="500px"
          />
          <p>KIOSK APP</p>
          <button className="sign">Any device</button>
        </div>
      </div>
    </div>
  );
};
export default Os;
