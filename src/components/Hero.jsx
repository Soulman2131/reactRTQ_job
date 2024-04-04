const Hero = ({
  title = "Explorer un métier...",
  subtitle = "Trouver votre voie, l'entreprise qui vous correspond, et pour vous épanouir dans votre vie professionnelle.",
}) => {
  return (
    <section className="bg-yellow-500 py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-950 sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-gray-800">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
