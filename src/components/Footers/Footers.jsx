const Footers = () => {
  return (
    <footer className="bg-black text-white px-4 py-4  flex justify-between items-center mt-4">
      <p>&copy; {new Date().getFullYear()} NidShop</p>
      <ul className="flex space-x-4 mt-4 md:mt-0">
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/terms">Terms & Conditions</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footers;
