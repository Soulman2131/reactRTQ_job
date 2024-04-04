import { Link } from "react-router-dom";
import FormChoiceHero from "./Details/FormChoiceHero";

const ChoiceHero = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <FormChoiceHero bg="bg-yellow-100">
            <h2 className="text-2xl font-bold">Pour les développeurs</h2>
            <p className="mt-2 mb-4">
              Accédez en un clin d’oeil aux informations clés du poste et du
              recrutement.
            </p>
            <Link
              to="/jobs"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 tracking-wider  hover:bg-gray-800"
            >
              Explorer les emplois
            </Link>
          </FormChoiceHero>
          <FormChoiceHero bg="bg-yellow-200">
            <h2 className="text-2xl font-bold">Pour les entreprises</h2>
            <p className="mt-2 mb-4">
              Inscrivez votre offre pour trouver le développeur idéal pour le
              poste.
            </p>
            <Link
              to="/add-job"
              className="inline-block bg-green-500 text-white rounded-lg px-4 py-2 tracking-wider  hover:bg-indigo-600"
            >
              Publier un job
            </Link>
          </FormChoiceHero>
        </div>
      </div>
    </section>
  );
};

export default ChoiceHero;
