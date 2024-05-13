import { FaBuilding } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdFactCheck } from "react-icons/md";
import { GiArchiveResearch } from "react-icons/gi";
import CountUp from "react-countup";
function Count() {
  return (
    <div className="grid grid-cols-4 bg-job dark:bg-green-700 mt-16 lg:px-[10%] py-8">
      <div className="flex flex-col gap-4 items-center text-white">
        <IoIosPeople className="text-6xl text-white" />
        <div className="flex text-5xl font-medium text-white">
          <CountUp
            start={0}
            end={14}
            delay={2}
            duration={3}
            enableScrollSpy
            redraw={true}
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
          <p>k+</p>
        </div>
        <p className="text-2xl">Job Available</p>
      </div>
      <div className="flex flex-col gap-4 items-center text-white">
        <MdFactCheck className="text-6xl text-white" />
        <div className="flex text-5xl font-medium text-white">
          <CountUp
            start={0}
            end={18}
            delay={2}
            duration={3}
            enableScrollSpy
            redraw={true}
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
          <p>k+</p>
        </div>
        <p className="text-2xl">Job Available</p>
      </div>
      <div className="flex flex-col gap-4 items-center text-white">
        <FaBuilding className="text-6xl text-white" />
        <div className="flex text-5xl font-medium text-white">
          <CountUp
            start={0}
            end={9}
            delay={2}
            duration={3}
            enableScrollSpy
            redraw={true}
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
          <p>k+</p>
        </div>
        <p className="text-2xl">Job Available</p>
      </div>
      <div className="flex flex-col gap-4 items-center text-white">
        <GiArchiveResearch className="text-6xl text-white" />
        <div className="flex text-5xl font-medium text-white">
          <CountUp
            start={0}
            end={35}
            delay={2}
            duration={3}
            enableScrollSpy
            redraw={true}
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
          <p>+</p>
        </div>
        <p className="text-2xl">Appointed to Job</p>
      </div>
    </div>
  );
}

export default Count;
