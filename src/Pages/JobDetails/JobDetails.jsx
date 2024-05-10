import { useLoaderData } from "react-router-dom";
import ResumeModal from "../../components/ResumeModal/ResumeModal";

function JobDetails() {
  const { job } = useLoaderData();
  const {
    _id,
    jobTitle,
    jobBannerURL,
    loggedInUser,
    jobCategory,
    min_salary,
    max_salary,
    jobDescription,
    jobPostingDate,
    applicationDeadline,
    jobApplicantsNumber,
  } = job;
  console.log(job);
  return (
    <div>
      <h2>Details</h2>
      <div className="">
        <img src={jobBannerURL} alt="" />
      </div>
      <div className="">
        <h3>{jobTitle}</h3>
        <p>{jobDescription}</p>
        <p>
          {min_salary} - {max_salary}
        </p>
        <p>No. of Applicants: {jobApplicantsNumber}</p>
        {/* The button to open modal */}
        <ResumeModal id={_id} />
      </div>
    </div>
  );
}

export default JobDetails;
