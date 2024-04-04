import { Link } from "react-router-dom";

const GetAllJobs = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
      <Link
        to="/jobs"
        className="block bg-black text-white text-center tracking-wide text-lg  py-4 px-6 rounded-xl hover:bg-gray-700"
      >
        Consulter toutes les offres
      </Link>
    </section>
  );
};
export default GetAllJobs;
