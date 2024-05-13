import { useLoaderData, useParams } from "react-router-dom";
import ResumeModal from "../../components/ResumeModal/ResumeModal";
import { formatDate } from "../../utils/utils";
import axios from "axios";
import { useEffect, useState } from "react";

function JobDetails() {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    setLoading(true);
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/jobs/${id}`,
      {
        withCredentials: true,
      }
    );
    setJob(response.data.job);
    setLoading(false);
  };

  if (loading) return <span className="loading loading-dots loading-lg"></span>;
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
    <div className="max-w-lg mx-auto bg-green-50 p-8 rounded-xl mt-16">
      <h2 className="text-center text-job font-bold text-3xl">Job Details</h2>
      <div className="py-8">
        <img src={jobBannerURL} alt="" className="h-64 w-full rounded-3xl" />
      </div>
      <div className="">
        <h3 className="text-lg bg-job px-6 py-2 inline-block text-white rounded-3xl font-bold">
          {jobTitle}
        </h3>
        <h5 className="font-bold mt-4 text-xl text-black/70">
          Job Offered by:{" "}
          <span className="text-green-600">{loggedInUser.userName}</span>
        </h5>
        <div className="mt-2 text-gray-400 font-bold">
          <p>
            Job Posted On:{"   "}
            <span className="text-job">{formatDate(jobPostingDate)}</span>
          </p>
          <p>
            Application Deadline:{"  "}
            <span className="text-red-400">
              {formatDate(applicationDeadline)}
            </span>
          </p>
        </div>
        <h3 className="mt-2 font-medium text-lg text-black/70">
          Job Type:{" "}
          <span className="font-bold text-green-600">{jobCategory}</span>
        </h3>
        <p className="font-bold mt-4 text-lg text-black/70">
          Job Description: <span className="font-medium">{jobDescription}</span>
        </p>
        <p className="font-bold mt-4 text-lg text-black/70">
          Salary Range: ${min_salary} - {max_salary}
        </p>
        <p className="font-bold mt-4 text-lg text-black/70">
          No. of Applicants:{" "}
          <span className="text-green-600">{jobApplicantsNumber}</span>
        </p>
        {/* The button to open modal */}
        <ResumeModal id={_id} job={job} setJob={setJob} />
      </div>
    </div>
  );
}

export default JobDetails;
