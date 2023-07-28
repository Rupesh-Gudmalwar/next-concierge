import React from "react";

const ChatFooter = () => {
  return (
    <footer>
      <div className='flex'>
        <section className='mr-4'>
          <img src='/svgs/chat.svg' alt='icon' width={40} height={40} />
        </section>
        <section>
          <span className='support block'>Support</span>
          <span className='call block mt-1'>Call or chat with us</span>
        </section>
      </div>
      <section>
        <img src='/svgs/right-arrow.svg' alt='' />
      </section>
    </footer>
  );
};

export default ChatFooter;
