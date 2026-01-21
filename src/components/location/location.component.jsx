import React from "react";

export default function Location() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Map Section */}
        <div className="h-[400px] lg:h-full min-h-[400px]">
          <iframe
            className="w-full h-full"
            title="Fat Pig BBQ Location"
            style={{ border: "0" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS}&q=fat+pig+bbq, Edmonds+WA`}
          ></iframe>
        </div>

        {/* Info Section */}
        <div className="p-12 flex flex-col justify-center bg-[#FDFBF7]">
          <h2 className="text-4xl font-serif font-bold text-[#1F1A17] mb-8">Visit Us</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-bold text-brand-red tracking-widest uppercase mb-2">Location</h3>
              <p className="text-xl text-gray-700 font-medium">7533 Olympic View Dr<br />Edmonds, WA 98026</p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-brand-red tracking-widest uppercase mb-2">Hours</h3>
              <ul className="space-y-2 text-lg text-gray-600">
                <li className="flex justify-between max-w-xs">
                  <span>Mon - Thurs</span>
                  <span className="font-semibold text-gray-900">11:00 AM - 7:30 PM</span>
                </li>
                <li className="flex justify-between max-w-xs">
                  <span>Fri - Sat</span>
                  <span className="font-semibold text-gray-900">11:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between max-w-xs text-red-500">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-cream/50 p-4 rounded-lg border border-brand-red/10">
              <p className="text-sm text-gray-500 italic">
                * Hours may vary during holidays. Check our Facebook page for updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
