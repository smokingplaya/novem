import { useEffect, useState } from 'react';

function Background() {
  const images = [
    "https://media.moddb.com/images/games/1/1/233/nammotherfuckers.jpg",
    "https://avatars.mds.yandex.net/i?id=71b8bf7c0c6985ea0cc1a8584440429f_l-4306555-images-thumbs&n=13"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute w-screen h-screen overflow-hidden -z-10">
      <img
        src={images[currentImageIndex]}
        className="w-full h-full object-cover animate-zoomIn"
        alt="background"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
}

export default Background;
