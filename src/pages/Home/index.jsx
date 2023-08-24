// import GoogleSearch from "../../components/GoogleSearch";
import "../../assets/styles/pages.css";
import mooseLogo from "/TheStartledMooseLogoNB.png"

function Home() {
  return (
    <div className="pageBackground">
      <div>
        <img className="mooseLogo" src={mooseLogo}></img>
        <div>
         
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
