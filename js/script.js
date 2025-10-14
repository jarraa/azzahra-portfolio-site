// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all functionality
  initializeNavigation()
  scrollCertificates()
  welcomingSpeech()
  // submitMessage()
})

/// NAVBAR ACTIVE LINK ON SCROLL
// Navigation
function initializeNavigation() {
  const navbar = document.getElementById("navbar")
  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("nav-menu")
  const navLinks = document.querySelectorAll(".nav-link")

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Mobile menu toggle
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })

  // Active navigation link
  window.addEventListener("scroll", () => {
    let current = ""
    const sections = document.querySelectorAll("section")

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })
  })
}

// SCROLLABLE CERTIFICATES
function scrollCertificates() {
  const scrollContainer = document.getElementById('scrollContainer');
  const cardWidth = 270; 

  document.getElementById('scrollLeft').addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  });
  document.getElementById('scrollRight').addEventListener('click', () => {
    scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
  });
}

/// SUBMIT NAME FOR WELCOMING SPEECH
function welcomingSpeech() {
  const modal = document.getElementById('welcomeModal');
  const submitBtn = document.getElementById('submitName');
  const nameInput = document.getElementById('nameInput');
  const usernameSpan = document.getElementById('username');

  window.onload = () => {
    modal.classList.remove('hidden');
  }

  // Handle tombol submit
  submitBtn.addEventListener('click', () => {
    let name = nameInput.value.trim();
    if (name) {
      // Ubah huruf depan jadi kapital
      name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      usernameSpan.textContent = name;
      modal.classList.add('hidden'); 

      // Tunggu sedikit biar transisi modal kelar
      setTimeout(() => {
        // Tambah animasi setelah modal ditutup
        document.querySelector('.welcome-message').classList.add('animate-fadeIn');

        const intro = document.querySelector('.introduction');
        intro.classList.add('animate-slideInLeft');

        const img = document.querySelector('.pl-8');
        img.classList.add('animate-slideInRight');

        const buttons = document.querySelector('.button-group');
        setTimeout(() => {
          buttons.classList.add('animate-slideInRight');
        }, 500); 
      }, 500);

    } else {
      alert('Please enter your name!');
    }
  });

  // Handle tombol Enter
  nameInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        submitBtn.click(); 
    }
  });
}

// SUBMIT MESSAGE FORM
// function submitMessage() {
//   const form = document.getElementById('contactForm');
//   const list = document.getElementById('messages-list');

//   form.addEventListener('submit', e => {
//     e.preventDefault();
//     const name = form.name.value.trim();
//     const email = form.email.value.trim();
//     const message = form.message.value.trim();

//     if (!name || !email || !message) {
//       alert('Semua field wajib diisi!');
//       return;
//     }

//     const newMsg = document.createElement('div');
//     newMsg.innerHTML = `Your message has been sent, Thank you!<br><br>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong> ${message}</p>
//     `;
//     newMsg.className = 'bg-gray-200 text-black p-4 rounded-xl shadow break-words w-full';
//     list.appendChild(newMsg);

//     form.reset();
//   });
// }
