import React, { useState } from "react";

export default function ProjectModal({ project, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!project || !project.media || project.media.length === 0) return null;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % project.media.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? project.media.length - 1 : prevSlide - 1
    );
  };

  const renderSlide = (slide) => {
    const isImage = /\.(jpeg|jpg|gif|png)$/i.test(slide);
    const isVideo = /\.(mp4|webm|ogg)$/i.test(slide);
  
    if (isImage) {
      return (
        <img
          src={slide}
          alt={`Slide ${currentSlide + 1}`}
          className="w-full max-w-[1000px] max-h-[600px] object-contain mx-auto mb-2 md:max-w-[80%] lg:max-w-[60%] sm:max-w-[90%]" // Responsive size control for images
        />
      );
    } else if (isVideo) {
      return (
        <div className="w-full flex justify-center">
          <video
            controls
            className="w-full max-w-[1000px] max-h-[600px] object-contain mx-auto mb-2 md:max-w-[80%] lg:max-w-[60%] sm:max-w-[90%]" // Responsive size control for videos
          >
            <source src={slide} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    } else {
      return <p>Unsupported media format</p>;
    }
  };
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 overflow-y-auto">
      <div className="bg-gray-900 text-gray-300 p-6 rounded-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] relative overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-200 absolute top-2 right-2 text-2xl"
        >
          &times;
        </button>

        <div className="overflow-y-auto max-h-[80vh]">
          <h2 className="text-2xl font-semibold mb-4 text-center">{project.title}</h2>

          <div className="relative mb-4 flex flex-col items-center justify-center">
            {renderSlide(project.media[currentSlide])}
            <p className="text-center">Slide {currentSlide + 1}</p>

            {project.media.length > 1 && (
              <div className="flex justify-between w-full max-w-[1000px] md:max-w-[80%] lg:max-w-[60%] sm:max-w-[90%]">
                <button
                  onClick={prevSlide}
                  className="bg-gray-700 text-white px-3 py-1 rounded-full"
                >
                  Prev
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-gray-700 text-white px-3 py-1 rounded-full"
                >
                  Next
                </button>
              </div>
            )}
          </div>

          <p className="mb-4">{project.description}</p>

          <h3 className="text-xl mb-2">Technologies Used:</h3>
          <ul className="list-disc list-inside mb-4">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>

          <h3 className="text-xl mb-2">Outcomes:</h3>
          <p>{project.outcomes}</p>
        </div>
      </div>
    </div>
  );
}
