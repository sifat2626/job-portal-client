import { FaPenToSquare } from "react-icons/fa6";
import { formatDate } from "../../utils/utils";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query"; // Import for mutations

/* eslint-disable react/prop-types */
function MyJobsTableRow({ job }) {
  const queryClient = useQueryClient(); // Access query client for mutations

  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axios.delete(
          `${import.meta.env.VITE_API_URL}/jobs/${job._id}`,
          { withCredentials: true }
        );

        if (response.status === 200) {
          Swal.fire({
            title: "Deleted!",
            text: "Your job has been deleted.",
            icon: "success",
          });

          // Invalidate relevant queries:
          // - Consider invalidating the query that fetches the list of jobs
          //   to ensure it reflects the updated data after deletion.
          // - You might need to adjust this based on how your job list query
          //   is defined and used in your application.
          queryClient.invalidateQueries(["jobs"]);
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
