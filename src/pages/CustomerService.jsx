import React from "react";

const services = ["Communications", "FAQ", "Support Forums", "Privacy Policy", "Rules and Conditions", "Contact Us"]

const CustomerService = () => (
  <div className="p-6 text-left">
    <h2 className="text-xl font-bold text-white">Customer Service</h2>
    <ul className="space-y-1">
      {services.map((service, index) => (
        <li key={index} className="text-xs text-gray-400">
          {service}
        </li>
      ))}
    </ul>
  </div>
);

export default CustomerService;