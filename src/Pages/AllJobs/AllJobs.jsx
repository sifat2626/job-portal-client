import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import TableRow from "../../components/TableRow/TableRow";

function AllJobs() {
  const { jobs } = useLoaderData();
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // Fetch jobs initially when component mounts
    setFilteredJobs(jobs);
  }, [jobs]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/jobs?query=${searchText}`
      );
      setFilteredJobs(response.data.jobs);
    } catch (error) {
      console.error("Error searching jobs:", error);
    }
  };

  return (
    <div className="">
      <div className="mb-8">
        <form
          className="flex max-w-md mx-auto gap-2"
          action=""
          onSubmit={(e) => handleSearch(e)}
        >
          <input
            type="text"
            name="search"
            placeholder="Type here"
            className="input input-bordered  w-full max-w-xs"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="px-4 py-2 bg-green-400 rounded-lg font-medium text-white">
            Search
          </button>
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Posting Date</th>
              <th>Deadline</th>
              <th>Salary range</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job, i) => (
              <TableRow key={job._id} job={job} index={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllJobs;
