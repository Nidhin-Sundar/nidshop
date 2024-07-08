const Navbar = () => {
  return (
    <nav className="bg-black text-white px-4 py-4 flex justify-between items-center">
      <a href="/" className="text-xl font-bold">
        NidShop{" "}
      </a>
      <ul className="flex space-x-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
