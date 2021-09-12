import React from 'react';

import {Button, NavItem, NavLink} from "reactstrap";

import { socialLinks } from "../portfolio";

const SocialLinks = () => {
    return ( 
        <div className="btn-wrapper text-lg">
            <Button
                  className="btn-icon-only rounded-circle"
                  color="facebook"
                  href={socialLinks.twitter}
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-twitter" />
                  </span>
                </Button>
                {/*<Button*/}
                {/*  className="btn-icon-only rounded-circle ml-1"*/}
                {/*  color="facebook"*/}
                {/*  href={socialLinks.facebook}*/}
                {/*  target="_blank"*/}
                {/*>*/}
                {/*  <span className="btn-inner--icon">*/}
                {/*    <i className="fa fa-facebook-square" />*/}
                {/*  </span>*/}
                {/*</Button>*/}
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href={socialLinks.github}
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                </Button>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href={socialLinks.linkedin}
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-linkedin" />
                  </span>
                </Button>

            <Button
                className="btn-icon-only rounded-circle ml-1"
                color="facebook"
                href={socialLinks.email}
                target="_blank">
                 <span className="btn-inner--icon">
                     <i className="fa fa-envelope" />
                 </span>
            </Button>
            <Button
                className="btn-icon-only rounded-circle ml-1"
                color="facebook"
                href={socialLinks.instagram}
                target="_blank">
                  <span className="btn-inner--icon">
                    <i className="fa fa-instagram" />
                  </span>
            </Button>
        </div>
     );
}
 
export default SocialLinks;