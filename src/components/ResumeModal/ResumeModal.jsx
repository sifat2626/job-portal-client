/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

function ResumeModal({ id, job, setJob }) {
  const { user } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = e.target;
      const resume = form.resume.value;
      if (job.applicationDeadline > Date.now()) {
        return toast.error("Deadline is over!");
      }
      const applyData = {
        jobId: id,
        username: user.displayName,
        email: user.email,
        resumeURL: resume,
      };
      console.log(applyData);
      const result = await axios.post(
        `${import.meta.env.VITE_API_URL}/jobs/apply`,
        applyData,
        {
          withCredentials: true,
        }
      );
      if (result.status === 201) {
        toast.success("successfully applied");
        setJob((job) => ({
          ...job,
          jobApplicantsNumber: job.jobApplicantsNumber + 1,
        }));
      } else {
        toast.error("something went wrong!");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };
  return (
    <>
      <label
        htmlFor="my_modal_7"
        className="btn bg-job text-white font-bold text-xl mt-4"
      >
        Apply
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <form onSubmit={(e) => handleSubmit(e)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                defaultValue={user.displayName}
                name="name"
                disabled
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                defaultValue={user.email}
                name="email"
                disabled
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Resume URL</span>
              </label>
              <input
                type="text"
                placeholder="Resume URL"
                name="resume"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Apply</button>
            </div>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
}

export default ResumeModal;
