import Img from 'next/image';
import { useState } from 'react';

function ImageWrapper({ src, width, height, alt, className, fill, priority, noPlaceholder }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false)

  return (
    <div className={`${className} ${ noPlaceholder ? '' : 'bg-off-black bg-opacity-10'} ${imageIsLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out will-change`}>
      <Img
        quality={90}
        src={src}
        width={width}
        height={height}
        className={`${className}`} 
        alt={alt ?? null}
        layout={fill ? 'fill' : 'responsive'}
        objectFit={fill ? 'cover' : null}
        priority={priority ? priority : false}
        onLoad={event => {
          const target = event.target;
          if (target.src.indexOf('data:image/gif;base64') < 0) {
            setImageIsLoaded(true)
          }
        }}
      />
    </div>
  )
}

export default ImageWrapper;