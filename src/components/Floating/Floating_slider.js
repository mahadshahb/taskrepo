import React, { useState } from 'react';

const FloatingSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0); // State to manage slider index

  const images = [
    '/images/one.png',
    '/images/two.png',
    // Add more image paths as needed
  ];

  const content = [
    { text1: "Total compliance , One Solutions ", textOne: "The easy way to manage recruitment Compliance", text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the ogg 1500s ert standard dummy', buttonText: 'Get in Touch', buttonTextOne: 'Start Now' },
    { text1: "Total compliance , One Solutions ", textOne: "The easy way to manage recruitment Compliance", text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry  standard dummy text ever since the 1500s ert hello', buttonText: 'Get Started', buttonTextOne: 'Start Now' },
    // Add more content as needed
  ];

  const handleNextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <header className="relative h-screen overflow-hidden">
      {/* Background curve image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/bg_img.jpg"
          alt="Blue curve background"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Menu bar */}
      <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-0 py-4 px-6 flex justify-around items-center">
        <div>
          <h1 className='custom_logo'>Logo</h1>
        </div>
        <div className='flex gap-x-5'>
          <div className="text-white text-sm">Home</div>
          <div className="text-white text-sm">About</div>
          <div className="text-white text-sm">Team</div>
          <div className="text-white text-sm">Products</div>
          <div className="text-white text-sm">Solutions</div>
          <div className="text-white text-sm">Pricing</div>
          <div className="text-white text-sm">Contact US</div>
        </div>
        <div>
          <button className=" bg-white px-4 text-blue-700 py-1 font-medium rounded-md border-white">
            Sign in
          </button>
        </div>
      </div>

      {/* Floating laptop image */}
      <img
        src={images[slideIndex]}
        alt="Laptop"
        className="absolute top-1/2 left-2/3 custom-width h-auto transform -translate-x-1/2 -translate-y-1/2 
        transition-transform duration-500"
      />

      {/* Sliding content and buttons */}
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-10">
        <div className="flex justify-between px-4">
          <button onClick={handlePrevSlide} className="bg-white px-4 py-2 rounded-sm transition duration-300 hover:bg-gray-200">
            Prev
          </button>
          <button onClick={handleNextSlide} className="bg-white px-4 py-2 rounded-sm transition duration-300 hover:bg-gray-200">
            Next
          </button>
        </div>
        {/* Content goes here */}
      </div>

      <div className="flex flex-col justify-start items-start pl-custom pr-32 w-1/2 absolute top-1/4">
        <p className="text-white text-md">{content[slideIndex].text1}</p>
        <div className='flex flex-col gap-y-4'>
          <h2 className="text-white font-semibold text-3xl">{content[slideIndex].textOne}</h2>
          <p className="text-white text-lg">{content[slideIndex].text}</p>
          <div className=' flex gap-x-3'>
            <button className=" bg-blue-600 text-white px-4 bg-opacity-0 py-2 rounded-md border-white custom-border-1">
              {content[slideIndex].buttonText}
            </button>
            <button className="bg-blue-600 text-white px-4 bg-opacity-0 py-2 rounded-md border-white custom-border-1">
              {content[slideIndex].buttonTextOne}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FloatingSlider;
