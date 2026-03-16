import React from "react";
import GalleryCarousel from "../../components/GalleryCarousel";
import img1 from "../../assets/optimized/pic2.jpg";

const Event5 = () => {
  const images = [img1];
  return <GalleryCarousel title="World LPG Day – June 2025" images={images} />;
};

export default Event5;
