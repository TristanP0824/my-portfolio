export const projects = [
  {
    title: "Internship",
    subtitle: "Software Engineering Intern @ H-E-B Digital",
    description:
      "Supported the development of an internal tool at H-E-B using FASTAPI and React to efficiently retrieve and summarize real-time service health data for incident response.",
    image: "./project-1.gif",
    isInternship: true,  // Internship flag
  },
  {
    title: "Autonomous Robot/Drone",
    subtitle: "IEEE Region 5 Robotics Competition",
    description:
      "Collaborated on a team to develop an autonomous ground robot with concurrent communication to an autonomous drone for course traversal, focusing on ground robot steering using C++ and python libraries, achieving successful entrance detection data interpretation.",
    image: "./IEEE.png",
    media: ["./IEEE.png"],
    technologies: ["C++", "Python", "Autonomous Systems"],
    outcomes: "Achieved successful course traversal with autonomous systems communication.",
    isInternship: false, // Non-internship
  },
  {
    title: "Internship",
    subtitle: "Systems/Software Engineering Intern @ Northrop Grumman",
    description:
      "Contributed to the backend development of a simulation desktop application at Northrop Grumman by implementing feature updates, optimizing data handling, and ensuring compliance with C++ standards for improved efficiency.",
    image: "./project-2.gif",
    isInternship: true,  // Internship flag
  },
  {
    title: "Cybertruck",
    subtitle: "Remote Control Implementation for model Tesla Cybertruck",
    description:
      "Implemented wireless remote control capability to a 3D printed model Cybertruck, using C++, ESP32 microcontroller/ESPNOW communication protocol, and Arduino IDE.",
    image: "./project-3.gif",
    media: ["./proj_photos/step_1_cybertruck.jpg", "./proj_photos/Cybertruck vol.2/image2.JPG", "./proj_photos/Cybertruck vol.2/video1.mp4", "./proj_photos/Cybertruck vol.2/video2.mp4", "./proj_photos/Cybertruck vol.2/video3.mp4",],
    technologies: ["C++", "ESP32", "Arduino IDE", "Wireless Communication"],
    outcomes: "Successfully developed a fully functional remote-controlled model.",
    isInternship: false, // Non-internship
  },
  {
    title: "Internship",
    subtitle: "Information Technology Intern @ Brownsville Public Utilities Board",
    description:
      "Assisted in and observed the IT operations necessary to provide IT support/infrastructure to a local utilities company.",
    image: "./project-4.gif",
    isInternship: true,  // Internship flag
  },
  {
    title: "DIY Guitar Pedal",
    subtitle: "Made from scratch Overdrive Guitar Effect Pedal",
    description:
      "Developed an 'Overdrive' Guitar Effect Pedal from scratch, using a combination of Active & Passive electronics components to manipulate an electric guitar's waveform.",
    image: "./proj_photos/diy_pedal/images.png",
    media: [""],
    technologies: ["PCB Design", "Analog Electronics", "Soldering"],
    outcomes: "Created a functional overdrive pedal used in live performances.",
    isInternship: false, // Non-internship
  },
];


export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Francisco Nava",
    company: "Bechtel",
    link: "https://www.linkedin.com/in/frankynava/",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
    name: "Prof. Luis Castanuela",
    company: "UTRGV CECS",
    link: "https://www.linkedin.com/in/frankynava/",
  },
];

export const skills = [
  "Backend Development (FASTAPI:Python & C++)",
  "Frontend Development (React:JSX/JS)",
  "Programming Languages: Python,C++,JS,JSX",
  "Software Development Tools: Git, Jira, Gitlab",
  "Software Deployment (CI/CD, TDD)",
  "Embedded Systems/Hardware Integration (C++/C)"
];
