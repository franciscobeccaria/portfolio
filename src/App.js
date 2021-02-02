import './tailwind.output.css';

import { Provider } from 'react-redux';
import store from './redux/store';

import Header from './Header';
import MainSection from './MainSection';
import ProjectsSection from './ProjectsSection';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <MainSection />
      <ProjectsSection />
    </Provider>
  );
}

export default App;
