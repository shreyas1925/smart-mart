import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
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
          <div className="space-y-4 text-xs text-white">
            {/* <h4 className="bold text-white">ABOUT</h4> */}
            <p>How Digital booking works</p>
            <p>News & Press</p>
            <p>Investors</p>
            <p>Advertise</p>
            <p>Media Contacts</p>

            <br />
            <br />
            <p>How Digital booking works</p>
            <p>News & Press</p>
            <p>Investors</p>
            <p>Advertise</p>
            <p>Media Contacts</p>
          </div>

          <div className="space-y-4 text-xs text-white">
            {/* <h4 className="bold text-white">SUPPORT</h4> */}
            <p>Help Centre</p>
            <p>Cancellation options</p>
            <p>Nearby Response</p>
            <p>Safety Network</p>
            <p>Reports</p>

            <br />
            <br />
            <p>How Digital booking works</p>
            <p>News & Press</p>
            <p>Investors</p>
            <p>Advertise</p>
            <p>Media Contacts</p>
          </div>
          <Form className="">
            <h2 className="bold text-white">Connect Now</h2>
            <div className="socials mb-4 d-flex align-content-around">
              <div className="cursor-pointer text-white"></div>
            </div>
            <div className="form__grid">
              <div className="first">
                <Form.Group controlId="name" className="form__name">
                  <Form.Control
                    type="text"
                    placeholder="First name"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </div>
              <div className="second">
                <Form.Group controlId="name">
                  <Form.Control
                    type="text"
                    placeholder="Last name"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </div>
              <div className="message">
                <Form.Group controlId="name">
                  <textarea
                    name=""
                    className="form-control"
                    placeholder="Any Relevant Message"
                    id=""
                    cols="30"
                    rows="7"
                  ></textarea>
                  {/* <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                  ></Form.Control> */}
                </Form.Group>
              </div>
              <button type="button" className="btn btn-outline-info buttons">
                Connect
              </button>
            </div>
          </Form>
          <div className=" text-white"></div>
        </div>
        <div className="space-y-4 text-xs text-gray-800 mains">
          <h6 className="font-semibold m-12 w-62 mt-3 text-white ">
            Terms & Conditions | All Rights Reserved | 2021 SMART MART
          </h6>
        </div>
      </footer>
    </>
  );
};

export default Footer;
