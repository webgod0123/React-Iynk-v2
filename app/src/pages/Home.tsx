/* eslint-disable max-len */
import React from "react";

import Flex from "../components/shared/Flex";
import Image from "../components/shared/Image";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

import Banner1 from "../assets/images/banner1.png";
import Banner2 from "../assets/images/banner2.png";
import Ellipse1 from "../assets/images/Ellipse 1.png";
import Ellipse2 from "../assets/images/Ellipse 2.png";
import Ellipse3 from "../assets/images/Ellipse 3.png";
import Ellipse4 from "../assets/images/Ellipse 4.png";
import Image1 from "../assets/images/dance.png";
import Image2 from "../assets/images/bar-counter.png";
import Image3 from "../assets/images/dj-music.png";
import Image4 from "../assets/images/message.png";

const Home = () => {
  const userSignedIn: boolean = false;
  const flexItems: any[] = [
    {
      title: "Favourite DJ’s",
      description:
        "Lynk is a social marketplace for events. Connect with your favourite DJs and Bars for private or commercial events.",
      bgImage: Ellipse1,
      image: Image1,
      direction: "row",
    },
    {
      title: "Register LYNK",
      description:
        "Register your bar as a venue to find events of your choice. Create a profile page to communicate your bar essentials. Speak with potential clients using the Lynk Messenger.",
      bgImage: Ellipse2,
      image: Image2,
      direction: "row-reverse",
    },
    {
      title: "Potential Employers",
      description:
        "On Lynk a DJ can create their a public page to organize all their essential links and information. Lynk gives you the identity that event organizer and clubs need to make decisions. The Lynk Messenger allows direct communication to potential employers.",
      bgImage: Ellipse3,
      image: Image3,
      direction: "row",
    },
    {
      title: "LYNK Messenger",
      description:
        "As an event organizer, finding venues and reliable music is a challenge. Use the Lynk marketplace to filter for your preferences. Communicate with them directly using Lynk Messenger.",
      bgImage: Ellipse4,
      image: Image4,
      direction: "row-reverse",
    },
  ];

  return (
    <div>
      <NavigationBar userSignedIn={userSignedIn} />
      <div className="home-description">
        <div className="text-center home-description-texts">
          <div className="home-description-title font-bg">
            The quickest, cheapest way to market
          </div>
          <div className="home-description-text font-normal">
            Content here, content here&apos;, making it look like readable
            English. Many desktop publishing packages and web page editors now
            use Lorem Ipsum as their default model text, and a search for
            &apos;lorem ipsum&apos; will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose (injected humour and the like).
          </div>
          {!userSignedIn ? (
            <button className="login-btn bg-white border-0 font-normal" onClick={() => window.location.href ='/sign-in'}>
              Log In
            </button>
          ) : null}
        </div>
        <div className="banner1">
          <Image width="100%" height="auto" src={Banner1} />
        </div>
      </div>
      <div className="home-main">
        {flexItems.map((item, index) => (
          <Flex
            key={index}
            direction={item.direction}
            cssClasses={["flex-item", "row"]}
            justifyContent="space-between"
            alignItems="center"
          >
            <div className="col-md-6 p-4">
              <div className="item-title font-bg">{item.title}</div>
              <div className="item-description font-normal pr-4">
                {item.description}
              </div>
            </div>
            <div className="col-md-1" />
            <div className="col-md-5 p-4">
              <div className="position-relative">
                <Image src={item.bgImage} width="100%" height="auto" />
                <Image
                  width="100%"
                  height="auto"
                  src={item.image}
                  cssClasses={["position-absolute", "item-img"]}
                />
              </div>
            </div>
          </Flex>
        ))}
        <div className="banner2">
          <Image width="100%" height="auto" src={Banner2} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
