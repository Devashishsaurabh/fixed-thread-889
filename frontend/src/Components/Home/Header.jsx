import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header_box">
      <h1 className="most">The most popular free time tracker for teams</h1>
      <p className="track">
        Time tracking software used by millions. Clockify is a time tracker and
        <br />
        timesheet app that lets you track work hours across projects.
        <br />
        Unlimited users, free forever.
      </p>
      <div className="review">
        <img
          src="https://clockify.me/assets/images/stars-small.svg"
          width="80px"
        />
        <p className="star">4,000+ Reviews</p>
      </div>
    </div>
  );
};
export default Header;
