import { useGetJobsQuery } from "../features/Slices/jobsApiSlice";
import Loader from "../components/Details/Loader";
import Message from "../components/Details/Message";
import Job from "../components/Job";

const Jobs = ({ isHome }) => {
  const { data: jobs, isLoading, error } = useGetJobsQuery();

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-yellow-500 mb-6 text-center">
            {isHome ? "Les plus récents" : "Les offres d'emploi"}
          </h2>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Message variant="outlined">
              {error?.message || error.error}
            </Message>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs &&
                jobs
                  .slice(isHome ? 3 : false)
                  .map((job, index) => <Job key={index} job={job} />)}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Jobs;
