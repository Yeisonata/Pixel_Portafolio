import logo from "../assets/poke.png";
import Pokemain from "../assets/PokeMain.jpg";
import PokeLogin from "../assets/PokeLogin.jpg";
import PokeMenu from "../assets/PokeMenu.jpg";
import Pokes from "../assets/MenuPokes.jpg";
import IconoInventario from "../assets/icono-wb.png";
import MainInventario from "../assets/InveMain.jpg";
import MainInventario2 from "../assets/InveMain2.jpg";
import MainInventario3 from "../assets/InveMain3.jpg";
import MainInventario4 from "../assets/InveMain4.jpg";
import FigmaMainPreview from "../assets/FigmaMainPreview.jpg";
import FigmaLogo from "../assets/FigmaLogo.png";
import FigmaPreview1 from "../assets/FigmaPreview1.jpg";
import FigmaPreview2 from "../assets/FigmaPreview2.jpg";
import FigmaPreview3 from "../assets/FigmaPreview3.jpg";
import FigmaPreview4 from "../assets/FigmaPreview4.jpg";
import FigmaPreview5 from "../assets/FigmaPreview5.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";



export const myProjects = [
  {
    id: 1,
    title: "Tamagotchi Pokémon",
    className: "project-tamagotchi",
    description: "Juego interactivo donde cuidas a un Pokémon como si fuera un Tamagotchi.",
    subDescription: [
      "Desarrollado con React para la interfaz y manejo de estado.",
      "El usuario puede alimentar, entrenar y jugar con su Pokémon.",
      "Cada acción afecta el estado de ánimo, energía y salud del Pokémon.",
      "Estética retro estilo GameBoy usando fuentes pixeladas y animaciones clásicas.",
    ],
    gallery: [PokeLogin, PokeMenu, Pokes],
    github: "https://github.com/Yeisonata/Tamagotchi_Pokemon",
    href: "", // si no tienes uno, déjalo vacío
    logo: logo,
    image: Pokemain, // ajusta la ruta a tu carpeta real
    tags: [
      {
        id: 1,
        name: "React",
        path: "",
      },
      {
        id: 2,
        name: "CSS Pixel",
        path: "",
      },
      {
        id: 3,
        name: "Game Logic",
        path: "",
      },
    ],
  },{
  id: 2,
  title: "Sistema de Inventario",
  description: "Sistema web para registrar, actualizar y administrar productos con usuarios, categorías y control de stock.",
  subDescription: [
    "Panel de control con CRUD de productos.",
    "Subida de imágenes y gestión de roles.",
    "Hecho con PHP, MySQL y Bootstrap.",
  ],
  gallery: [MainInventario2,MainInventario3,MainInventario4],
  image: MainInventario,
  logo: IconoInventario,
  github: "https://github.com/usuario/inventario-app",
  className: "project-inventario",
  tags: [/* opcional */],
},{
  id: 3,
  title: "Diseño Web Musical en Figma",
  description: "Diseño UI moderno y dinámico para un sitio web musical. Inspirado en clubes nocturnos, DJs y experiencias sensoriales visuales.",
  subDescription: [
    "Diseño con gradientes y tipografía de alto contraste.",
    "Componentes bien estructurados en Figma con layout grid.",
    "Ideal para DJs, bandas o festivales musicales.",
  ],
  gallery: [FigmaPreview1, FigmaPreview2, FigmaPreview3,FigmaPreview4,FigmaPreview5], // imágenes de secciones del diseño
  image: FigmaMainPreview, // esta sería la portada que subiste
  logo: FigmaLogo, // un ícono o imagen pequeña de Figma
  figma: "https://www.figma.com/file/tu-id-del-proyecto",
  github: null,
  className: "project-figma",
  tags: ["Figma", "Diseño UI", "UX", "Música", "Visual"]
}




  // Puedes seguir con más proyectos abajo
];
// constants.js

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/Yeisonata",
    icon: <FaGithub />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/yeison-tobon-9a0b47230/",
    icon: <FaLinkedin />,
  },

];

// export const experiences = [
//   {
//     title: "Software Developer",
//     job: "Security & Defense Projects",
//     date: "2021-2023",
//     contents: [
//       "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
//       "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
//       "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
//       "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
//       "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
//     ],
//   },
//   {
//     title: "Back-End Developer",
//     job: "Car Manufacture",
//     date: "2023-2024",
//     contents: [
//       "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
//       "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
//       "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
//       "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
//       "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
//     ],
//   },
//   {
//     title: "Freelance Developer",
//     job: "Self-Employed",
//     date: "2025-Present",
//     contents: [
//       "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
//       "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
//     ],
//   },
// ];
