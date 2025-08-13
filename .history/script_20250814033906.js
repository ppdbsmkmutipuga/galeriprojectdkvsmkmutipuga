// Data project (setiap project punya data berbeda)
const projects = [
    {
        title: "Project DKV 1 :Desain Ornamen Simetris dengan Shape Tool",
        image: "images/project01dkv.png",
        belajar: [
            "Menggunakan Shape Tool untuk mengedit node dan membentuk objek",
            "Mengubah garis menjadi kurva dengan fitur To Curve",
            "Mengatur urutan objek dengan Order to Back Layer",
            "Menerapkan prinsip keseimbangan dan simetri dalam desain",
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
        title: "Project DKV 2 :Desain Daun Melengkung dengan Teknik Blend Tool",
        image: "images/project02dkv.png",
        belajar: [
            "Membuat bentuk daun dari dua Ellipse Tool menggunakan Intersect",
            "Memutar objek untuk membentuk arah daun yang natural",
            "Menggandakan objek dan mengatur ukuran untuk variasi",
            "Membuat garis lengkung dengan Bezier Tool",
            "Menghubungkan objek dengan Blend Tool",
            "Mengatur Loop Blend dan arah blend agar mengikuti jalur",
            "Menyusun komposisi agar proporsional dan estetik"
        ],
        tujuan: [
            "Menguasai teknik shape creation menggunakan Intersect",
            "Melatih penggunaan Blend Tool untuk membuat pola berulang mengikuti jalur",
            "Mengembangkan keterampilan mengatur arah",
            "Jumlah, dan posisi objek blend",
            "Menghasilkan ilustrasi yang rapi,simetris, dan natural",
            "Serta menumbuhkan kreativitas dalam membuat desain vektor bertema alam."
        ]
    },
    {
        title: "Project DKV 3: Desain Logo dengan Teks Melengkung",
        image: "images/project03dkv.png",
        belajar: [
            "Membuat lingkaran menggunakan Ellipse Tool dan memberi warna latar",
            "Menambahkan teks pada lingkaran dan menggunakan 'Fit Text to Path' agar teks mengikuti jalur lingkaran",
            "Mengatur posisi teks agar rapi dan simetris di sisi kanan dan kiri lingkaran",
            "Membalik teks bagian bawah menggunakan Mirror Text Horizontally dan Mirror Text Vertically",
            "Memberi warna pada semua teks agar sesuai dengan konsep desain"
        ],
        tujuan: [
            "Menguasai teknik menempatkan teks pada jalur lingkaran",
            "Belajar menyesuaikan arah dan posisi teks agar presisi",
            "Memahami penggunaan Mirror Text untuk teks bagian bawah lingkaran",
            "Menghasilkan desain logo atau badge yang rapi, seimbang, dan menarik",
            "Meningkatkan keterampilan dalam membuat desain grafis yang estetis"
        ]

    },
    {
        title: "Project DKV 4 : Desain Bulan Sabit Ganda dan Bintang dengan Gradasi",
        image: "images/project03dkv.png",
        belajar: [
            "Menambahkan 2 lingkaran menggunakan Ellipse Tool",
            "Memotong bentuk lingkaran dengan perintah Trim setelah menyeleksi keduanya",
            "Menggandakan hasil potongan menjadi 2 bagian menggunakan Copy-Paste",
            "Memberi warna gradasi 3 warna pada masing-masing bagian",
            "Menyatukan kedua bentuk menggunakan perintah Weld",
            "Menambahkan 2 bintang dari Shape Tool yang tersedia di CorelDRAW",
            "Memberi efek gradasi 3 warna pada bintang"
        ],
        tujuan: [
            "Melatih keterampilan memotong bentuk menggunakan Trim",
            "Menguasai teknik menggandakan dan memodifikasi bentuk",
            "Mempelajari penggunaan warna gradasi untuk efek visual menarik",
            "Mengembangkan kemampuan menyatukan objek menggunakan Weld",
            "Meningkatkan kreativitas dalam mengombinasikan bentuk bulan sabit dan bintang",
            "Menghasilkan desain simetris dengan warna harmonis"
        ]
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
