import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
function UpdateJob() {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(useLoaderData().jobPostingDate);
  const [deadLine, setDeadLine] = useState(useLoaderData().applicationDeadline);
  const [job, setJob] = useState(useLoaderData());

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = e.target;
      const title = form.title.value;
      const photo = form.photo.value;
      const category = form.category.value;
      const description = form.description.value;
      const min_salary = form.min_salary.value;
      const max_salary = form.max_salary.value;
      console.log(category);

      const jobData = {
        jobTitle: title,
        jobBannerURL: photo,
        jobCategory: category,
        jobDescription: description,
        min_salary,
        max_salary,
        jobPostingDate: startDate,
        applicationDeadline: deadLine,
        loggedInUser: {
          userName: user.displayName,
          email: user.email,
        },
      };

      if (deadLine < startDate) {
        return toast.error("DeadLine should be after Start date");
      }

      // console.log(JSON.stringify(jobData));

      const result = await axios.patch(
        `${import.meta.env.VITE_API_URL}/jobs/${job._id}`,
        jobData,
        {
          withCredentials: true,
        }
      );
      console.log(result);
      if (result.status === 200) {
        toast.success("Job Updated Successfully");
        // setStartDate(new Date());
        // setDeadLine(new Date());
        setJob({ ...job, jobData });
      } else {
        throw new Error(result.statusText);
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };
  return (
    <div className="">
      <h2 className="text-2xl text-job font-bold text-center mb-8">
        Update Job
      </h2>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="card-body border-job border-4 custom-container md:w-2/3 lg:w-1/3 rounded-xl text-lg font-semibold"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-gray-400 text-lg font-semibold">
              Title
            </span>
          </label>
          <input
            type="text"
            defaultValue={job.jobTitle}
            name="title"
            className="input input-bordered font-semibold"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-gray-400 ">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="photo"
            defaultValue={job.jobBannerURL}
            name="photo"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="" className="mb-2">
            Category
          </label>
          <select
            name="category"
            defaultValue={job.jobCategory}
            className="select select-bordered w-full "
          >
            <option value={"On Site"}>On Site</option>
            <option value={"Remote"}>Remote</option>
            <option value={"Part-Time"}>Part-Time</option>
            <option value={"Hybrid"}>Hybrid</option>
          </select>
        </div>

        <div className="flex gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-gray-400">Min Salary</span>
            </label>
            <input
              type="number"
              placeholder="min. salary"
              defaultValue={job.min_salary}
              name="min_salary"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-gray-400">Max Salary</span>
            </label>
            <input
              type="number"
              placeholder="max. salary"
              defaultValue={job.max_salary}
              name="max_salary"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text dark:text-gray-400">Description</span>
          </label>
          <input
            type="text"
            placeholder="description"
            defaultValue={job.jobDescription}
            name="description"
            className="input input-bordered"
            required
          />
        </div>
        <div className="flex gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-gray-400">
                Posting Date
              </span>
            </label>
            <DatePicker
              selected={startDate}
              defaultValue={job.jobPostingDate}
              showIcon
              toggleCalendarOnIconClick
              className="w-full ml-2 -mt-1"
              dateFormat="dd/MM/yyyy"
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-gray-400">Deadline</span>
            </label>
            <DatePicker
              showIcon
              toggleCalendarOnIconClick
              dateFormat="dd/MM/yyyy"
              className="w-full ml-2 -mt-1"
              defaultValue={job.applicationDeadline}
              minDate={startDate}
              selected={deadLine}
              onChange={(date) => setDeadLine(date)}
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-job text-white text-lg font-semibold">
            Update Job
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateJob;
