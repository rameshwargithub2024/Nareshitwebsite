import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useCookies} from 'react-cookie'

export default function Register() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cookie, setCookie] = useCookies(["userid"]);


  const navigate = useNavigate();

  let user = {
    UserId: "Jhon",
    Password: "123",
  };

  function handleLogin() {
    if (userId === user.UserId && password === user.Password) {
      setCookie("userid", user.UserId);
      navigate("/home");
    } else {
      setError("Invalid UserId or Password");
      navigate("/register");
    }
  }

  return (
    <section className="vh-100 mt-5">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <p className="text-danger">{error}</p>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                <button
                  type="button"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="bi bi-facebook"></i>
                </button>

                <button
                  type="button"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="bi bi-twitter"></i>
                </button>

                <button
                  type="button"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-floating mx-1"
                >
                  <i className="bi bi-linkedin"></i>
                </button>
              </div>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="text"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter UserId"
                  onChange={(e) => setUserId(e.target.value)}
                />
              </div>

              <div data-mdb-input-init className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  onClick={handleLogin}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="#!" className="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    <div className="mt-2 accordion mt-5 " id="faq">
        <div className="accordion-item ">
            <div className="accordion-header">
                <button data-bs-toggle="collapse"  style={{backgroundColor:"#C5EBF3"}} 
                data-bs-target="#q1" className="accordion-button ">What is Naresh IT?</button>
            </div>
            <div className="accordion-collapse collapse" id="q1" data-bs-parent="#faq">
                <div className="accordion-body">
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure tenetur dolorum blanditiis soluta corrupti, laborum excepturi asperiores illum, quisquam numquam fugiat perspiciatis! Quod cum aliquid necessitatibus alias. Nesciunt, voluptates hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus earum, deleniti minus doloremque maiores corporis. Eaque, fugiat? Numquam eligendi eveniet soluta natus autem delectus quam quisquam porro beatae, quo temporibus? </p>
                </div>
            </div>
        </div>
        <div className="accordion-item ">
            <div className="accordion-header">
                <button data-bs-toggle="collapse" data-bs-target="#q2" style={{backgroundColor:"#C5EBF3"}} className=" accordion-button">Know about courses?</button>
            </div>
            <div className="accordion-collapse collapse" id="q2" data-bs-parent="#faq">
                <div className="accordion-body">
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure tenetur dolorum blanditiis soluta corrupti, laborum excepturi asperiores illum, quisquam numquam fugiat perspiciatis! Quod cum aliquid necessitatibus alias. Nesciunt, voluptates hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus earum, deleniti minus doloremque maiores corporis. Eaque, fugiat? Numquam eligendi eveniet soluta natus autem delectus quam quisquam porro beatae, quo temporibus? </p>
                </div>
            </div>
        </div>
        <div className="accordion-item" >
          <div className="accordion-header">
            <button className="accordion-button"  style={{backgroundColor:"#C5EBF3"}} 
            data-bs-toggle="collapse" data-bs-target="#q3">How much does Naresh it cost?</button>
          </div>
          <div className="accordion-collapse collapse" id="q3" data-bs-parent="#faq">
             <div className="accordion-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, porro dolorum et iusto in dolore possimus magnam id tempore tempora consequatur cupiditate laboriosam non ab. Voluptas sequi cumque quis in?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto commodi, pariatur nam atque culpa hic autem quidem reiciendis omnis ea quae nihil rem facilis minima ducimus quo, aut veritatis voluptatibus?</p>
             </div>
          </div>
        </div>
        </div>
      
      
    </section>
  );
}
