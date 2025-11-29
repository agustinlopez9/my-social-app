import UserDropdown from "components/UserDropdown";

const Navbar = () => {
  return (
    <div className="block bg-zinc-900 w-full">
      <nav className="flex flex-row justify-between items-center mx-auto max-w-5xl bg-zinc-900 px-4 py-2 text-white">
        <h1 className="text-2xl font-bold">Fudo Social</h1>
        <UserDropdown name="Agustin Lopez" avatar="/avatar.png" />
      </nav>
    </div>
  );
};

export default Navbar;
