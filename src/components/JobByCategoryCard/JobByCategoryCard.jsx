import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

/* eslint-disable react/prop-types */
function JobByCategoryCard({ job }) {
  const { user } = useContext(AuthContext);
  const {
    _id,
    loggedInUser,
    jobTitle,
    applicationDeadline,
    jobPostingDate,
    jobApplicantsNumber,
    max_salary,
    min_salary,
  } = job;
  console.log(job);
  return (
    <div className="text-left border-2 p-4 ">
      <h3>{jobTitle}</h3>
      <h4>Job Offer From: {loggedInUser.userName}</h4>
      <p>Publish date: {jobPostingDate}</p>
      <p>Deadline date: {applicationDeadline}</p>
      <p>
        Salary range: $ {min_salary} - {max_salary}
      </p>
      <p>{jobApplicantsNumber} persons applied</p>
      <Link
        to={`/jobs/${_id}`}
        onClick={() => {
          !user && toast.error("You must login first to view full details");
        }}
      >
        Details
      </Link>
    </div>
  );
}

export default JobByCategoryCard;
