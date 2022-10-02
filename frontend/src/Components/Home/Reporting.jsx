import "../styles/Reporting.css";

const Reporting = () => {
  return (
    <div className="keep">
      <div className="avatar">
        <img src="https://clockify.me/assets/images/feature-time-reporting-activity.svg" />
      </div>

      <div className="text">
        <div className="bold">
          <h4 className="black">Reports </h4>
          <p className="lightBlack">Analyze and export tracked time.</p>
        </div>
        {/* <br/> */}
        <div className="bold">
          <h4 className="black">Activity </h4>
          <p className="lightBlack">See who works on what.</p>
        </div>
        <div className="bold">
          <h4 className="black">Rates</h4>
          <p className="lightBlack">See earnings, cost, and profit.</p>
        </div>

        <div className="bold">
          <h4 className="black">Progress</h4>
          <p className="lightBlack">Track project estimates and budget.</p>
        </div>

        <div className="bold">
          <h4 className="black">Location</h4>
          <p className="lightBlack">See visited sites and routes.</p>
        </div>
      </div>
    </div>
  );
};
export default Reporting;
