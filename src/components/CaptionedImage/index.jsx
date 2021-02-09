import React from 'react';

const CaptionedImage = ({src, alt, caption}) => {
  return (
    <figure>
      <img src={src} alt={alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export default CaptionedImage;