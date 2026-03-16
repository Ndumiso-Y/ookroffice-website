import React from "react";

const AssociationsSection = () => {
  const associations = [
    {
      name: "Partner Org 1",
      logo: "https://via.placeholder.com/100",
    },
    {
      name: "Partner Org 2",
      logo: "https://via.placeholder.com/100",
    },
    {
      name: "Partner Org 3",
      logo: "https://via.placeholder.com/100",
    },
    {
      name: "Partner Org 4",
      logo: "https://via.placeholder.com/100",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Associations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
          {associations.map((partner, index) => (
            <div key={index}>
              <img
                src={partner.logo}
                alt={partner.name}
                className="mx-auto h-20 object-contain"
              />
              <p className="mt-2 text-sm text-gray-600">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssociationsSection;
