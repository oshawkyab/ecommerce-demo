import { Link } from "react-router-dom";
import "./index.css";
import Logo from "../../img/logo.png";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoCart } from "react-icons/io5";

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="container">
        <Link to={"/"}>
          <img src={Logo} alt="logo" className="logo" />
        </Link>

        <form action="" className="search-box">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search For Products"
          />
          <button type="submit">
            <CiSearch />
          </button>
        </form>

        <div className="header-icons">
          <div className="icon">
            <CiHeart />
            <span className="count">0</span>
          </div>

          <div className="icon">
            <IoCart />
            <span className="count">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
