/// SUBMIT NAME FOR WELCOMING SPEECH
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

/// SUBMIT MESSAGE FORM
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const list = document.getElementById('messages-list');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert('Semua field wajib diisi!');
      return;
    }

    const newMsg = document.createElement('div');
    newMsg.innerHTML = `Your message has been sent, Thank you!<br><br>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;
    newMsg.className = 'bg-gray-200 text-black p-4 rounded-xl shadow break-words w-130';
    list.appendChild(newMsg);

    form.reset();
  });
});

/// NAVBAR ACTIVE LINK ON SCROLL
// Ambil semua link nav
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

// Saat scroll
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; 
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  // Tambah/remove class active
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Saat klik link
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});
