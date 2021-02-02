import './tailwind.output.css';

import { Provider } from 'react-redux';
import store from './redux/store';

import Header from './Header';
import MainSection from './MainSection';
import ProjectsSection from './ProjectsSection';
import AboutMeSection from './AboutMeSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <MainSection />
      <ProjectsSection />
      <AboutMeSection />
      <ContactSection />
      <Footer />
    </Provider>
  );
}

export default App;
