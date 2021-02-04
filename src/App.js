import './tailwind.output.css';

import { Provider } from 'react-redux';
import store from './redux/store';

import Header from './Header';
import MainSection from './MainSection';
import ProjectsSection from './ProjectsSection';
import AboutMeSection from './AboutMeSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import ToastMessage from './ToastMessage';
import ProjectModal from './ProjectModal';
import AppProvider from './AppProvider';

function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <Header />
        <MainSection />
        <ProjectsSection />
        <AboutMeSection />
        <ContactSection />
        <Footer />
        <ToastMessage />
      </AppProvider>
      <ProjectModal />
    </Provider>
  );
}

export default App;
