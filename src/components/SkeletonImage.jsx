import React, { useState } from 'react';

const SkeletonImage = ({ src, alt, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="image-wrapper">
      {isLoading && <div className="skeleton-loader"></div>}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        className={`image ${isLoading ? 'hidden' : 'visible'}`}
        {...props}
      />
    </div>
  );
};

export default SkeletonImage;
