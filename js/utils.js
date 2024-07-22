import { navigation_items } from "./seedData.js";
import * as vars from "./variables.js";

export function generateNavbar(items) {
    const navUl = document.getElementById("nav-ul");
    items = items || [];
    items.forEach((item) => {
      const a = document.createElement("a");
      const li = document.createElement("li");
      a.href = item.link;
      a.innerHTML = `<i class="fas ${item.icon}"></i>`;
      a.appendChild(document.createTextNode(item.name));
      a.appendChild(li);
      navUl.appendChild(a);
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    generateNavbar(navigation_items);
  });
  
  generateNavbar();

  export function toggleDarkMode() {
    const body = vars.getBody;
    const lightModeBtn = document.getElementById('lightMode');
    const darkModeBtn = document.getElementById('darkMode');
  
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
  
    if (isDarkMode) {
      body.classList.add('darkMode');
      darkModeBtn.classList.add('hidden');
      lightModeBtn.classList.remove('hidden');
    }
  
    lightModeBtn.addEventListener('click', () => {
      body.classList.remove('darkMode');
      darkModeBtn.classList.remove('hidden');
      lightModeBtn.classList.add('hidden');
      localStorage.setItem('darkMode', 'disabled');
    });
    darkModeBtn.addEventListener('click', () => {
      body.classList.add('darkMode');
      darkModeBtn.classList.add('hidden');
      lightModeBtn.classList.remove('hidden');
      localStorage.setItem('darkMode', 'enabled');
    });
  }
  
  toggleDarkMode();
