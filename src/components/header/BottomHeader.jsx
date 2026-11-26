import { IoMenu } from "react-icons/io5";
import "./index.css";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineLogin } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Accessories", path: "/accessories" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];
const BottomHeader = () => {
  const [categories, setCategories] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const location = useLocation();
  console.log("Current location:", location.pathname);

  const fetchCategories = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchCategories();
  }, []);
  return (
    <div className="bottom-header">
      <div className="container">
        <nav className="nav">
          <div className="category-nav">
            <div onClick={() => setIsCategoryOpen(!isCategoryOpen)} className="category-btn">
              <IoMenu />
              <p>Browse Categories</p>
              <TiArrowSortedDown />
            </div>
            <div className={`category-items ${isCategoryOpen ? "active" : ""}`}>
              {categories.map((category, index) => (
                <Link to={`/category/${category}`} key={index}>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="nav-links">
            {navLinks.map((link, index) => (
              <li
                className={
                  location.pathname === link.path ? "active-nav-link" : ""
                }
              >
                <Link to={link.path} key={index}>
                  {link.name}
                </Link>
              </li>
            ))}
          </div>
        </nav>
        <div className="auth-options">
          <Link to={"/login"}>
            <MdOutlineLogin />
          </Link>
          <Link to={"/register"}>
            <FaUserPlus />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
