// import GoogleSearch from "../../components/GoogleSearch";
import "../../assets/styles/pages.css";
import Carousel from "../../components/CarouselHome/Carousel";
import mooseLogo from "/TheStartledMooseLogoNB.png"

function Home() {
  return (
    <div className="pageBackground">
      <div>
      <h1>Welcome to</h1>
       <img className="mooseLogo" src={mooseLogo}></img>
       <h4>Art by Joanna Daborn</h4>
       <br/>
       <h4>A Recent Commission</h4>
        <div>
         <Carousel/>
        </div>
      </div>{" "}
      {/* <div className="googleSearchContainer">
        <GoogleSearch />
      </div> */}
      <div>
        <br />
      </div>
    </div>
  );
}

export default Home;
