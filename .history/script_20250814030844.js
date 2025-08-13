// Data project (setiap project punya data berbeda)
const projects = [
    {
        title: "Project DKV 1 :Desain Ornamen Simetris dengan Shape Tool",
        image: "images/project01dkv.png",
        belajar: [
            "Menggunakan Shape Tool untuk mengedit node dan membentuk objek",
            "Mengubah garis menjadi kurva dengan fitur To Curve",
            "Mengatur urutan objek dengan Order to Back Layer",
            "Menerapkan prinsip keseimbangan dan simetri dalam desain.",
            "Mengatur warna dan lapisan untuk menghasilkan tampilan yang menarik.",
        ],
        tujuan: [
            "Melatih keterampilan dasar mengolah objek vektor di CorelDRAW",
            "Mengembangkan kemampuan membentuk ornamen dengan teknik kurva",
            "Memahami pengaturan lapisan (layer) untuk manajemen desain yang rapi",
            "Menumbuhkan kreativitas dalam menciptakan desain dekoratif",
            "Meningkatkan ketelitian dan estetika dalam karya digital."
        ]
    },
    {
        title: "Project DKV 2",
        image: "images/project02dkv.png",
        belajar: [
            "Menggunakan Shape Tool untuk membentuk ikon",
            "Memanfaatkan kurva Bézier untuk detail logo",
            "Pengaturan warna dan gradasi",
            "Export logo dengan latar transparan"
        ],
        tujuan: "Menguasai pembuatan logo sederhana yang mewakili identitas organisasi."
    },
    {
        title: "Project DKV 3",
        image: "images/project03dkv.png",
        belajar: [
            "Menentukan layout poster vertikal",
            "Mengatur teks headline dan subheadline",
            "Menggunakan gambar dengan efek transparansi",
            "Memadukan warna untuk kesan energik"
        ],
        tujuan: "Mampu membuat poster yang komunikatif dan menarik perhatian audiens."
    },
    {
        title: "Project DKV 4",
        image: "images/project04dkv.png",
        belajar: [
            "Menentukan layout poster vertikal",
            "Mengatur teks headline dan subheadline",
            "Menggunakan gambar dengan efek transparansi",
            "Memadukan warna untuk kesan energik"
        ],
        tujuan: "Mampu membuat poster yang komunikatif dan menarik perhatian audiens."
    },
    {
        title: "Project DKV 5",
        image: "images/project05dkv.png",
        belajar: [
            "Menentukan layout poster vertikal",
            "Mengatur teks headline dan subheadline",
            "Menggunakan gambar dengan efek transparansi",
            "Memadukan warna untuk kesan energik"
        ],
        tujuan: "Mampu membuat poster yang komunikatif dan menarik perhatian audiens."
    },
    {
        title: "Project DKV 6",
        image: "images/project06dkv.png",
        belajar: [
            "Menentukan layout poster vertikal",
            "Mengatur teks headline dan subheadline",
            "Menggunakan gambar dengan efek transparansi",
            "Memadukan warna untuk kesan energik"
        ],
        tujuan: "Mampu membuat poster yang komunikatif dan menarik perhatian audiens."
    },
    {
        title: "Project DKV 7",
        image: "images/project07dkv.png",
        belajar: [
            "Menentukan layout poster vertikal",
            "Mengatur teks headline dan subheadline",
            "Menggunakan gambar dengan efek transparansi",
            "Memadukan warna untuk kesan energik"
        ],
        tujuan: "Mampu membuat poster yang komunikatif dan menarik perhatian audiens."
    },
    {
        title: "Project DKV 8",
        image: "images/project08dkv.png",
        belajar: [
            "Menentukan layout poster vertikal",
            "Mengatur teks headline dan subheadline",
            "Menggunakan gambar dengan efek transparansi",
            "Memadukan warna untuk kesan energik"
        ],
        tujuan: "Mampu membuat poster yang komunikatif dan menarik perhatian audiens."
    },
    {
        title: "Project DKV 9",
        image: "images/project09dkv.png",
        belajar: [
            "Menentukan layout poster vertikal",
            "Mengatur teks headline dan subheadline",
            "Menggunakan gambar dengan efek transparansi",
            "Memadukan warna untuk kesan energik"
        ],
        tujuan: "Mampu membuat poster yang komunikatif dan menarik perhatian audiens."
    },
    {
        title: "Project DKV 4",
        image: "images/project04dkv.png",
        belajar: [
            "Menentukan layout poster vertikal",
            "Mengatur teks headline dan subheadline",
            "Menggunakan gambar dengan efek transparansi",
            "Memadukan warna untuk kesan energik"
        ],
        tujuan: "Mampu membuat poster yang komunikatif dan menarik perhatian audiens."
    },
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
    modalTujuan.textContent = proj.tujuan;
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
