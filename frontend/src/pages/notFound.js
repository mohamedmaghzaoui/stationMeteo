import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div style={{ marginTop: "10%" }}>
      <div class="text-center row">
        <h1 className="display-1 fw-bold col-12">404</h1>
        <div class=" col-xl-12 col-lg-10  col-md-12  mt-5">
          <p class="fs-3">
            {" "}
            <span class="text-danger">Opps!</span> Page not found.
          </p>
          <p class="lead">The page you’re looking for doesn’t exist.</p>
          <Link to={"/"} className="btn btn-primary">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
};
