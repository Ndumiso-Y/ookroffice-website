import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getAssetPath } from '../utils/assetPath';

const Leadership = () => {
  return (
    <>
      <Helmet>
        <title>Leadership & Heritage - Business School of Leadership Excellence</title>
        <meta
          name="description"
          content="Meet Dr. Koketso Rakhudu and learn about the traditional leadership heritage that grounds BSLE's approach to modern leadership education."
        />
      </Helmet>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-brown to-accent-clay text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Leadership & Heritage
          </h1>
          <p className="text-xl leading-relaxed max-w-3xl">
            Honoring tradition while pioneering innovation in leadership education
          </p>
        </div>
      </section>

      {/* Dr. Rakhudu Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={getAssetPath('assets/dr-koketso-rakhudu.jpg')}
                alt="Dr. Koketso Rakhudu"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-4xl font-heading font-bold text-primary-brown mb-6">
                Dr. Koketso Rakhudu
              </h2>
              <p className="text-xl text-gray-700 font-semibold mb-6">
                Founder & Principal | Traditional Leader | Scholar
              </p>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Dr. Koketso Rakhudu brings a unique blend of traditional leadership wisdom and contemporary business acumen to BSLE. As a traditional leader and accomplished scholar, he bridges two worlds - honoring ancestral knowledge while championing modern innovation.
                </p>
                <p>
                  His vision for BSLE emerged from witnessing the need for ethical, culturally grounded leaders who can navigate the complexities of 21st-century Africa while remaining rooted in values of Ubuntu, integrity, and community service.
                </p>
                <p>
                  Through BSLE, Dr. Rakhudu is cultivating a new generation of leaders who understand that true excellence comes not from abandoning heritage, but from integrating timeless wisdom with cutting-edge practices.
                </p>
              </div>

              <div className="mt-8 p-6 bg-cyan-mist/20 border-l-4 border-leadership-green rounded-r-lg">
                <p className="text-lg font-semibold text-primary-brown italic">
                  "Leadership is not about power, but about responsibility - to our people, our planet, and our future generations."
                </p>
                <p className="text-sm text-gray-600 mt-2">- Dr. Koketso Rakhudu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-brown mb-6">
              Traditional Leadership Heritage
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our approach to leadership education is deeply rooted in African traditional governance systems, which have sustained communities for centuries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-primary-brown mb-4">Ubuntu Philosophy</h3>
              <p className="text-gray-700 leading-relaxed">
                The principle of shared humanity and interconnectedness forms the foundation of our leadership model - recognizing that individual success is inseparable from community wellbeing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-primary-brown mb-4">Collective Decision-Making</h3>
              <p className="text-gray-700 leading-relaxed">
                Traditional African governance emphasized inclusive consultation and consensus-building - values we integrate into modern stakeholder engagement and participatory leadership.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-primary-brown mb-4">Stewardship Mindset</h3>
              <p className="text-gray-700 leading-relaxed">
                Traditional leaders were custodians, not owners - a perspective that aligns perfectly with contemporary ESG principles and sustainable business practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-primary-brown mb-4">Intergenerational Wisdom</h3>
              <p className="text-gray-700 leading-relaxed">
                Honoring elders while preparing future generations - we balance respect for experience with investment in innovation and youth empowerment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-primary-brown mb-4">Restorative Justice</h3>
              <p className="text-gray-700 leading-relaxed">
                Traditional conflict resolution focused on healing and restoration rather than punishment - principles we apply to organizational culture and change management.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-primary-brown mb-4">Sacred Responsibility</h3>
              <p className="text-gray-700 leading-relaxed">
                Leadership as a spiritual and moral calling, not merely a position - fostering the ethical backbone needed for authentic transformational leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-primary-brown mb-6">
            Integrating Heritage with Innovation
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            At BSLE, we don't see traditional wisdom and modern innovation as opposing forces. Instead, we demonstrate how African leadership principles provide the ethical foundation for sustainable 21st-century business practices.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            This integration positions African leaders not as followers of Western models, but as innovators drawing on rich cultural resources to chart unique pathways toward ethical, sustainable, and inclusive prosperity.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-brown text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Lead with Purpose, Rooted in Heritage
          </h2>
          <p className="text-xl mb-8">
            Join a leadership journey that honors where you come from while preparing you for where you're going.
          </p>
          <a
            href="/admissions"
            className="inline-block bg-leadership-green hover:bg-forest-green text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors focus-ring shadow-xl"
          >
            Explore Our Programmes
          </a>
        </div>
      </section>
    </>
  );
};

export default Leadership;
