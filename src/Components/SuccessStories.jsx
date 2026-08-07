import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const SuccessStory = ({ story }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [isImageGalleryOpen, setIsImageGalleryOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const modalRef = useRef(null);

    const isFeatured = story.featuredUntil && new Date() <= new Date(story.featuredUntil);

    const openModalWithVideo = (videoSrc) => {
        setCurrentVideo(videoSrc);
        setIsModalOpen(true);
    };

    const openImageGallery = (index) => {
        setCurrentImageIndex(index);
        setIsImageGalleryOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentVideo(null);
    };

    const closeImageGallery = () => {
        setIsImageGalleryOpen(false);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        const imageMedia = story.media.filter(item => item.type === "image");
        setCurrentImageIndex((prev) => (prev + 1) % imageMedia.length);
    };

    const prevImage = () => {
        const imageMedia = story.media.filter(item => item.type === "image");
        setCurrentImageIndex((prev) => (prev - 1 + imageMedia.length) % imageMedia.length);
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
        <div className={`relative flex flex-col justify-between p-6 rounded-lg shadow-lg bg-white max-w-md w-full h-[450px] ${isFeatured ? 'ring-2 ring-green-700 shadow-xl' : ''}`}>
            {isFeatured && (
                <span className="absolute top-3 right-3 bg-green-800 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow z-10">
                    Featured
                </span>
            )}
            {story.media ? (
                <Swiper modules={[Navigation]} navigation className="w-full h-48 rounded-md bg-gray-100">
                    {story.media.map((item, index) =>
                        item.type === "image" ? (
                            <SwiperSlide key={index}>
                                <div
                                    onClick={() => openImageGallery(story.media.filter(m => m.type === "image").findIndex(m => m.src === item.src))}
                                    className="cursor-pointer h-48 flex items-center justify-center"
                                >
                                    <img
                                        src={item.src}
                                        alt={story.title}
                                        className="max-w-full max-h-full object-contain rounded-md"
                                    />
                                </div>
                            </SwiperSlide>
                        ) : (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-48 bg-gray-900 rounded-md">
                                    <img
                                        src={item.thumbnail || "/images/KgosanaLogo.png"}
                                        alt="Video Thumbnail"
                                        loading="lazy"
                                        className="w-full h-48 object-contain rounded-md"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "/images/KgosanaLogo.png";
                                        }}
                                    />
                                    <button
                                        onClick={() => openModalWithVideo(item.src)}
                                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md text-white text-lg font-semibold hover:bg-opacity-40 transition-opacity"
                                    >
                                        ▶ Play Video
                                    </button>
                                </div>
                            </SwiperSlide>
                        )
                    )}
                </Swiper>
            ) : (
                <div
                    onClick={() => story.image && setIsImageGalleryOpen(true)}
                    className="cursor-pointer h-48 bg-gray-100 flex items-center justify-center rounded-md"
                >
                    <img
                        src={story.image}
                        alt={story.title}
                        className="max-w-full max-h-full object-contain rounded-md"
                    />
                </div>
            )}
            <h3 className="mt-4 text-2xl font-semibold text-green-800">{story.title}</h3>
            <div className="mt-2">
                <p className={`text-gray-700 ${isExpanded ? '' : 'line-clamp-3'}`}>
                    {story.description}
                </p>
                {story.description && story.description.length > 150 && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-green-700 hover:text-green-900 text-sm font-semibold mt-1"
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                )}
            </div>

            {/* Video Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div ref={modalRef} className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-4 relative">
                        <button
                            onClick={closeModal}
                            aria-label="Close video"
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
                        >
                            ✕
                        </button>
                        <div className="relative w-full h-80">
                            {currentVideo && (currentVideo.endsWith(".mp4") || currentVideo.endsWith(".webm")) ? (
                                <video
                                    src={currentVideo}
                                    controls
                                    autoPlay
                                    playsInline
                                    className="w-full h-full rounded-md object-contain bg-black"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <iframe
                                    src={currentVideo}
                                    title="Impact story video"
                                    allow="autoplay; fullscreen"
                                    allowFullScreen
                                    className="w-full h-full rounded-md"
                                ></iframe>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Image Gallery Modal */}
            {isImageGalleryOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
                    <button
                        onClick={closeImageGallery}
                        className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300 z-10"
                    >
                        ✕
                    </button>

                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-5xl font-bold hover:text-gray-300 z-10"
                    >
                        ‹
                    </button>

                    <div className="max-w-6xl max-h-[90vh] flex items-center justify-center px-16">
                        {story.media ? (
                            <img
                                src={story.media.filter(item => item.type === "image")[currentImageIndex]?.src}
                                alt={story.title}
                                className="max-w-full max-h-[90vh] object-contain"
                            />
                        ) : (
                            <img
                                src={story.image}
                                alt={story.title}
                                className="max-w-full max-h-[90vh] object-contain"
                            />
                        )}
                    </div>

                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-5xl font-bold hover:text-gray-300 z-10"
                    >
                        ›
                    </button>

                    {story.media && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                            {currentImageIndex + 1} / {story.media.filter(item => item.type === "image").length}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const SuccessStories = () => {
    const stories = [
        {
            title: "CEO’s Breakfast at St Michael’s Primary School",
            description: "The CEO’s Breakfast at St Michael’s Primary School brought together mentorship, recognition and strategic support around a shared investment in the next generation. The engagement celebrated academic excellence while reinforcing the importance of leadership, discipline, dignity and opportunity. By creating spaces in which learners are recognised and encouraged to see beyond their circumstances, the initiative reflects a broader commitment to developing confident young people equipped to shape their future.",
            media: [
                {
                    type: "video",
                    src: "/Impact/CEO BREAKFAST/ceo-breakfast-st-michaels.mp4",
                    thumbnail: "/Impact/CEO BREAKFAST/DSC00746.jpg"
                },
                { type: "image", src: "/Impact/CEO BREAKFAST/DSC00764.jpg" },
                { type: "image", src: "/Impact/CEO BREAKFAST/DSC00770.jpg" },
                { type: "image", src: "/Impact/CEO BREAKFAST/DSC00788.jpg" },
                { type: "image", src: "/Impact/CEO BREAKFAST/DSC00799.jpg" },
                { type: "image", src: "/Impact/CEO BREAKFAST/DSC00809.jpg" },
                { type: "image", src: "/Impact/CEO BREAKFAST/DSC00815.jpg" },
                { type: "image", src: "/Impact/CEO BREAKFAST/DSC00826.jpg" },
                { type: "image", src: "/Impact/CEO BREAKFAST/DSC00871.jpg" },
                { type: "image", src: "/Impact/CEO BREAKFAST/DSC02232.jpg" }
            ],
        },
        {
            title: "Community Public-Private Partnership Engagement",
            description: "The Office of Kgosana Koketso Rakhudu advanced its Community Public-Private Partnership Framework through an engagement with Mr Jabulani Ndlovu, Managing Director of Netcare FernCrest Private Hospital and an Advisory Board Member of the Office. The framework, introduced by Kgosana Koketso Rakhudu at Georgia State University, brings together traditional leadership, academia, and the private sector in support of practical community development. The engagement reflects Tsitsing’s Smart-Led Village vision, connecting governance, healthcare, institutional expertise, and service to the community.",
            media: [
                { type: "image", src: "/Impact/Facebook/COMMUNITY PUBLIC PRIVATE PARTNERSHIP ENGAGEMENT.jpg" }
            ],
        },
        {
            title: "Strengthening the Tsitsing Primary School Model",
            description: "Kgosana Koketso Rakhudu led a monitoring and evaluation engagement involving 26 young people supporting Tsitsing Primary School through extra-curricular activities. The initiative reflects the Tsitsing Primary School Model, which brings together youth leadership, community participation, and structured support for teaching and learning. By strengthening the role of young people in the school environment, the model seeks to build a more supportive foundation in which learners have greater opportunity to participate, develop, and thrive.",
            media: [
                {
                    type: "video",
                    src: "/Impact/Facebook/Kgosana Koketso Rakhudu led the Monitoring and Evaluation of 26 young.mp4",
                    thumbnail: "/images/KgosanaLogo.png"
                }
            ],
        },
        {
            title: "Building Youth Opportunity Pathways with Harambee",
            description: "Ms Tumelo Khunou, Executive Head — Community Development, and Mr Phemelo Ntsimane, HOD Administration & Operations, held a strategic engagement with Harambee Youth Employment Accelerator in Braamfontein. The engagement formed part of Tsitsing, Kgotla Ya Rakhudu’s work to build partnerships that can strengthen skills development, employment pathways, and youth opportunity. Under the leadership of Kgosana Koketso Rakhudu, the initiative reflects a continued focus on connecting young people with institutions capable of supporting practical routes into learning, work, and development.",
            media: [
                { type: "image", src: "/Impact/Facebook/Doors Are Opening for Tsitsing Community3.jpg" },
                { type: "image", src: "/Impact/Facebook/Doors Are Opening for Tsitsing Community1.jpg" },
                { type: "image", src: "/Impact/Facebook/Doors Are Opening for Tsitsing Community2.jpg" }
            ],
        },
        {
        title: "Kgosana Koketso Rakhudu Leadership Breakfast",
        description:
            "The Kgosana Koketso Rakhudu Leadership Breakfast brought together leaders, stakeholders, and change-makers around a shared commitment to the growth and dignity of the Royal Bafokeng Nation in Tsitsing. The engagement created space to align on values, strengthen strategic direction, and reaffirm a model of leadership rooted in service, accountability, and Plan 2035.",
        media: [
            {
                type: "video",
                src: "/Impact/Whatsapp/TheKgosanaKoketsoRakhuduLeadershipBreakfast.mp4",
                thumbnail: "/images/KgosanaLogo.png"
            }
        ],
    },
        {
        title: "Positioning Tsitsing for Funding, Work and Business Opportunities",
        description:
            "Delivering the Community Opening Address at the Rustenburg Funding, Work & Business Opportunities Summit 2026 at BON Hotel Rustenburg, Kgosana Koketso Rakhudu positioned Tsitsing for strategic enterprise and workforce partnerships. As part of the Tsitsing–Kgotla Ya Rakhudu Stakeholders Growth Plan, the address brought together government, investors, SMMEs, and community leaders to align on priority development projects, youth empowerment, and sustainable local business growth in line with Plan 2035.",
        media: [
            { type: "image", src: "/Impact/Facebook/The Advisory Council’s commitment1.jpg" },
            { type: "image", src: "/Impact/Facebook/The Advisory Council’s commitment.jpg" },
        ],
    },
        {
        title: "A Fellowship of Leadership, Scholarship and Nation-Building",
        description:
            "Kgosana Koketso Rakhudu engaged in a high-level dialogue with His Excellency former President Thabo Mbeki, Chancellor of UNISA, and Professor Puleng LenkaBula, Vice-Chancellor and Principal of UNISA. Bringing together traditional governance, statesmanship, and academic scholarship, the engagement highlighted the vital intersection of research, public service, and institutional leadership in advancing community transformation and nation-building.",
        featuredUntil: "2026-07-31T23:59:59+02:00",
        media: [
            { type: "image", src: "/Impact/Facebook/His Excellency Honourable President Thabo Mbeki,.jpg" },
            { type: "image", src: "/Impact/Facebook/His Excellency Honourable President Thabo Mbeki2.jpg" },
            { type: "image", src: "/Impact/Facebook/His Excellency Honourable President Thabo Mbeki3.jpg" },
        ],
    },
        {
        title: "Tsitsing and the University of the Witwatersrand Advance Community Research",
        description:
            "Tsitsing Excellence Corporate Centre hosted a community research session in partnership with the University of the Witwatersrand. Led by researcher Mme Kagiso Morwane, the session engaged local women in dialogue for the study 'Shifting Markers: How Unmarried Black Batswana Women Redefine Adulthood in Contemporary South Africa,' fostering ethical community research, local participation, and academic insights into contemporary identity and womanhood.",
        media: [
            { type: "image", src: "/Impact/Facebook/Tsitsing & University of the Witwatersrand to roll out Research..jpg" },
        ],
    },
        {
        title: "Contributing to the North West Cleantech Innovation Conversation",
        description:
            "The Office of Kgosana Koketso Rakhudu joined Commissioner Joseph Ndaba and regional partners at the Mahikeng Multipurpose Centre for the North West Provincial National Cleantech Innovation Challenge (NCIC) Regional Finale. Executive Head, Mr Thabo Nakedi, represented the Office in engagements connecting traditional leadership, government, and institutional partners with cleantech innovators to advance sustainable development, green economy solutions, and community-centred innovation across the province.",
        media: [
            { type: "image", src: "/Impact/Facebook/Ai2.jpg" },
            { type: "image", src: "/Impact/Facebook/Ai1.jpg" },
        ],
    },
        {
        title: "OOKKR Representatives Contributing to Global Conversations",
        description:
            "OOKKR representatives Ms Tumelo Khunou, Mr Paballo Maledu, Ms Mothusi Seabelo, and Mr Phemelo Ntsimane participated in global leadership conversations centered on translating strategic planning into actionable outcomes. Their engagement reflects OOKKR's commitment to connecting high-level policy dialogue with practical, community-focused implementation.",
        media: [
            { type: "image", src: "/Impact/Facebook/GlobalConversations2.jpg" },
            { type: "image", src: "/Impact/Facebook/GlobalConversations1.jpg" },
        ],
    },
        {
        title: "Community Leadership Address at the Global Social Development Summit",
        description:
            "Kgosana Koketso Rakhudu represented Tsitsing and Kgotla Ya Rakhudu through a Community Leadership Address at the Global Social Development Summit, convened under the leadership of the Minister of Social Development. Reaffirming the pivotal role of traditional leadership in driving Plan 2035, the address emphasized placing people at the centre of growth, fostering institutional partnerships, and promoting accountability and community-led action.",
        media: [
            {
                type: "video",
                src: "/Impact/Facebook/Development without the people is not development.mp4",
                thumbnail: "/Impact/Facebook/Development without the people is not development1.jpg"
            },
            { type: "image", src: "/Impact/Facebook/Development without the people is not development1.jpg" },
            { type: "image", src: "/Impact/Facebook/Development without the people is not development2.jpg" },
        ],
    },
        {
        title: "Tsitsing Young Leaders at the Forefront",
        description:
            "Under the leadership of Ms. Keo Selloe, Executive Support: Institutional Governance in the Office of Kgosana Koketso Rakhudu, 450 young people are being equipped to lead with excellence, discipline, and purpose. This initiative represents a movement to build a generation of leaders who understand governance, own responsibility, and deliver quality, raising young people prepared to shape the future of Tsitsing.",
        media: [
            { type: "image", src: "/Impact/Whatsapp/Tsiting young Leaders are at the forfront .jpeg" },
            { type: "image", src: "/Impact/Whatsapp/Tsiting young Leaders are at the forfront 2.jpeg" },
            { type: "image", src: "/Impact/Whatsapp/Tsiting young Leaders are at the forfront 3.jpeg" },
        ],
    },
        {
        title: "UNISA Engineering Partnership in Tsitsing",
        description:
            "Professionals from the University of South Africa's Engineering Faculty joined Tsitsing Kgotla Ya Rakhudu for a site assessment of the Tsitsing water line, supporting technical diagnosis and infrastructure planning. The engagement also included proposals for a solar-energy pilot serving 10 households and the development of an Academic Framework to guide future engineering solutions through collaboration between academia and community leadership.",
        media: [
            { type: "image", src: "/Impact/Whatsapp/UNIVERSITY OF SOUTH AFRICA IN TSITSING - KGOTLA YA RAKHUDU.jpeg" },
        ],
    },
        {
        title: "City at Work Programme in Tsitsing",
        description:
            "The Rustenburg Local Municipality's City at Work Programme supported environmental clean-up efforts in Tsitsing, including clearing illegal dumping, cutting overgrown grass, attending to drainage, and restoring shared public spaces. The initiative reinforces community dignity and shared responsibility for a cleaner, healthier community environment.",
        media: [
            { type: "image", src: "/Impact/Whatsapp/The Rustenburg Local Municipality City at Work Programme .jpeg" },
        ],
    },
        {
        title: "Rustenburg Police Station Stakeholder Engagement",
        description:
            "As part of Tsitsing Kgotla Ya Rakhudu's Stakeholders Growth Plan, Kgosana Koketso Rakhudu met with the Rustenburg Police Station Commander to establish direct dialogue and institutional cooperation between traditional leadership and law enforcement. The engagement focuses on building mutual trust, enhancing crime prevention and community safety, and aligning institutional efforts to promote long-term community development and social stability.",
        media: [
            { type: "image", src: "/Impact/Whatsapp/Rustenburg Police Station Meet And Greet with Kgosana Koketso.jpeg" },
        ],
    },
        {
        title: "Bomme Strengthening Community Through Faith and Unity",
        description:
            "Every month, the Bomme of Tsitsing and surrounding communities gather for dedicated prayer sessions that serve as a pillar of spiritual strength, unity, and social cohesion. Led by mothers, grandmothers, and women leaders, these ongoing gatherings foster intergenerational wisdom, uphold the spirit of ubuntu, and intercede for the wellbeing of families, youth, and the future of Kgotla Ya Rakhudu.",
        media: [
            { type: "image", src: "/Impact/Whatsapp/Come together for a dedicated prayer session.jpeg" },
        ],
    },
        {
        title: "The Future Leads from Tsitsing",
        description:
            "Twenty-six young leaders from Tsitsing represent a new generation stepping forward with a shared purpose: to help shape the future of leadership in Kgotla Ya Rakhudu. Their journey reflects a commitment to developing local leadership from within the community and creating space for young people to contribute to its future.",
        media: [
            { type: "image", src: "/Impact/Whatsapp/The Future Leads From Tsitsing.jpeg" },
        ],
    },
        {
        title: "Kgosana Koketso Rakhudu Honoured as Subject Matter Expert",
        description:
            "Kgosana Koketso Rakhudu received a Certificate of Appreciation from Commissioner Joseph Ndaba in recognition of his contribution as a Subject Matter Expert at the North West NCIC Regional Awards. Presented through a partnership with the Mafikeng Digital Innovation Hub and the Technology Innovation Agency, the honour recognises his leadership and contribution to community development, innovation, entrepreneurship, and the provincial adjudication process.",
        media: [
            { type: "image", src: "/Impact/Whatsapp/Subject Matter Expert at the NCIC North West Regional Awards..jpeg" },
        ],
    },
        {
        title: "National Youth Service Programme",
        description:
            "Led by Team Leader Ms Keoikantse Selloe, the National Youth Service Programme gives young participants opportunities to build skills, serve their communities, and contribute to nation building. Tsitsing Excellence Corporate Centre supports the programme's focus on youth leadership, learning, and meaningful community participation.",
        media: [
            { type: "image", src: "/Impact/Whatsapp/The national Youth Service Programm.jpeg" },
        ],
    },
        {
        title: "Advisory Council Meeting",
        description:
            "Plan 2035 for the Royal Bafokeng Nation in Tsitsing is well positioned under the stewardship of Kgosana Koketso Rakhudu and his team of experts. Their combined technical skills and strategic vision support coordinated efforts across public, private, and community sectors, strengthening the plan's ability to attract investment, deliver services, and promote equitable development.",
        media: [
            { type: "image", src: "/images/advisory-council/IMG_8881.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_8885.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_8888.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_8897.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_8906.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_8908.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_8911.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_8914.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_8923.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_8925.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_8951.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_8958.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_8965.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_8972.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_8974.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_8989.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9002.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9004.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9012.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9014.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9020.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9022.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9059.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9066.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9069.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9075.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9085.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9092.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9150.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9157.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9192.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9194.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9215.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9234.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9251.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9253.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9262.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9269.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9271.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9279.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9289.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9297.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9305.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9311.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9317.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9319.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9342.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9354.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9357.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9361.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9373.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9376.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9379.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9383.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9387.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9388.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9394.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9398.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9402.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9407.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9413.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9416.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9417.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9418.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9428.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9432.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9447.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9448.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9452.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9457.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9460.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9461.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9464.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9467.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9471.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9477.jpg" },
            { type: "image", src: "/images/advisory-council/IMG_9486.jpg" },
        ],
    },
        {
        title: "2026 STATE OF KGOTLA ADDRESS | SOKA 💚🍀",
        description:
            "The 2026 State of Kgotla Address outlined the approved 10 key priorities: Education & Skills Development, Economic Diversification & Growth, Health & Wellbeing, Environmental Stewardship, Energy Security & Transition, Good Governance & Leadership, Infrastructure & Human Settlements, Food Security & Agriculture, Social Cohesion & Cultural Heritage, and Water & Sanitation. Reflecting on the 10-Year Vision Impact, over R20 million has been mobilised toward sustainable community development, with a focus on data-driven decision-making, measurable outcomes, and scalable investment models.",
        media: [
            { type: "image", src: "/images/soka-highlights/IMG_1786.jpg" },
            { type: "image", src: "/images/soka-highlights/IMG_1791.jpg" },
            { type: "image", src: "/images/soka-highlights/IMG_1803.jpg" },
            { type: "image", src: "/images/soka-highlights/IMG_1810.jpg" },
            { type: "image", src: "/images/soka-highlights/IMG_1839.jpg" },
            { type: "image", src: "/images/soka-highlights/IMG_1843.jpg" },
            { type: "image", src: "/images/soka-highlights/IMG_1845.jpg" },
            { type: "image", src: "/images/soka-highlights/IMG_1848.jpg" },
            { type: "image", src: "/images/soka-highlights/IMG_1858.jpg" },
            { type: "image", src: "/images/soka-highlights/IMG_1876.jpg" },
            { type: "image", src: "/images/soka-highlights/IMG_1880.jpg" },
            { type: "image", src: "/images/soka-highlights/IMG_1881.jpg" },
            { type: "image", src: "/images/soka-highlights/IMG_1885.jpg" },
            { type: "image", src: "/images/soka-highlights/IMG_1888.jpg" },
            { type: "image", src: "/images/soka-highlights/IMG_1902.jpg" },
            { type: "image", src: "/images/soka-highlights/IMG_1903.jpg" },
            { type: "image", src: "/images/soka-highlights/IMG_1977.jpg" },
            { type: "image", src: "/images/soka-highlights/IMG_1982.jpg" },
            { type: "image", src: "/images/soka-highlights/IMG_1984.jpg" },
            { type: "image", src: "/images/soka-highlights/IMG_1986.jpg" },
            { type: "image", src: "/images/soka-highlights/IMG_2036.jpg" },
            { type: "image", src: "/images/soka-highlights/IMG_2039.jpg" },
            { type: "image", src: "/images/soka-highlights/IMG_2042.jpg" },
            { type: "image", src: "/images/soka-highlights/IMG_2048.jpg" },
        ],
    },
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

    const impactVideos = stories.filter(story => story.media && story.media.some(m => m.type === "video"));
    const frameworksReports = [];

     return (
        <div className="w-full">
            {/* Impact Journey Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto text-center mb-8">
                    <h2 className="text-3xl font-semibold text-green-700">Impact Journey</h2>
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

            {/* Impact Videos Section */}
            <section id="impact-videos" className="py-12 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-green-700 text-center mb-8">Impact Videos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {impactVideos.map((story, index) => {
                            const videoMedia = story.media.find(m => m.type === "video");
                            return (
                                <div key={index} className="bg-gray-50 rounded-lg shadow p-4 hover:shadow-lg transition-shadow">
                                    <div className="relative w-full h-48 bg-black rounded-md overflow-hidden mb-4">
                                        <video
                                            controls
                                            playsInline
                                            preload="metadata"
                                            poster={videoMedia.thumbnail || "/images/KgosanaLogo.png"}
                                            className="w-full h-full object-contain"
                                            onError={(e) => {
                                                e.target.poster = "/images/KgosanaLogo.png";
                                            }}
                                        >
                                            <source src={videoMedia.src} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    <h3 className="font-semibold text-lg text-green-800 line-clamp-2">{story.title}</h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* OOKKR Frameworks & Reports Section */}
            <section id="frameworks" className="py-12 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-green-700 text-center mb-8">OOKKR Frameworks & Reports</h2>
                    {frameworksReports.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Render items here when available */}
                        </div>
                    ) : (
                        <div className="max-w-3xl mx-auto text-center bg-white p-10 rounded-xl shadow-sm border border-gray-100">
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <p className="text-gray-600 text-lg font-medium">
                                Frameworks and reports will be published here as they become available.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default SuccessStories;
