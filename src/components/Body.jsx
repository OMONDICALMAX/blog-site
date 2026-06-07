import { useNavigate } from "react-router-dom";

function Body() {
  const navigate = useNavigate();

  return (
    <div className="bodyContent">
      <h1>Daily Blog</h1>
      <p>
        Read daily. Think deeply.
        <br />
        Stay inspired.
      </p>

      <button onClick={() => navigate("/blog")}>
        Read More
      </button>
    </div>
  );
}

export default Body;