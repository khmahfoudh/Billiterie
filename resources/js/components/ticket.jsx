import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('/api/events').then(response => {
            setEvents(response.data);
        });
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <header className="flex justify-between items-center px-10 py-6 bg-gray-50 shadow">
                <div className="flex items-center gap-10">
                    <h1 className="text-2xl font-bold">WYM SHOOT ⚽</h1>
                    <nav className="space-x-6 font-medium">
                        <a href="#" className="text-gray-600">Home</a>
                        <a href="#" className="font-bold text-black">Events</a>
                    </nav>
                </div>
                <div className="space-x-4">
                    <a href="#" className="text-blue-500 font-medium">Sign in</a>
                    <a href="#" className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full font-medium">Register</a>
                </div>
            </header>

            <main className="px-10 py-10">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968622.png" alt="logo" className="w-6 h-6" />
                    Ligue des champions de l'UEFA
                </h2>
                <div className="grid gap-6">
                    {events.map((event) => (
                        <div key={event.id} className="flex items-center justify-between bg-gray-100 rounded-xl p-4 shadow-sm">
                            <div className="flex items-center gap-6">
                                <div className="text-center">
                                    <img src={event.team1_logo} alt={event.team1} className="h-12 mx-auto" />
                                    <p className="text-sm">{event.team1}</p>
                                </div>
                                <div className="text-center">
                                    <p className="font-bold">{event.date}</p>
                                    <p className="text-sm text-gray-500">{event.time}</p>
                                </div>
                                <div className="text-center">
                                    <img src={event.team2_logo} alt={event.team2} className="h-12 mx-auto" />
                                    <p className="text-sm">{event.team2}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <p className="text-lg font-bold">${event.price}</p>
                                <button className="bg-sky-400 hover:bg-sky-500 text-white px-4 py-2 rounded shadow">ACHETER</button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Events;
