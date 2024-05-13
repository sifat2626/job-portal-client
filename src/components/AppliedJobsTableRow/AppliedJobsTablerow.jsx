/* eslint-disable no-unused-vars */
import { PDFDownloadLink } from "@react-pdf/renderer";
import { formatDate } from "../../utils/utils";
import { Link } from "react-router-dom";
import MyDocument from "../Pdf/MyDocument";
// Import for mutations

/* eslint-disable react/prop-types */
function AppliedJobsTableRow({ job }) {
  const {
    _id,
    jobTitle,
    // jobBannerURL,
    jobCategory,
    jobDescription,
    min_salary,
    max_salary,
    jobPostingDate,
    applicationDeadline,
  } = job;

  return (
    <tr>
      <td></td>
      <td>{jobTitle}</td>
      <td>{jobCategory}</td>
      <td>{jobDescription.substring(0, 8)}...</td>
      <td>{formatDate(jobPostingDate)}</td>
      <td>{formatDate(applicationDeadline)}</td>
      <td>
        $ {min_salary} - {max_salary}
      </td>
      <td>
        <PDFDownloadLink
          document={<MyDocument />}
          fileName="job.pdf"
          className="bg-job text-white px-6 py-2 font-bold rounded-lg"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download"
          }
        </PDFDownloadLink>
      </td>

      <td>
        <Link
          to={`/jobs/${_id}`}
          className="bg-job text-white px-6 py-2 font-bold rounded-lg"
        >
          Details
        </Link>
      </td>
    </tr>
  );
}

export default AppliedJobsTableRow;
