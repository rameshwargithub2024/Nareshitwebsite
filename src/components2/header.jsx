import React, { useEffect, useState } from "react";
import { Main } from "./main";
import "./style.css";
import { Link, useSearchParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function Header() {
  const [cookie, setCookie, removeCookie] = useCookies(["userid"]);
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  function handleSingIn() {
    if (toggle) {
      removeCookie("userid");
      setToggle(false);
    } else {
      setToggle(true);
    }
  }

  useEffect(() => {
    if (cookie["userid"] == null) {
      navigate("/register");
      handleSingIn()
    }
  }, [cookie]);

  return (
    <div style={{backgroundColor:"#8289C4"}} className="container-fluid">
      <nav
        className="navbar  justify-content-between  p-1 rounded rounded-2 mt-2 "
        style={{ backgroundColor: "rgba(20, 62, 29, 0.8)" }}
      >
        <div className="d-flex">
          <div>
            {" "}
            <img src="images/naresh.JPG" height={50} alt="" />
          </div>
          <div className="navbar-brand fw-bold fs-2 " title="Naresh information & technology">Naresh IT</div>
        </div>
        <div className="d-flex">
          <div className="fs-4 fw-bold text-black rounded rounded-2 me-3 ">
            <Link to="/Home">HOME</Link>
          </div>
          <div className="fs-4 fw-bold rounded-2 text-black me-3">
            <Link to="/products">Products</Link>
          </div>
          <div>
            <div className="dropend w-25">
              <button
                data-bs-toggle="dropdown"
                className="dropdown-toggle btn btn-info me-2"
              >
                {" "}
                <span className="bi bi-person-fill"></span> Courses{" "}
              </button>
              <ul className="dropdown-menu" data-bs-theme="info">
                <li>
                  {" "}
                  <Link
                    className="dropdown-item"
                    href="../public/amazon-cards.html"
                    target="frameBody"
                  >
                    {" "}
                    <span className="dropdown-item-text">
                      {" "}
                      <span className="bi bi-book-fill"></span> .NET{" "}
                    </span>{" "}
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item">
                    {" "}
                    <span className="dropdown-item-text">
                      {" "}
                      <span className="bi bi-laptop"></span> JAVA{" "}
                    </span>{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a className="dropdown-item">
                    {" "}
                    <span className="dropdown-item-text">
                      {" "}
                      <span className="bi bi-rainbow"></span> U.I FULLSTACK{" "}
                    </span>{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a
                    className="dropdown-item"
                    target="frameBody"
                    // href="../public/shopper-template.html"
                  >
                    {" "}
                    <span className="dropdown-item-text">
                      {" "}
                      <span className="bi bi-circle"></span> PYTHON{" "}
                    </span>{" "}
                  </a>{" "}
                </li>
                <li className="dropdown-item">
                  {" "}
                  <a>
                    {" "}
                    <span className="dropdown-item-text">
                      {" "}
                      <span className="bi bi-question-circle"></span> Help?{" "}
                    </span>{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="fs-4 fw-bold me-3">
            <div>
              <div className="dropend w-25">
                <button
                  data-bs-toggle="dropdown"
                  className="dropdown-toggle btn btn-info px-2"
                >
                  {" "}
                  <span className="bi bi-person-fill"></span> FACULTY{" "}
                </button>
                <ul className="dropdown-menu" data-bs-theme="info">
                  <li>
                    {" "}
                    <a
                      className="dropdown-item"
                      href="../public/amazon-cards.html"
                      target="frameBody"
                    >
                      {" "}
                      <span className="dropdown-item-text">
                        {" "}
                        <span className="bi bi-pen-fill"></span>Mr. Sudhakar S.{" "}
                      </span>{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item">
                      {" "}
                      <span className="dropdown-item-text">
                        {" "}
                        <span className="bi bi-pencil-fill"></span> Mr. Mahipathi{" "}
                      </span>{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a className="dropdown-item">
                      {" "}
                      <span className="dropdown-item-text">
                        {" "}
                        <span className="bi bi-pen-fill"></span>MR. Shiva Kumar{" "}
                      </span>{" "}
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a
                      className="dropdown-item"
                      target="frameBody"
                      href="../public/shopper-template.html"
                    >
                      {" "}
                      <span className="dropdown-item-text">
                        {" "}
                        <span className="bi bi-pen-fill"></span>Mr. DurgaPrasad{" "}
                      </span>{" "}
                    </a>{" "}
                  </li>
                  <li className="dropdown-item">
                    {" "}
                    <a>
                      {" "}
                      <span className="dropdown-item-text">
                        {" "}
                        <span className="bi bi-question-circle"></span> Mr Ram{" "}
                      </span>{" "}
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
        </div>
        <div>
          <form className="form-inline d-flex">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-info text-light my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <div>
          <button
            onClick={handleSingIn}
            className="fs-4 btn btn-info text-light rounded rounded-2 "
          >
            {cookie["userid"] ? "Sign Out" : "Sing In"}
          </button>
        </div>
      </nav>
      

    </div>
  );
}
