import React from 'react';

import {
    Card,
    Col,
    Row,
    Container,
} from "reactstrap";

import SocialLinks from "../components/SocialLinks";

const GithubProfileCard = ({prof}) => {
    return (
            <Card className="section-lg  shadow-lg border-0">
                {/*bg-gradient-info*/}
                <Container className="">
                <div className="p-2">
                  <Row className="">
                  <Col className="order-lg-2" lg="4">
                      <img src={prof.avatar_url} style={{width: "200px"}} alt="" className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"/>
                    </Col>
                    <Col lg="8" className="order-lg-1">
                      <h2 className="text-darker">
                        Contact me!
                      </h2>
                      <p className="lead text-darker mt-3">
                          Feel free to reach out to me if you want to collaborate on a project, or want to discuss about it.
                           <br/>Psst..<br/><a href="https://beginner.substack.com">Subscribe to the blog</a>
                      </p>
                      <p className="text-darker mt-3">
                          {prof.bio}
                      </p>

                        <SocialLinks />
                    </Col>                    
                  </Row>
                </div>
                </Container>
              </Card>
     );
}
 
export default GithubProfileCard;