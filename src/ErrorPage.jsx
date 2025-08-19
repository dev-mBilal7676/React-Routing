import { Link } from "react-router";
export default function ErrorPage() {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>Page Not Found.</h1>

      <div>
        <button
          style={{
            border: "2px solid black",
            borderRadius: "10px",
            backgroundColor: "gray",
            padding: "10px",
          }}
        >
          <Link to="/">Go Home Page</Link>
        </button>
      </div>
      <img
        style={{ width: "70%" }}
        src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg.avif"
        alt=""
      />
    </div>
  );
}
