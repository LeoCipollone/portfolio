import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";
import Tilt from 'react-parallax-tilt';
import { useContext } from "react";
import { LanguageProvider } from "../context/LanguageContext";
import LanguageContext from "../context/LanguageContext";
import Perfil from "../public/images/perfil.png";
import Resume from "../public/images/resume.png";
import Javascript from "../public/images/courses/jon-javascript.png";
import React from "../public/images/courses/jon-react.png";
import Iniciatec from "../public/images/courses/iniciatec.png";
import Henry from "../public/images/courses/henry.png";
import Corporativa from "../public/images/projects/corporativa.png";
import Movies from "../public/images/projects/movies.png";
import Calculadora from "../public/images/projects/calculadora.png";
import ChatBot from "../public/images/projects/chatbot.png";
import Background from "../public/images/fondo.jpg";
import Store from "../public/images/projects/store.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import HomeEng from '../components/HomeEng';
import HomeSpa from '../components/HomeSpa';

export default function Home() {
  useEffect(() => { AOS.init(); }, [])

  const { texts, handleLanguage } = useContext(LanguageContext);
  const homeSpa = texts.selectLanguage === "Idioma" && <HomeSpa />
  const homeEng = texts.selectLanguage === "Language" && <HomeEng />

  return (

    <LanguageProvider>
      <Head>
        <title>Portfolio - Front End Developer</title>
        <meta name="description" content="This is my personal page, where you can find my projects and some information about me." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='background-container'>
        <header className='header'>
          <div className="header-div">
            <h3 className="terminal">admin@leo-laptop:~$</h3>
            <h3 className="typing">cd Portfolio/Leonardo-Cipollone</h3>
          </div>
          <div className='language-container'>
            <button className='spanish-button' value="es" onClick={handleLanguage} />
            <button className='english-button' value="en" onClick={handleLanguage} />
          </div>
        </header>

        <section className="uno">
          <Image className='background' src={Background} alt="Background" layout='fill' objectFit='cover' objectPosition="center" />
          <div className='letters-container'>
            {homeSpa}
            {homeEng}
          </div>

          <div className="presentation-photo-box">
            <div className="presentation-content">
              <Image className="perfil" src={Perfil} alt="Leo Cipollone" layout="fill" />
              <h2>
                Leo Cipollone
                <br />
                <span>{texts.presentationParagraph}</span>
              </h2>
              <a
                href="https://www.linkedin.com/in/leocipollone/"
                target="_blank"
                rel="noreferrer"
              >
                {texts.presentationButton}
              </a>
            </div>
          </div>
        </section>
      </div>
      <section className="dos">
        <h2 data-aos="zoom-in-up" className="section-title">{texts.aboutTitle}</h2>
        <p data-aos="zoom-in-up" className="about-p">{texts.aboutParagraphOne}</p>
        <p data-aos="zoom-in-up" className="about-p">{texts.aboutParagraphTwo}</p>
        <Image data-aos="zoom-in-up" src={Resume} alt="resume" width={150} height={160} />
        <div data-aos="zoom-in-up" className="resume">
          <p>
            <a
              href="./assets/documents/Leonardo Cipollone - CV - Desarrollador Front End.pdf"
              target="_blank"
            >
              {texts.resumeSpanishButton}
            </a>
          </p>
          <p>
            <a
              href="./assets/documents/Leonardo Cipollone - CV - Front End Developer.pdf"
              target="_blank"
            >
              {texts.resumeEnglishButton}
            </a>
          </p>
        </div>

        <h2 data-aos="zoom-in-up" className="section-title">{texts.techsTitle}</h2>
        <div className="techs-logo">
          <ul>
            <div data-aos="zoom-in-up">
              <li>
                <span />
                <span />
                <span />
                <span />
                <span />
              </li>
            </div>
            <div data-aos="zoom-in-up">
              <li>
                <span />
                <span />
                <span />
                <span />
                <span />
              </li>
            </div>
            <div data-aos="zoom-in-up">
              <li>
                <span />
                <span />
                <span />
                <span />
                <span />
              </li>
            </div>
            <div data-aos="zoom-in-up">
              <li>
                <span />
                <span />
                <span />
                <span />
                <span />
              </li>
            </div>
            <div data-aos="zoom-in-up">
              <li>
                <span />
                <span />
                <span />
                <span />
                <span />
              </li>
            </div>
            <div data-aos="zoom-in-up">
              <li>
                <span />
                <span />
                <span />
                <span />
                <span />
              </li>
            </div>
            <div data-aos="zoom-in-up">
              <li>
                <span />
                <span />
                <span />
                <span />
                <span />
              </li>
            </div>
            <div data-aos="zoom-in-up">
              <li>
                <span />
                <span />
                <span />
                <span />
                <span />
              </li>
            </div>
            <div data-aos="zoom-in-up">
              <li>
                <span />
                <span />
                <span />
                <span />
                <span />
              </li>
            </div>
            <div data-aos="zoom-in-up">
              <li>
                <span />
                <span />
                <span />
                <span />
                <span />
              </li>
            </div>
            <div data-aos="zoom-in-up">
              <li>
                <span />
                <span />
                <span />
                <span />
                <span />
              </li>
            </div>
            <div data-aos="zoom-in-up">
              <li>
                <span />
                <span />
                <span />
                <span />
                <span />
              </li>
            </div>
            <div data-aos="zoom-in-up">
              <li>
                <span />
                <span />
                <span />
                <span />
                <span />
              </li>
            </div>
            <div data-aos="zoom-in-up">
              <li>
                <span />
                <span />
                <span />
                <span />
                <span />
              </li>
            </div>
          </ul>
        </div>

        <h2 data-aos="zoom-in-up" className="section-title">{texts.coursesTitle}</h2>
        <div className="courses-container">
          <div data-aos="zoom-in-up">
            <div className="courses-card">
              <div className="imgBx">
                <a
                  href="https://www.soyhenry.com/webfullstack"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={Henry} alt="Curso Henry" />
                </a>
              </div>
              <div className="content">
                <h3>Henry Bootcamp</h3>
                <p>{texts.coursesHenry}</p>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in-up">
            <div className="courses-card">
              <div className="imgBx">
                <a
                  href="https://www.accenture.com/ar-es/about/responsible-business/iniciatec"
                  target="_blank"
                  rel="noreferrer">
                  <Image src={Iniciatec} alt="Curso Iniciatec" />
                </a>
              </div>
              <div className="content">
                <h3>Iniciatec</h3>
                <p>{texts.coursesIniciatec}</p>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in-up">
            <div className="courses-card">
              <div className="imgBx">
                <a
                  href="https://www.youtube.com/playlist?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={Javascript} alt="Curso JavaScript" />
                </a>
              </div>
              <div className="content">
                <h3>JavaScript</h3>
                <p>{texts.coursesJavascript}</p>
              </div>
            </div>

          </div>
          <div data-aos="zoom-in-up">
            <div className="courses-card">
              <div className="imgBx">
                <a
                  href="https://www.youtube.com/playlist?list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={React} alt="Curso React" />
                </a>
              </div>
              <div className="content">
                <h3>React</h3>
                <p>{texts.coursesReact}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tres">
        <Image className='background' src={Background} alt="Background" layout='fill' objectFit='cover' objectPosition="center" />
        <h2 data-aos="zoom-in-up" className="section-title">{texts.projectsTitle}</h2>
        <div className="projects-container">
          <Tilt tiltReverse={true}>
            <div data-aos="zoom-in-up" className="cardWrap">
              <div className="card">
                <div className="cardBg">
                  <Image src={Store} alt="ecommerce" layout="fill" />
                </div>
                <div className="cardInfo">
                  <h3 className="cardTitle">E-commerce</h3>
                  <p>{texts.projectParagraph01}</p>
                  <button>
                    <a
                      href="https://github.com/LeoCipollone/store"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {texts.projectsButton01}
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://helentejidos.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {texts.projectsButton02}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt tiltReverse={true}>
            <div data-aos="zoom-in-up" className="cardWrap">
              <div className="card">
                <div className="cardBg">
                  <Image src={Corporativa} alt="Landing page" layout="fill" />
                </div>
                <div className="cardInfo">
                  <h3 className="cardTitle">Bolsas Sorin S.R.L</h3>
                  <p>{texts.projectParagraph02}</p>
                  <button>
                    <a
                      href="https://github.com/LeoCipollone/ds-sorin-bolsas"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {texts.projectsButton01}
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://leocipollone.github.io/ds-sorin-bolsas"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {texts.projectsButton02}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt tiltReverse={true}>
            <div data-aos="zoom-in-up" className="cardWrap">
              <div className="card project02">
                <div className="cardBg">
                  <Image src={Movies} alt="Movies Search" layout="fill" />
                </div>
                <div className="cardInfo">
                  <h3 className="cardTitle">TuPeli</h3>
                  <p>{texts.projectParagraph03}</p>
                  <button>
                    <a
                      href="https://github.com/LeoCipollone/movies"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {texts.projectsButton01}
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://leocipollone.github.io/movies/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {texts.projectsButton02}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt tiltReverse={true}>
            <div data-aos="zoom-in-up" className="cardWrap">
              <div className="card project04">
                <div className="cardBg">
                  <Image src={ChatBot} alt="Chatbot" layout="fill" />
                </div>
                <div className="cardInfo">
                  <h3 className="cardTitle">PrograMate</h3>
                  <p>{texts.projectParagraph04}</p>
                  <button>
                    <a
                      href="https://github.com/LeoCipollone/programate"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {texts.projectsButton01}
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://programate.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {texts.projectsButton02}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt tiltReverse={true}>
            <div data-aos="zoom-in-up" className="cardWrap">
              <div className="card project03">
                <div className="cardBg">
                  <Image src={Calculadora} alt="Calculadora app" layout="fill" />
                </div>
                <div className="cardInfo">
                  <h3 className="cardTitle">{texts.projectTitle03}</h3>
                  <p>{texts.projectParagraph05}</p>
                  <button>
                    <a
                      href="https://github.com/LeoCipollone/calculator"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {texts.projectsButton01}
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://leocipollone.github.io/calculator/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {texts.projectsButton02}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </Tilt>
        </div>

        <footer className="footer">
          <h2 data-aos="zoom-in-up" className="section-title">{texts.footerTitle}</h2>
          <p data-aos="zoom-in-up">{texts.footerParagraph01} <FontAwesomeIcon icon={faHeart} /> {texts.footerParagraph02}</p>
          <ul data-aos="zoom-in-up" className="social-icon">
            <li>
              <a href="https://www.linkedin.com/in/leocipollone/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/leocipollone_" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="mailto:leocipollonedev@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li>
              <a href="https://github.com/LeoCipollone" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
          <p data-aos="zoom-in-up" className="copyright">{texts.copyright} © 2022</p>
        </footer>

        <a className="whatsapp" href="https://wa.me/5492612592034" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
      </section>
    </LanguageProvider>


  )
}
