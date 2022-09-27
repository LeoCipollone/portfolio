import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Techs from './components/Techs';
import Whatsapp from './components/Whatsapp';
import { LanguageProvider } from './context/LanguageContext';


function App() {
  return (
    <div className='App'>
      <LanguageProvider>
        <Header />
        <Presentation />
        <section className="dos">
          <About />
          <Techs />
          <Courses />
        </section>
        <div className="tres background">
          <Projects />
          <Footer />
          <Whatsapp />
        </div>
      </LanguageProvider>
    </div>
  );
}

export default App;
