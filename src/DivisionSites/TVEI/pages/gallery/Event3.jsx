import React from "react";
import GalleryCarousel from "../../components/GalleryCarousel";
import img1 from "../../assets/optimized/capetown.png";

const Event3 = () => {
  const images = [img1];
  return <GalleryCarousel title="TVEI: Cape Town Launch – December 2024" images={images} />;
};

export default Event3;
