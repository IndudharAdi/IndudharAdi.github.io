// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn?.addEventListener("click", () => navLinks.classList.toggle("open"));


// Close mobile menu when clicking a nav link
Array.from(document.querySelectorAll(".nav-link")).forEach((link) =>
link.addEventListener("click", () => navLinks.classList.remove("open"))
);


// Active link on scroll
const sections = ["about","experience","skills","projects","contact"].map(id => document.getElementById(id));
const links = Array.from(document.querySelectorAll(".nav-link"));
const inView = (el) => { if (!el) return false; const r = el.getBoundingClientRect(); return r.top < innerHeight*0.35 && r.bottom > innerHeight*0.35; };
addEventListener("scroll", () => {
for (const [i, s] of sections.entries()){
if (s && inView(s)){
links.forEach(l=>l.classList.remove("active"));
links[i]?.classList.add("active");
break;
}
}
});


// Scroll-to-top button (optional): show only after scrolling
const toTop = document.createElement("button");
Object.assign(toTop.style, {position:"fixed", right:"18px", bottom:"18px", display:"none"});
toTop.className = "icon-btn";
toTop.innerHTML = '<ion-icon name="arrow-up"></ion-icon>';
document.body.appendChild(toTop);
addEventListener("scroll", () => { toTop.style.display = scrollY > 500 ? "grid" : "none"; });
toTop.addEventListener("click", () => scrollTo({top:0, behavior:"smooth"}));


// Typed.js headline
addEventListener("DOMContentLoaded", () => {
new Typed('#typed', {
strings: ['Software Engineer', 'Salesforce Developer', 'Full‑Stack Developer', 'GenAI Builder'],
typeSpeed: 36,
backSpeed: 18,
backDelay: 1200,
loop: true
});
});


// Theme toggle with localStorage
const toggle = document.getElementById('themeToggle');
const setTheme = (t) => document.documentElement.classList.toggle('dark', t==='dark');
const saved = localStorage.getItem('theme');
setTheme(saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
toggle?.addEventListener('click', () => {
const dark = !document.documentElement.classList.contains('dark');
setTheme(dark? 'dark':'light');
localStorage.setItem('theme', dark? 'dark':'light');
});


// Footer year
document.getElementById('year').textContent = new Date().getFullYear();