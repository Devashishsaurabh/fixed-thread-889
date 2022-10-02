import "../styles/Button.css";

const Button = () => {
  return (
    <div>
      <button className="startup">start tracking time-it's free!</button>
      <div className="people">
        <img
          src="https://clockify.me/assets/images/signed-up-icon.svg"
          width="20px"
        />
        <p className="up">146,057 people signed up last month</p>
      </div>
    </div>
  );
};
export default Button;
