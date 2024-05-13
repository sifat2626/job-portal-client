import Banner from "../../shared/Banner/Banner";
import Count from "../../shared/Count/Count";
import JobByCategory from "../../shared/JobByCategory/JobByCategory";
import Process from "../../shared/Process/Process";
import Promotion from "../../shared/Promotion/Promotion";

function Home() {
  return (
    <div>
      <Banner />
      <Process />
      <Promotion />
      <JobByCategory />
      <Count />
    </div>
  );
}

export default Home;
