import './Home.css'
import Missional from '../images/missional.jpg';
import Pastors from '../images/pastors.jpg';
function Home() {
    return (
      <div className="home-container">
        <div className="welcome-container">
          <div className="home-text-container">
            <div className="welcome-content">
              <div className="inside-border">
                <p className="welcome">Welcome to the</p>
                <h2>CHURCH OF THE NAZARENE</h2>
                <p className="welcome-text">
                  As a global community of faith, we are commissioned to take the Good News of life in Jesus Christ to people everywhere and to spread the message of scriptural holiness across the lands.
                </p>
              </div>
            </div>
          </div>
          <div className="home-image-container">
            <img className="mission"src={ Missional} />
          </div>
        </div>
        <div className="about">
          
          <div className="about-picture">
            <img className="pastors" src={ Pastors} />
          </div>
          <div className="about-text">
            <div className="about-text-container">
              <div className="about-text-border">
                <h2>Who We Are</h2>
                <p>
                 The Church of the Nazarene is the largest denomination in the classical Wesleyan-Holiness tradition. The doctrine that distinguishes the Church of the Nazarene and other Wesleyan denominations from most other Christian denominations is that of entire sanctification. Nazarenes believe that God calls Christians to a life of holy living that is marked by an act of God, cleansing the heart from original sin and filling the individual with love for God and humankind.
                </p>
              </div>
            </div>
          </div>
          <div className="latest-update">
            
          </div>

        </div>
      </div>
      

    );
  }
  export default Home;