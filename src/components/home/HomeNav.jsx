import React from "react";

const HomeNav = () => {
  return (
    <div className='homenav-container'>
      <img
        src='/images/cover.png'
        alt='cover'
        width={"100%"}
        height={"320px"}
      />
      <div className='welcome-section'>
        <section>
          <span className='block hello'>Hello Micheal,</span>
          <span className='block wish'>Good Morning</span>
        </section>
        <section>
          <span className='block booking-id'>Booking Id</span>
          <span className='block wish'>IG15493</span>
        </section>
      </div>

      <div className="nav-section">
        <h2>How can we help you?</h2>
      </div>
    </div>
  );
};

export default HomeNav;
