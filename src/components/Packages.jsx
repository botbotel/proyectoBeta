import React, { useState } from 'react';
import '../components/packages.css';
import Package from './Package';
import { Firestore, getFirestore } from 'firebase/firestore';
import firebaseConfig from '../firebase/firebaseConfig';

const bundles = [
    {
        id: 1,
        name: 'Basic bundle',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem a temporibus assumenda, aspernatur dolore, velit iste et veritatisfacilis possimus iure ad veniam sed. Omnis consectetur a ametarchitecto dignissimos.',
        price: 5.00 
    },
    {
        id: 2,
        name: 'Normal bundle',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem a temporibus assumenda, aspernatur dolore, velit iste et veritatisfacilis possimus iure ad veniam sed. Omnis consectetur a ametarchitecto dignissimos.',
        price: 15.00 
    },
    {
        id: 3,
        name: 'Premium bundle',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem a temporibus assumenda, aspernatur dolore, velit iste et veritatisfacilis possimus iure ad veniam sed. Omnis consectetur a ametarchitecto dignissimos.',
        price: 25.00 
    },
];

const Packages = ({ addToCart }) => {
    const [meetings, setMeetings] = useState([]);
    const [selectedMeeting, setSelectedMeeting] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [error, setError] = useState('');

    const handleDateChange = (event) => {
        setSelectedMeeting(event.target.value);
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    const handleAddMeeting = () => {
        const dateTime = new Date(`${selectedMeeting}T${selectedTime}`);
        const now = new Date();

        if (!selectedMeeting || !selectedTime) {
            setError('Please select both a date and a time.');
            return;
        }

        if (dateTime < now) {
            setError('Cannot schedule a meeting in the past.');
            return;
        }

        setMeetings([...meetings, dateTime.toISOString()]);
        setSelectedMeeting('');
        setSelectedTime('');
        setError('');
    };

    const handleDeleteMeeting = (meeting) => {
        setMeetings(meetings.filter(m => m !== meeting));
    };

    const handleClick = (bundle) => {
        if (!meetings.length) {
            setError('Please schedule a meeting before selecting a package.');
            return;
        }

        addToCart({ ...bundle, meeting: meetings[0] });
        setMeetings([]); // Clear the meetings after adding the package to the cart
    };

    return (
        <div className="container mt-md-5 p-4">
            <h2>Schedule a Meeting</h2>
            <div>
                <input 
                    type="date" 
                    value={selectedMeeting} 
                    onChange={handleDateChange} 
                    style={{ padding: '5px', marginRight: '10px' }}
                />
                <input 
                    type="time" 
                    value={selectedTime} 
                    onChange={handleTimeChange} 
                    style={{ padding: '5px', marginRight: '10px' }}
                />
                <button onClick={handleAddMeeting} style={{ padding: '5px' }}>
                    Add Meeting
                </button>
                {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
                <ul style={{ marginTop: '20px' }}>
                    {meetings.map((dateTime, index) => (
                        <li key={index}>
                            {new Date(dateTime).toLocaleString()}
                            <button onClick={() => handleDeleteMeeting(dateTime)} style={{ marginLeft: '10px' }}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="cards mt-md-5">
                <div className="row">
                    {bundles.map(bundle => (
                        <div key={bundle.id} className="col-sm-6 mb-3 mb-sm-0">
                            <Package 
                                name={bundle.name}
                                description={bundle.description}
                                price={bundle.price}
                                handleClick={() => handleClick(bundle)}
                            />     
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Packages;
