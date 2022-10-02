import "../styles/Auto.css";

const Auto = () => {
  return (
    <div className="auto">
      <div className="auto1">
        <div>
          <img
            src="https://clockify.me/assets/images/time-tracking-app-desktop.png"
            width="500px"
          />
          <h3 className="desktop">DESKTOP APP</h3>
          <button className="sign">Window</button>
          <button className="sign">Mac</button>
          <button className="sign">Linux</button>
        </div>
        <div>
          <img
            src="https://clockify.me/assets/images/time-tracking-app-web.png"
            width="500px"
          />
          <h3 className="desktop">WEB APP</h3>
          <button className="sign">Window</button>
          <button className="sign">Mac</button>
          <button className="sign">Linux</button>
        </div>
      </div>
    </div>
  );
};
export default Auto;
