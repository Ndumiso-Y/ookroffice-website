import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SegmentVideo from '../components/SegmentVideo';
import { getAssetPath } from '../utils/assetPath';

const Programmes = () => {
  return (
    <>
      <Helmet>
        <title>Programmes - Business School of Leadership Excellence</title>
        <meta
          name="description"
          content="Explore BSLE's transformative leadership programmes: ESG Leadership, King IV Six Capitals, Strategic Leadership, Ethical Labs, and Cultural Competency."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-forest-green to-leadership-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Our Programmes
            </h1>
            <p className="text-xl leading-relaxed">
              Transformative leadership education designed for the modern African leader - integrating ESG principles, governance frameworks, and cultural wisdom.
            </p>
          </div>
        </div>
      </section>

      {/* ESG Leadership Programme */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-primary-brown mb-6">
                ESG Leadership Programme
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Master the principles of Environmental, Social, and Governance leadership. This comprehensive programme equips leaders with the frameworks, tools, and strategies to drive sustainable business practices and create measurable positive impact.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-leadership-green text-xl mr-3">•</span>
                  <span className="text-gray-700">Environmental stewardship and climate action strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-leadership-green text-xl mr-3">•</span>
                  <span className="text-gray-700">Social responsibility and stakeholder engagement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-leadership-green text-xl mr-3">•</span>
                  <span className="text-gray-700">Governance excellence and ethical decision-making</span>
                </li>
                <li className="flex items-start">
                  <span className="text-leadership-green text-xl mr-3">•</span>
                  <span className="text-gray-700">ESG reporting and impact measurement</span>
                </li>
              </ul>
              <Link
                to="/admissions"
                className="inline-block bg-leadership-green hover:bg-forest-green text-white px-6 py-3 rounded-lg font-semibold transition-colors focus-ring"
              >
                Enquire Now
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <SegmentVideo
                src={getAssetPath('assets/team-meeting-video.mp4')}
                poster={getAssetPath('assets/programmes-esg-video-cover.jpg')}
                className="w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* King IV Six Capitals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-primary-brown to-accent-clay text-white p-12 rounded-xl shadow-2xl">
                <h3 className="text-2xl font-heading font-bold mb-6">The Six Capitals</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">1</div>
                    <span className="text-lg">Financial Capital</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">2</div>
                    <span className="text-lg">Manufactured Capital</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">3</div>
                    <span className="text-lg">Intellectual Capital</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">4</div>
                    <span className="text-lg">Human Capital</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">5</div>
                    <span className="text-lg">Social & Relationship Capital</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">6</div>
                    <span className="text-lg">Natural Capital</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-heading font-bold text-primary-brown mb-6">
                King IV & Six Capitals Framework
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Deep dive into South Africa's leading corporate governance framework. Learn to apply the King IV principles and understand value creation through the lens of the Six Capitals model.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                This programme develops your ability to think holistically about organizational value, stakeholder interests, and integrated reporting - essential skills for modern board members and senior executives.
              </p>
              <Link
                to="/admissions"
                className="inline-block bg-primary-brown hover:bg-accent-clay text-white px-6 py-3 rounded-lg font-semibold transition-colors focus-ring"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-brown mb-6">
              Strategic Leadership Development
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Build the strategic thinking, vision-setting, and execution capabilities needed to lead organizations through complexity and change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-sky-blue to-cyan-mist text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-heading font-bold mb-4">Strategic Thinking</h3>
              <p className="leading-relaxed mb-4">
                Develop the ability to see the big picture, anticipate trends, and position your organization for long-term success in dynamic environments.
              </p>
            </div>

            <div className="bg-gradient-to-br from-leadership-green to-forest-green text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-heading font-bold mb-4">Change Management</h3>
              <p className="leading-relaxed mb-4">
                Master the art and science of leading organizational transformation while maintaining stakeholder engagement and cultural cohesion.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent-clay to-primary-brown text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-heading font-bold mb-4">Innovation Leadership</h3>
              <p className="leading-relaxed mb-4">
                Foster cultures of innovation, manage creative processes, and turn innovative ideas into tangible organizational value.
              </p>
            </div>

            <div className="bg-gradient-to-br from-forest-green to-leadership-green text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-heading font-bold mb-4">Performance Excellence</h3>
              <p className="leading-relaxed mb-4">
                Design and implement high-performance systems that align strategy with execution and drive sustainable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical Leadership Labs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-brown mb-6">
              Ethical Leadership Labs
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Experiential learning environments where leaders grapple with real-world ethical dilemmas, develop moral courage, and practice values-based decision-making under pressure.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-lg text-left">
              <h3 className="text-2xl font-heading font-bold text-primary-brown mb-4">Lab Modules Include:</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <span className="text-leadership-green text-xl mr-3">✓</span>
                  <span className="text-gray-700">Ethical dilemma simulations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-leadership-green text-xl mr-3">✓</span>
                  <span className="text-gray-700">Stakeholder analysis workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-leadership-green text-xl mr-3">✓</span>
                  <span className="text-gray-700">Values clarification exercises</span>
                </li>
                <li className="flex items-start">
                  <span className="text-leadership-green text-xl mr-3">✓</span>
                  <span className="text-gray-700">Moral courage development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-leadership-green text-xl mr-3">✓</span>
                  <span className="text-gray-700">Whistleblowing protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="text-leadership-green text-xl mr-3">✓</span>
                  <span className="text-gray-700">Corporate governance cases</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Competency */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-primary-brown mb-6">
                Cultural Competency & Ubuntu Leadership
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Develop the cultural intelligence and inclusive leadership skills essential for navigating diverse teams, markets, and stakeholder ecosystems in contemporary Africa and beyond.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Rooted in the African philosophy of Ubuntu, this programme teaches leaders how to honor cultural heritage while building bridges across differences and fostering truly inclusive environments.
              </p>
              <div className="bg-cyan-mist/20 border-l-4 border-sky-blue p-6 rounded-r-lg">
                <p className="text-lg font-semibold text-primary-brown italic">
                  "Ubuntu: I am because we are. A person is a person through other people."
                </p>
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-leadership-green to-forest-green text-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-heading font-bold mb-2">Cultural Intelligence</h3>
                  <p>Navigate and bridge diverse cultural contexts with sensitivity and effectiveness</p>
                </div>
                <div className="bg-gradient-to-r from-sky-blue to-cyan-mist text-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-heading font-bold mb-2">Inclusive Leadership</h3>
                  <p>Create environments where all voices are heard and diverse talents flourish</p>
                </div>
                <div className="bg-gradient-to-r from-accent-clay to-primary-brown text-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-heading font-bold mb-2">Indigenous Wisdom</h3>
                  <p>Apply traditional African knowledge systems to modern leadership challenges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-brown text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Transform Your Leadership Capacity
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Join one of our programmes and become the ethical, strategic, and culturally grounded leader your organization and community needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="bg-leadership-green hover:bg-forest-green text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors focus-ring shadow-xl"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-primary-brown px-10 py-4 rounded-lg font-semibold text-lg transition-colors focus-ring shadow-xl"
            >
              Request Information
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programmes;
