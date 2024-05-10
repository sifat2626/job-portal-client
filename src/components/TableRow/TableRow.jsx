/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function TableRow({ job, index }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const {
    jobTitle,
    jobPostingDate,
    applicationDeadline,
    min_salary,
    max_salary,
  } = job;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{jobTitle}</td>
      <td>{formatDate(jobPostingDate)}</td>
      <td>{formatDate(applicationDeadline)}</td>
      <td>
        ${min_salary} - {max_salary}
      </td>
      <td>
        <Link>Details</Link>
      </td>
    </tr>
  );
}

export default TableRow;
