import './Header.css';
import logo from '../images/logo-2.png'




function Header() {



    return (
      <>
            <div className="header" >
              <div className="headerContainer" id="headerCont">
                  <div className="headerContact">
                    <a href="home"><span><i className="fas fa-phone-volume"></i></span>(032) 420 7416</a>
                    <a href="mailto:rjohnquia@gmail.com"><span><i className="fas fa-envelope"></i></span> info@cvdnaz.org</a>
                  </div>
                  <div className="headerSocialMedia">
                    <a href="https://www.facebook.com/"><span><i className="fab fa-facebook"></i></span>  facebook/cvdnaz</a>
                  </div>
              </div>
              <div className="navbar">
                <div className="logo-container"><img className="logo" src={logo} alt="nazarenelogo" /></div>
                <div className="rightBtn">
                  <button className="findBtn">FIND A CHURCH </button>
                  <button className="giveBtn">GIVE NOW</button>
                </div>
              </div>
            </div>
      </>
    );
  }

  export default Header;