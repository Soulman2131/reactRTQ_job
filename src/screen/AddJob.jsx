import React, { useState } from "react";
import { useAddJobMutation } from "../features/Slices/jobsApiSlice";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../components/Details/Loader";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Full-Time");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("En dessous de €50K");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const [AddJob, { isLoading }] = useAddJobMutation();
  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/jobs";

  // HANDLE JOB
  const handleAddJob = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      toast.error("Veuillez renseigner l'intitulé et la description du poste");
    } else {
      try {
        await AddJob({
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
        toast.success("Ajouté avec succes");
        return navigate(redirect);
      } catch (err) {
        toast.error(err?.message || err.error);
      }
    }
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={handleAddJob}>
            <h2 className="text-3xl text-center text-blue-600 font-semibold mb-6">
              Ajouter une offre
            </h2>

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
                L'intitulé du poste
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="ex. Développeur React.Js"
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
            {isLoading && <Loader />}

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Valider
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddJob;
