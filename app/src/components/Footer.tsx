import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Image from "../components/shared/Image";
import Flex from "./shared/Flex";
import Facebook from "../assets/images/facebook.png";
import Twitter from "../assets/images/twitter.png";
import Instagram from "../assets/images/instagram.png";

const SocialList = (props: { justifyContent: string }) => {
  const socialList: any[] = [
    { icon: Facebook, link: "" },
    { icon: Twitter, link: "" },
    { icon: Instagram, link: "" },
  ];

  return (
    <Flex
      justifyContent={props.justifyContent}
      alignItems="center"
      direction="row"
    >
      {socialList.map((social, index) => (
        <a key={index} href={social.link} rel="noreferrer" target="_blank">
          <Image
            width="32px"
            height="auto"
            styles={{ marginRight: "20px" }}
            cssClasses={["rounded"]}
            src={social.icon}
          />
        </a>
      ))}
    </Flex>
  );
};

const Footer = () => {
  const links: any[] = [
    { menu: "Home", link: "/" },
    { menu: "About", link: "#" },
    { menu: "Feature", link: "#" },
    { menu: "Product", link: "#" },
    { menu: "Contact", link: "#" },
    { menu: "Demo", link: "#" },
    { menu: "Blog", link: "#" },
  ];

  let history = useHistory();

  return (
    <Flex
      justifyContent="flex-start"
      alignItems="center"
      direction="row"
      cssClasses={
        history.location.pathname === "/" ? ["footer"] : ["footer", "other-footer"]
      }
    >
      <div className="row w-100">
        <div className="col-md-4">
          <div className="footer-title font-weight-bold">
            Share With Your Friends
          </div>
          <div className="footer-text">& Enjoy Together!</div>
        </div>
        {history.location.pathname === "/" ? (
          <>
            <div className="col-md-1"></div>
            <div className="col-md-7">
              <div className="footer-description font-normal">
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
              </div>
              <div className="pt-4">
                <SocialList justifyContent="flex-end" />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="col-md-2">
              <div className="footer-title mb-4 font-weight-bold">LINKS</div>
              <div className="font-normal">
                {links.map((link, index) => (
                  <Link key={index} to={link.link}>
                    <div className="my-3">{link.menu}</div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-title mb-4 font-weight-bold">ABOUT</div>
              <div className="font-normal">
                <div>
                  <a href="mailto:info@lynkevents.com">info@lynkevents.com</a>
                </div>
                <div>Tel: 07797771530</div>
                <div>United Kingdom</div>
                <div className="mt-4 mb-4">Privacy Policy</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-title mb-4 font-weight-bold">SOCIAL</div>
              <div className="mt-4">
                <SocialList justifyContent="flex-start" />
              </div>
            </div>
          </>
        )}
      </div>
    </Flex>
  );
};

export default Footer;
