// // SpeechTest.js
// import React, { useState, useEffect } from 'react';

// const SpeechTest = () => {
//   const [hasSpoken, setHasSpoken] = useState(false);

//   const speakMessage = (message) => {
//     if ('speechSynthesis' in window) {
//       const msg = new SpeechSynthesisUtterance(message);
//       msg.lang = 'en-US';
//       window.speechSynthesis.speak(msg);
//     } else {
//       console.error('Speech synthesis is not supported in this browser.');
//     }
//   };

//   useEffect(() => {
//     if (!hasSpoken) {
//       speakMessage('Welcome to the Coffee shop !');
//       setHasSpoken(true);
//     }
//   }, [hasSpoken]);

//   // Function to trigger speech when the button is clicked
//   const handleButtonClick = () => {
//     speakMessage('Enjoy your coffee!');
//   };

//   return (
//     <div>
//       {/* Button to trigger speech again */}
//       <button
//         onClick={handleButtonClick}
//         className="mt-4 p-2 bg-blue-500 text-white rounded"
//       >
//         Click me for another message
//       </button>
//     </div>
//   );
// };

// export default SpeechTest;
import React, { useState, useEffect } from 'react';
import { FaVolumeUp } from 'react-icons/fa'; // Importing the volume-up icon from React Icons


const SpeechTest = () => {
  const speakMessage = (message) => {
    if ('speechSynthesis' in window) {
      const msg = new SpeechSynthesisUtterance(message);
      msg.lang = 'en-US'; // You can change this to other languages as needed.
      window.speechSynthesis.speak(msg);
    } else {
      console.error('Speech synthesis is not supported in this browser.');
    }
  };

  // Effect for initial page load or reload
  useEffect(() => {
    // Speak the welcome message only on initial page load and reload
    speakMessage('Welcome to the Coffee Shop!');
  }, []);

  // Function to trigger speech when the button is clicked
  const handleButtonClick = () => {
    speakMessage('Enjoy your menu!');
  };

  return (
    <div className='mt-7'>
      {/* Button to trigger speech again */}
      <button
        onClick={handleButtonClick}
        className=" mt-4 gap-1 -500 text-black text-2xl font-bold rounded flex items-center "
      >
        {/* React Icon for Sound */}
        <span >WELCOME TO COFFEE SHOP !</span>
        <FaVolumeUp className=" text-3xl mobile:text-5xl " /> {/* You can change the size with the className */}

      </button>
    </div>
  );
};

export default SpeechTest;
