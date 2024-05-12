import { formatDate } from "../../utils/utils";
import { Link } from "react-router-dom";
// Import for mutations

/* eslint-disable react/prop-types */
function AppliedJobsTableRow({ job }) {
  const {
    _id,
    jobTitle,
    // jobBannerURL,
    jobCategory,
    jobDescription,
    min_salary,
    max_salary,
    jobPostingDate,
    applicationDeadline,
  } = job;

  return (
    <tr>
      <td></td>
      <td>{jobTitle}</td>
      <td>{jobCategory}</td>
      <td>{jobDescription.substring(0, 8)}...</td>
      <td>{formatDate(jobPostingDate)}</td>
      <td>{formatDate(applicationDeadline)}</td>
      <td>
        $ {min_salary} - {max_salary}
      </td>

      <td>
        <Link to={`/jobs/${_id}`}>Details</Link>
      </td>
    </tr>
  );
}

export default AppliedJobsTableRow;
