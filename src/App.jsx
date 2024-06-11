import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CostCalculator from './components/CostCalculator.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/cost-calculator" element={<CostCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
