import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const SuccessStory = ({ story }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const modalRef = useRef(null);

    const openModalWithVideo = (videoSrc) => {
        setCurrentVideo(videoSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentVideo(null);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex flex-col justify-between p-6 rounded-lg shadow-lg bg-white max-w-md w-full h-[450px]">
            {story.media ? (
                <Swiper modules={[Navigation]} navigation className="w-full h-48 rounded-md">
                    {story.media.map((item, index) =>
                        item.type === "image" ? (
                            <SwiperSlide key={index}>
                                <img
                                    src={item.src}
                                    alt={story.title}
                                    className="w-full h-48 object-contain rounded-md"
                                />
                            </SwiperSlide>
                        ) : (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-48">
                                    <img
                                        src={item.thumbnail || "/division-assets/kgotla/images/defaultThumbnail.png"}
                                        alt="Video Thumbnail"
                                        className="w-full h-48 object-contain rounded-md"
                                    />
                                    <button
                                        onClick={() => openModalWithVideo(item.src)}
                                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md text-white text-lg"
                                    >
                                        ▶ Play Video
                                    </button>
                                </div>
                            </SwiperSlide>
                        )
                    )}
                </Swiper>
            ) : (
                <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-48 object-cover rounded-md"
                />
            )}
            <h3 className="mt-4 text-2xl font-semibold text-green-800">{story.title}</h3>
            <p className="mt-2 text-gray-700">{story.description}</p>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div ref={modalRef} className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-4 relative">
            {/* Close Button */}
            <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
            >
                X
            </button>

                        <div className="relative w-full h-80">
                            <iframe
                                src={currentVideo}
                                allow="autoplay"
                                className="w-full h-full rounded-md"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const SuccessStories = () => {
    const stories = [
        
        {
        title: "Academic Lekgotla",
        description:
            "Tsitsing Kgotla ya Rakhudu held their Academic Lekgotla, celebrating a significant step towards the realization of the Vision 2035",
        media: [
            { type: "video", src: "https://www.youtube.com/embed/4J5WWCqEQl0", thumbnail: "/division-assets/kgotla/images/Logo.png" },
        ],
    },
        {
        title: "Kgosana Koketso Rakhudu Excellence Awards",
        description:
            "Our esteemed leader, Dr. Koketso Rakhudu, officially launched the “Kgosana Koketso Rakhudu Excellence Award “at Tsitsing, Mmanape Secondary School! This award aims to recognize and celebrate our outstanding learners who achieve an overall pass percentage of 80% and above. ",
        media: [
            { type: "image", src: "/division-assets/kgotla/images/ExcellenceAward.jpeg" },
            { type: "image", src: "/division-assets/kgotla/images/KgosanaExcellenceAwards.jpg" },
            { type: "image", src: "/division-assets/kgotla/images/ExcellenceAwardsGraduates.jpg" },
            { type: "image", src: "/division-assets/kgotla/images/KgosanaExcellenceAwards1.jpg" },
            { type: "video", src: "https://www.youtube.com/embed/LZpuvGZ_KjU", thumbnail: "/division-assets/kgotla/images/ExcellenceAward.jpeg" },
            { type: "video", src: "https://www.youtube.com/embed/Qu9QhtnIVaU", thumbnail: "/division-assets/kgotla/images/ExcellenceAward.jpeg" },
            { type: "video", src: "https://www.youtube.com/embed/iXcKkcTWxB0", thumbnail: "/division-assets/kgotla/images/ExcellenceAward.jpeg" },
            { type: "video", src: "https://www.youtube.com/embed/iQ4Nnm7I4jA", thumbnail: "/division-assets/kgotla/images/ExcellenceAward.jpeg" },
            { type: "video", src: "https://www.youtube.com/embed/U7fKbGhUS08", thumbnail: "/division-assets/kgotla/images/ExcellenceAward.jpeg" },
            { type: "video", src: "https://www.youtube.com/embed/b_GOVmVLxEc", thumbnail: "/division-assets/kgotla/images/ExcellenceAward.jpeg" },
        ],
    },
    {
        title: "SOKA 2025",
        description:
            "State of Kgotla Address (SOKA) is an annual Lekgotla in which Kgosana of the community Reports on the status of the community and outlines the development plans for the upcoming year.",
        media: [
            { type: "image", src: "/division-assets/kgotla/images/SOKA2025Event.png" },
            { type: "image", src: "/division-assets/kgotla/images/SOKA25Kgosana.jpg" },
            { type: "image", src: "/division-assets/kgotla/images/Soka25Sheila.png" },
            { type: "image", src: "/division-assets/kgotla/images/SOKA25KgosanaXSheila.png" },
            { type: "image", src: "/division-assets/kgotla/images/SOKA25Stakeholder.png" },
            { type: "image", src: "/division-assets/kgotla/images/PhemelaManape10Years.png" },
            { type: "video", src: "https://www.youtube.com/embed/ZcN4GMlxl6k?si=yFq0jKUl2iAqISYu", thumbnail: "/division-assets/kgotla/images/SOKA2025Event.png" },
        ],
    },
    {
        title: "10th Year Leadership Vision Impact Of Dr Koketso Rakhudu Chronicles Night 2025",
        description:
            "Chronicles Night of Stakeholder Engagements 2025",
        media: [
            { type: "image", src: "/division-assets/kgotla/images/DrKoketsoRakhuduChroniclesNight.jpeg" },
            { type: "image", src: "/division-assets/kgotla/images/ChroniclesKgosana.jpg" },
            { type: "image", src: "/division-assets/kgotla/images/ChroniclesOnalenna.jpg" },
            { type: "image", src: "/division-assets/kgotla/images/ChroniclesCommisioner.jpg" },
            { type: "image", src: "/division-assets/kgotla/images/ChroniclesPortia.jpg" },
            { type: "video", src: "https://www.youtube.com/embed/UMM4nSrZGPI?si=Jkwkm5YCRaY12K2J", thumbnail: "/division-assets/kgotla/images/DrKoketsoRakhuduChroniclesNight.jpeg" },
        ],
    },
    {
        title: "Kgosana Koketso Rakhudu Kwena Tlase High School visit",
        description:
            "Visit to the Kwena Tlase high school to inspire the learners",
        media: [
            { type: "video", src: "https://www.youtube.com/embed/hGkljwmGd7A?si=3ACP6EpZ4zK5M3vv", thumbnail: "/division-assets/kgotla/images/KgosanaLogo.png" },
        ],
    },
    {
        title: "9th Year of Leadership Celebration",
        description:
            "Celebrate Kgosana Koketso Rakhudu's 9 years of dedication and leadership with a special graduation ceremony and inauguration of Dr. Koketso Rakhudu as Chancellor of KRF CET.",
        media: [
            { type: "image", src: "/division-assets/kgotla/images/KgosanaChancellor.jpeg" },
            { type: "image", src: "/division-assets/kgotla/images/KgosanaChancellor2.jpeg" },
            { type: "image", src: "/division-assets/kgotla/images/KgosanaChancellor1.jpeg" },
        ],
    },
    {
        title: "Final Kgotla of 2024",
        description:
            "The final kgotla of 2024 was held on the 17th of November where Kgosana Koketso Rakhudu celebrated 9 years of leadership excellence and appreciated those who have played a pivotal role in his leadership term.",
        media: [
            { type: "image", src: "/division-assets/kgotla/images/DancingKgotla.jpeg" },
            { type: "image", src: "/division-assets/kgotla/images/DancingKgotla1.jpeg" },
            { type: "image", src: "/division-assets/kgotla/images/KgotlaStakeholder.jpeg" },
            { type: "video", src: "https://www.youtube.com/embed/djSne4Ktam0?si=tXzmwNovwqy7ZMwC", thumbnail: "/division-assets/kgotla/images/KgotlhaLogo.png" },
        ],
    },
    ];

     return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto text-center mb-8">
                <h2 className="text-3xl font-semibold text-green-700">Success Stories</h2>
                <p className="text-gray-600 mt-2">
                    Discover inspiring stories from our community members who have achieved remarkable milestones.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                {stories.map((story, index) => (
                    <SuccessStory key={index} story={story} />
                ))}
            </div>
        </section>
    );
};

export default SuccessStories;