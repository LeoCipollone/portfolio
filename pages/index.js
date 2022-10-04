import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"; 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
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

export default function Home() {
  const { texts, handleLanguage } = useContext(LanguageContext);

  return (

    <LanguageProvider>
      <Head>
        <title>Portfolio - Front End Developer</title>
        <meta name="description" content="This is my personal page, where you can find my projects and some information about me." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='header'>
        <div className="header-div">
          <h3 className="terminal">admin@leo-laptop:~$</h3>
          <h3 className="typing">cd Portfolio/Leonardo-Cipollone</h3>
        </div>
        <div className='language-container'>
          <button className='spanish-button' value="es" onClick={handleLanguage} />
          <button className='english-button' value="en" onClick={handleLanguage}/>
        </div>

      </header>
      <section className="uno">
        <Image className='background' src={Background} alt="Background" layout='fill' objectFit='cover' objectPosition="center" />
        <div className="caja-central">
          <div className="presentation-photo-box">
            <div className="presentation-content">
              <Image className="perfil" src={Perfil} alt="Leo Cipollone" layout="fill" />
              <h2>
                Leo Cipollone
                <br />
                <span>Frontend Developer</span>
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

          <div className="caja-presentacion">
            <div>
              <h1 className="section-title">{texts.presentationTitle}</h1>
              <p className="presentacion">
                {texts.presentationOne}
                <br />
                <br />
                {texts.presentationTwo}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="dos">
        <h2 className="section-title">{texts.aboutTitle}</h2>
        <p className="about-p">{texts.aboutParagraphOne}</p>
        <p className="about-p">{texts.aboutParagraphTwo}</p>
        <Image src={Resume} alt="resume" width={150} height={160} />
        <div className="resume">
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

        <h2 className="section-title">{texts.techsTitle}</h2>
        <div className="techs-logo">
          <ul>
            <li>
              <span />
              <span />
              <span />
              <span />
              <span />
            </li>
            <li>
              <span />
              <span />
              <span />
              <span />
              <span />
            </li>
            <li>
              <span />
              <span />
              <span />
              <span />
              <span />
            </li>
            <li>
              <span />
              <span />
              <span />
              <span />
              <span />
            </li>
            <li>
              <span />
              <span />
              <span />
              <span />
              <span />
            </li>
            <li>
              <span />
              <span />
              <span />
              <span />
              <span />
            </li>
            <li>
              <span />
              <span />
              <span />
              <span />
              <span />
            </li>
            <li>
              <span />
              <span />
              <span />
              <span />
              <span />
            </li>
            <li>
              <span />
              <span />
              <span />
              <span />
              <span />
            </li>
            <li>
              <span />
              <span />
              <span />
              <span />
              <span />
            </li>
            <li>
              <span />
              <span />
              <span />
              <span />
              <span />
            </li>
          </ul>
        </div>

        <h2 className="section-title">{texts.coursesTitle}</h2>
        <div className="courses-container">
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
      </section>

      <section className="tres">
      <Image className='background' src={Background} alt="Background" layout='fill' objectFit='cover' objectPosition="center" />
        <h2 className="section-title">{texts.projectsTitle}</h2>
        <div className="projects-container">
          <Tilt tiltReverse={true}>
            <div className="cardWrap">
              <div className="card">
                <div className="cardBg">
                  <Image src={Corporativa} alt="Landing page" layout="fill" />
                </div>
                <div className="cardInfo">
                  <h3 className="cardTitle">Bolsas Sorin S.R.L</h3>
                  <p>{texts.projectParagraph01}</p>
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
            <div className="cardWrap">
              <div className="card project02">
                <div className="cardBg">
                  <Image src={Movies} alt="Movies Search" layout="fill" />
                </div>
                <div className="cardInfo">
                  <h3 className="cardTitle">TuPeli</h3>
                  <p>{texts.projectParagraph02}</p>
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
            <div className="cardWrap">
              <div className="card project03">
                <div className="cardBg">
                  <Image src={Calculadora} alt="Calculadora app" layout="fill" />
                </div>
                <div className="cardInfo">
                  <h3 className="cardTitle">{texts.projectTitle03}</h3>
                  <p>{texts.projectParagraph03}</p>
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
          <Tilt tiltReverse={true}>
            <div className="cardWrap">
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
        </div>

        <footer className="footer">
          <h2 className="section-title">{texts.footerTitle}</h2>
          <ul className="social-icon">
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
          <p className="copyright">{texts.copyright} © 2022</p>
        </footer>

        <a className="whatsapp" href="https://wa.me/5492612592034" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
      </section>
    </LanguageProvider>
    

  )
}
