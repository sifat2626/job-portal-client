import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { formatDate } from "../../utils/utils";
import { FcStart } from "react-icons/fc";
import { FaHourglassStart } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";

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
    <div className="flex justify-between text-left border-2 p-4 rounded-lg border-job hover:scale-105 duration-300">
      <div className="">
        <h3 className="bg-job inline-block px-4 py-1 text-white rounded-3xl">
          {jobTitle}
        </h3>
        <h4 className="mt-2 font-semibold text-lg text-green-600 ml-2">
          {loggedInUser.userName}
        </h4>
        <div className="my-2 ml-2">
          <div className=" font-semibold text-gray-500  flex gap-2 items-center ">
            <span>
              <FcStart />
            </span>
            {formatDate(jobPostingDate)}
          </div>
          <div className="mt-0.5 font-semibold text-gray-500 flex gap-2 items-center">
            <FaHourglassStart /> {formatDate(applicationDeadline)}
          </div>
        </div>
        <div className="font-bold flex gap-2 items-center ml-2 text-lg">
          <span>
            <FaSackDollar className="text-yellow-600" />
          </span>
          <p className="text-orange-600">
            {min_salary} - {max_salary}
          </p>
        </div>
      </div>
      <div className=" flex flex-col justify-end">
        <div className="flex gap-2 items-center mb-2 text-lg">
          <MdPeopleAlt className="text-job" />
          <p className="text-gray-500 font-bold">{jobApplicantsNumber}</p>
        </div>
        <Link
          to={`/jobs/${_id}`}
          className="bg-job px-6 py-2 text-white font-bold rounded-lg"
          onClick={() => {
            !user && toast.error("You must login first to view full details");
          }}
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default JobByCategoryCard;
