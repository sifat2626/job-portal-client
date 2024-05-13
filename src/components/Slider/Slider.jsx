/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

function Slider({ img }) {
  return (
    <div
      className={`h-[600px] bg-cover bg-center relative text-center`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.h3
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-6xl font-extrabold text-white"
        >
          Find Your <span className="text-job">Desired</span> Job
        </motion.h3>
        <h6 className="text-2xl text-white mt-4 font-semibold">
          Jobs, Employment & Future Career Opportunities
        </h6>
        <div className=" mt-6">
          <form action="" className="flex gap-2 justify-center">
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value={"Search"}
              className="bg-job px-6 py-2 rounded-lg text-white font-medium text-xl"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Slider;
