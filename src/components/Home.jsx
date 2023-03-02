import React from "react";
import NavBar from "./Navbar";
import miguel from "../assets/img/mifot3.png";
import antonio from "../assets/img/llaves.png";
import mayor from "../assets/img/mayor-menor.png";
import react from "../assets/img/react2.png";
import js from "../assets/img/js3.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import bootstrap from "../assets/img/bootstrap.png";
import linkelind from "../assets/img/link1.png";
import ws from "../assets/img/ws2.png";
import gith from "../assets/img/git.png";
import logogi from "../assets/img/logo_github.png";
import logolink from "../assets/img/logo_linkedin.png";
import logows from "../assets/img/logo_ws.png";
import logogm from "../assets/img/logo_gmail.png";
import gmail from "../assets/img/gmail1.png";
import proj01 from "../assets/img/proj1.jpeg";
import proj02 from "../assets/img/proj2.jpeg";
import proj03 from "../assets/img/proj3.jpeg";
import proj04 from "../assets/img/proj4.jpeg";
import proj05 from "../assets/img/proj5.jpeg";
import Carousel from "react-bootstrap/Carousel";
import SliderLateral from "./SliderLateral";


const Home = () => {

  return (
    
    <div>
      
      <NavBar />
      <h1></h1>
      <h2 className="name">
        {" "}
        Developer: Miguel Antonio Martinez{" "}
      </h2>

      <div className="hability">
        <div className="container-profiler ">
          <div className="simbolos">
            <img className="imgeA" src={antonio} alt="" />

            <img className="imgeC" src={mayor} alt="" />
          </div>

          
            <a
              href="http://wa.me/+18294616427"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="imgew" src={ws} alt="" />
            </a>
          

          
            <a
              href="https://www.linkedin.com/in/miguel-antonio-martinez-901b4b24b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="imgel" src={linkelind} alt="" />
            </a>
          

          <div className="my-photo">
            <img className="imgeB" src={miguel} alt="" />
          </div>
          
          <a
            href="https://github.com/MMartinez2820/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="imgeg" src={gith} alt="" />
          </a>
          <a
            href="mailto:201808724@p.uapa.edu.do"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="imgegm" src={gmail} alt="" />
          </a>
          
        </div>

        <SliderLateral>
          <img src={react} alt="" />
          <img src={js} alt="" />
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={bootstrap} alt="" />
        </SliderLateral>
      </div>
      <div className="cv-container">
        <h3>CV</h3>
        <form className="download-cv">
          <a
            href="https://docs.google.com/document/d/1dSiclqZr4r4fJGoRk-wdacvjAZQoREy5/edit?usp=share_link&ouid=115438702367800177254&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
          >Download
            {/* <button>Download</button> */}
          </a>
        </form>
        {/* <button type="submit" formaction="">Download</button> */}
      </div>
      <div className="porftolio">
        <div className="container-title-project">
          <h2 className="proj">Project</h2>
        </div>
        <div className="d-flex justify-content-center w-100%">
          <Carousel className="slider">
            <Carousel.Item interval={1000}>
              <img className="image-slider-porfolio" src={proj02} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img className="image-slider-porfolio" src={proj01} alt="Second slide" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="image-slider-porfolio" src={proj05} alt="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="image-slider-porfolio" src={proj04} alt="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="image-slider-porfolio" src={proj03} alt="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <footer>
        <div className="abaut-me-footer">
          <h3 className="text-success text-opacity-45">About</h3>
          <p>
            Soy de Republica Dominicana, me dedico a la programacion, al
            analisis y diseños de aplicaiones.{" "}
          </p>
        </div>
        <div className="technologies-footer">
          <h3 className="text-warning text-opacity-75">Technologies</h3>
          <p>
            React, JS, HTML, CSS, NodeJS, Bootstrap, Tailwind, C#, SQL Sever,
            Postgres, MariaDB, GItHub, Tableu, Trello, Render.
          </p>
        </div>
        <div className="projects-footer">
          <h3 className="text-primary text-opacity-50">Projects</h3>

          <p>Desktop, App, Manejo de Api, Sistemas Facturacion.</p>
        </div>

        <div className="images-footer">
          <img
            className="container-lg d-inline-block "
            src={logows}
            alt=""
          />
          <img
            className="container-lg d-inline-block"
            src={logolink}
            alt=""
          />
          <img
            className="container-lg d-inline-block"
            src={logogm}
            alt=""
          />
          <img
            className="container-lg d-inline-block"
            src={logogi}
            alt=""
          />
        </div>
      </footer>
    </div>
   
  );
};


export default Home;
