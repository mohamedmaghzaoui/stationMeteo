import "../Css/contact.css";

export const Contact = () => {
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <div
      style={{ backgroundColor: isDarkMode ? "#343a40" : "#F5F6FE" }}
      className="my-5  offset-xl-3 offset-lg-3 offset-md-2 offset-1  text-center shadow-lg p-3 mb-5 rounded col-xl-6 col-lg-6 col-md-8 col-sm-10 col-11"
    >
      <h2 className={isDarkMode ? "text-light" : "text-dark"}>Contact Us</h2>
      <p className={isDarkMode ? "text-light" : "text-dark"}>
        To ask a question please use the form below
      </p>
      <div className="row mb-3 ">
        <div className="col">
          <input
            type="text"
            className={`form-control ${isDarkMode ? "form-control-dark" : ""}`}
            id="name"
            placeholder="Name"
          />
        </div>
        <div className="col">
          <input
            type="email"
            className={`form-control ${isDarkMode ? "form-control-dark" : ""}`}
            id="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div className="mb-3">
        <textarea
          className={`form-control ${isDarkMode ? "form-control-dark" : ""}`}
          id="message"
          rows="12"
          placeholder="Enter your message"
        ></textarea>
      </div>
      <button
        className="btn btn-lg text-light fw-bold col-5"
        style={{ backgroundColor: "#4550E6" }}
      >
        Submit
      </button>
    </div>
  );
};
