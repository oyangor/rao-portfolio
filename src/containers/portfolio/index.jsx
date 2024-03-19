import React from "react";
import { Link } from 'react-router-dom'
import { FaBriefcase } from "react-icons/fa";
import raostore from "../../images/raostore.png";
import raotask from "../../images/raotask.png";
import raofoodapp from "../../images/raofoodapp.png";
import raoamazon from "../../images/raoamazon.png";
import rao25projects from '../../images/25projects.png'
import "./styles.scss";
import { useState } from "react";
import PageHeaderContent from "../../components/pageHeader";

const portfolioData = [
  {
    id: 2,
    name: "Ecommerce",
    image: raostore,
    link: "https://rao-e-commerce.netlify.app/",
  },
  {
    id: 3,
    name: "Todo App",
    link: "https://rao-task-manager.netlify.app/",
    image: raotask,
  },

  {
    id: 2,
    name: "Food Recipe",
    image: raofoodapp,
    link: "https://raofoodapp.netlify.app/",
  },
  {
    id: 3,
    name: "Amazon clone",
    image: raoamazon,
    link: "https://rao-amazon.netlify.app/",
  },
  {
    id: 2,
    name: "25 Mini Projects",
    image: rao25projects,
    link: "https://rao25projects.netlify.app/",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  // console.log("====================================");
  // console.log(hoveredValue);
  // console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  // console.log(filteredItems);

  function handleRoutingtoPage(link) {
    window.open(link, '_blank')
  }

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<FaBriefcase size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item mb-[50px] "
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >

              <div className="portfolio__content__cards__item__img-wrapper">

                <a>
                  <img alt={item.name} src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p className=" overflow-hidden">{item.name}</p>
                    <button className="text-white font-medium" onClick={() => handleRoutingtoPage(item.link)}>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
