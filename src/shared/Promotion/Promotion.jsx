import { Link } from "react-router-dom";
import home1 from "../../assets/images/home1.jpg";
import home2 from "../../assets/images/home2.jpg";
function Promotion() {
  return (
    <div className="flex px-[10%] items-center mt-24">
      <div className="flex gap-8 relative w-full">
        <img src={home1} alt="" className="h-96" />
        <img src={home2} alt="" className="h-64" />
        <div className="absolute bottom-5 right-10 bg-job px-12 py-4 dark:bg-green-700 border-8 border-green-200">
          <h3 className="text-4xl text-white font-bold">100% Trusted</h3>
        </div>
      </div>
      <div className="w-full">
        <h3 className="text-5xl font-semibold">Trusted & Popular Job Portal</h3>
        <p className="mt-4 text-lg font-medium">
          Discover your dream career effortlessly with our cutting-edge job
          portal. Dive into a world of endless opportunities, where every click
          brings you closer to your professional goals. Join a community of
          driven individuals and let us guide you towards a brighter future.
          Start your journey today!
        </p>
        <div className="flex gap-4 mt-6">
          <Link className="border-4 px-4 py-2 rounded-lg border-job dark:border-green-700 hover:bg-job duration-300 dark:text-white font-semibold hover:dark:bg-green-700">
            Post a Job &rarr;
          </Link>
          <Link className="border-4 px-4 py-2 rounded-lg border-job dark:border-green-700 hover:bg-job duration-300 dark:text-white font-semibold hover:dark:bg-green-700">
            Apply Now! &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Promotion;
