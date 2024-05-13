import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import AppliedJobsTablerow from "../../components/AppliedJobsTableRow/AppliedJobsTablerow";

function AppliedJobs() {
  const { user } = useContext(AuthContext);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const category = e.target.value;
    if (category === "") {
      setFilteredJobs(appliedJobs);
    } else {
      const newJobs = appliedJobs.filter((job) => job.jobCategory === category);
      setFilteredJobs(newJobs);
    }
  };

  const fetchData = async () => {
    try {
      const result = await axios.get(
        `${import.meta.env.VITE_API_URL}/jobs/apply/${user.email}`,
        { withCredentials: true }
      );
      setAppliedJobs(result.data.jobs);
      setFilteredJobs(result.data.jobs); // Default to all jobs
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClearFilter = () => {
    setFilteredJobs(appliedJobs); // Reset filter
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mt-8 pb-16">
      <h2 className="text-center text-job text-3xl font-bold mt-8 mb-8">
        Applied Jobs
      </h2>
      <div className=" mb-8">
        <form onSubmit={handleSubmit} className=" flex flex-col items-center">
          <h2 className="text-lg mb-4 font-semibold">Select Category</h2>
          <div className="flex gap-2 w-2/3 lg:w-1/3 justify-center">
            <div className="w-full">
              <select
                name="category"
                onChange={(e) => handleSubmit(e)}
                className="select select-bordered w-full"
              >
                <option value="">All</option>
                <option value="On Site">On Site</option>
                <option value="Remote">Remote</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <button
              type="button"
              onClick={handleClearFilter}
              className="btn bg-red-400 text-white font-semibold text-lg"
            >
              Clear Filter
            </button>
          </div>
        </form>
      </div>
      <div className="overflow-x-auto font-semibold">
        <table className="table table-zebra">
          {/* Table header */}
          <thead>
            <tr className="dark:text-gray-400">
              <th></th>
              <th>Title</th>
              <th>Category</th>
              <th>Description</th>
              <th>Posted On</th>
              <th>Deadline</th>
              <th>Salary Range</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Table rows */}
            {filteredJobs.map((job, i) => (
              <AppliedJobsTablerow key={job._id} job={job} index={i + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AppliedJobs;
