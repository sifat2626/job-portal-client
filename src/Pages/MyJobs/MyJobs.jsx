import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyJobsTableRow from "../../components/MyJobsTableRow/MyJobsTableRow";

function MyJobs() {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const getData = async () => {
    const result = await axios.get(
      `${import.meta.env.VITE_API_URL}/jobs/email/${user.email}`,
      {
        withCredentials: true,
      }
    );
    setJobs(result.data.jobs);
    console.log(result.data.jobs);
  };
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
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
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <MyJobsTableRow key={job._id} job={job} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyJobs;
