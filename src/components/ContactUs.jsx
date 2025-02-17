import React from "react";

const contacts = [
  {
    name: "Ivan Kozlin",
    role: "Legal Consultant",
    email: "ivankozlin01@gmail.com",
    phone: "+998 123 45 67",
    image: "https://via.placeholder.com/100"
  },
  {
    name: "Jons Jonson",
    role: "Marketing Specialist",
    email: "lamjohnjonson@gmail.com",
    phone: "+998 123 45 67",
    image: "https://via.placeholder.com/100"
  },
  {
    name: "Yana Yenina",
    role: "Data Scientist/Analyst",
    email: "yayanaaa1998@gmail.com",
    phone: "+998 123 45 67",
    image: "https://via.placeholder.com/100"
  },
  {
    name: "Behruz",
    role: "DevOps Engineer",
    email: "behruzabdulliev@gmail.com",
    phone: "+998 123 45 67",
    image: "https://via.placeholder.com/100"
  },
  {
    name: "Sophia",
    role: "Data Engineer",
    email: "vashasooofiiaa@gmail.com",
    phone: "+998 123 45 67",
    image: "https://via.placeholder.com/100"
  },
  {
    name: "Mike Tayson",
    role: "Customer Support Representative",
    email: "nephisitesuda2@gmail.com",
    phone: "+998 123 45 67",
    image: "https://via.placeholder.com/100"
  }
];

export default function ContactUs() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-5xl w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <div key={index} className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg">
              <img
                src={contact.image}
                alt={contact.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">{contact.name}</h3>
              <p className="text-gray-600 text-sm">{contact.role}</p>
              <p className="text-gray-500 text-sm mt-2">{contact.email}</p>
              <p className="text-gray-500 text-sm">{contact.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
