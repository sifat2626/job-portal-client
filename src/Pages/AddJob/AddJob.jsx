import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
function AddJob() {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const [deadLine, setdeadLine] = useState(new Date());

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

      const result = await axios.post(
        `${import.meta.env.VITE_API_URL}/jobs`,
        jobData,
        {
          withCredentials: true,
        }
      );
      if (result.status === 201) {
        toast.success("Job Created Successfully");
        form.reset();
        setStartDate(new Date());
        setdeadLine(new Date());
      } else {
        throw new Error(result.statusText);
      }
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
    }
  };
  return (
    <div className="">
      <h2 className="text-2xl text-job font-bold text-center mb-8">
        Add a Job
      </h2>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="card-body border-job border-4 custom-container md:w-2/3 lg:w-1/3 rounded-xl text-lg font-semibold"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            placeholder="Job Title"
            name="title"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="photo"
            name="photo"
            className="input input-bordered"
            required
          />
        </div>
        <label htmlFor="">Category</label>
        <select name="category" className="select select-bordered w-full">
          <option value={"On Site"}>On Site</option>
          <option value={"Remote"}>Remote</option>
          <option value={"Part-Time"}>Part-Time</option>
          <option value={"Hybrid"}>Hybrid</option>
        </select>
        <div className="flex gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Min Salary</span>
            </label>
            <input
              type="number"
              placeholder="min. salary"
              name="min_salary"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Max Salary</span>
            </label>
            <input
              type="number"
              placeholder="max. salary"
              name="max_salary"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            placeholder="description"
            name="description"
            className="input input-bordered"
            required
          />
        </div>
        <div className="flex gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Posting Date</span>
            </label>
            <DatePicker
              selected={startDate}
              showIcon
              toggleCalendarOnIconClick
              className="w-full ml-2 -mt-1"
              dateFormat="dd/MM/yyyy"
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <DatePicker
              showIcon
              toggleCalendarOnIconClick
              className="w-full ml-2 -mt-1"
              dateFormat="dd/MM/yyyy"
              minDate={startDate}
              selected={deadLine}
              onChange={(date) => setdeadLine(date)}
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-job text-white text-lg font-semibold">
            Add Job
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddJob;
