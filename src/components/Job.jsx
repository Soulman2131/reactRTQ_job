import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const [toggle, setToggle] = useState(false);

  let description = job.description;
  if (!toggle) {
    description = description?.substring(0, 90) + "...";
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-yellow-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">{description}</div>

        <button
          onClick={() => setToggle((prevState) => !prevState)}
          className="text-yellow-500 mb-5 hover:text-red-700"
        >
          {toggle ? "Moins de de détails" : "Cliquez pour plus de détails"}
        </button>

        <h3 className="text-indigo-500 mb-2">{job.salary} / an</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline text-lg mb-1 mr-1" />
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-yellow-500 hover:bg-black text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
