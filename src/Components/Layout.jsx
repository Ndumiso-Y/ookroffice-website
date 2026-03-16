import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import LoadingWarthog from './LoadingWarthog';
import VideoPopupCard from './VideoPopupCard';

function Layout({ children }) {
  const [loading, setLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setLoading(false);
      // Small delay so the page content settles before the popup appears
      const popupTimer = setTimeout(() => setShowVideo(true), 400);
      return () => clearTimeout(popupTimer);
    }, 500);
    return () => clearTimeout(loadTimer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {loading ? (
        <LoadingWarthog />
      ) : (
        <>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          {showVideo && <VideoPopupCard onClose={() => setShowVideo(false)} />}
        </>
      )}
    </div>
  );
}

export default Layout;
