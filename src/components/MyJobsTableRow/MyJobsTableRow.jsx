import { FaPenToSquare } from "react-icons/fa6";
import { formatDate } from "../../utils/utils";
import { MdDelete } from "react-icons/md";

/* eslint-disable react/prop-types */
function MyJobsTableRow({ job }) {
  const {
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
        <FaPenToSquare />
      </td>
      <td>
        <MdDelete />
      </td>
    </tr>
  );
}

export default MyJobsTableRow;
