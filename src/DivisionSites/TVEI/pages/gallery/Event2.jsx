import React from "react";
import GalleryCarousel from "../../components/GalleryCarousel";
import img1 from "../../assets/optimized/Limpopo.jpg";

const Event2 = () => {
  const images = [img1];
  return <GalleryCarousel title="TVEI: Limpopo Launch – Ha Kutama Traditional Authority" images={images} />;
};

export default Event2;
