import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = ({ newBooking }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setLoading(true);
      })
      .catch(error => window.alert("Ooops, Something went wrong"));
  }, []);

  const search = searchVal => {
    let searchRes = bookings.filter(booking => {
      return (
        booking.firstName.toLowerCase().includes(searchVal) ||
        booking.surname.toLowerCase().includes(searchVal)
      );
    });
    setBookings(searchRes);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loading ? (
          <SearchResults results={bookings} newBookingInfo={newBooking} />
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Bookings;
