

import { useState, useEffect } from 'react';

const CalendarView = ({ meetings }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Ensure the month and year are updated correctly when the component mounts
    const now = new Date();
    setCurrentMonth(now.getMonth());
    setCurrentYear(now.getFullYear());
  }, []);

  const renderCalendar = () => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    let days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayMeetings = meetings.filter(meeting => meeting.startsWith(date));
      
      days.push(
        <div key={day} className={`day ${dayMeetings.length ? 'meeting-day' : ''}`}>
          {day}
          <div className="meeting-times">
            {dayMeetings.map((meeting, index) => (
              <div key={index}>
                {new Date(meeting).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return days;
  };

  const changeMonth = (direction) => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Meeting Calendar</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={() => changeMonth('prev')} style={{ padding: '5px' }}>
          Previous
        </button>
        <span>{new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
        <button onClick={() => changeMonth('next')} style={{ padding: '5px' }}>
          Next
        </button>
      </div>
      <div className="calendar">
        {renderCalendar()}
      </div>
      <style>{`
        .calendar {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 5px;
          margin-top: 20px;
        }
        .day, .empty-day {
          padding: 10px;
          border: 1px solid #ddd;
          text-align: center;
        }
        .meeting-day {
          background-color: #5b40a4;
          color: #fff;
        }
        .meeting-times {
          margin-top: 5px;
          font-size: 0.8em;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default CalendarView;
