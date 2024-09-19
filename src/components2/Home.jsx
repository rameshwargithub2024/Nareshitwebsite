import { Header } from "./header";
import { Main } from "./main";
import Products from "./products";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

export default function Home() {

    const [cookie, setCookie, removeCookie] = useCookies(["userid"]);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (cookie["userid"] == null) {
        navigate("/register");
      }
    }, []);

  return (
    <div>
      <Main />
<Products/>
      <div
        className="d-flex w-100 mt-2   flex-md-row rounded rounded-2 text-center text-md-start justify-content-between py-4 px-4 px-xl-5"
        style={{ backgroundColor: "rgba(48, 143, 141, 0.8)" }}
      >
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>

        <div id="size">
          <a href="#!" className="text-white me-4">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#!" className="text-white me-4">
            <i className="bi bi-google"></i>
          </a>
          <a href="#!" className="text-white">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
