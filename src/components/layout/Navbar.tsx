import { Link } from "react-router";
import { useAuth } from "context/AuthContext";
import UserDropdown from "components/UserDropdown";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <div className="bg-surface-navbar fixed top-0 z-50 block w-full shadow-md">
      <nav className="bg-surface-navbar text-primary mx-auto flex max-w-5xl flex-row items-center justify-between px-4 py-2">
        <Link to="/">
          <h1 className="text-2xl font-bold lg:text-3xl">
            <span className="from-brand-600 to-brand-400 bg-linear-to-r bg-clip-text text-transparent">
              Sync
            </span>
            Up!
          </h1>
        </Link>
        {user && <UserDropdown name={user.name} avatar={user.avatar} />}
      </nav>
    </div>
  );
};

export default Navbar;
