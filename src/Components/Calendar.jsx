import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Calendar as CalendarIcon } from 'lucide-react';
import 'react-calendar/dist/Calendar.css';

const events = [
  {
    date: '2025-06-27',
    title: 'G20 South Africa 2025 Intergenerational Roundtable',
    details: {
      description: "The OOKKR Operations Team is attending the G20 Intergenerational Roundtable at Sandton Convention Center. Theme: 'Solidarity, Equality, Sustainability.'",
      venue: 'Sandton Convention Center',
      time: '9:00 AM',
      dressCode: 'Semi-Formal',
    },
    image: 'images/G20Poster.jpeg',
    alt: 'G20 Roundtable',
    loading: 'lazy',
  },
  {
    date: '2025-08-18',
    title: 'Organisational Structure Realignment 2025',
    details: {
      description: "Dr. Koketso Rakhudu will deliver a keynote address unpacking OOKKR's 2025 organisational structure realignment.",
      venue: 'Anglo Zimele Hub',
      time: '8:00 AM - 11:00 AM',
      dressCode: 'Semi-Formal',
    },
    image: 'images/OrganisationStructureRealignment.jpeg',
    alt: 'Organisational Structure Realignment',
    loading: 'lazy',
  },
  {
    date: '2025-08-20',
    title: 'Advancing Innovation and Entrepreneurship for Sustainable Health',
    details: {
      description: 'Dr Koketso Rakhudu is leading a key part of the effort and featured as a Plenary Speaker addressing integrating customary authorities into health innovation ecosystems.',
      venue: 'Batter Boys, Pretoria',
      time: '9:00 AM',
      dressCode: 'Semi-Formal',
    },
    image: 'images/BatterBoys.jpg',
    alt: 'Health Innovation Event',
    loading: 'lazy',
  },
  {
    date: '2025-08-21',
    title: 'Share the Codes Rustenburg',
    details: {
      description: 'Head of Strategy & Business Development, Mr. Ikgetheleng Sereo and Acting Group CEO, Mr. Hlolelo Rampete will be attending Share The Codes - Rustenburg Edition.',
      venue: 'Maemo Motors',
      time: '5:00 PM',
      dressCode: 'Semi-Formal',
    },
    image: 'images/STC.jpeg',
    alt: 'Share the Codes',
    loading: 'lazy',
  },
  {
    date: '2025-08-22',
    title: 'Research Days Awards Gala Dinner 2025',
    details: {
      description: 'Dr Koketso Rakhudu as Deputy Chairperson of BAMMISHO node witnessing early impact through collaboration with Sefako Makgatho Health Sciences University.',
      venue: 'Batter Boys, Pretoria',
      time: '6:00 PM',
      dressCode: 'Semi-Formal',
    },
    image: 'images/BatterBoys2.jpg',
    alt: 'Research Days Gala',
    loading: 'lazy',
  },
  {
    date: '2025-08-25',
    title: 'Leadership & Communication Training',
    details: {
      description: "2-day Leadership & Communication Training for OOKKR staff. Theme: 'The Future Is Ours: Leading, Communicating, and Creating with Purpose.'",
      venue: 'Anglo Zimele Hub',
      time: '8:00 - 3:00 PM',
      dressCode: 'Semi-Formal',
    },
    image: 'images/LeadershipCommunicationTrainning.jpeg',
    alt: 'Leadership Training',
    loading: 'lazy',
  },
  {
    date: '2025-08-27',
    title: 'LPG Safety workshop',
    details: {
      description: 'Make LPG Safe for Your Community Workshop in partnership with LPGSA, EW SETA, and Petregaz.',
      venue: 'The Garden Venue, Randburg',
      time: '9:00 AM - 3:00 PM',
      dressCode: 'Semi-Formal',
    },
    image: 'images/LPGWorkshop.jpeg',
    alt: 'LPG Safety Workshop',
    loading: 'lazy',
  },
  {
    date: '2025-08-28',
    title: 'BeYoutiful Book Launch',
    details: {
      description: "Dr. Koketso Rakhudu will deliver the opening address at the book launch of Professor Martha Chadyiwa at UJ's Chinua Achebe Auditorium.",
      venue: 'Chinua Achebe Auditorium, University of Johannesburg',
      time: '5:30 PM - 6:30 PM',
      dressCode: 'Semi-Formal',
    },
    image: 'images/BookLaunch.jpeg',
    alt: 'BeYoutiful Book Launch',
    loading: 'lazy',
  },
  {
    date: '2025-09-01',
    title: '10/80/10 Tsitsing Kgotla ya Rakhudu 30 day turn around strategy',
    details: {
      description: 'Transformative strategic engagement under the 10/80/10 Framework for measurable community impact.',
      venue: 'Tsitsing Kgotla Ya Rakhudu',
      time: '8:00 AM - 8:00 PM',
      dressCode: 'Semi-Formal',
    },
    image: 'images/TurnAround.jpeg',
    alt: '10/80/10 Strategy',
    loading: 'lazy',
  },
  {
    date: '2025-09-02',
    title: '10/80/10 Tsitsing Kgotla ya Rakhudu 30 day turn around strategy',
    details: {
      description: 'Transformative strategic engagement under the 10/80/10 Framework for measurable community impact.',
      venue: 'Tsitsing Kgotla Ya Rakhudu',
      time: '8:00 AM - 8:00 PM',
      dressCode: 'Semi-Formal',
    },
    image: 'images/TurnAround.jpeg',
    alt: '10/80/10 Strategy',
    loading: 'lazy',
  },
  {
    date: '2025-09-03',
    title: '10/80/10 Tsitsing Kgotla ya Rakhudu 30 day turn around strategy',
    details: {
      description: 'Transformative strategic engagement under the 10/80/10 Framework for measurable community impact.',
      venue: 'Tsitsing Kgotla Ya Rakhudu',
      time: '8:00 AM - 8:00 PM',
      dressCode: 'Semi-Formal',
    },
    image: 'images/TurnAround.jpeg',
    alt: '10/80/10 Strategy',
    loading: 'lazy',
  },
  {
    date: '2025-09-03',
    title: 'Mandela Washington Fellowship 2025 Alumni Leadership & Business Summit',
    details: {
      description: 'High-level dialogue on ethical leadership, investment, and academic development in Africa.',
      venue: 'Invite Only',
      time: '8:00 AM - 8:00 PM',
      dressCode: 'Semi-Formal',
    },
    image: 'images/MWF.jpeg',
    alt: 'MWF Summit',
    loading: 'lazy',
  },
  {
    date: '2025-09-04',
    title: 'Boitshoko Circuit Administrative Assistants Development Day',
    details: {
      description: 'Dr. Koketso Rakhudu delivers keynote on professionalism and administrative capacity.',
      venue: 'Invite Only',
      time: '8:00 AM - 8:00 PM',
      dressCode: 'Semi-Formal',
    },
    image: 'images/AdministrativeAssistantDevelopmentDay.jpeg',
    alt: 'Admin Development Day',
    loading: 'lazy',
  },
  {
    date: '2025-09-05',
    title: 'Womens Conference & Summit on Women in Business & The Financial Sector',
    details: {
      description: "New Faces, New Voices: Women's Financial Inclusion Dialogues powered by AWFII.",
      venue: 'Liberty Centre, Braamfontein, Johannesburg',
      time: '9:00 AM - 5:00 PM',
      dressCode: 'Semi-Formal',
    },
    image: 'images/NewFacesNewVoices.jpeg',
    alt: 'Womens Financial Summit',
    loading: 'lazy',
  },
  {
    date: '2025-09-08',
    title: 'AgriSETA National Stakeholder Engagement',
    details: {
      description: 'Focusing on how farmers can access Discretionary Grants and Accreditation opportunities.',
      venue: 'Bojanala Platinum District Municipality',
      time: '10:00 AM - 1:00 PM',
      dressCode: 'Semi-Formal',
    },
    image: 'images/NSE.jpeg',
    alt: 'AgriSETA Engagement',
    loading: 'lazy',
  },
  {
    date: '2025-09-09',
    title: 'School Uniform Handover Ceremony',
    details: {
      description: 'Part of 10/80/10 Strategy - removing barriers to education and promoting learner dignity.',
      venue: 'Mmanape Secondary School',
      time: '12:00 PM - 2:00 PM',
      dressCode: 'Semi-Formal',
    },
    image: 'images/SchoolUniformHandover.jpeg',
    alt: 'School Uniform Handover',
    loading: 'lazy',
  },
  {
    date: '2025-09-10',
    title: 'Academic Research Development Fellowship 2026',
    details: {
      description: 'Dr Koketso Rakhudu awarded prestigious Fellowship - six months in Scotland, UK during 2026.',
      venue: 'Scotland, United Kingdom',
      time: '',
      dressCode: 'Semi-Formal',
    },
    image: 'images/AcademicResearchDevelopmentFellowship.jpeg',
    alt: 'Academic Fellowship',
    loading: 'lazy',
  },
  {
    date: '2025-09-18',
    title: 'Leadership in Practice 2025 Awards Gala Dinner',
    details: {
      description: 'Honoring Dr. Naledi Pandor at UNISA School of Business Leadership.',
      venue: 'UNISA SBL, Cnr Janadel & Alexandra Ave, Midrand',
      time: '',
      dressCode: 'Semi-Formal',
    },
    image: 'images/LeadershipPractice.jpeg',
    alt: 'Leadership Awards Gala',
    loading: 'lazy',
  },
  {
    date: '2025-09-18',
    title: 'Tsitsing Kgotla ya Rakhudu and Funda Institute Partnership',
    details: {
      description: 'Finalizing partnership to convert Tsitsing Old Post Office into Tsitsing Excellence Centre.',
      venue: 'Midrand',
      time: '8:00 AM - 4:00 PM',
      dressCode: 'Semi-Formal',
    },
    image: 'images/GDE.jpeg',
    alt: 'Funda Institute Partnership',
    loading: 'lazy',
  },
  {
    date: '2025-09-19',
    title: 'Drug Abuse & Addiction Awareness Campaign',
    details: {
      description: 'Campaign hosted by Lerato Kgaswane Foundation focusing on education and prevention.',
      venue: 'Mmanape Secondary School',
      time: '11:00 AM - 12:30 PM',
      dressCode: 'Semi-Formal',
    },
    image: 'images/DrugAbuse.jpeg',
    alt: 'Drug Awareness Campaign',
    loading: 'lazy',
  },
  {
    date: '2025-09-19',
    title: 'Tsitsing Kgotla ya Rakhudu and Funda Institute Partnership',
    details: {
      description: 'Finalizing partnership to convert Tsitsing Old Post Office into Tsitsing Excellence Centre.',
      venue: 'Pretoria',
      time: '8:00 AM - 4:00 PM',
      dressCode: 'Semi-Formal',
    },
    image: 'images/GDE1.jpeg',
    alt: 'Funda Institute Partnership',
    loading: 'lazy',
  },
  {
    date: '2025-09-22',
    title: 'Inaugural Energy Indaba 2025',
    details: {
      description: "Dr. Koketso Rakhudu as panel participant. Theme: 'Advancing an Inclusive, Just Energy Transition Agenda.'",
      venue: 'Senate Hall Muckleneuk Campus, University of Pretoria',
      time: '9:00 AM - 3:30 PM',
      dressCode: 'Semi-Formal',
    },
    image: 'images/IEI.jpeg',
    alt: 'Energy Indaba',
    loading: 'lazy',
  },
  {
    date: '2025-09-23',
    title: 'SAPS Heritage Day Celebration',
    details: {
      description: 'Dr. Koketso Rakhudu delivers keynote at SAPS Bojanala District.',
      venue: 'Public Order Police Base',
      time: '11:00 AM - 3:00 PM',
      dressCode: 'Semi-Formal',
    },
    image: 'images/SAPSHeritage.jpeg',
    alt: 'SAPS Heritage Day',
    loading: 'lazy',
  },
  {
    date: '2025-09-23',
    title: 'Heritage Webinar',
    details: {
      description: 'Dr Koketso Rakhudu discusses Tsitsing stakeholder engagement processes at BMF Limpopo Heritage Webinar.',
      venue: 'Online',
      time: '11:00 AM - 3:00 PM',
      dressCode: 'Semi-Formal',
    },
    image: 'images/HeritageWebinar.jpeg',
    alt: 'Heritage Webinar',
    loading: 'lazy',
  },
  {
    date: '2025-09-25',
    title: 'Provincial Tourism Stakeholder Engagement',
    details: {
      description: "Theme: 'Tourism and Sustainable Transformation' at Sun City.",
      venue: 'Sun City, Moses Kotane Local Municipality',
      time: '11:00 AM - 3:00 PM',
      dressCode: 'Semi-Formal',
    },
    image: 'images/HeritageWebinar.jpeg',
    alt: 'Tourism Engagement',
    loading: 'lazy',
  },
  {
    date: '2025-09-26',
    title: 'North West Province Stakeholder Summit Hakem Energy Hubs Carbon Credits Project',
    details: {
      description: 'Stakeholder Summit on Hakem Hubs Carbon Credits Project for sustainable development.',
      venue: 'Invite Only',
      time: '10:00 AM - 3:00 PM',
      dressCode: 'Semi-Formal',
    },
    image: 'images/CarbonCreditsProject.jpeg',
    alt: 'Carbon Credits Summit',
    loading: 'lazy',
  },
  {
    date: '2025-09-28',
    title: 'Induction Of Reverend D. Seabelo',
    details: {
      description: 'Mrs Tsholo Nape delivers Keynote Address on behalf of Dr Koketso Rakhudu.',
      venue: 'New Christian Church, Bojating',
      time: '8:00 AM',
      dressCode: 'Semi-Formal',
    },
    image: 'images/InductionOfReverendDa Seabelo.jpeg',
    alt: 'Reverend Induction',
    loading: 'lazy',
  },
  {
    date: '2025-09-30',
    title: 'Livestock Farming Training',
    details: {
      description: 'Training programme for Tsitsing farmers with support from Impala and Moumo.',
      venue: 'Tsitsing Stadium',
      time: '8:00 AM',
      dressCode: 'Semi-Formal',
    },
    image: 'images/LivestockFarmingTraining.jpeg',
    alt: 'Livestock Training',
    loading: 'lazy',
  },
  {
    date: '2025-10-25',
    title: 'WOW Awards 2025 - 4th Annual Thuba Pelo Mosadi Women Of Worth Awards',
    details: {
      description: "Dr Koketso Rakhudu delivers keynote address at WOW Awards 2025. Reflecting on women's critical role in driving community development and why we must actively support women to lead. #WOWAwards2025 #WomenInLeadership",
      venue: 'MESORA EXPERIENCE, Phokeng - Rustenburg',
      time: '11:00 AM',
      dressCode: 'Red',
    },
    image: 'images/WOWAwards2025.jpg',
    alt: 'WOW Awards 2025',
    loading: 'lazy',
  },
];

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [modalImage, setModalImage] = useState(null);

  const formatDateToUTC = (date) => {
    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
      .toISOString()
      .split('T')[0];
  };

  const getTileContent = ({ date }) => {
    const formattedDate = formatDateToUTC(date);
    const eventsOnDate = events.filter((event) => event.date === formattedDate);

    if (eventsOnDate.length > 0) {
      return (
        <div className="relative w-full h-full flex justify-center items-center">
          <div className="absolute w-3 h-3 bg-green-700 rounded-full opacity-80 shadow-md"></div>
          {eventsOnDate.length > 1 && (
            <span className="absolute bottom-0 right-0 text-xs text-white bg-green-600 rounded-full px-1">
              {eventsOnDate.length}
            </span>
          )}
        </div>
      );
    }
    return null;
  };

  const getTileClassName = ({ date }) => {
    const formattedDate = formatDateToUTC(date);
    const hasEvent = events.some((event) => event.date === formattedDate);
    const isCurrentDate = date.toDateString() === new Date().toDateString();

    return `
      ${hasEvent ? 'event-tile' : ''} 
      ${isCurrentDate ? 'current-date' : ''} 
      hover:bg-green-100 rounded-lg transition-colors duration-200
    `;
  };

  const handleDayClick = (date) => {
    const formattedDate = formatDateToUTC(date);
    const eventsOnDate = events.filter((event) => event.date === formattedDate);
    setSelectedDate(date);
    setSelectedEvents(eventsOnDate);
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const EventDetails = ({ events }) => {
    if (!events || events.length === 0) return null;

    return (
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-8">
        {events.map((event, index) => (
          <div key={index}>
            {event.image && (
              <img
                src={event.image}
                alt={event.alt || 'Event image'}
                className="w-full h-64 object-contain rounded-lg shadow-md mb-4 cursor-pointer"
                loading={event.loading || 'lazy'}
                onClick={() => openModal(event.image)}
              />
            )}
            <h2 className="text-2xl font-bold text-green-800 mb-4">{event.title}</h2>
            {event.details.description && (
              <p className="text-gray-600 mb-4 italic">{event.details.description}</p>
            )}

            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <CalendarIcon className="w-5 h-5 text-green-700" />
                <p>
                  {new Date(event.date + 'T00:00:00').toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>

              <div className="text-sm grid grid-cols-2 gap-4">
                {event.details.venue && (
                  <div>
                    <h3 className="font-semibold text-green-700">Venue</h3>
                    <p>{event.details.venue}</p>
                  </div>
                )}
                {event.details.time && (
                  <div>
                    <h3 className="font-semibold text-green-700">Time</h3>
                    <p>{event.details.time}</p>
                  </div>
                )}
              </div>

              {event.details.dressCode && (
                <div>
                  <h3 className="font-semibold text-green-700">Dress Code</h3>
                  <p className="text-gray-700">{event.details.dressCode}</p>
                </div>
              )}

              {event.details.specialGuests && (
                <div>
                  <h3 className="font-semibold text-green-700">Special Guests</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {event.details.specialGuests.map((guest, idx) => (
                      <li key={idx} className="text-gray-700">
                        {guest}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-serif font-bold text-green-800 mb-8">
          Community Event Calendar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <Calendar
              onClickDay={handleDayClick}
              tileClassName={getTileClassName}
              tileContent={getTileContent}
              className="rounded-lg shadow-md p-4"
              value={selectedDate}
            />
          </div>

          <div className="h-full">
            {selectedEvents.length > 0 ? (
              <EventDetails events={selectedEvents} />
            ) : (
              <div className="bg-white p-6 rounded-lg shadow-lg h-full flex items-center justify-center">
                <div className="text-center">
                  <CalendarIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-semibold">
                    Select a date to view event details
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-full max-h-screen">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-red-600 hover:text-red-800 text-4xl font-bold focus:outline-none"
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt="Enlarged event"
              className="w-auto max-w-full max-h-screen rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;