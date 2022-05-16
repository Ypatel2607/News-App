import {Link} from "react-router-dom";

const NavBar = () => {

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark w-100 p-3">
        <div className="container-fluid">
          <Link className="navbar-brand fs-4" to="/">News App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-2">
              <li className="nav-item"><Link className="nav-link fs-5 mx-1" aria-current="page" to="/">Home</Link></li>
              {/* <li className="nav-item"><Link className="nav-link fs-5 mx-1" to="/about">About</Link></li> */}
              <li className="nav-item"><Link className="nav-link fs-5 mx-1" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link fs-5 mx-1" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link fs-5 mx-1" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link fs-5 mx-1" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link fs-5 mx-1" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link fs-5 mx-1" to="/technology">Technology</Link></li>

              <li className="nav-item"><Link className="nav-link fs-5 mx-1" to="/politics">politics</Link></li>
              <li className="nav-item"><Link className="nav-link fs-5 mx-1" to="/food">food</Link></li>
              <li className="nav-item"><Link className="nav-link fs-5 mx-1" to="/environment">environment</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );

}

export default NavBar;
