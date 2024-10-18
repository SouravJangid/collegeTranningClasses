import PropTypes from "prop-types";

function Employee(props) {
  // Calculate total salary
  const totalSalary = props.data.reduce((sum, employee) => sum + employee.salary, 0);

  return (
    <>
      <h1>Employee Details</h1>
      {props.data.map((employee, index) => (
        <div key={index}>
          <h4>Name: {employee.name}</h4>
          <p>Position: {employee.position}</p>
          <p>Salary: {employee.salary}</p>
          {/* Ensure isMarried has a default value of false if undefined */}
          <p>Married: {(employee.isMarried ?? false).toString()}</p>
          <hr />
        </div>
      ))}
      <h1>Total Salary: {totalSalary}</h1>
    </>
  );
}

Employee.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      salary: PropTypes.number.isRequired,
      isMarried: PropTypes.bool,
    })
  ).isRequired,
};

Employee.defaultProps = {
  data: [],
};

export default Employee;
