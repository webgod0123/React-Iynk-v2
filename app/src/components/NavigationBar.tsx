import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Image from "../components/shared/Image";
import Flex from "../components/shared/Flex";
import Logo from "../assets/images/logo.png";
import Menu from "../assets/images/menu.png";
import Arrow from "../assets/images/Vector.svg";
import CustomModal from "../components/shared/CustomModal";

interface NavigationBarProps {
  userSignedIn: boolean;
}

interface NavigationMenuProps {
  links: any[];
  activeLink: string;
}

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const NavigationMenu = ({
  links,
  activeLink,
}: NavigationMenuProps) => {
  let linkArr = activeLink.split("/");
  const [isShowModal, setIsShowModal] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowDimensions]);

  return (
    <>
      {links.map((link, index) => 
        <Flex
          justifyContent="flex-end"
          alignItems="center"
          direction="row"
          key={index}
        >
          <div
            className={
              linkArr[1] === link.active
                ? "px-2 mx-4 py-2 navbar-menu font-normal position-relative active"
                : "px-2 mx-4 py-2 navbar-menu font-normal position-relative"
            }
          >
            {link.subMenus ? (
              <CustomModal
                position={
                  windowDimensions.width <= 900
                    ? "bottom right"
                    : "bottom center"
                }
                isShowModal={isShowModal}
                triggerComponent={
                  <div onClick={() => setIsShowModal(true)}>
                    {link.menu}
                    <Image
                      width="13px"
                      height="auto"
                      src={Arrow}
                      styles={{ marginLeft: "10px" }}
                    />
                  </div>
                }
              >
                <div className="font-normal">
                  {link.subMenus.map((submenu, index) => (
                    <div
                      onClick={() => setIsShowModal(false)}
                      key={index}
                      className="py-1"
                    >
                      <Link key={index} to={link.link + submenu.link}>
                        {submenu.menu}
                      </Link>
                    </div>
                  ))}
                </div>
              </CustomModal>
            ) : (
              link.external ? (
                <Link to="#" onClick={() => {window.open(link.link)}}>{link.menu}</Link>
              ) : (
                <Link to={link.link}>{link.menu}</Link>
              )
            )}
          </div>
        </Flex>
      )}
    </>
  );
};

const NavigationBar = ({ userSignedIn }: NavigationBarProps) => {
  let history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const linksSigned: any[] = [
    {
      menu: "Explore",
      link: "/explore",
      active: "explore",
      subMenus: [
        { menu: "Find Djs", link: "/dj_explore" },
        { menu: "Find Venues", link: "/dj_venues" },
      ],
    },
    { menu: "Dashboard", link: "/dashboard", active: "dashboard" },
    { menu: "Message", link: "/message", active: "message" },
    { menu: "Main Site", link: "https://www.lynkevents.com/", active: "#", external: true },
    { menu: "Log Out", link: "#", active: "#" },
  ];

  const links: any[] = [
    {
      menu: "Explore",
      link: "/explore",
      active: "explore",
      subMenus: [
        { menu: "Find Djs", link: "/dj_explore" },
        { menu: "Find Venues", link: "/dj_venues" },
      ],
    },
    { menu: "Main Site", link: "https://www.lynkevents.com/", active: "#", external: true },
    { menu: "Log in", link: "/sign-in", active: "sign-in" },
  ];

  return (
    <Flex
      direction="row"
      cssClasses={["d-flex", "navbar"]}
      justifyContent="space-between"
      alignItems="center"
    >
      <div className="navbar-logo">
        <Link to="/">
          <Image width="100%" height="auto" src={Logo} />
        </Link>
      </div>
      <div
        className={
          showMenu ? "navbar-menus active d-flex" : "navbar-menus d-flex"
        }
        style={{
          background:
            showMenu &&
            (history.location.pathname === "/"
              ? "var(--color-primary)"
              : "white"),
        }}
      >
        <NavigationMenu
          links={userSignedIn ? linksSigned : links}
          activeLink={history.location.pathname}
        />
      </div>
      <div onClick={() => setShowMenu(!showMenu)} className="menu-icon">
        <Image width="30px" height="auto" src={Menu} />
      </div>
    </Flex>
  );
};

export default NavigationBar;
