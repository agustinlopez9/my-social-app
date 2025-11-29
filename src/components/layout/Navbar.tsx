import { Link } from "react-router";
import UserDropdown from "components/UserDropdown";

const Navbar = () => {
  return (
    <div className="fixed block bg-zinc-900 w-full z-20 top-0 shadow-md">
      <nav className="flex flex-row justify-between items-center mx-auto max-w-5xl bg-zinc-900 px-4 py-2 text-white">
        <Link to="/">
          <h1 className="text-2xl font-bold">
            <span className="bg-linear-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">Sync</span>Up!
          </h1>
        </Link>
        <UserDropdown name="Agustin Lopez" avatar="/avatar.png" />
      </nav>
    </div>
  );
};

export default Navbar;
