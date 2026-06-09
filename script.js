const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenu.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.className = 'fas fa-xmark';
    } else {
        icon.className = 'fas fa-bars';
    }
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.querySelector('i').className = 'fas fa-bars';
    });
});

const sections = document.querySelectorAll('section');

const scrollEffects = () => {
    let currentSectionId = '';
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionRect = section.getBoundingClientRect().top;
        
        if (window.scrollY >= (sectionTop - 150)) {
            currentSectionId = section.getAttribute('id');
        }

        if (sectionRect < triggerBottom) {
            section.classList.add('appear');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active-link');
        if (item.getAttribute('href') === `#${currentSectionId}`) {
            item.classList.add('active-link');
        }
    });
};

window.addEventListener('scroll', scrollEffects);
window.addEventListener('DOMContentLoaded', scrollEffects);

const textElement = document.getElementById('typing-text');
const nameText = "Wandi Subagja";
let index = 0;

function typeWriter() {
    if (index === 0) { textElement.innerHTML = ""; }
    if (index < nameText.length) {
        textElement.innerHTML += nameText.charAt(index);
        index++;
        setTimeout(typeWriter, 150);
    }
}
window.addEventListener('load', typeWriter);

const skillData = {
    html: {
        title: "HTML5",
        icon: "fab fa-html5",
        color: "#f16529",
        desc: "HyperText Markup Language (HTML) adalah fondasi utama sebuah website. Saya menguasai HTML5 untuk menyusun struktur dokumen web secara semantik, rapi, dan mudah dibaca oleh mesin pencari (SEO-friendly)."
    },
    css: {
        title: "CSS3",
        icon: "fab fa-css3-alt",
        color: "#2965f1",
        desc: "Cascading Style Sheets (CSS) digunakan untuk mendesain tampilan web. Saya terbiasa menggunakan CSS3 modern seperti Flexbox, CSS Grid, Media Queries untuk responsivitas layar HP, serta pembuatan animasi visual yang interaktif."
    },
    js: {
        title: "JavaScript",
        icon: "fab fa-js",
        color: "#f7df1e",
        desc: "JavaScript membuat website menjadi hidup dan interaktif. Saya menggunakan Vanilla JavaScript untuk memanipulasi DOM, mengelola fungsi logika web (seperti efek mengetik & modal pop-up ini), serta menangani event-event interaksi user."
    },
    ui: {
        title: "UI/UX Design",
        icon: "fas fa-palette",
        color: "#ea1d5d",
        desc: "Merupakan keahlian dalam merancang tata letak antarmuka pengguna (UI) yang estetik serta memikirkan kenyamanan pengguna (UX) saat menjelajahi aplikasi, berfokus pada kejelasan fungsi serta konsistensi warna."
    },
    prob: {
        title: "Problem Solving",
        icon: "fas fa-lightbulb",
        color: "#0284c7",
        desc: "Kemampuan memecahkan masalah komputasi secara logis dan terstruktur. Saya terbiasa memecah masalah besar menjadi bagian-bagian kode kecil (algoritma), serta melakukan debugging/analisis error pada kode program secara efektif."
    },
    team: {
        title: "Kerja Tim",
        icon: "fas fa-users",
        color: "#059669",
        desc: "Sebagai mahasiswa Teknologi Komputer, saya memiliki kemampuan komunikasi dan kolaborasi yang baik di dalam tim project. Terbuka terhadap masukan, disiplin membagi tugas, dan siap berkontribusi dalam tim developer."
    }
};

const modal = document.getElementById('skill-modal');
const closeButton = document.querySelector('.close-button');
const modalIcon = document.getElementById('modal-icon');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');

document.querySelectorAll('.skill-box').forEach(box => {
    box.addEventListener('click', () => {
        const skillKey = box.getAttribute('data-skill');
        const data = skillData[skillKey];

        if (data) {
            modalIcon.className = data.icon;
            modalIcon.style.color = data.color;
            modalTitle.innerText = data.title;
            modalDesc.innerText = data.desc;
            modal.style.display = 'flex';
        }
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});