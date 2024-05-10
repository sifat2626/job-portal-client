import { useLoaderData } from "react-router-dom";
import TableRow from "../../components/TableRow/TableRow";

function AllJobs() {
  const { jobs } = useLoaderData();
  console.log(jobs);
  return (
    <div className="">
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
            {jobs.map((job, i) => (
              <TableRow key={job._id} job={job} index={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllJobs;
