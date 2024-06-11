import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import InteractiveForm from './components/InteractiveForm.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/interactive-form" element={<InteractiveForm />} />
      </Routes>
    </Router>
  );
}

export default App;
