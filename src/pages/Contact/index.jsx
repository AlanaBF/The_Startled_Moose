import "../../assets/styles/pages.css";
import Profile from "../../assets/images/JannieProfile.jpeg"
//Contact page with links to my LinkedIn, Github, Twitter and emails
function Contact() {
  return (
    <div className="pageBackground">
      <br />
      <h1 className="pageTitle">Contact Me</h1>
      <img className="profile-pic" src={Profile}></img>
      <br/>
      <p className="contactText">
        If you want to get in contact please message me from one of these links: </p>
        <br />
        <button className="btn btn-linkedin">
        <a
          href="https://www.linkedin.com/in/joanna-daborn-764014210/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
     </button>&nbsp;
     <button className="btn btn-facebook">
        <a
          href="https://www.facebook.com/TheStartledMooseArtGallery"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
     </button> 

      <p className="contactText"> or email me direct: thestartledmoose@hotmail.co.uk
      </p>
      <br/>
      
    </div>
  );
}

export default Contact;
