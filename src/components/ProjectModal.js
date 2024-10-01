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
    const isYouTube = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|embed)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/.test(slide);
    
    if (isImage) {
      return (
        <img
          src={slide}
          alt={`Slide ${currentSlide + 1}`}
          className="w-4/6"
        />
      );
    } else if (isVideo) {
      return (
        <div className="w-full h-60 flex justify-center">
          <video
            controls
            className="w-4/6"
          >
            <source src={slide} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    } else if (isYouTube) {
      const videoId = slide.match(/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|embed)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/)[1];
      const embedLink = `https://www.youtube.com/embed/${videoId}`;
      
      return (
        <div className="w-full h-60 flex justify-center">
          <iframe
            src={embedLink}
            className="w-4/6"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>
      );
    } else {
      return <p>Unsupported media format</p>;
    }
  };
  
  

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-75 overflow-y-auto"> {/* Removed flex alignment */}
  <div className="bg-gray-900 text-gray-300 p-6 rounded-lg w-11/12 md:w-3/4 lg:w-1/2 mt-8 mx-auto max-h-full relative overflow-y-auto"> {/* Added mt-8 for top margin and max-h-full for full height */}
    <button
      onClick={onClose}
      className="text-gray-400 hover:text-gray-200 absolute top-2 right-2 text-2xl"
    >
      &times;
    </button>

    <div className="max-h-[80vh] overflow-y-auto"> {/* Adjusted height for the content */}
      <h2 className="text-2xl font-semibold mb-4 text-center">{project.title}</h2>

      <div className="relative mb-4 flex flex-col items-center justify-center">
        {renderSlide(project.media[currentSlide])}
        <p className="text-center">Slide {currentSlide + 1}</p>

        {project.media.length > 1 && (
          <div className="flex justify-between w-full">
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

      <p className="mb-4">{project.summary}</p>

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
