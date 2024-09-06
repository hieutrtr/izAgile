import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProposalPage from "./pages/ProposalPage";
import FeaturesPage from "./pages/FeaturesPage";

function App() {
  return (
    <Router>
      <div className="relative flex min-h-screen flex-col bg-white font-sans overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-tertiary px-10 py-3">
            <div className="flex items-center gap-4 text-secondary">
              {/* ... SVG and header content ... */}
            </div>
            <div className="flex flex-1 justify-end gap-8">
              <div className="flex items-center gap-9">
                <Link to="/" className="text-secondary text-sm font-medium leading-normal">Home</Link>
                <Link to="/proposal" className="text-secondary text-sm font-medium leading-normal">Proposal</Link>
                <Link to="/features" className="text-secondary text-sm font-medium leading-normal">Features</Link>
              </div>
              <div className="flex gap-2">
                <button className="btn btn-primary">
                  <span className="truncate">Sign in</span>
                </button>
                <button className="btn btn-secondary">
                  <span className="truncate">Get started</span>
                </button>
              </div>
            </div>
          </header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/proposal" element={<ProposalPage />} />
            <Route path="/features" element={<FeaturesPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
