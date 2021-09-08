import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/styles.css";
import { Link } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  return (
    <>
      <footer>
        {/* <Container>
          <Row>
            <Col className="text-center py-3">Copyright &copy; Shreyas</Col>
          </Row>
        </Container> */}

        <div className="main">
          <div className="space-y-4 text-xs text-gray-800">
            <h3 className="font-bold">ABOUT</h3>
            <p>How Digital booking works</p>
            <p>News & Press</p>
            <p>Investors</p>
            <p>Advertise</p>
            <p>Media Contacts</p>
          </div>
          <div className="space-y-4 text-xs text-gray-800">
            <h3 className="font-bold">HOST</h3>
            <p>Digital Villa and co.</p>
            <p>Presents</p>
            <p>Traders</p>
            <p>Join Now</p>
            <p>Partners</p>
          </div>

          <div className="space-y-4 text-xs text-gray-800">
            <h3 className="font-bold">COMMUNITY</h3>
            <p>Opensource Site</p>
            <p>Accessibility</p>
            <p>Privacy Policy</p>
            <p>Blog</p>
          </div>

          <div className="space-y-4 text-xs text-gray-800">
            <h3 className="font-bold">SUPPORT</h3>
            <p>Help Centre</p>
            <p>Cancellation options</p>
            <p>Nearby Response</p>
            <p>Safety Network</p>
            <p>Reports</p>
          </div>

          <div className="space-y-4 text-xs text-gray-800">
            <div className="d-flex justify-content-between m-2 cursor-pointer">
              <a href="https://github.com/shreyas1925" target="_blank">
                <GitHubIcon />
              </a>
              <Link href="/">
                <InstagramIcon />
              </Link>
              <Link href="/">
                <LinkedInIcon />
              </Link>
              <Link href="/">
                <TwitterIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-4 text-xs text-gray-800 mains">
          <h6 className="font-semibold m-12 w-62 mt-3 ">
            Terms & Conditions | All Rights Reserved | 2021 Digital Villa and
            co.
          </h6>
        </div>
      </footer>
    </>
  );
};

export default Footer;
