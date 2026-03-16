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
                                        src={item.thumbnail || "/images/defaultThumbnail.png"}
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
        title: "Dr Koketso Rakhudu in the United States of America",
        description:
            "Dr. Koketso Rakhudu is a distinguished Mandela Washington Fellow, part of the U.S. government’s flagship program for young African leaders under the Young African Leaders Initiative (YALI). He completed the Leaders in Public Management track at Georgia State University in Atlanta, Georgia, where he honed his skills in public policy, leadership and Public Health.",
        media: [
            { type: "image", src: "/images/KgosanaUSA.jpg" },
            { type: "image", src: "/images/StakeholdersUSA.jpg" },
            { type: "image", src: "/images/KgosanaGSU.jpg" },
            { type: "video", src: "https://www.youtube.com/embed/dKNB9kAKXAc", thumbnail: "/images/Logo.png" },
        ],
    },
        {
        title: "Academic Lekgotla",
        description:
            "Tsitsing Kgotla ya Rakhudu held their Academic Lekgotla, celebrating a significant step towards the realization of the Vision 2035",
        media: [
            { type: "video", src: "https://www.youtube.com/embed/4J5WWCqEQl0", thumbnail: "/images/Logo.png" },
        ],
    },
        {
        title: "World Engineering Day",
        description:
            "Join the Office of Kgosana Dr Koketso Rakhudu in celebrating World Engineering Day",
        media: [
            { type: "video", src: "https://www.youtube.com/embed/cIJ66Ywcm90", thumbnail: "/images/Logo.png" },
        ],
    },
        {
        title: "Q2 2025 Leadership Excellence Meeting ",
        description:
            "Q2 2025 Leadership Excellence Meeting , where executives presented insightful reports on their progress as well as a welcoming of 32 talented young professionals to the team.",
        media: [
            { type: "video", src: "https://www.youtube.com/embed/dLdFbV3DjCY", thumbnail: "/images/Logo.png" },
        ],
    },
        {
        title: "G20 South Africa 2025 Intergenerational Roundtable ",
        description:
            "The OOKKR Operations Team is attending the G20 Intergenerational Roundtable taking place at the Sandton Convention Center. With the theme “Solidarity, Equality, Sustainability,” this session brings together emerging and seasoned leaders to explore solutions to global challenges — from youth unemployment to sustainable development.  ",
        media: [
            { type: "image", src: "/images/G20Poster.jpeg" },
            { type: "image", src: "/images/G20Team.jpeg" },
        ],
    },
         {
        title: "World LPG Day 2025",
        description:
            "Join us as we advocate for LPG access and work together to create a brighter, more sustainable future for everyone! 💚  ",
        media: [
            { type: "image", src: "/images/LPGYouthDay.jpeg" },
            { type: "image", src: "/images/KgosanaStakesLPG.jpeg" },
            { type: "image", src: "/images/RefilweLPG.jpeg" },
            { type: "image", src: "/images/LPGCommunity.jpeg" },
            { type: "image", src: "/images/LPGStakeholders.jpeg" },
        ],
    },
        {
        title: "Kgosana Koketso Rakhudu Excellence Awards",
        description:
            "Our esteemed leader, Dr. Koketso Rakhudu, officially launched the “Kgosana Koketso Rakhudu Excellence Award “at Tsitsing, Mmanape Secondary School! This award aims to recognize and celebrate our outstanding learners who achieve an overall pass percentage of 80% and above. ",
        media: [
            { type: "image", src: "/images/ExcellenceAward.jpeg" },
            { type: "image", src: "/images/KgosanaExcellenceAwards.jpg" },
            { type: "image", src: "/images/ExcellenceAwardsGraduates.jpg" },
            { type: "image", src: "/images/KgosanaExcellenceAwards1.jpg" },
            { type: "video", src: "https://www.youtube.com/embed/LZpuvGZ_KjU", thumbnail: "/images/ExcellenceAward.jpeg" },
            { type: "video", src: "https://www.youtube.com/embed/Qu9QhtnIVaU", thumbnail: "/images/ExcellenceAward.jpeg" },
            { type: "video", src: "https://www.youtube.com/embed/iXcKkcTWxB0", thumbnail: "/images/ExcellenceAward.jpeg" },
            { type: "video", src: "https://www.youtube.com/embed/iQ4Nnm7I4jA", thumbnail: "/images/ExcellenceAward.jpeg" },
            { type: "video", src: "https://www.youtube.com/embed/U7fKbGhUS08", thumbnail: "/images/ExcellenceAward.jpeg" },
            { type: "video", src: "https://www.youtube.com/embed/b_GOVmVLxEc", thumbnail: "/images/ExcellenceAward.jpeg" },
        ],
    },
     {
        title: "Learners in Need Program in collaboration with Khuli Chana",
        description:
            "Dr Kgosana Koketso Rakhudu will be taking part in the Learners in Need Program alongside Khuli Chana",
        media: [
            { type: "image", src: "/images/KhuliChanaXDrRakhuduEvent.png" },
            { type: "image", src: "/images/DrRakhuduXKhuli.png" },
            { type: "image", src: "/images/DrRakhuduXKhuliStakeholders.png" },
            { type: "image", src: "/images/DrRakhuduuXKhuliKids.png" },
            { type: "image", src: "/images/KRFXKhuli.png" },
            { type: "video", src: "https://www.youtube.com/embed/j0FmVwesYw0?si=qKz9a27aJ09ffRSu", thumbnail: "/images/KhuliChanaXDrRakhuduEvent.png" },
        ],
    },
    {
        title: "SOKA 2025",
        description:
            "State of Kgotla Address (SOKA) is an annual Lekgotla in which Kgosana of the community Reports on the status of the community and outlines the development plans for the upcoming year.",
        media: [
            { type: "image", src: "/images/SOKA2025Event.png" },
            { type: "image", src: "/images/SOKA25Kgosana.jpg" },
            { type: "image", src: "/images/Soka25Sheila.png" },
            { type: "image", src: "/images/SOKA25KgosanaXSheila.png" },
            { type: "image", src: "/images/SOKA25Stakeholder.png" },
            { type: "image", src: "/images/PhemelaManape10Years.png" },
            { type: "video", src: "https://www.youtube.com/embed/ZcN4GMlxl6k?si=yFq0jKUl2iAqISYu", thumbnail: "/images/SOKA2025Event.png" },
        ],
    },
    {
        title: "10th Year Leadership Vision Impact Of Dr Koketso Rakhudu Chronicles Night 2025",
        description:
            "Chronicles Night of Stakeholder Engagements 2025",
        media: [
            { type: "image", src: "/images/DrKoketsoRakhuduChroniclesNight.jpeg" },
            { type: "image", src: "/images/ChroniclesKgosana.jpg" },
            { type: "image", src: "/images/ChroniclesOnalenna.jpg" },
            { type: "image", src: "/images/ChroniclesCommisioner.jpg" },
            { type: "image", src: "/images/ChroniclesPortia.jpg" },
            { type: "video", src: "https://www.youtube.com/embed/UMM4nSrZGPI?si=Jkwkm5YCRaY12K2J", thumbnail: "/images/DrKoketsoRakhuduChroniclesNight.jpeg" },
        ],
    },
    {
        title: "Kgosana Koketso Rakhudu Kwena Tlase High School visit",
        description:
            "Visit to the Kwena Tlase high school to inspire the learners",
        media: [
            { type: "video", src: "https://www.youtube.com/embed/hGkljwmGd7A?si=3ACP6EpZ4zK5M3vv", thumbnail: "/images/KgosanaLogo.png" },
        ],
    },
    {
        title: "The Village Economy Indaba Gala Dinner Baphalane",
        description:
            "The Village Economy Indaba Fundraising Gala Dinner in Baphalane Brits.",
        media: [
            { type: "image", src: "/images/TVEIGalaDinnerStakeholders.jpeg" },
            { type: "image", src: "/images/TVEIGalaDinnerKgosana.jpeg" },
            { type: "image", src: "/images/TVEIGalaDinnerStakeholder.jpeg" },
            { type: "image", src: "/images/TVEIGalaDinnerSimon.jpeg" },
            { type: "image", src: "/images/TVEIGalaDinnerKgosanaStakeholder.jpeg" },
            { type: "video", src: "https://www.youtube.com/embed/5YvVWLEn77U?si=0gp34uZJSN5tfVxN", thumbnail: "/images/TVEILogo.png" },
        ],
    },
    {
        title: "The Village Economy Indaba Launch in Baphalane Brits.",
        description:
            "The Village Economy Indaba marked a significant milestone in fostering collaboration, and driving sustainable development across the community.",
        media: [
            { type: "image", src: "/images/TVEILaunchBaphalaneKgosana.jpeg" },
            { type: "image", src: "/images/TVEILaunchBaphalaneSimon.jpeg" },
            { type: "image", src: "/images/TVEILaunchBaphalaneGG.jpeg" },
            { type: "image", src: "/images/TVEILaunchBaphalaneSpeaker.jpeg" },
            { type: "video", src: "https://www.youtube.com/embed/2-dlMUANWBY?si=V_0tWT3Lh_hhJuSg", thumbnail: "/images/TVEILogo.png" },
        ],
    },
    {
        title: "100 Families Christmas Donation",
        description:
            "Hakem Energies Community Christmas Party with Kgosana Koketso Rakhudu & Mrs Refilwe Sebothoma, CEO of Hakem Energies were celebrating the spirit of togetherness with the Christmas Party! To remind people that the true sense of the season lies in unity, kindness and giving back.",
        media: [
            { type: "image", src: "/images/KgosanaHelping.jpeg" },
            { type: "image", src: "/images/RefilweSebothomaHelping.jpeg" },
            { type: "image", src: "/images/ChristmasGiveaway.jpeg" },
            { type: "image", src: "/images/StakeholderGiveaways.jpeg" },
            { type: "image", src: "/images/DancingParty.jpeg" },
            { type: "video", src: "https://www.youtube.com/embed/weIWn4lkWjA?si=z1JGyhbmmcFW6va7", thumbnail: "/images/KRFDesign.jpg" },
            { type: "video", src: "https://www.youtube.com/embed/cul_JBj6JPQ?si=oQoBh2ovL1GmriFX", thumbnail: "/images/KRFDesign.jpg" },
            { type: "video", src: "https://www.youtube.com/embed/xfkCX8igXF0?si=ytV26O5MP_whiY9F", thumbnail: "/images/KRFDesign.jpg" },
            { type: "video", src: "https://www.youtube.com/embed/Mkn6ugRySl8?si=pBSl5UwkPsnpSSug", thumbnail: "/images/KRFDesign.jpg" },
            { type: "video", src: "https://www.youtube.com/embed/loqwTEyydCw?si=_bfGhQe3KMfy1Z5h", thumbnail: "/images/KRFDesign.jpg" },
            { type: "video", src: "https://www.youtube.com/embed/0qLqL1VkMxw?si=o-Po6Ut3ZOzr6rbZ", thumbnail: "/images/KRFDesign.jpg" },
        ],
    },
    {
        title: "The Village Economy Indaba Launch in Cape Town 05 December 2024",
        description:
            "The Village Economy Indaba marked a significant milestone in fostering collaboration, and driving sustainable development across the community.",
        media: [
            { type: "image", src: "/images/TVEICptStakeholders.jpeg" },
            { type: "image", src: "/images/TVEICPTTeam.jpeg" },
            { type: "image", src: "/images/TVEICPT1.jpeg" },
            { type: "video", src: "https://youtube.com/shorts/MLEizOe5sQs?feature=share", thumbnail: "/images/TVEILogo.png" },
            { type: "image", src: "/images/TVEICptSB.jpg" },
        ],
    },
    {
        title: "The Village Economy Indaba Launch in Limpopo 02 December 2024",
        description:
            "The Village Economy Indaba marked a significant milestone in fostering collaboration, and driving sustainable development across the community.",
        media: [
            { type: "image", src: "/images/TVEILimpopoKgosana.jpeg" },
            { type: "image", src: "/images/TVEILimpopoStakeholders.jpeg" },
            { type: "image", src: "/images/TVEILimpopo1.jpeg" },
            { type: "image", src: "/images/TVEILimpopoStakeholder1.jpeg" },
            { type: "image", src: "/images/TVEILimpopoStakeholder.jpeg" },
            { type: "image", src: "/images/TVEILimpopoSB.jpg" },
        ],
    },
    {
        title: "KRF Graduation ceremony",
        description:
            "The Koketso Rakhudu Foundation (KRF) Graduation Ceremony is a celebration of achievement, empowerment, and growth. Scheduled for 29 November 2024, this prestigious event marks the culmination of the hard work and dedication of individuals who have completed various skills development, entrepreneurship, and leadership training programs offered by KRF.",
        media: [
            { type: "image", src: "/images/KRFKgosanaGraduation.JPG" },
            { type: "image", src: "/images/KRFGraduationCrowd.JPG" },
            { type: "video", src: "https://www.youtube.com/embed/4NZktnrtKXQ?si=Ub7gNJ2P3lWinIKq", thumbnail: "/images/KRFLogo.png" },
        ],
    },
    {
        title: "9th Year of Leadership Celebration",
        description:
            "Celebrate Kgosana Koketso Rakhudu's 9 years of dedication and leadership with a special graduation ceremony and inauguration of Dr. Koketso Rakhudu as Chancellor of KRF CET.",
        media: [
            { type: "image", src: "/images/KgosanaChancellor.jpeg" },
            { type: "image", src: "/images/KgosanaChancellor2.jpeg" },
            { type: "image", src: "/images/KgosanaChancellor1.jpeg" },
        ],
    },
    {
        title: "Final Kgotla of 2024",
        description:
            "The final kgotla of 2024 was held on the 17th of November where Kgosana Koketso Rakhudu celebrated 9 years of leadership excellence and appreciated those who have played a pivotal role in his leadership term.",
        media: [
            { type: "image", src: "/images/DancingKgotla.jpeg" },
            { type: "image", src: "/images/DancingKgotla1.jpeg" },
            { type: "image", src: "/images/KgotlaStakeholder.jpeg" },
            { type: "video", src: "https://www.youtube.com/embed/djSne4Ktam0?si=tXzmwNovwqy7ZMwC", thumbnail: "/images/KgotlhaLogo.png" },
        ],
    },
    {
        title: "The Village Economy Indaba Launch 01 November 2024",
        description:
            "The Village Economy Indaba marked a significant milestone in fostering collaboration, celebrating Kgosana Koketso Rakhudu's leadership, and driving sustainable development across the community.",
        media: [
            { type: "image", src: "/images/TVEIRTB.jpg" },
            {
                type: "video",
                src: "https://drive.google.com/uc?export=download&id=1zVxBsaVYQH-pSe8naFzqryoF-7IZktOh",
                thumbnail: "/images/TVEILogo.png",
            },
        ],
    },
    {
        title: "Agricultural Advancements",
        description:
            "Modern farming techniques were introduced, boosting productivity and creating a steady income stream for farmers.",
        media: [{ type: "image", src: "/images/Communityengagement.jpeg" }],
    },
    {
        title: "Youth Entrepreneurship",
        description:
            "Young entrepreneurs were able to launch their own startups, creating jobs and fostering innovation in their communities.",
        image: "/images/KgosanaYouthStakeholders.jpeg",
    },
    {
        title: "Empowering Rural Women",
        description:
            "This initiative helped women in rural areas build sustainable businesses and contribute to their local economy.",
        image: "/images/constructionlearners.jpeg",
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