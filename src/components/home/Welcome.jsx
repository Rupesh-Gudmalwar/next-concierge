import React from "react";
import Image from "next/image";
import Button from "../base/Button";

const Welcome = () => {
  return (
    <div className='welcome-container'>
      <Image src='/profile.png' width={160} height={40} alt='logo' />
      {/* <Image src='/profile.png' width={380} height={485} alt='cover' /> */}
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
