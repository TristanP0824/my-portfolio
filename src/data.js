export const projects = [
  {
    title: "Internship",
    subtitle: "Software Engineering Intern @ H-E-B Digital",
    description:
      "Supported the development of an internal tool at H-E-B using FASTAPI and React to efficiently retrieve and summarize real-time service health data for incident response.",
    image: "./heb_digital.jpg",
    isInternship: true,  // Internship flag
  },
  {
    title: "Autonomous Robot/Drone",
    subtitle: "IEEE Region 5 Robotics Competition",
    description:
      "Collaborated on a team to develop an autonomous ground robot with concurrent communication to an autonomous drone for course traversal, focusing on ground robot steering using C++ and python libraries, achieving successful entrance detection data interpretation.",
    summary:
    " ",
    image: "./IEEE.png",
    media: ["./proj_photos/r5bot/groundbot.jpg","./proj_photos/r5bot/colordetection.jpg","./proj_photos/r5bot/Improved Box Entry(1).mp4",],
    technologies: ["C++", "Python", "Embedded Systems"],
    outcomes: "Achieved successful entrance detection/entry!",
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
    title: "Cybertruck Project",
    subtitle: "Remote Control Implementation for model Tesla Cybertruck",
    description:
      "Implemented wireless remote control capability to a 3D printed model Cybertruck, using C++, ESP32 microcontroller/ESPNOW communication protocol, and Arduino IDE.",
    summary:  "The purpose of this project was to implement a wireless remote control subsystem to pilot and steer the 3D-printed model Cybertruck. This was achieved using two ESP32 microcontrollers. The first ESP32 was programmed to read and digitize values from an analog joystick. These values were then mapped and adjusted to account for deadband and direction. After this, the data was transmitted to the second ESP32, which served as the receiving microcontroller. Data transmission between the ESP32 devices was facilitated by the ESPNOW communication protocol, a low-power, low-latency wireless communication method that enables direct peer-to-peer data transmission without requiring a Wi-Fi network. On the receiving end, the joystick data was processed by a function that determined the direction of motor rotation based on which range the data for each axis fell into (e.g., 0-75, 75-175), thus controlling the Cybertruck's movement. Similar to the transmitting ESP32, which took analog data as input and produced digital output, the receiving ESP32 converted the digitized input into Pulse Width Modulation (PWM) signals. PWM is a technique used to control the amount of power delivered to an electronic device by varying the width of pulses in a pulse train. This effectively adjusts the signal's duty cycle to represent different power levels—in this case, speed. These PWM signals were then sent from the receiving ESP32 microcontroller to channels on a motor driver. The positive and negative terminals of each motor were connected to their respective left or right channels on the motor driver to receive the correct PWM signals. With this setup, the wireless remote control subsystem was successfully implemented, allowing for precise control of the Cybertruck.",
    image: "./project-3.gif",
    media: ["./proj_photos/step_1_cybertruck.jpg","./proj_photos/Cybertruck vol.2/video3.mp4", "./proj_photos/Cybertruck vol.2/video2.mp4","./proj_photos/Cybertruck vol.2/image2.JPG",],
    technologies: ["C++", "ESP32", "Wireless Communication", "2-Axis Analog Joystick",],
    outcomes: "A successful wireless remote control implementation. This was also my first technical project and my introduction to IEEE as an organization!",
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
      summary: "This project involved designing and building a simple overdrive guitar pedal to emulate the sound of a guitar amplifier being pushed to its limits using a soft-clipping circuit. Unlike distortion pedals that use hard-clipping, the overdrive pedal employed diodes in a feedback loop with a TL081 op-amp to achieve a smoother gain, preserving the natural dynamics of the guitar signal. The design included variable gain and volume controls, providing flexibility in the intensity and loudness of the overdrive effect. The circuit was first simulated using the Falstad Online Circuit Simulator with a 400Hz sine wave input and then physically prototyped and tested with an electric guitar and amplifier setup. Various configurations were tested, revealing a range of sound characteristics from clean to heavily overdriven, depending on the gain and volume settings. The project successfully demonstrated practical applications of electronics principles in audio signal processing, resulting in a functional and cost-effective overdrive pedal that showcased a fundamental understanding of microelectronics, filtering, and acoustics.",
    image: "./guitar_pedal.jpg",
    media: ["./proj_photos/diy_pedal/guitarpedalschematic.JPG","./proj_photos/diy_pedal/falstad.jpg","./proj_photos/diy_pedal/guitarpedalbreadboard.JPG", "./proj_photos/diy_pedal/scope1.jpg","./proj_photos/diy_pedal/scope2.jpg","./proj_photos/diy_pedal/scope3.jpg",],
    technologies: ["Circuit Design/Simulation","Analog Electronics"],
    outcomes: "Successful development of an Overdrive Pedal made from electronic components. Great sound too!",
    isInternship: false, // Non-internship
  },
];


export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "./franky_headshot.JPG",
    name: "Francisco Nava",
    company: "Bechtel",
    link: "https://www.linkedin.com/in/frankynava/",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "./castanuela_headshot.JPG",
    name: "Prof. Luis Castanuela",
    company: "UTRGV CECS",
    link: "https://www.linkedin.com/in/luis-castanuela-7653b982/",
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
