import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { getPublicImage } from '../shared/utils/assetPaths';
import { FaCheck, FaSpinner, FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaVideo } from 'react-icons/fa';
import { emailConfig } from '../shared/config/environment';

function SpeakerBooking() {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    jobTitle: '',
    
    eventName: '',
    eventType: '',
    eventDateType: 'known', // known, tbc
    eventDate: '',
    locationType: '', // Physical, Virtual, Hybrid
    venueCityCountry: '',
    audienceSize: '',
    
    format: '',
    duration: '',
    topic: '',
    objectives: '',
    
    budget: '',
    
    travel: '',
    accommodation: '',
    recording: '',
    additionalInfo: '',
    
    consent: false
  });

  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [honeypot, setHoneypot] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) return; // Silent reject

    setStatus('sending');

    // Format the email body cleanly based on user requirements
    const messageBody = `
SPEAKER BOOKING REQUEST

CONTACT DETAILS
Name: ${formData.name}
Organisation: ${formData.organisation}
Position: ${formData.jobTitle || 'N/A'}
Email: ${formData.email}
Phone: ${formData.phone}

EVENT DETAILS
Event Name: ${formData.eventName}
Event Type: ${formData.eventType}
Date: ${formData.eventDateType === 'tbc' ? 'Date not finalised' : formData.eventDate}
Physical / Virtual / Hybrid: ${formData.locationType}
Venue/City/Country: ${['Physical', 'Hybrid'].includes(formData.locationType) ? formData.venueCityCountry : 'N/A'}
Audience Size: ${formData.audienceSize}

SPEAKING REQUIREMENT
Format: ${formData.format}
Duration: ${formData.duration || 'N/A'}
Topic / Theme: ${formData.topic}
Desired Outcome: ${formData.objectives}

COMMERCIAL
Estimated Speaker Budget: ${formData.budget}

LOGISTICS
Travel Required: ${formData.travel || 'N/A'}
Accommodation Required: ${formData.accommodation || 'N/A'}
Recording / Livestream: ${formData.recording || 'N/A'}

ADDITIONAL INFORMATION
${formData.additionalInfo || 'None provided.'}
    `.trim();

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: emailConfig.serviceId,
          template_id: emailConfig.templateId,
          user_id: emailConfig.publicKey,
          template_params: {
            name: formData.name,
            email: formData.email,
            message: messageBody,
            subject: `New Speaker Booking Request — ${formData.organisation} — ${formData.eventName}`
          },
        }),
      });

      if (response.ok) {
        setStatus('success');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        <Helmet>
          <title>Request Received | OOKKR</title>
        </Helmet>
        <div className="bg-white p-12 rounded-2xl shadow-xl max-w-lg text-center border-t-4 border-[#1B5538]">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaCheck className="text-4xl text-[#1B5538]" />
          </div>
          <h2 className="text-3xl font-bold text-[#1B5538] mb-4">Request Received</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Thank you. Your speaking request has been sent to the Office of Kgosana Koketso Rakhudu. The team will review the information provided and respond using your supplied contact details.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="px-8 py-3 bg-[#1B5538] text-white rounded-full hover:bg-[#397D5A] transition-colors font-semibold"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Helmet>
        <title>Book Dr Koketso Rakhudu as a Speaker | OOKKR</title>
        <meta name="description" content="Submit a speaking enquiry for Dr Koketso Rakhudu for conferences, leadership forums, academic engagements, corporate events and community platforms." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 xl:col-span-8 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <div className="mb-10">
              <span className="inline-block px-3 py-1 bg-green-50 text-[#1B5538] text-sm font-semibold rounded-full mb-4">
                Speaking Enquiry
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1B5538] mb-6 leading-tight">
                Book Dr Koketso Rakhudu <br />
                <span className="text-gray-800">as a Speaker</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Invite Dr Koketso Rakhudu to contribute to your conference, leadership forum, academic engagement, corporate event or community platform. His engagements reflect a deep commitment to leadership, governance, sustainable development, and community impact.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-12">
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />

              {/* Section 01: Your Details */}
              <section>
                <div className="flex items-center gap-4 mb-6 border-b pb-2">
                  <span className="text-[#1B5538] font-bold text-xl">01</span>
                  <h2 className="text-2xl font-semibold text-gray-800">Your Details</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#1B5538] focus:ring-1 focus:ring-[#1B5538] transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Organisation / Company *</label>
                    <input required type="text" name="organisation" value={formData.organisation} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#1B5538] focus:ring-1 focus:ring-[#1B5538] transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#1B5538] focus:ring-1 focus:ring-[#1B5538] transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#1B5538] focus:ring-1 focus:ring-[#1B5538] transition-all" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job Title / Position <span className="text-gray-400 font-normal">(Optional)</span></label>
                    <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#1B5538] focus:ring-1 focus:ring-[#1B5538] transition-all" />
                  </div>
                </div>
              </section>

              {/* Section 02: Event Details */}
              <section>
                <div className="flex items-center gap-4 mb-6 border-b pb-2">
                  <span className="text-[#1B5538] font-bold text-xl">02</span>
                  <h2 className="text-2xl font-semibold text-gray-800">Event Details</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Event / Engagement Name *</label>
                    <input required type="text" name="eventName" value={formData.eventName} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#1B5538] focus:ring-1 focus:ring-[#1B5538] transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Event Type *</label>
                    <select required name="eventType" value={formData.eventType} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#1B5538] focus:ring-1 focus:ring-[#1B5538] transition-all">
                      <option value="">Select Event Type</option>
                      <option value="Conference">Conference</option>
                      <option value="Keynote">Keynote</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Leadership Forum">Leadership Forum</option>
                      <option value="Academic / University Engagement">Academic / University Engagement</option>
                      <option value="Panel Discussion">Panel Discussion</option>
                      <option value="Workshop">Workshop</option>
                      <option value="Community Engagement">Community Engagement</option>
                      <option value="Government / Public Sector">Government / Public Sector</option>
                      <option value="Awards / Gala">Awards / Gala</option>
                      <option value="School / Youth Development">School / Youth Development</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Audience Size *</label>
                    <select required name="audienceSize" value={formData.audienceSize} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#1B5538] focus:ring-1 focus:ring-[#1B5538] transition-all">
                      <option value="">Select Size</option>
                      <option value="Under 50">Under 50</option>
                      <option value="50–100">50–100</option>
                      <option value="101–250">101–250</option>
                      <option value="251–500">251–500</option>
                      <option value="501–1,000">501–1,000</option>
                      <option value="1,000+">1,000+</option>
                      <option value="Not confirmed">Not confirmed</option>
                    </select>
                  </div>

                  {/* Date Handling */}
                  <div className="md:col-span-2 space-y-4">
                    <label className="block text-sm font-medium text-gray-700">Event Date *</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="eventDateType" value="known" checked={formData.eventDateType === 'known'} onChange={handleChange} className="text-[#1B5538] focus:ring-[#1B5538]" />
                        <span className="text-sm">Specific Date</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="eventDateType" value="tbc" checked={formData.eventDateType === 'tbc'} onChange={handleChange} className="text-[#1B5538] focus:ring-[#1B5538]" />
                        <span className="text-sm">Date not finalised</span>
                      </label>
                    </div>
                    {formData.eventDateType === 'known' && (
                      <input required type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} className="w-full md:w-1/2 p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#1B5538] focus:ring-1 focus:ring-[#1B5538] transition-all" />
                    )}
                  </div>

                  {/* Location Handling */}
                  <div className="md:col-span-2 space-y-4">
                    <label className="block text-sm font-medium text-gray-700">Location *</label>
                    <div className="flex flex-wrap gap-4">
                      {['Physical', 'Virtual', 'Hybrid'].map(loc => (
                        <label key={loc} className="flex items-center gap-2 cursor-pointer">
                          <input required type="radio" name="locationType" value={loc} checked={formData.locationType === loc} onChange={handleChange} className="text-[#1B5538] focus:ring-[#1B5538]" />
                          <span className="text-sm">{loc}</span>
                        </label>
                      ))}
                    </div>
                    {['Physical', 'Hybrid'].includes(formData.locationType) && (
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Venue / City / Country *</label>
                        <input required type="text" name="venueCityCountry" placeholder="e.g. Sandton Convention Centre, Johannesburg, SA" value={formData.venueCityCountry} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#1B5538] focus:ring-1 focus:ring-[#1B5538] transition-all" />
                      </div>
                    )}
                  </div>
                </div>
              </section>

              {/* Section 03: Speaking Requirement */}
              <section>
                <div className="flex items-center gap-4 mb-6 border-b pb-2">
                  <span className="text-[#1B5538] font-bold text-xl">03</span>
                  <h2 className="text-2xl font-semibold text-gray-800">Speaking Requirement</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Requested Format *</label>
                    <select required name="format" value={formData.format} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#1B5538] focus:ring-1 focus:ring-[#1B5538] transition-all">
                      <option value="">Select Format</option>
                      <option value="Keynote Address">Keynote Address</option>
                      <option value="Fireside Conversation">Fireside Conversation</option>
                      <option value="Panel Discussion">Panel Discussion</option>
                      <option value="Workshop">Workshop</option>
                      <option value="Leadership Address">Leadership Address</option>
                      <option value="Moderated Conversation">Moderated Conversation</option>
                      <option value="Academic / Research Engagement">Academic / Research Engagement</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Duration <span className="text-gray-400 font-normal">(Optional)</span></label>
                    <select name="duration" value={formData.duration} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#1B5538] focus:ring-1 focus:ring-[#1B5538] transition-all">
                      <option value="">Select Duration</option>
                      <option value="15–30 minutes">15–30 minutes</option>
                      <option value="30–45 minutes">30–45 minutes</option>
                      <option value="45–60 minutes">45–60 minutes</option>
                      <option value="60–90 minutes">60–90 minutes</option>
                      <option value="Other / Not confirmed">Other / Not confirmed</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Topic / Theme *</label>
                    <p className="text-sm text-gray-500 mb-2">What would you like Dr Koketso Rakhudu to speak about?</p>
                    <input required type="text" name="topic" value={formData.topic} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#1B5538] focus:ring-1 focus:ring-[#1B5538] transition-all" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Objectives / Desired Outcome *</label>
                    <p className="text-sm text-gray-500 mb-2">Briefly tell us what you would like your audience to take away from the engagement.</p>
                    <textarea required name="objectives" rows="3" value={formData.objectives} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#1B5538] focus:ring-1 focus:ring-[#1B5538] transition-all"></textarea>
                  </div>
                </div>
              </section>

              {/* Section 04: Budget & Logistics */}
              <section>
                <div className="flex items-center gap-4 mb-6 border-b pb-2">
                  <span className="text-[#1B5538] font-bold text-xl">04</span>
                  <h2 className="text-2xl font-semibold text-gray-800">Budget & Logistics</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Speaker Budget *</label>
                    <p className="text-sm text-gray-500 mb-3">This helps the Office understand the scope of the engagement. Final fees, logistics and arrangements remain subject to discussion and confirmation.</p>
                    <select required name="budget" value={formData.budget} onChange={handleChange} className="w-full md:w-1/2 p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#1B5538] focus:ring-1 focus:ring-[#1B5538] transition-all">
                      <option value="">Select Budget Range</option>
                      <option value="Under R10,000">Under R10,000</option>
                      <option value="R10,000 – R25,000">R10,000 – R25,000</option>
                      <option value="R25,001 – R50,000">R25,001 – R50,000</option>
                      <option value="R50,001 – R100,000">R50,001 – R100,000</option>
                      <option value="R100,000+">R100,000+</option>
                      <option value="International / Please Discuss">International / Please Discuss</option>
                      <option value="Budget Not Yet Confirmed">Budget Not Yet Confirmed</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Will travel be required?</label>
                      <select name="travel" value={formData.travel} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#1B5538] focus:ring-1 focus:ring-[#1B5538] transition-all">
                        <option value="">Please select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="To be confirmed">To be confirmed</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Will accommodation be required?</label>
                      <select name="accommodation" value={formData.accommodation} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#1B5538] focus:ring-1 focus:ring-[#1B5538] transition-all">
                        <option value="">Please select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        <option value="To be confirmed">To be confirmed</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Will the engagement be recorded or livestreamed?</label>
                    <select name="recording" value={formData.recording} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#1B5538] focus:ring-1 focus:ring-[#1B5538] transition-all">
                      <option value="">Please select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                      <option value="To be confirmed">To be confirmed</option>
                    </select>
                  </div>

                  <div className="md:col-span-2 mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information <span className="text-gray-400 font-normal">(Optional)</span></label>
                    <textarea name="additionalInfo" rows="4" placeholder="Include anything else the Office should consider..." value={formData.additionalInfo} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-[#1B5538] focus:ring-1 focus:ring-[#1B5538] transition-all"></textarea>
                  </div>
                </div>
              </section>

              {/* Submit Area */}
              <div className="pt-6 border-t">
                <label className="flex items-start gap-3 cursor-pointer mb-8">
                  <input required type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="mt-1 w-5 h-5 text-[#1B5538] rounded focus:ring-[#1B5538]" />
                  <span className="text-sm text-gray-600">
                    I confirm that the information provided is accurate and may be used by the Office of Kgosana Koketso Rakhudu to respond to this speaking enquiry. (View our <a href="/privacy" className="text-[#1B5538] underline">Privacy Policy</a>)
                  </span>
                </label>

                {status === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 text-red-700 border border-red-200 rounded-lg">
                    There was an error sending your request. Please try again or contact the office directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full md:w-auto px-10 py-4 bg-[#1B5538] hover:bg-[#397D5A] text-white font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 flex items-center justify-center gap-3 text-lg"
                >
                  {status === 'sending' ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Submitting Request...
                    </>
                  ) : (
                    'Submit Speaking Request'
                  )}
                </button>
              </div>

            </form>
          </div>

          {/* Right Column: Portrait & Info */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-8">
            <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <img 
                src={getPublicImage("DrK1.jpeg")} 
                alt="Dr Koketso Rakhudu speaking"
                className="w-full h-auto object-cover object-top"
                style={{ maxHeight: '600px' }}
              />
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-[#1B5538] mb-4">Speaking Areas</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2"><FaCheck className="text-[#397D5A] mt-1 shrink-0" /> Leadership & Governance</li>
                <li className="flex items-start gap-2"><FaCheck className="text-[#397D5A] mt-1 shrink-0" /> Community-Led Development</li>
                <li className="flex items-start gap-2"><FaCheck className="text-[#397D5A] mt-1 shrink-0" /> Strategy & Sustainable Development</li>
                <li className="flex items-start gap-2"><FaCheck className="text-[#397D5A] mt-1 shrink-0" /> Youth Leadership & Education</li>
                <li className="flex items-start gap-2"><FaCheck className="text-[#397D5A] mt-1 shrink-0" /> ESG & Responsible Development</li>
                <li className="flex items-start gap-2"><FaCheck className="text-[#397D5A] mt-1 shrink-0" /> Traditional Leadership in a Modern Economy</li>
                <li className="flex items-start gap-2"><FaCheck className="text-[#397D5A] mt-1 shrink-0" /> Plan 2035 & Long-Term Community Development</li>
              </ul>
            </div>

            <div className="bg-[#1B5538] p-8 rounded-2xl shadow-sm text-white">
              <h3 className="text-xl font-bold mb-6">What Happens Next</h3>
              <div className="space-y-6">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center font-bold text-xs">1</div>
                  <h4 className="font-semibold mb-1">Submit your request</h4>
                  <p className="text-sm text-white/80">Provide the event context, objectives and estimated budget.</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center font-bold text-xs">2</div>
                  <h4 className="font-semibold mb-1">Office review</h4>
                  <p className="text-sm text-white/80">The Office reviews relevance, schedule, logistics and engagement requirements.</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center font-bold text-xs">3</div>
                  <h4 className="font-semibold mb-1">Engagement confirmation</h4>
                  <p className="text-sm text-white/80">Where suitable, the team contacts the organiser to discuss availability and arrangements.</p>
                </div>
              </div>
              <p className="text-xs text-white/60 mt-6 italic">
                * Submission does not guarantee acceptance or availability.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SpeakerBooking;
