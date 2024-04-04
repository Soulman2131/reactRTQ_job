import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  useEditJobMutation,
  useGetJobQuery,
} from "../features/Slices/jobsApiSlice";
import { toast } from "react-toastify";
import Loader from "../components/Details/Loader";
import Message from "../components/Details/Message";

const EditJob = () => {
  const { id } = useParams();
  const [editJob, { isLoading: editLoading }] = useEditJobMutation();

  const { data: job, isLoading, refetch, error } = useGetJobQuery(id);

  //
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  // USE EFFECT
  useEffect(() => {
    if (job) {
      setTitle(job?.title);
      setType(job?.type);
      setLocation(job?.location);
      setDescription(job?.description);
      setSalary(job?.salary);
      setCompanyName(job?.company.name);
      setCompanyDescription(job?.company.description);
      setContactEmail(job?.company.contactEmail);
      setContactPhone(job?.company.contactPhone);
    }
  }, [job]);

  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || `/jobs?/${id}`;

  //   HANDLE UPDATE
  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await editJob({
        id,
        title,
        type,
        location,
        description,
        salary,
        company: {
          name: companyName,
          description: companyDescription,
          contactEmail,
          contactPhone,
        },
      }).unwrap();
      toast.success("Mise à jour avec succes");
      navigate(redirect);
      refetch();
    } catch (err) {
      toast.error(err?.message || err.error);
    }
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h2 className="text-3xl text-center text-blue-600 font-semibold mb-6">
            Mettre à jour à l'offre
          </h2>
          {editLoading && <Loader />}
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Message variant="outlined">
              {error?.message || error.error}
            </Message>
          ) : (
            <form onSubmit={handleEdit}>
              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Type de contrat
                </label>
                <select
                  id="type"
                  name="type"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="A temps-plein">A temps plein</option>
                  <option value="A temps-partiel">A temps partiel</option>
                  <option value="A distance">A distance</option>
                  <option value="Stage">Stage</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Le nom du poste à pourvoir
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="ex. Développeur React.Js"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Description du poste"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Salaire
                </label>
                <select
                  id="salary"
                  name="salary"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                >
                  <option value="En dessous de €50K">En dessous de €50K</option>
                  <option value="€50K - 60K">€50K - €60K</option>
                  <option value="€60K - 70K">€60K - €70K</option>
                  <option value="€70K - 80K">€70K - €80K</option>
                  <option value="€80K - 90K">€80K - €90K</option>
                  <option value="€90K - 100K">€90K - €100K</option>
                  <option value="€100K - 125K">€100K - €125K</option>
                  <option value="€125K - 150K">€125K - €150K</option>
                  <option value="€150K - 175K">€150K - €175K</option>
                  <option value="€175K - 200K">€175K - €200K</option>
                  <option value="Over €200K">En dessus de €200K</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Localisation
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="ex. Paris, FR"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <h3 className="text-2xl mb-5 text-blue-500">
                Les informations sur l'entreprise qui recrute
              </h3>

              <div className="mb-4">
                <label
                  htmlFor="company"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Le nom de l'entreprise
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Saisissez le nom de votre entreprise"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="company_description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Les missions de l'entreprise
                </label>
                <textarea
                  id="company_description"
                  name="company_description"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Que propose votre entreprise?"
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contact_email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Adresse electronique
                </label>
                <input
                  type="email"
                  id="contact_email"
                  name="contact_email"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Saisissez votre email pour les CV"
                  required
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="contact_phone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="contact_phone"
                  name="contact_phone"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Saisissez votre téléphone (optionnel)"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                />
              </div>

              <div>
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Valider la modification
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EditJob;
