import '../App.css';
import About from './About';
import Courses from './Courses';
import Footer from './Footer';
import Header from './/Header';
import Presentation from './Presentation';
import Projects from './Projects';
import Techs from './Techs';
import Whatsapp from './Whatsapp';
import { LanguageProvider } from '../context/LanguageContext';


function MyPage() {
  return (
    <>
      <LanguageProvider>
        <Header />
        <Presentation />
        <section className="dos">
          <About />
          <Techs />
          <Courses />
        </section>
        <div className="background">
          <Projects />
          <Footer />
          <Whatsapp />
        </div>
      </LanguageProvider>
    </>
  );
}

export default MyPage;
