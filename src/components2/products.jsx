

import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

export default function Products(){

    
    const [cookie, setCookie, removeCookie] = useCookies(["userid"]);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (cookie["userid"] == null) {
        navigate("/register");
      }
    }, []);

    return(
        <div style={{backgroundColor:"#FFE4E4", marginTop:"-15px"}}>
              <div className="mt-5 d-flex gap-2">
          <div
            className="col-3  rounded rounded-2"
            style={{ backgroundColor: "rgba(107, 183, 241, 0.61)" }}
          >
            <img src="selenium.PNG" height={200} alt="" className="card-img-top pt-2" />
            <div className="card-header fw-bold text-center">
              SELENIUM{" "}
            </div>
            <div className="card-body">
              <p className="bi bi-watch-fill h5 text-center">
                Course diration -8 Months
              </p>
              <p className="bi bi-book-fill text-center">
                FACULTY : Mr. Mahipathy{" "}
              </p>
            </div>
            <div className="card-footer text-center">
              <button className="bi bi-hand-thumbs-up btn btn-info ">
                JOIN course
              </button>
            </div>
          </div>
          <div
            className="col-3  rounded  rounded-2"
            style={{ backgroundColor: "rgba(107, 183, 241, 0.61)" }}
          >
            <img src="mern.PNG" alt="" height={200} className="card-img-top pt-2" />
            <div className="card-header fw-bold text-center">
              MERN stack {" "}
            </div>
            <div className="card-body">
              <p className="bi bi-watch-fill h5 text-center">
                Course diration -4 Months
              </p>
              <p className="bi bi-book-fill text-center">
                FACULTY : Mr. Sudhakar Sharma{" "}
              </p>
            </div>
            <div className="card-footer text-center">
              <button className="bi bi-hand-thumbs-up btn btn-info ">
                JOIN course
              </button>
            </div>
          </div>
          <div
            className="col-3 rounded rounded-2"
            style={{ backgroundColor: "rgba(107, 183, 241, 0.61)" }}
          >
            <img src="code-ninja.PNG" height={200} alt="" className="card-img-top pt-2" />
            <div className="card-header fw-bold text-center">
              CODE Ninja{" "}
            </div>
            <div className="card-body">
              <p className="bi bi-watch-fill h5 text-center">
                Course diration -10 Month
              </p>
              <p className="bi bi-book-fill text-center">
                FACULTY : Mr. Shiva Kumar{" "}
              </p>
            </div>
            <div className="card-footer text-center">
              <button className="bi bi-hand-thumbs-up btn btn-info ">
                JOIN course
              </button>
            </div>
          </div>
          <div
            className="col-3  rounded rounded-2"
            style={{ backgroundColor: "rgba(107, 183, 241, 0.61)" }}
          >
            <img src="images/cyber-security.PNG"height={200} alt="" className="card-img-top pt-2" />
            <div className="card-header fw-bold text-center">
              Cyber Security{" "}
            </div>
            <div className="card-body">
              <p className="bi bi-watch-fill h5 text-center">
                Course diration -8 Months
              </p>
              <p className="bi bi-book-fill text-center">
                FACULTY : Mr. Sudhakar S.{" "}
              </p>
            </div>
            <div className="card-footer text-center">
              <button className="bi bi-hand-thumbs-up btn btn-info ">
                JOIN course
              </button>
            </div>
          </div>
        </div>
        <div className="mt-3  d-flex gap-2">
          <div
            className="col-3  rounded rounded-2"
            style={{ backgroundColor: "rgba(107, 183, 241, 0.61)" }}
          >
            <img src="images/java.JPG" height={200} alt="" className="card-img-top pt-2" />
            <div className="card-header fw-bold text-center">
              Java FULLSTACK{" "}
            </div>
            <div className="card-body">
              <p className="bi bi-watch-fill h5 text-center">
                Course diration -8 Months
              </p>
              <p className="bi bi-book-fill text-center">
                FACULTY : Mr. Mahipathy{" "}
              </p>
            </div>
            <div className="card-footer text-center">
              <button className="bi bi-hand-thumbs-up btn btn-info ">
                JOIN course
              </button>
            </div>
          </div>
          <div
            className="col-3  rounded  rounded-2"
            style={{ backgroundColor: "rgba(107, 183, 241, 0.61)" }}
          >
            <img src="images/ui.JPG" alt="" height={200} className="card-img-top pt-2" />
            <div className="card-header fw-bold text-center">
              Ui Fullstack{" "}
            </div>
            <div className="card-body">
              <p className="bi bi-watch-fill h5 text-center">
                Course diration -6 Months
              </p>
              <p className="bi bi-book-fill text-center">
                FACULTY : Mr. Durga-Prasad{" "}
              </p>
            </div>
            <div className="card-footer text-center">
              <button className="bi bi-hand-thumbs-up btn btn-info ">
                JOIN course
              </button>
            </div>
          </div>
          <div
            className="col-3 rounded rounded-2"
            style={{ backgroundColor: "rgba(107, 183, 241, 0.61)" }}
          >
            <img src="images/net.JPG" height={200} alt="" className="card-img-top pt-2" />
            <div className="card-header fw-bold text-center">
              .Dot Net{" "}
            </div>
            <div className="card-body">
              <p className="bi bi-watch-fill h5 text-center">
                Course diration -10 Months
              </p>
              <p className="bi bi-book-fill text-center">
                FACULTY : Mr. Shiva Kumar{" "}
              </p>
            </div>
            <div className="card-footer text-center">
              <button className="bi bi-hand-thumbs-up btn btn-info ">
                JOIN course
              </button>
            </div>
          </div>
          <div
            className="col-3  rounded rounded-2"
            style={{ backgroundColor: "rgba(107, 183, 241, 0.61)" }}
          >
            <img src="images/python.JPG"height={200} alt="" className="card-img-top pt-2" />
            <div className="card-header fw-bold text-center">
              PYTHON{" "}
            </div>
            <div className="card-body">
              <p className="bi bi-watch-fill h5 text-center">
                Course diration -8 Months
              </p>
              <p className="bi bi-book-fill text-center">
                FACULTY : P.V.R{" "}
              </p>
            </div>
            <div className="card-footer text-center">
              <button className="bi bi-hand-thumbs-up btn btn-info ">
                JOIN course
              </button>
            </div>
          </div>
        </div>
        </div>
    )
}