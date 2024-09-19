import React from "react";
export function Main() {
  return (
    <div
      className="carousel slide"
      id="banners"
      data-bs-theme="dark"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <img height="400" src="images/ui.JPG" className="w-100 d-block" />
        </div>
        <div className="carousel-item" data-bs-interval="1000">
          <img height="400" src="images/java.JPG" className="w-100 d-block" />
        </div>
        {/* <div className="carousel-item" data-bs-interval="5000">
                <div className="d-flex get-start justify-content-center align-items-center">
                    <form className="input-group input-group-lg w-50">
                        <input type="email" placeholder="your email address" className="form-control"/> <button class="btn ms-1 btn-danger"> Get started <span class="bi bi-chevron-right"></span> </button>
                    </form>
                </div>
            </div> */}
        <div className="carousel-item" data-bs-interval="3000">
          <img height="400" src="images/python.JPG" className="w-100 d-block" />
        </div>
      </div>
      <button
        data-bs-slide="prev"
        data-bs-target="#banners"
        className="carousel-control-prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        data-bs-slide="next"
        data-bs-target="#banners"
        className="carousel-control-next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>

      <div className="carousel-indicators">
        <button
          className="active"
          data-bs-slide-to="0"
          data-bs-target="#banners"
        ></button>
        <button data-bs-slide-to="1" data-bs-target="#banners"></button>
        <button data-bs-slide-to="2" data-bs-target="#banners"></button>
        <button data-bs-slide-to="3" data-bs-target="#banners"></button>
      </div>
    </div>
  );
}
