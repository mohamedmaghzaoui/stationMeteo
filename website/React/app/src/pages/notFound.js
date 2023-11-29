export const NotFound = () => {
  return (
    <div class="d-flex align-items-center justify-content-center vh-100">
      <div class="text-center row">
        <h1 className="display-1 fw-bold col-12">404</h1>
        <div class=" col-xl-12 col-lg-10  col-md-12  mt-5">
          <p class="fs-3">
            {" "}
            <span class="text-danger">Opps!</span> Page not found.
          </p>
          <p class="lead">The page you’re looking for doesn’t exist.</p>
          <a href="index.html" class="btn btn-primary">
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
};
