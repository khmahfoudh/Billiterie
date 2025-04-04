// resources/js/components/Events.jsx
import React from "react";

const events = [
  {
    title: "",
    image:"/images/ch-leaugs.png" 
  },
  {
    title: "UEFA Europa League",
    image: "/images/",
  },
  {
    title: "UEFA Conference League",
    image: "/images/",
  },
  {
    title: "LaLiga",
    image: "/images/",
  },
  {
    title: "Premier League",
    image: "/images/",
  },
  {
    title: "Bundesliga",
    image: "/images/bundesliga.jpg",
  },
];

const Events = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Events</h1>
      <div className="grid grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <h2 className="text-white text-xl font-semibold">{event.title}</h2>
            </div>
            <button className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded-full shadow">
              Visiter
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
