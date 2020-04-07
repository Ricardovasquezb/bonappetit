import React from 'react';
import ContentLoader from 'react-content-loader'

const ReservationCardLoader = () =>{
  return (
    <ContentLoader
      speed={2}
      width={333}
      height={475}
      viewBox="0 0 333 475"
      backgroundColor="#f3f3f3"
      foregroundColor="#f27980"
    >
      <circle cx="602" cy="546" r="15" />
      <rect x="16" y="276" rx="6" ry="6" width="201" height="13" />
      <rect x="19" y="247" rx="6" ry="6" width="116" height="13" />
      <rect x="3" y="65" rx="2" ry="2" width="288" height="157" />
      <rect x="160" y="284" rx="0" ry="0" width="1" height="1" />
      <rect x="32" y="305" rx="0" ry="0" width="103" height="37" />
    </ContentLoader>
  )
};

export default ReservationCardLoader;