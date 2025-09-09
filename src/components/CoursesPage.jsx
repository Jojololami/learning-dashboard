import React from "react";

const CoursesPage = () => {
  return (
    <div className="flex flex-col items-center mb-8 pt-8 px-4">
      <h3 className="text-4xl text-center w-full max-w-3xl p-4 bg-white/80 border border-slate-500 rounded-3xl font-extrabold mb-10">
        Frontend Development <span className="text-[#D28C8C]">Curriculum</span>
      </h3>
      <div className="bg-[#0c0e0c] flex flex-col justify-center p-8 border rounded-2xl w-full max-w-3xl text-white">
        <h3 className="text-3xl text-white font-bold mb-4">
          1. Introduction to Web Development
        </h3>
        <ul className="list-disc pl-5 text-white text-base">
          <li>Overview of frontend vs backend</li>
          <li>Core technologies: HTML, CSS, JavaScript</li>
          <li>Setting up tools (VS Code, Git, DevTools)</li>
        </ul>
      </div>
      <div className="bg-[#3b7d3b] flex flex-col justify-center p-8 border rounded-2xl w-full max-w-3xl text-white">
        <h3 className="text-3xl text-black font-bold mb-4">
          2. HTML Fundamentals
        </h3>
        <ul className="list-disc pl-5 text-white text-base">
          <li>Page structure and semantic tags</li>
          <li>Links, images, forms, and media</li>
          <li>Accessibility and best practices</li>
        </ul>
      </div>{" "}
      <div className="bg-[#0c0e0c] flex flex-col justify-center p-8 border rounded-2xl w-full max-w-3xl text-white">
        <h3 className="text-3xl text-white font-bold mb-4">
          3. CSS Fundamentals
        </h3>
        <ul className="list-disc pl-5 text-white text-base">
          <li>Selectors, properties, and values</li>
          <li>Colors, fonts, and text styling</li>
          <li>Box model and spacing</li>
        </ul>
      </div>
      <div className="bg-[#3b7d3b] flex flex-col justify-center p-8 border rounded-2xl w-full max-w-3xl text-white">
        <h3 className="text-3xl text-black font-bold mb-4">
          4. Layout & Responsive Design
        </h3>
        <ul className="list-disc pl-5 text-white text-base">
          <li>Flexbox and Grid systems</li>
          <li>Mobile-first design principles</li>
          <li>Media queries for responsiveness</li>
        </ul>
      </div>
      <div className="bg-[#0c0e0c] flex flex-col justify-center p-8 border rounded-2xl w-full max-w-3xl text-white">
        <h3 className="text-3xl text-white font-bold mb-4">
          5. JavaScript Fundamentals
        </h3>
        <ul className="list-disc pl-5 text-white text-base">
          <li>Variables, data types, and operators</li>
          <li>Functions, conditionals, and loops</li>
          <li>DOM selection and manipulation</li>
        </ul>
      </div>
      <div className="bg-[#3b7d3b] flex flex-col justify-center p-8 border rounded-2xl w-full max-w-3xl text-white">
        <h3 className="text-3xl text-black font-bold mb-4">
          6. Advanced JavaScript
        </h3>
        <ul className="list-disc pl-5 text-white text-base">
          <li>Events and event listeners</li>
          <li>ES6+ features (let/const, arrow functions)</li>
          <li>Asynchronous JS (Promises, async/await)</li>
        </ul>
      </div>
      <div className="bg-[#0c0e0c] flex flex-col justify-center p-8 border rounded-2xl w-full max-w-3xl text-white">
        <h3 className="text-3xl text-white font-bold mb-4">
          7. Version Control & Collaboration
        </h3>
        <ul className="list-disc pl-5 text-white text-base">
          <li>Git basics: init, add, commit, push</li>
          <li>Branching, merging, and resolving conflicts</li>
          <li>Using GitHub for projects and teamwork</li>
        </ul>
      </div>
      <div className="bg-[#3b7d3b] flex flex-col justify-center p-8 border rounded-2xl w-full max-w-3xl text-white">
        <h3 className="text-3xl text-black font-bold mb-4">
          8. Frontend Frameworks & Libraries
        </h3>
        <ul className="list-disc pl-5 text-white text-base">
          <li>Why frameworks matter in development</li>
          <li>React basics: components, props, state</li>
          <li>Simple project: To-Do app in React</li>
        </ul>
      </div>
      <div className="bg-[#0c0e0c] flex flex-col justify-center p-8 border rounded-2xl w-full max-w-3xl text-white">
        <h3 className="text-3xl text-white font-bold mb-4">
          9. Styling in Modern Frontend
        </h3>
        <ul className="list-disc pl-5 text-white text-base">
          <li>CSS preprocessors (Sass) and utilities (Tailwind)</li>
          <li>Component-based styling (Styled-components)</li>
          <li>UI/UX design best practices</li>
        </ul>
      </div>
      <div className="bg-[#3b7d3b] flex flex-col justify-center p-8 border rounded-2xl w-full max-w-3xl text-white">
        <h3 className="text-3xl text-black font-bold mb-4">
          10. Capstone Project & Deployment
        </h3>
        <ul className="list-disc pl-5 text-white text-base">
          <li>Building a complete portfolio project</li>
          <li>Debugging and code optimization</li>
          <li>Hosting with GitHub Pages, Vercel, or Netlify</li>
        </ul>
      </div>
    </div>
  );
};

export default CoursesPage;
