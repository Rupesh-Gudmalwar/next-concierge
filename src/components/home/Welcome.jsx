import React from "react";
// import Image from "next/image";
import Button from "../base/Button";

const Welcome = () => {
  return (
    <div className='welcome-container'>
      {/* <Image src='/images/cover.png' width={160} height={40} alt='logo' /> */}
      <img
        src=''
        alt='logo'
        width={160}
        height={40}
        className='m-auto mt-12 mb-8'
      />
      {/* <Image src='/images/cover.png' width={380} height={485} alt='cover' /> */}
      <img
        src='/images/cover.png'
        width='100%'
        height='100%'
        // sizes='100vw'
        alt='cover'
      />
      <div className='p-4'>
        <span className='block heading'>{"Let's start your jourey!"}</span>
        <span className='block sub-heading pt-3 pb-6'>
          Enjoy your stay in our exceptional hotel
        </span>
        <Button label={"Continue"} />
      </div>
    </div>
  );
};

export default Welcome;
