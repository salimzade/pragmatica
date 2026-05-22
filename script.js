document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const navbar = document.getElementById("navbar");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const themeToggle = document.getElementById("theme-toggle");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");

  // 1. Dark Mode Toggle
  themeToggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    const isDark = html.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // 2. Mobile Drawer Interaction
  mobileMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileDrawer.classList.toggle("active");
  });

  // Close drawer on clicking inner links
  mobileDrawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileDrawer.classList.remove("active");
    });
  });

  // Close drawer when clicking anywhere outside navbar zone
  document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target)) {
      mobileDrawer.classList.remove("active");
    }
  });

  // 3. Performance-Optimized Navbar Scroll State Trigger
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

// Dynamic Hero Text Toggler
const textElement = document.getElementById("dynamic-text");

// 1. Define phrases with their matching CSS color classes
const phrases = [
  { text: "Clean software for organized operations.", colorClass: "text-purple" },
  { text: "Reliable tools built for real business workflows.", colorClass: "text-green" },
];
let currentIdx = 0;

// Initialize the first phrase's color class on load
textElement.classList.add(phrases[currentIdx].colorClass);

setInterval(() => {
  // Trigger exit animation upward
  textElement.classList.add("exit");
  textElement.classList.remove("visible");

  setTimeout(() => {
    // Clean up the old color class
    textElement.classList.remove(phrases[currentIdx].colorClass);

    // Advance index and swap text content
    currentIdx = (currentIdx + 1) % phrases.length;
    textElement.textContent = phrases[currentIdx].text;
    
    // Apply the new color class while invisible
    textElement.classList.add(phrases[currentIdx].colorClass);
    textElement.classList.remove("exit");

    // Force a browser layout reflow to make the slide-up snappy
    void textElement.offsetWidth;

    // Slide in smoothly from the bottom with the new color applied
    textElement.classList.add("visible");
  }, 600); // Matches the 0.6s transition speed precisely
}, 4000); // Rotates every 4 seconds

// Copy Email Clipboard Logic
const emailBtn = document.getElementById('copy-email-btn');
const copyBadge = document.getElementById('copy-badge');
let badgeTimeout = null;

if (emailBtn && copyBadge) {
  emailBtn.addEventListener('click', function(event) {
    // Prevent the default mailto app popup if you just want to copy on click
    event.preventDefault(); 
    
    const emailText = "hello@pragmatica.io";
    
    // Core async Clipboard browser API 
    navigator.clipboard.writeText(emailText).then(() => {
      // Clear any running timeouts if the user clicks repeatedly
      if (badgeTimeout) {
        clearTimeout(badgeTimeout);
      }
      
      // Reveal the success check badge
      copyBadge.classList.add('show');
      
      // Dismiss the badge cleanly after exactly 5 seconds
      badgeTimeout = setTimeout(() => {
        copyBadge.classList.remove('show');
      }, 5000);
    }).catch(err => {
      console.error('Failed to copy text string: ', err);
    });
  });
}