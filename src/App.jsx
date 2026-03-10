import { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/hero';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Footer from './components/Footer';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import AboutPage from './components/AboutPage';

function App() {
  const mainRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen">
      <Navbar />

      <main ref={mainRef} id="main" className="relative w-full">
        <Routes>
          <Route
            path="/"
            element={
              <div className="bg-[#f5f9eb]">
                <Hero />
                <Page2 />
                <Page3 />
              </div>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Page3 />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
