import "../../assets/styles/pages.css";

//Contact page with links to my LinkedIn, Github, Twitter and emails
function Contact() {
  return (
    <div className="pageBackground">
      <br />
      <h1 className="pageTitle">Contact Me</h1>
      <br/>
      <p className="contactText">
        If you want to get in contact please click on one of the links </p>
        <br />
      <p className="contactText"> or email me direct: thestartledmoose@hotmail.co.uk
      </p>
      <br/>
      <span className="buttonGroup">
        <a
          href="https://twitter.com/AlanaBF81"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a
          href="https://github.com/AlanaBF"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/alanabarrettfrew"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </span>
    </div>
  );
}

export default Contact;
