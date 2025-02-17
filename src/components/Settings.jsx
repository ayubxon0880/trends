import React from "react";

export default function Settings() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
          <div className="space-y-4">
            {[
              { label: "Name", value: "Diyora" },
              { label: "Surname", value: "Mirpulatova" },
              { label: "Date of birth", value: "17/11/2000" },
              { label: "E-mail", value: "dieramirpulatova19@gmail.com" },
              { label: "Phone number", value: "+998950782010" },
              { label: "Address", value: "Uzbekistan, Tashkent city, Mirzo-Ulugbek, Labzak street" },
              { label: "Position", value: "Business woman" },
              { label: "Market", value: "Uzum" }
            ].map((field, index) => (
              <div key={index}>
                <p className="text-gray-600 text-sm">{field.label}</p>
                <input type="text" value={field.value} readOnly className="w-full bg-pink-100 p-2 rounded-md" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Privacy and Security</h2>
          <div className="space-y-4">
            {[
              { label: "Your password", value: "********" },
              { label: "Your login", value: "" }
            ].map((field, index) => (
              <div key={index}>
                <p className="text-gray-600 text-sm">{field.label}</p>
                <input type="text" value={field.value} readOnly className="w-full bg-pink-100 p-2 rounded-md" />
              </div>
            ))}
            <div className="flex justify-between items-center bg-pink-100 p-2 rounded-md">
              <p className="text-gray-600 text-sm">Notification</p>
              <button className="text-blue-500">Turn on</button>
            </div>
            {[
              { label: "Change the password" },
              { label: "Change the login" }
            ].map((field, index) => (
              <div key={index}>
                <p className="text-gray-600 text-sm">{field.label}</p>
                <input type="text" className="w-full bg-pink-100 p-2 rounded-md" />
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <button className="text-red-500 font-bold">Log out</button>
            <p className="text-blue-500 mt-2 cursor-pointer">Return to home</p>
          </div>
        </div>
      </div>
    </div>
  );
}
