import React from "react";
import "./skill.css";

const skills = [
  {
    title: "React",
    image: "atom.png",
    description:
      "Passionate about building high-performance, scalable, and user-friendly web applications using React.js. With strong expertise in modern frontend development, I specialize in: Advanced React Concepts, API Integration, Testing & Debugging and etc.",
    button: "React Projects",
    link: "https://github.com/lakindu2008?tab=repositories",
  },
  {
    title: "React Native",
    image: "/react-native.png",
    description:
      "I have a solid understanding of React Native, including building mobile apps with components, navigation, and state management. I'm comfortable working with both iOS and Android platforms, and I enjoy creating clean, responsive user interfaces.",
    button: "React Native Projects",
    link: "https://github.com/stars/lakindu2008/lists/react-native",
  },
  {
    title: "Java Script",
    image: "/react-native.png",
    description:
      "I have a solid understanding of React Native, including building mobile apps with components, navigation, and state management. I'm comfortable working with both iOS and Android platforms, and I enjoy creating clean, responsive user interfaces.",
    button: "React Native Projects",
    link: "https://github.com/stars/lakindu2008/lists/react-native",
  },
  {
    title: "Web Development",
    image: "/react-native.png",
    description:
      "I have a solid understanding of React Native, including building mobile apps with components, navigation, and state management. I'm comfortable working with both iOS and Android platforms, and I enjoy creating clean, responsive user interfaces.",
    button: "React Native Projects",
    link: "https://github.com/stars/lakindu2008/lists/react-native",
  },
  {
    title: "React Native",
    image: "/react-native.png",
    description:
      "I have a solid understanding of React Native, including building mobile apps with components, navigation, and state management. I'm comfortable working with both iOS and Android platforms, and I enjoy creating clean, responsive user interfaces.",
    button: "React Native Projects",
    link: "https://github.com/stars/lakindu2008/lists/react-native",
  },
];

export default function SkillsShowcase() {
  return (
    <div className="skills-container">
      {skills.map((skill, idx) => (
        <div className="skill-card" key={idx}>
          <div className="card-left">
            <img src={skill.image} alt={skill.title} />
            <h3>{skill.title}</h3>
          </div>
          <div className="card-right">
            <p>{skill.description}</p>
            <a href={skill.link} target="_blank" rel="noopener noreferrer">
              <button>{skill.button}</button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
