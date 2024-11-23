import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";

import MainPage from './react_components/pages/main';
import FrontendWorksPage from './react_components/pages/frontend_works_page';
import BackendWorksPage from './react_components/pages/backend_works_page';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<MainPage />}
      />
      <Route
        path="/frontend_projects"
        element={<FrontendWorksPage />}
      />
      <Route 
        path="/backend_projects"
        element={<BackendWorksPage />}
      />
    </Routes>
  );
}

export default App;
