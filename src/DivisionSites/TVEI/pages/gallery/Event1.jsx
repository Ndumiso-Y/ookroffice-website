import React from "react";
import GalleryCarousel from "../../components/GalleryCarousel";
import img1 from "../../assets/optimized/61.jpg";

const Event1 = () => {
  const images = [img1]; // add more imports and push here later
  return <GalleryCarousel title="Village Economy Indaba Inauguration – 1 November 2024" images={images} />;
};

export default Event1;
