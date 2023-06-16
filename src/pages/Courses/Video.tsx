// import  React,{ useEffect } from "react";
// import './Video.css'

// const Video = () => {
//     useEffect(() => {
//         const script = document.createElement('script');
//         script.src = 'https://cdn.plyr.io/3.7.8/plyr.polyfilled.js';
//         script.onload = initializePlayer;
//         document.body.appendChild(script);
    
//         return () => {
//           document.body.removeChild(script);
//         };
//       }, []);
    
//       const initializePlayer = () => {
//         const player = new Plyr('#player', {
//           controls: ['play-large', 'play', 'progress', 'current-time', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen', 'loop'],
//           settings: ['captions', 'quality', 'speed', 'loop'],
//           autoplay: true
    
//         });
//       };
//   return (
//     <div className="Video_section">
//       <video id="player" playsInline controls data-poster="src/Subject.jpg">
//         <source src="/path/to/video.mp4" type="video/mp4" />
//         <source src="src/sam.webm" type="video/webm" />
//       </video>
//       <div className="learning_btn">
//         <h3 className=" text-lg font-bold font-mainFont">Start Learning</h3>
//       </div>
//     </div>
//   );
// };

// export default Video;

import React, { useEffect } from "react";
import './Video.css'

const Video = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.plyr.io/3.7.8/plyr.polyfilled.js';
        script.onload = initializePlayer;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    
      const initializePlayer = () => {
        const player = new Plyr('#player', {
          controls: ['play-large', 'play', 'progress', 'current-time', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen', 'loop'],
          settings: ['captions', 'quality', 'speed', 'loop'],
          autoplay: true
    
        });
      };
  return (
    <div className="Video_section">
      <video id="player" playsInline controls data-poster="src/Subject.jpg">
        <source src="/path/to/video.mp4" type="video/mp4" />
        <source src="src/sam.webm" type="video/webm" />
      </video>
      <div className="learning_btn">
        <h3 className=" text-lg font-bold font-mainFont">Start Learning</h3>
      </div>
    </div>
  );
};

export default Video;