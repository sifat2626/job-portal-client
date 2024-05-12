import axios from "axios";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobByCategoryCard from "../../components/JobByCategoryCard/JobByCategoryCard";
import { Link } from "react-router-dom";

function JobByCategory() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await axios(`${import.meta.env.VITE_API_URL}/jobs`);
    setJobs(res.data.jobs);
  };
  return (
    <div className="text-center">
      <div className="mb-8">
        <h3 className="text-4xl font-bold bg-job text-white py-16">
          Explore Types of jobs
        </h3>
      </div>
      <Tabs className={"p-8"}>
        <TabList>
          <Tab>On Site</Tab>
          <Tab>Remote</Tab>
          <Tab>Part-Time</Tab>
          <Tab>Hybrid</Tab>
          <Tab>All Jobs</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
            {jobs
              .filter((job) => job.jobCategory === "On Site")
              .map((filteredJob) => (
                <JobByCategoryCard key={filteredJob._id} job={filteredJob} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
            {jobs
              .filter((job) => job.jobCategory === "Remote")
              .map((filteredJob) => (
                <JobByCategoryCard key={filteredJob._id} job={filteredJob} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
            {jobs
              .filter((job) => job.jobCategory === "Part Time")
              .map((filteredJob) => (
                <JobByCategoryCard key={filteredJob._id} job={filteredJob} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
            {jobs
              .filter((job) => job.jobCategory === "Hybrid")
              .map((filteredJob) => (
                <JobByCategoryCard key={filteredJob._id} job={filteredJob} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
            {jobs.slice(0, 7).map((filteredJob) => (
              <JobByCategoryCard key={filteredJob._id} job={filteredJob} />
            ))}
            {jobs.length > 7 && (
              <div className="flex items-center justify-center ">
                <Link
                  to="/all-jobs"
                  className="px-4 py-2 bg-green-400 font-medium text-white rounded-lg"
                >
                  View More...
                </Link>
              </div>
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default JobByCategory;
