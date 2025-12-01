import { Link } from "react-router";
import UserDropdown from "components/UserDropdown";

const Navbar = () => {
  return (
    <div className="fixed block bg-surface-navbar w-full z-50 top-0 shadow-md">
      <nav className="flex flex-row justify-between items-center mx-auto max-w-5xl bg-surface-navbar px-4 py-2 text-primary">
        <Link to="/">
          <h1 className="text-2xl font-bold">
            <span className="bg-linear-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              Sync
            </span>
            Up!
          </h1>
        </Link>
        <UserDropdown name="Agustin Lopez" avatar="/avatar.png" />
      </nav>
    </div>
  );
};

export default Navbar;
