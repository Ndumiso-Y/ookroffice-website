import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import LoadingWarthog from './LoadingWarthog';
import VideoPopupCard from './VideoPopupCard';
import CookieBanner from './CookieBanner';

function Layout({ children }) {
  const [loading, setLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setLoading(false);
      const alreadySeen = sessionStorage.getItem('ookr_popup_shown');
      if (!alreadySeen) {
        const popupTimer = setTimeout(() => {
          setShowVideo(true);
          sessionStorage.setItem('ookr_popup_shown', '1');
        }, 400);
        return () => clearTimeout(popupTimer);
      }
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
          <CookieBanner />
        </>
      )}
    </div>
  );
}

export default Layout;
