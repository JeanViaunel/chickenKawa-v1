import React from "react";
import { Container } from "@material-ui/core";
import farmData from "./farmData";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <Container className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">
          About Us - {farmData.farmName}
        </h2>

        <p className="text-lg mb-6">{farmData.mission}</p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Our Values:</h3>
          <ul className="list-disc list-inside">
            {farmData.values.map((value, index) => (
              <li key={index} className="mb-2">
                {value}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Meet Our Team:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {farmData.team.map((teamMember, index) => (
              <div key={index} className="bg-white p-6 rounded shadow-md">
                <h4 className="text-xl font-bold mb-2">{teamMember.name}</h4>
                <p className="text-gray-600">{teamMember.role}</p>
                <p className="mt-4">{teamMember.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
