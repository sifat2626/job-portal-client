import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import AppliedJobsTablerow from "../../components/AppliedJobsTableRow/AppliedJobsTablerow";

function AppliedJobs() {
  const { user } = useContext(AuthContext);
  const [appliedJobs, setAppliedJobs] = useState([]);
  console.log(appliedJobs);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await axios(
      `${import.meta.env.VITE_API_URL}/jobs/apply/${user.email}`,
      { withCredentials: true }
    );
    setAppliedJobs(result.data.jobs);
  };

  console.log(appliedJobs);
  return (
    <div className="mt-8">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
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
            {/* row 1 */}
            {appliedJobs.map((job, i) => (
              <AppliedJobsTablerow key={job._id} job={job} index={i + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AppliedJobs;
