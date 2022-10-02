const Approval = () => {
  return (
    <div className="keep">
      <div className="text">
        <div className="bold">
          <p className="black">Scheduling </p>
          <p className="lightBlack">Schedule work, assignments, and shifts.</p>
        </div>
        {/* <br/> */}
        <div className="bold">
          <p className="black">Time Off</p>
          <p className="lightBlack">Manage leaves and holidays.</p>
        </div>
        <div className="bold">
          <p className="black">Approval</p>
          <p className="lightBlack">Submit and approve timesheets.</p>
        </div>

        <div className="bold">
          <p className="black">Invoicing</p>
          <p className="lightBlack">Create invoices from billable time.</p>
        </div>

        <div className="bold">
          <p className="black">Expenses</p>
          <p className="lightBlack">Record project expenses and fees.</p>
        </div>
      </div>
      <div className="avatar">
        <img src="https://clockify.me/assets/images/feature-team-scheduling.svg" />
      </div>
    </div>
  );
};
export default Approval;
