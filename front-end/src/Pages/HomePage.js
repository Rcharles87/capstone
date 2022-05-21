import "../Styles/home.css";
import FloatingLinks from "../Components/FloatingLinks";
import Splash from "../Components/Splash";


function Home() {
  return (
    <div className="home-container">
     <Splash/>
      <FloatingLinks />
      
    </div>
  );
}

export default Home;
