// Data project (setiap project punya data berbeda)
const projects = [
    {
        title: "Desain Brosur Sekolah",
        image: "images/brosur.jpg",
        belajar: [
            "Menggunakan Layout Page untuk brosur",
            "Memanfaatkan Color Palette untuk tema warna",
            "Mengatur tipografi dan hierarki teks",
            "Menambahkan gambar dan ikon pendukung"
        ],
        tujuan: "Mampu membuat brosur informatif dan menarik dengan komposisi visual yang seimbang."
    },
    {
        title: "Desain Logo Ekstrakurikuler",
        image: "images/logo.jpg",
        belajar: [
            "Menggunakan Shape Tool untuk membentuk ikon",
            "Memanfaatkan kurva Bézier untuk detail logo",
            "Pengaturan warna dan gradasi",
            "Export logo dengan latar transparan"
        ],
        tujuan: "Menguasai pembuatan logo sederhana yang mewakili identitas organisasi."
    },
    {
        title: "Poster Event Sekolah",
        image: "images/poster.jpg",
        belajar: [
            "Menentukan layout poster vertikal",
            "Mengatur teks headline dan subheadline",
            "Menggunakan gambar dengan efek transparansi",
            "Memadukan warna untuk kesan energik"
        ],
        tujuan: "Mampu membuat poster yang komunikatif dan menarik perhatian audiens."
    },
    // Tambahkan hingga 20 project sesuai kebutuhan...
];

// Tampilkan grid
const projectGrid = document.getElementById("projectGrid");
projects.forEach((proj, index) => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
        <img src="${proj.image}" alt="${proj.title}">
        <div class="project-info">
            <h3>${proj.title}</h3>
        </div>
    `;

    // Klik untuk buka modal
    card.addEventListener("click", () => openModal(index));
    projectGrid.appendChild(card);
});

// Modal logic
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalBelajar = document.getElementById("modalBelajar");
const modalTujuan = document.getElementById("modalTujuan");
const closeBtn = document.querySelector(".close-btn");

function openModal(index) {
    const proj = projects[index];
    modalImage.src = proj.image;
    modalTitle.textContent = proj.title;
    modalBelajar.innerHTML = proj.belajar.map(item => `<li>${item}</li>`).join("");
    modalTujuan.textContent = `Tujuan: ${proj.tujuan}`;
    modal.style.display = "block";
}

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});

// Form interaktif
document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let nama = document.getElementById("nama").value;
    let kelas = document.getElementById("kelas").value;
    let komentar = document.getElementById("komentar").value;

    alert(`Terima kasih, ${nama} dari kelas ${kelas}!\nKomentar kamu: "${komentar}" telah kami terima.`);
    this.reset();
});
