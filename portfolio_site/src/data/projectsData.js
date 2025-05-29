const projectsData = {
  monovox: {
    title: 'Monovox',
    description: "An analog synth blending raw voltage and real-time visuals",
    images: ["/monovox_1.jpg", "/monovox_2.jpg"],
    tags: ["PCB", "ESP32", "C++", "Soldering"],
    details: "Monovox was created using a custom printed circuit board with various components soldered to it. It consists of seven main components: a +/-12V power supply, a MIDI to CV converter, a voltage-controlled oscillator, two envelope generators, a voltage-controlled filter, and a voltage-controlled amplifier. A touchscreen display was coded using an ESP32 and C++ which allows the user to visualize their soundwave in real-time as well as learn about the synthesizer and play a simple tamagotchi inspired game. A 3D printed enclosure was designed and modeled in Fusion360 to hold the PCB and other components.",
    video: "https://www.youtube.com/embed/SmkpM6sbNvM?si=9zouzrbRLoKjciRn"
  },
  runtime: {
    title: "runTime",
    description: "A run tracking webapp with a user database",
    images: ["/runtime_1.jpg","/runtime_2.jpg","/runtime_3.jpg"],
    tags: ["HTML", "Bootstrap", "SQL", "PHP"],
    details: "runTime is a website built to allow a quick and easy way to track runs. Users can log each run they do and see their data change in real-time. runTime was created to study college students and their average time spent running. The CDC recommends that adults over 18 get at least 150 minutes (2 hours and 30 minutes) of cardio activity a week. After analyzing the data, it was found that students are getting the recommended amount of exercise. Check out the website <a href='https://hackberrylab.com/pink/ischwarzkopf/goal/index.php' target='_blank'>here!</a>"
  },
  headtohead: {
    title: "versus.fm (in development)",
    description: "Music ranking site using Spotify API",
    images: ["/versus_1.PNG", "/versus_2.PNG", "/versus_3.PNG"],
    tags: ["React", "HTML", "CSS", "API"],
    details: "Compare songs head-to-head using Spotify's API. Pit your favorite songs against each other until one comes out on top. Either choose an artist and their albums or from your playlist. Check out this site <a href='https://versus-plum.vercel.app/' target='_blank'>here!</a> This site is currently in development and only the landing page is available."
  },
  deimos: {
    title: "Deimos Sound Study",
    description: "A decibel tracking device that was used to conduct a study on noise levels",
    images: ["/deimos_1.png","/deimos_2.png","/deimos_3.png"],
    tags: ["PCB", "ESP32", "HTML", "CSS"],
    details: "The Deimos Sound Study set out to collect decibel readings from the Office space in HackBerry Lab. Overall, the study collected 50487 readings across three sensors. These sensors were created and placed in various parts of the Office and the data was analyzed to understand the relationship between noise and time. The sensors were created and ESP32 and sound sensor, all connected and soldered on a custom designed printed circuit board. The sensors were housed in a 3D printed enclosure. The website and findings were collected and displayed on a website using a PHP and SQL. Learn more about this study <a href='https://hackberrylab.com/pink/_F24399/deimos/index.php' target='_blank'>here!</a>"
  },
  orbitize: {
    title: "Orbitize",
    description: "An ESP32-powered Fusion 360 controller",
    images: ["/orbitize_1.jpg","/orbitize_2.jpg","/orbitize_3.jpg"],
    tags: ["PCB", "ESP32", "3D Printing", "C++"],
    details: "Orbitize is a 3D printed controller for Fusion 360. It has custom hotkey buttons and a joystick to control the camera. Orbitize is an excellent product that helps you efficiently design with ease."
  },
  disctrix: {
    title: "DISCTRIX",
    description: "An ESP32-powered DJ controller",
    images: ["/disctrix_1.jpg","/disctrix_2.jpg","/disctrix_3.jpg"],
    tags: ["PCB", "Laser Cutting", "ESP32", "C++"],
    details: "DISCTRIX is a DJ controller device that works with any computer. It can be used to mix any song seamlessly into your DJ set. DISCTRIX was designed to give you a simple and easy interface to play your favorite songs without missing a beat!"
  },
  pictopane: {
    title: "PICTOPANE",
    description: "10x10 Controllable Pixel LED Grid",
    images: ["/pictopane_1.jpg","/pictopane_2.jpg","/pictopane_3.jpg"],
    tags: ["PCB", "ESP32", "WLED", "Soldering"],
    details: "PICTOPANE is a device created to light up your desk with fun effects, animations, and images. Control the display from an app on your phone and customize it however you want!"
  },
  retrolight: {
    title: "RETROLIGHT",
    description: "Mario-themed Desk Light",
    images: ["/retrolight_1.jpg","/retrolight_2.jpg","/retrolight_3.jpg"],
    tags: ["PCB", "Acid Etching", "Laser Cutting", "Soldering"],
    details: "The RETROLIGHT is a device created to light up your desk in a fun, bright, and retro way. It was made to showcase a variety of different design skills!"
  },
  jesuspeace: {
    title: "JESUS PEACE",
    description: "Portable Bible Verse and Church Calendar Display",
    images: ["/jesuspeace_1.jpg","/jesuspeace_2.jpg","/jesuspeace_3.jpg"],
    tags: ["PCB", "Laser Cutting", "C++", "API"],
    details: "JESUS PEACE is a small battery powered device that displays information from the internet wherever you are! You can press the button on the side to get a random Bible verse or wait a few seconds and see the Church Calendar's current celebration of the day! This device was made so that you can always have a fun display of Christian information that also looks nice whether it's on your desk, by your bed, or in the bathroom!"
  },
  fusion: {
    title: "Microfreak and SP-404 MKII Models",
    description: "Models of the Arturia Microfreak synthesizer and the Roland SP-404MKII sampler",
    images: ["/fusion_1.png","/fusion_2.png","/fusion_3.png"],
    tags: ["Fusion 360", "3D Modeling", "Animation", "Precision"],
    details: "Two devices that I own and use modeled to scale using Autodesk Fusion 360. The designs are fully constrained, with every button and knob controllable. An animation was created in Fusion 360 to showcase the models fully."
  },
  karambyte: {
    title: "KARAMBYTE",
    description: "A Custom Karambit Knife",
    images: ["/karambyte_1.jpg","/karambyte_2.jpg","/karambyte_3.jpg"],
    tags: ["Laser Cutting", "Waterjet", "Belt Grinder", "Sharpening"],
    details: "The KARAMBYTE is a knife created using metal and carbon fiber cut with a waterjet. It gives a tactical advantage with its claw-like shape. The hole at the bottom allows for three different grip styles, so you are ready for any situation."
  },
};

export default projectsData;
