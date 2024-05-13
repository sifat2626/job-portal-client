import { FaRegIdCard, FaUpload } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";

function Process() {
  return (
    <div className="mb-4 bg-job dark:bg-green-700 py-8">
      <div className=" flex justify-center ">
        <div className="bg-white p-2 border-8 border-green-200 hover:border-green-400 duration-300">
          <FaRegIdCard className="text-4xl" />
        </div>
        <div className="flex items-center">
          <p className="w-16 md:w-32 border-t-8"></p>
        </div>
        <div className="bg-white p-2 border-8 border-green-200 hover:border-green-400 duration-300">
          <FaUpload className="text-4xl" />
        </div>
        <div className="flex items-center">
          <p className="w-16 md:w-32 border-t-8"></p>
        </div>
        <div className="bg-white p-2 border-8 border-green-200 hover:border-green-400 duration-300">
          <FcBusinessman className="text-4xl" />
        </div>
      </div>
      <div className="flex justify-center px-2 md:gap-6 pt-4 font-semibold text-lg text-white text-center">
        <div className="">
          <p>Register Your Account</p>
        </div>
        <div className="">
          <p>Upload Your Resume</p>
        </div>
        <div className="">
          <p>Apply for Dream Job</p>
        </div>
      </div>
    </div>
  );
}

export default Process;
