import './Home.css'
import Missional from '../images/missional.jpg'
function Home() {
    return (
      <div className="home-container">
        <div className="home-welcome-text">
          <h1>Welcome</h1>
          <p>As a global community of faith, we are commissioned to take the Good News of life in Jesus Christ to people everywhere and to spread the message of scriptural holiness across the lands.</p>
        </div>
        <img className="mission"src={ Missional} />
      </div>
    );
  }
  export default Home;