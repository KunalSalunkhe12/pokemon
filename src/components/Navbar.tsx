import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="z-20 sticky top-0 right-0 px-6 md:px-12 py-5 bg-primary text-white text-3xl">
      <Link to="/" className="font-bold">
        Pokemon ⚡
      </Link>
    </nav>
  );
};

export default Navbar;
