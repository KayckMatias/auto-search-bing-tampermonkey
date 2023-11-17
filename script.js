// ==UserScript==
// @name         Auto Bing Search
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This script can search automatically in bing!
// @author       Kayck Matias
// @match        https://www.bing.com/search*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bing.com
// @grant        none
// ==/UserScript==

const SEARCH_LIST = [
  "How to implement real-time multiplayer in Unity?",
  "Best practices for mobile game optimization",
  "Introduction to full-stack development",
  "How to create a responsive website with Bootstrap",
  "Top JavaScript libraries for data visualization",
  "Unity game development tutorials for beginners",
  "How to secure a Node.js application?",
  "Overview of the Flutter framework for app development",
  "Introduction to the Agile development process",
  "Tips for effective debugging in Python",
  "Creating dynamic websites with React.js",
  "How to design a RESTful API in Node.js?",
  "What's new in the latest version of Unreal Engine?",
  "Best practices for code version control in teams",
  "Getting started with game design principles",
  "Overview of cloud-based game development platforms",
  "How to implement artificial intelligence in game characters?",
  "Building a scalable backend with Django",
  "Comparison of popular game engines: Unity vs. Godot",
  "Introduction to 3D modeling for game assets",
  "Tips for cross-platform mobile app development",
  "How to use WebAssembly for high-performance web applications?",
  "Overview of the MVC architecture in web development",
  "Creating interactive websites with D3.js",
  "Best coding practices for clean and maintainable code",
  "How to deploy a Flask application on Heroku?",
  "Overview of the Phaser game development framework",
  "Introduction to the principles of game physics",
  "Building a CRUD application with Angular",
  "How to implement user authentication in a web app?",
  "Overview of design patterns in software development",
  "Tips for optimizing game graphics for different platforms",
  "Introduction to the world of game AI programming",
  "How to use Git for collaborative software development?",
  "Overview of the game monetization strategies",
  "Best practices for secure coding in Java",
  "Creating a virtual reality experience with Unity",
  "How to implement a responsive grid layout with CSS Flexbox?",
  "Introduction to the Rust programming language",
  "Overview of the Unity Asset Store for game assets",
  "How to use Redux for state management in React?",
  "Building a RESTful API with Express.js",
  "Comparison of popular front-end frameworks: React vs. Vue",
  "How to integrate machine learning models into a web app?",
  "Overview of the principles of game level design",
  "Best practices for database optimization in web applications",
  "Introduction to the principles of procedural generation in games",
  "Creating a multiplayer online game with Photon Unity Networking",
  "How to implement responsive images in a website?",
  "Overview of the Unity UI system for game interfaces",
  "Tips for effective time management in software development",
  "Introduction to the principles of game sound design",
  "How to implement continuous integration in a development workflow?",
  "Overview of the principles of game narrative design",
  "Building a serverless web application with AWS Lambda",
  "How to use the Unity Timeline for cinematic sequences?",
  "Comparison of popular programming languages for game development",
  "Introduction to the principles of game testing",
  "How to implement lazy loading in a web application?",
  "Overview of the Unity NavMesh for game AI",
  "Best practices for responsive web design",
  "Creating a 2D game with the Godot game engine",
  "How to use the Model-View-Controller pattern in iOS development?",
  "Overview of the principles of game balance",
  "Tips for effective collaboration in a remote development team",
  "Introduction to the principles of game art design",
  "How to implement server-side rendering in React?",
  "Overview of the Unity particle system for special effects",
  "Best practices for secure API authentication",
  "Creating a platformer game with Phaser",
  "How to use the Observer pattern in software design?",
  "Introduction to the principles of game animation",
  "Overview of the principles of game user interface (GUI) design",
  "How to implement lazy loading in a Unity game?",
  "Tips for creating a successful indie game",
  "Building a responsive website with the Materialize CSS framework",
  "How to use the Decorator pattern in object-oriented programming?",
  "Overview of the principles of game immersion",
  "Best practices for database schema design",
  "Introduction to the principles of game storytelling",
  "How to implement push notifications in a mobile app?",
  "Overview of the principles of game monetization",
  "Creating a puzzle game with the Phaser game development framework",
  "How to use the Factory method pattern in software design?",
  "Tips for effective error handling in JavaScript",
  "Introduction to the principles of game world design",
  "Overview of the principles of game progression",
  "Best practices for responsive email design",
  "Building a first-person shooter game with Unity",
  "How to use the Singleton pattern in software design?",
  "Comparison of popular game development IDEs",
  "How to implement real-time updates in a web application?",
  "Overview of the principles of game difficulty balancing",
  "Introduction to the principles of game character design",
  "Tips for optimizing website performance with lazy loading",
  "Creating a mobile game with the LibGDX game development framework",
  "How to use the Adapter pattern in object-oriented programming?",
  "Best practices for error handling in RESTful APIs",
  "Overview of the principles of game reward systems",
  "How to implement client-side routing in a React app?",
  "Introduction to the principles of game feedback",
  "Building a strategy game with the Godot game engine",
  "Overview of the principles of game progression systems",
  "Tips for effective team communication in software development",
  "How to use the Proxy pattern in software design?",
  "Comparison of popular game development platforms",
  "How to implement responsive typography in a website?",
  "Introduction to the principles of game tutorial design",
  "Overview of the principles of game achievement systems",
  "Best practices for securing a Node.js RESTful API",
  "Creating a virtual reality game with the Unreal Engine",
  "How to use the Command pattern in object-oriented programming?",
  "How to implement lazy loading in a Phaser game?",
  "Overview of the principles of game scoring systems",
  "Tips for effective code documentation",
  "Introduction to the principles of game player feedback",
  "Building a multiplayer online battle arena (MOBA) game with Unity",
  "How to use the Strategy pattern in software design?",
  "Overview of the principles of game leaderboard systems",
  "Best practices for securing a React.js web application",
  "How to implement real-time chat in a web application?",
  "Creating a horror game with the Unity game engine",
  "How to use the Observer pattern in software architecture?",
  "Introduction to the principles of game player progression",
  "Tips for effective code review in a development team",
  "Overview of the principles of game dynamic difficulty adjustment",
  "Building a role-playing game (RPG) with the Godot game engine",
  "How to use the Facade pattern in software design?",
  "Comparison of popular game development programming languages",
  "How to implement lazy loading in a Godot game?",
  "Overview of the principles of game narrative progression",
  "Best practices for securing a Django web application",
  "Introduction to the principles of game player interaction",
  "How to use the State pattern in object-oriented programming?"
];

const SEARCH_INTERVAL = [10000, 15000];

function randomSearch(){
  const randomIndex = Math.floor(Math.random() * SEARCH_LIST.length);
  return SEARCH_LIST[randomIndex];
}

(async function() {
    'use strict';

    const randomInterval = Math.floor(Math.random() * (SEARCH_INTERVAL[1] - SEARCH_INTERVAL[0] + 1)) + SEARCH_INTERVAL[0];
    console.log(`Next in: ${randomInterval}ms`)

    await new Promise(resolve => setTimeout(resolve, randomInterval))

    document.getElementById("sb_form_q").value = randomSearch();
    document.getElementById("sb_form_go").click();
})();
