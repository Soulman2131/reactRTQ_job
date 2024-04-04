import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteJobMutation,
  useGetJobQuery,
} from "../features/Slices/jobsApiSlice";
import { toast } from "react-toastify";
import Loader from "../components/Details/Loader";
import Message from "../components/Details/Message";

const JobProfile = () => {
  const { id } = useParams();
  const { data: job, isLoading, error } = useGetJobQuery(id);
  const [deleteJob] = useDeleteJobMutation(id);

  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/jobs";

  //   HANDLE DELETE
  const handleDelete = async (id) => {
    if (window.confirm("Souhaitez-vous supprimer le poste ?")) {
      await deleteJob(id);
      toast.success("Le poste est supprimé avec succes !!!");
      navigate(redirect);
    }
  };

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-yellow-500 hover:text-yellow-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Retour aux offres
          </Link>
        </div>
      </section>

      {/* 😍 */}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="outlined">{error?.message || error.error}</Message>
      ) : (
        <section className="bg-indigo-50">
          <div className="container m-auto py-10 px-6">
            <div className="grid grid-cols-1 xl:grid-cols-70/30 w-full gap-6">
              <main>
                <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                  <div className="text-gray-500 mb-4">{job?.type}</div>
                  <h1 className="text-3xl font-bold mb-4">{job?.title}</h1>
                  <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                    <FaMapMarker className="text-orange-700 mr-1" />
                    <p className="text-orange-700">{job?.location}</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                  <h3 className="text-indigo-800 text-lg font-bold mb-6">
                    Description
                  </h3>

                  <p className="mb-4">{job?.description}</p>

                  <h3 className="text-indigo-800 text-lg font-bold mb-2">
                    Salaire
                  </h3>

                  <p className="mb-4">{job?.salary} / an</p>
                </div>
              </main>

              {/* <!-- Sidebar --> */}
              <aside>
                <div className="bg-white p-3 rounded-lg shadow-md">
                  <h3 className="text-xl underline font-bold mb-6">
                    {" "}
                    Les informations sur l'entreprise
                  </h3>

                  <h2 className="text-2xl">{job?.company.name}</h2>

                  <p className="my-2">{job?.company.description}</p>

                  <hr className="my-4" />

                  <h3 className="text-xl">Email:</h3>

                  <p className="my-2   bg-yellow-100 p-2 font-bold">
                    {job?.company.contactEmail}
                  </p>

                  <h3 className="text-xl">Téléphone:</h3>

                  <p className="my-2 bg-indigo-100 p-2 font-bold">
                    {" "}
                    {job?.company.contactPhone}
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                  <h3 className="text-xl font-bold  underline mb-6">
                    Mise à jour
                  </h3>
                  <Link
                    to={`/edit-job/${job?.id}`}
                    className="bg-green-500 hover:bg-green-700 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                  >
                    Modifier le poste
                  </Link>
                  <button
                    onClick={() => handleDelete(job?.id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                  >
                    Supprimer le poste
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default JobProfile;
