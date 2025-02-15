import { Link} from "react-router-dom";

function NavBar() {
    return ( 
    <div> 
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" >my app</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className= "nav-link active" aria-current="page" >Home</Link>
              <Link  to="/posts" className="nav-link" >Post</Link>
              <Link to="/about" className="nav-link" >About</Link>
            </div>
          </div>
        </div>
      </nav> 
     </div> 
     );
}

export default NavBar;