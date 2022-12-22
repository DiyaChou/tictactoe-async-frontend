import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <span className="backarrow" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </span>
    </>
  );
};

export default Header;
