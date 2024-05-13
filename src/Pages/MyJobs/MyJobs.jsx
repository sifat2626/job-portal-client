import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyJobsTableRow from "../../components/MyJobsTableRow/MyJobsTableRow";
import { useQuery } from "@tanstack/react-query";

function MyJobs() {
  const {
    isLoading,
    data: jobs = [],
    refetch,
    isError,
    error,
  } = useQuery({
    queryFn: () => getData(),
    queryKey: ["my-jobs"],
  });

  const { user } = useContext(AuthContext);
  const getData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/jobs/email/${user.email}`,
      {
        withCredentials: true,
      }
    );
    return data.jobs;
  };

  return (
    <div className="pb-16">
      <h2 className="text-3xl text-job font-bold text-center mb-8 mt-8">
        My Jobs
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="dark:text-gray-400">
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
