import React from "react";
import "./Service.css";
import Clean from "./clean.png";
import Design from "./design.png";
import Dev from "./dev.png";
import ServicesCard from "./ServicesCard/ServicesCard";



const servicesData = [
  {
    serviceTitle: "Web Design",
    servPost: `Nowadays modern design and clean design helps a lot to fascinate the users. That is why modern design is very important for our website `,
    servIcon: Design,
  },
  {
    serviceTitle: "Web Development",
    servPost: `We develop our site to give it full life of design because our site has different kinds of dynamic work with our users so we make a static site dynamic.`,
    servIcon: Dev,
  },
  {
    serviceTitle: "Clean Code",
    servPost: `Clean code is very important for our project because we always have to maintain our web app. If our code is not clean then we have to read a lot of problems so clean code is very important for us.`,
    servIcon: Clean,
  },
];

const Service = () => {
  return (
    <section id="service">
      <div className="container-fluid pt-5 pb-5">
        <div className="styles-div">
          <h3 className="service-tiltle text-center">
            WHAT I DO PROVIDE SERVICES
          </h3>
        </div>
        <div className="row mt-5 justify-content-center">
          {servicesData.map((data) => (
            <div className="col-sm-6 col-md-6 col-lg-4">
              {" "}
              <ServicesCard data={data}/>{" "}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
