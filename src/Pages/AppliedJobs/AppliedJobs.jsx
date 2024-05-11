import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

function AppliedJobs() {
  const { user } = useContext(AuthContext);
  const [appliedJobs, setAppliedJobs] = useState([]);

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
    <div>
      <h2>AppliedJobs: {appliedJobs.length}</h2>
    </div>
  );
}

export default AppliedJobs;
