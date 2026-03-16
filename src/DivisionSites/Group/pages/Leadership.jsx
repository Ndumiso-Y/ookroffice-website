import { Helmet } from 'react-helmet-async';
import { getAssetPath } from '../utils/assetPath';

const Leadership = () => {
  return (
    <>
      <Helmet>
        <title>Leadership - KKR Group</title>
        <meta
          name="description"
          content="Meet Dr. Koketso Rakhudu, Founder & Executive Chairperson of KKR Group - a visionary leader driving sustainable economic ecosystems."
        />
      </Helmet>

      <section className="py-16 bg-neutral-gray min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-royal-blue text-center mb-12">
            Leadership
          </h1>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Image Section */}
              <div className="md:col-span-2 bg-neutral-gray flex items-center justify-center">
                <img
                  src={getAssetPath('/assets/leadership-dr-koketso.jpg')}
                  alt="Dr. Koketso Rakhudu - Founder & Executive Chairperson"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content Section */}
              <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-royal-blue mb-2">
                    Dr. Koketso Rakhudu
                  </h2>
                  <p className="text-xl text-gold font-semibold">
                    Founder & Executive Chairperson
                  </p>
                </div>

                <blockquote className="border-l-4 border-gold pl-6 mb-8">
                  <p className="text-2xl italic text-charcoal leading-relaxed">
                    "Leadership grounded in Vision, Integrity, and Impact."
                  </p>
                </blockquote>

                <div className="prose prose-lg">
                  <p className="text-charcoal leading-relaxed mb-4">
                    Dr. Koketso Rakhudu is a visionary leader bridging policy, community, and innovation to create sustainable economic ecosystems.
                  </p>
                  <p className="text-charcoal leading-relaxed">
                    With a deep commitment to economic development and social empowerment, Dr. Rakhudu has positioned the KKR Group as a catalyst for transformative growth across Africa, leveraging strategic partnerships and community-focused initiatives to drive lasting impact.
                  </p>
                </div>

                {/* Optional: Additional highlights */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-neutral-gray rounded-lg">
                    <div className="text-royal-blue font-bold text-xl mb-1">Vision</div>
                    <div className="text-sm text-charcoal">Strategic Foresight</div>
                  </div>
                  <div className="text-center p-4 bg-neutral-gray rounded-lg">
                    <div className="text-royal-blue font-bold text-xl mb-1">Integrity</div>
                    <div className="text-sm text-charcoal">Ethical Leadership</div>
                  </div>
                  <div className="text-center p-4 bg-neutral-gray rounded-lg">
                    <div className="text-royal-blue font-bold text-xl mb-1">Impact</div>
                    <div className="text-sm text-charcoal">Tangible Results</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Leadership;
