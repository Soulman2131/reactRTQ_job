import { NavLink } from "react-router-dom";
import logo from "../assets/images/rtq.png";

const Header = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-violet-700 font-bold text-white hover:bg-violet-700 rounded-md px-3 py-2"
      : "text-violet-700 font-bold hover:bg-violet-700 hover:text-white rounded-md px-3 py-2";
  return (
    <nav className="bg-yellow-500 border-b border-yellow-400">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-purple-800 text-2xl font-bold ml-2">
                Agence
              </span>
            </NavLink>
            <div className=" md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Accueil
                </NavLink>
                <NavLink to="/jobs" className={linkClass}>
                  Trouver un job
                </NavLink>
                <NavLink to="/add-job" className={linkClass}>
                  Offrir un job
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
