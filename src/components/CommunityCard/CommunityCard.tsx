import React, { useState } from "react";
import av from '../../assets/AvatarCom.png';
import data from './CommunityCardDataset';
const CardComponent: React.FC = () => {

  const [heartFill, setHeartFill] = useState<boolean[]>([false, false, false]);
  const [hoveredHeartIndex, setHoveredHeartIndex] = useState<number | null>(null);
  const [likedStates, setLikedStates] = useState<boolean[]>([false, false, false]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleLikeToggle = (index: number) => {
    const newLikedStates = [...likedStates];
    newLikedStates[index] = !newLikedStates[index];
    setLikedStates(newLikedStates);
    likedStates && setHoveredIndex(null)
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleHeartToggle = (index: number) => {
    const newHeartStates = [...heartFill];
    newHeartStates[index] = !newHeartStates[index];
    setHeartFill(newHeartStates);
    heartFill && setHoveredHeartIndex(null)
  };
  const handleMouseEnterHeart = (index: number) => {
    setHoveredHeartIndex(index);
  };

  const handleMouseLeaveHeart = () => {
    setHoveredHeartIndex(null);
  };
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
    <div className="relative">
      <div className="flex overflow-x-auto hide-scrollbar px-8">
      {data.map((item, index) => (
        <div key={item.id} className="flex-shrink-0 md:mr-32 my-16 bg-white shadow-lg rounded-lg p-4">
          {/* 1st Row */}
          {item.row1.map(row1Item => (
            <div key={row1Item.title1} className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 mr-2">
                <img
                  src={row1Item.profilePic}
                  alt="Profile Pic"
                  className="rounded-full"
                /></div>
                <div className="ml-1">
                  <h2 className="text-md font-medium">{row1Item.title1} <span className="text-[#9597A1] font-normal">shared</span> Event</h2>
                  <p className="text-[#9597A1] text-xs">{row1Item.desc1}</p>
                </div>
              </div>
              <svg width="24" height="24" className="cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="#9597A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </div>
          ))}
          {/* 2nd Row */}
          {item.row2.map(rowItem2 => (
            < div key={item.id} className="relative mb-4 shadow-md" >
              <img
                src={rowItem2.imageURL}
                alt="card"
                className="w-full h-[123px] object-cover rounded-md"
              />
              <div className="absolute flex z-10 bottom-[-20px] left-4">
                <div className="p-1 bg-white rounded-md shadow-md align-middle text-center">
                  <p className="font-bold text-md">{rowItem2.dateSmall}</p>
                  <p className="font-medium text-[#f47d31]">{rowItem2.month}</p>
                </div>
              </div>
            </div>
          ))}
          {/* 3rd Row */}
          {item.row3.map(rowItem3 => (
            <div className="mb-4" key={rowItem3.title2}>
              <h2 className="text-md font-medium">{rowItem3.title2}</h2>
              <p className="text-[#9597A1] text-xs">{rowItem3.desc2}</p>
            </div>
          ))}
          {/* 4th Row */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-[-8px]">
              <img
                src={av}
                alt="Profile Icon 1"
                className="w-6 h-6 rounded-full"
              />
              <img
                src={av}
                alt="Profile Icon 2"
                className="w-6 h-6 rounded-full"
              />
              <img
                src={av}
                alt="Profile Icon 3"
                className="w-6 h-6 rounded-full"
              />
              <img
                src={av}
                alt="Profile Icon 4"
                className="w-6 h-6 rounded-full"
              />
            </div>
            <div>
              <svg width="17" height="15" viewBox="0 0 17 15"
                xmlns="http://www.w3.org/2000/svg"
                fill={heartFill[index] || hoveredHeartIndex === index ? '#f47d31' : "none"}
                stroke={heartFill[index] ? "#f47d31" : "currentColor"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-8 h-6 cursor-pointer"
                onClick={() => handleHeartToggle(index)}
                onMouseEnter={() => handleMouseEnterHeart(index)}
                onMouseLeave={handleMouseLeaveHeart}
              >
                <path d="M14.7554 2.14929C14.3913 1.78493 13.9588 1.4959 13.4829 1.2987C13.007 1.1015 12.4969 1 11.9817 1C11.4666 1 10.9564 1.1015 10.4805 1.2987C10.0046 1.4959 9.57219 1.78493 9.208 2.14929L8.45218 2.90512L7.69636 2.14929C6.96072 1.41366 5.96298 1.00038 4.92263 1.00038C3.88229 1.00038 2.88455 1.41366 2.14891 2.14929C1.41328 2.88493 1 3.88267 1 4.92302C1 5.96336 1.41328 6.9611 2.14891 7.69674L2.90473 8.45256L8.45218 14L13.9996 8.45256L14.7554 7.69674C15.1198 7.33255 15.4088 6.90014 15.606 6.42422C15.8032 5.94829 15.9047 5.43818 15.9047 4.92302C15.9047 4.40785 15.8032 3.89774 15.606 3.42182C15.4088 2.94589 15.1198 2.51348 14.7554 2.14929V2.14929Z" stroke="#9597A1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </div>
          </div>
          <hr className="mb-4 text-[#9597A1]" />

          {/* 5th Row */}
          <div className="flex items-center justify-between">
            <div className="flex flex-row">
              <div >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill={likedStates[index] || hoveredIndex === index ? 'blue' : 'none'}
                  stroke={likedStates[index] ? 'blue' : 'currentColor'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
                  onClick={() => handleLikeToggle(index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <circle opacity="0.1" cx="20" cy="20" r="20" fill="#5458F7" />
                  <path
                    d="M16.0417 27.1666H13.6167C13.1879 27.1666 12.7767 26.9963 12.4735 26.6931C12.1703 26.39 12 25.9787 12 25.55V19.8917C12 19.4629 12.1703 19.0517 12.4735 18.7485C12.7767 18.4453 13.1879 18.275 13.6167 18.275H16.0417M21.7 16.6583V13.425C21.7 12.7818 21.4445 12.165 20.9897 11.7103C20.5349 11.2555 19.9181 11 19.275 11L16.0417 18.275V27.1666H25.1596C25.5495 27.1711 25.9279 27.0344 26.225 26.7819C26.522 26.5294 26.7179 26.178 26.7763 25.7925L27.8918 18.5175C27.927 18.2858 27.9114 18.0492 27.846 17.8241C27.7807 17.5991 27.6672 17.3909 27.5134 17.2141C27.3596 17.0372 27.1692 16.8959 26.9554 16.8C26.7416 16.704 26.5095 16.6557 26.2751 16.6583H21.7Z"
                    stroke="#5458F7"
                    strokeWidth="1.61666"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="align-middle justify-center p-2">
                <span>12</span>
              </div>
            </div>
            <div className="flex flex-row">
              <div>

                <svg width="40" height="40" viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="cursor-pointer"
                >
                  <circle opacity="0.1" cx="20" cy="20" r="20" fill="#9597A1" />
                  <path d="M27.5 19.5834C27.5029 20.6832 27.2459 21.7683 26.75 22.75C26.162 23.9265 25.2581 24.916 24.1395 25.6078C23.021 26.2995 21.7319 26.6662 20.4167 26.6667C19.3168 26.6696 18.2318 26.4126 17.25 25.9167L12.5 27.5L14.0833 22.75C13.5874 21.7683 13.3305 20.6832 13.3333 19.5834C13.3338 18.2682 13.7005 16.9791 14.3923 15.8605C15.084 14.7419 16.0735 13.838 17.25 13.25C18.2318 12.7541 19.3168 12.4972 20.4167 12.5H20.8333C22.5703 12.5959 24.2109 13.329 25.441 14.5591C26.671 15.7892 27.4042 17.4297 27.5 19.1667V19.5834Z" stroke="#9597A1" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </div>
              <div className="align-middle justify-center p-2">
                <span>12</span>
              </div>
            </div>
            <div className="ml-auto">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.1" cx="20" cy="20" r="20" fill="#9597A1" />
                <mask id="mask0_373_434" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="12" y="11" width="16" height="17">
                  <path d="M20 11.9167V21.5" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 11.9167L23.75 16.0833" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16.2503 16.0833L20.0003 11.9167" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.3335 19.8333V24C13.3335 25.3807 14.4528 26.5 15.8335 26.5H24.1668C25.5475 26.5 26.6668 25.3807 26.6668 24V19.8333" stroke="black" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                </mask>
                <g mask="url(#mask0_373_434)">
                  <rect x="10" y="9.00001" width="20" height="20" fill="#9597A1" />
                </g>
              </svg>

            </div>
          </div>
        </div >
      ))}
  
      </div>
      
      </div>
    </>
  );
};

export default CardComponent;
