import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { CategoryPage } from './pages/CategoryPage';
import { PopularPage } from './pages/PopularPage';
import { LatestPage } from './pages/LatestPage';
import { SearchProvider } from './context/SearchContext';

export default function App() {
  return (
    <Router>
      <SearchProvider>
        <div className="min-h-screen bg-black px-4 sm:px-6 lg:px-8"> {/* Added padding here */}
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:id" element={<CategoryPage />} />
              <Route path="/popular" element={<PopularPage />} />
              <Route path="/latest" element={<LatestPage />} />
            </Routes>
          </main>
        </div>
      </SearchProvider>
    </Router>
  );
}
