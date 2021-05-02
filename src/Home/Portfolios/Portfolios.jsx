import React from "react";
import PortfolioCard from "./PortfolioCard/PortfolioCard";
import "./Portfolios.css";

import Ebazar from './PortfolioCard/ebazar.PNG';
import Car from './PortfolioCard/car.PNG';
import Sport from './PortfolioCard/sport.PNG';
import Dfs from './PortfolioCard/dfs.PNG';


const projectsData = [
  {
    name:'E-Bazar Bd',
    imgLink:Ebazar,
    projectLink: "https://relaxed-engelbart-71e3a6.netlify.app/",
    client: "https://github.com/misbah41/E-Shop-Bangla",
    server: "https://github.com/misbah41/E-Bazar-Server",
    useTech:
      "React Hooks, React Router, Material UI, Bootstrap, React Bootstrap, Node And Express js, Mongodb",
  },
  {
    name:'Car Repair Shop',
    imgLink:Car,
    projectLink: "https://car-repairing-6310c.web.app/",
    client: "https://github.com/misbah41/Car-Reapairing-Shop",
    server: "https://github.com/misbah41/Car-Repaire-Server",
    useTech:
      "React Hooks, React Router, Material UI, Bootstrap, React Bootstrap, Node And Express js, Mongodb ",
  },
  {
    name:'Sport Premier League',
    imgLink:Sport,
    projectLink: "https://misbha-hasan-spotrs.netlify.app/",
    client: "https://github.com/misbah41/App-Sports",
    server: "",
    useTech:
      "React Hooks, React Router, Material UI, Bootstrap, React Bootstrap ",
  },
  {
    name:'Dsf Explained',
    imgLink:Dfs,
    projectLink: "https://dfsexplained.com/",
    client: "https://github.com/misbah41/DFS-Explained",
    server: "",
    useTech: "HTML5, CSS3, Javascript, Jquery, Bootstrap",
  }
];

const Portfolios = () => {
  return (
    <section id="portfolio" className='portfolioSec'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12">
            {projectsData.map((data) => (
              <PortfolioCard data={data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolios;
