/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/utils";

function TableRow({ job, index }) {
  const {
    _id,
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
        <Link
          to={`/jobs/${_id}`}
          className="bg-green-400 text-white font-medium px-4 py-2 rounded-lg"
        >
          Details
        </Link>
      </td>
    </tr>
  );
}

export default TableRow;
