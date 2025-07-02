import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-10">
        <div className="max-w-sm">
          <div className="flex h-12 items-center space-x-2">
            <span className="text-2xl font-bold">
              NextBuy
            </span>
          </div>
          <div className="text-gray-500">
            Your Next Stop for Smarter Shopping.
          </div>
        </div>
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4">Links</div>
          <nav aria-label="Footer Navigation" className="text-gray-500">
            <ul className="space-y-3 flex flex-wrap gap-5">
              <li>
                <Link className="hover:text-blue-600 hover:underline" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-blue-600 hover:underline" to="/wishlist">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link className="hover:text-blue-600 hover:underline" to="/cart">
                  Cart
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <hr className="text-gray-300" />
      <div className="bg-gray-50">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
          <div className="flex justify-center items-center w-full">© 2025 NextBuy | All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
