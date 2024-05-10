import { FaPenToSquare } from "react-icons/fa6";
import { formatDate } from "../../utils/utils";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

/* eslint-disable react/prop-types */
function MyJobsTableRow({ job }) {
  const handleDelete = async () => {
    console.log("delete");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const result = axios.delete(
          `${import.meta.env.VITE_API_URL}/jobs/${job._id}`,
          { withCredentials: true }
        );

        if (result.status === 200) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

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
        <Link to={`/update-job/${_id}`}>
          <FaPenToSquare />
        </Link>
      </td>
      <td>
        <button onClick={handleDelete}>
          <MdDelete />
        </button>
      </td>
    </tr>
  );
}

export default MyJobsTableRow;
