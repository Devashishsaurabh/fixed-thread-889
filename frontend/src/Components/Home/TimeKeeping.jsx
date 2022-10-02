import "../styles/TimeKeeping.css";

const TimeKeeping = () => {
  return (
    <div className="keep">
      <div className="text">
        <div className="bold">
          <h4 className="black">Timer</h4>
          <p className="lightBlack">Track work hours in real time.</p>
        </div>
        <div className="bold">
          <h4 className="black">Timesheet</h4>
          <p className="lightBlack">Enter time in a weekly timesheet.</p>
        </div>
        <div className="bold">
          <h4 className="black">Calender</h4>
          <p className="lightBlack">Visually block out and manage time.</p>
        </div>

        <div className="bold">
          <h4 className="black">Auto tracker</h4>
          <p className="lightBlack">Track apps and websites you see.</p>
        </div>

        <div className="bold">
          <h4 className="black">Kiosk</h4>
          <p className="lightBlack">Clock in from a shared device.</p>
        </div>
      </div>
      <div className="avatar">
        <img src="https://clockify.me/assets/images/feature-time-tracker-methods.svg" />
      </div>
    </div>
  );
};
export default TimeKeeping;
