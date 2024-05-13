import axios from "axios";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobByCategoryCard from "../../components/JobByCategoryCard/JobByCategoryCard";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

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
        <h3 className="text-4xl font-bold bg-job dark:bg-green-700 text-white py-16">
          Explore Types of jobs
        </h3>
      </div>
      <Tabs className={"max-w-6xl mx-auto px-2"}>
        <TabList
          className={
            "bg-white dark:bg-gray-700 max-w-2xl shadow-md mx-auto py-4 rounded-lg mb-8 flex justify-evenly"
          }
        >
          <Tab
            className={
              "border-job text-sm md:text-base dark:text-white border-2 cursor-pointer px-2 md:px-4 py-2 rounded-lg"
            }
          >
            On Site
          </Tab>
          <Tab
            className={
              "border-job text-sm md:text-base dark:text-white border-2 cursor-pointer px-4 py-2 rounded-lg"
            }
          >
            Remote
          </Tab>
          <Tab
            className={
              "border-job text-sm md:text-base dark:text-white border-2 cursor-pointer px-4 py-2 rounded-lg"
            }
          >
            Part-Time
          </Tab>
          <Tab
            className={
              "border-job text-sm md:text-base dark:text-white border-2 cursor-pointer px-4 py-2 rounded-lg"
            }
          >
            Hybrid
          </Tab>
          <Tab
            className={
              "border-job text-sm md:text-base dark:text-white border-2 cursor-pointer px-4 py-2 rounded-lg"
            }
          >
            All Jobs
          </Tab>
        </TabList>

        <TabPanel>
          <Fade direction="left">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
              {jobs
                .filter((job) => job.jobCategory === "On Site")
                .map((filteredJob) => (
                  <JobByCategoryCard key={filteredJob._id} job={filteredJob} />
                ))}
            </div>
          </Fade>
        </TabPanel>
        <TabPanel>
          <Fade direction="up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
              {jobs
                .filter((job) => job.jobCategory === "Remote")
                .map((filteredJob) => (
                  <JobByCategoryCard key={filteredJob._id} job={filteredJob} />
                ))}
            </div>
          </Fade>
        </TabPanel>
        <TabPanel>
          <Fade direction="right">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
              {jobs
                .filter((job) => job.jobCategory === "Part Time")
                .map((filteredJob) => (
                  <JobByCategoryCard key={filteredJob._id} job={filteredJob} />
                ))}
            </div>
          </Fade>
        </TabPanel>
        <TabPanel>
          <Fade direction="down">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
              {jobs
                .filter((job) => job.jobCategory === "Hybrid")
                .map((filteredJob) => (
                  <JobByCategoryCard key={filteredJob._id} job={filteredJob} />
                ))}
            </div>
          </Fade>
        </TabPanel>
        <TabPanel>
          <Fade direction="right">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
              {jobs.slice(0, 5).map((filteredJob) => (
                <JobByCategoryCard key={filteredJob._id} job={filteredJob} />
              ))}
              {jobs.length > 5 && (
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
          </Fade>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default JobByCategory;
