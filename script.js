// Data project (setiap project punya data berbeda)
const projects = [
    {
        "title": "Latihan Shortcut di CorelDraw",
        "image": "images/project19dkv.png",
        "belajar": [
            "<br><b>GENERAL SHORTCUTS</b><br>",
            "- Ctrl + N : Membuat dokumen baru",
            "- Ctrl + O : Membuka dokumen",
            "- Ctrl + S : Menyimpan dokumen",
            "- Ctrl + P : Mencetak dokumen",
            "- Ctrl + Z : Undo (kembali ke langkah sebelumnya)",
            "- Ctrl + Y : Redo (mengulang langkah yang dibatalkan)",
            "- Ctrl + C : Copy",
            "- Ctrl + V : Paste",
            "- Ctrl + X : Cut",
            "- Delete   : Hapus Objek",
            "- Ctrl + A : Pilih semua objek",

            "<br><b>SHORTCUT PADA OBJEK</b><br>",
            "- Ctrl + D : Duplikat",
            "- Ctrl + G : Group",
            "- Ctrl + U : Ungroup",
            "- Ctrl + Q : Convert to curves",
            "- Ctrl + K : Break apart",
            "- Ctrl + L : Combine",
            "- Shift + Page Up / Page Down : Atur posisi layer (atas / bawah)",
            "- Ctrl + Shift + Q : Convert outline to object",

            "<br><b>ZOOM & NAVIGASI</b><br>",
            "- F2 : Zoom in",
            "- F3 : Zoom Out",
            "- F4 : Zoom to all Objects",
            "- F9 : Full Screen Preview",
            "- H : Hand Tool (pindah area kerja)",

            "<br><b>ALIGN & POSITION</b><br>",
            "- L : Align Left",
            "- R : Align Right",
            "- T : Align Top",
            "- B : Align Bottom",
            "- C : Align Center Vertikal",
            "- E : Align Middle Horizontal",
            "- P : Center objek ke halaman",

            "<br><b>TOOLS CEPAT</b><br>",
            "- Spacebar : Beralih ke Pick Tool",
            "- F6 : Rectangle Tool",
            "- F7 : Ellipse Tool",
            "- Y  : Polygon Tool",
            "- B : Shape Tool",
            "- I : Eyedropper Tool",
            "- G : Interactive Fill Tool",

            "<br><b>TEKS & EDITING</b><br>",
            "- F8 : Aktifkan Text Tool",
            "- Ctrl + T : Text Properties",
            "- Ctrl + Shift + T : Character Formatting",
            "- Ctrl + Shift + C : Paragraph Formating",
            "- Ctrl + Shift + A : Fit text to path",
            "- Ctrl + Shift + V : Paste properties"
        ],
        "tujuan": [
            "Memudahkan pemula mengenal shortcut CorelDRAW sesuai kategori",
            "Meningkatkan kecepatan kerja dengan mengingat tombol penting",
            "Membantu memahami fungsi utama dalam pembuatan desain",
            "Melatih efisiensi kerja tanpa selalu bergantung pada menu toolbar"
        ]
    },
    {
        "title": "Latihan Shortcut: Align & Distribute di CorelDraw",
        "image": "images/project16dkv.png",
        "belajar": [
            "E → Ratakan objek ke TENGAH secara horizontal (kiri–kanan)",
            "Shift + P → Bagi jarak objek sama rata secara horizontal",
            "B → Ratakan objek ke BAWAH",
            "T → Ratakan objek ke ATAS",
            "C → Ratakan objek ke TENGAH secara vertikal (atas–bawah)",
            "Shift + A → Bagi jarak objek sama rata secara vertikal",
            "L → Ratakan objek ke KIRI",
            "R → Ratakan objek ke KANAN",
            "Klik 2 kali Rectangle Tool → Buat kotak langsung seukuran halaman kerja",
            "Drag + klik kanan mouse → Gandakan objek cepat lalu pilih Copy Here",
            "Mirror Horizontally → Balik objek kiri ↔ kanan tanpa mutar manual (buat simetris lebih cepat)"
        ],
        "tujuan": [
            "Mempermudah pemula merapikan objek dengan shortcut cepat",
            "Membiasakan menggunakan tombol keyboard supaya desain lebih efisien",
            "Membantu mengingat fungsi shortcut dengan kata kunci sederhana (T=Top, B=Bottom, L=Left, R=Right, C=Center, E=Even/Horizontal)",
            "Meningkatkan kerapian dan kecepatan dalam membuat layout dan desain simetris"
        ]
    },
    {
        "title": "Latihan Fitur Order di CorelDraw",
        "image": "images/project20dkv.png",
        "belajar": [
            "Buat 3 objek: Lingkaran (merah), Bintang (putih), dan Bulan Sabit (kuning).",
            "Seleksi semua objek, lalu atur posisinya menggunakan menu <i>Arrange → Order</i>.",
            "Cobalah perintah berikut:",
            "- Ctrl + Home : Pindahkan objek ke paling depan (To Front of Page).",
            "- Ctrl + End : Pindahkan objek ke paling belakang (To Back of Page).",
            "- Shift + PgUp : Pindahkan objek ke depan layer (To Front of Layer).",
            "- Shift + PgDn : Pindahkan objek ke belakang layer (To Back of Layer).",
            "- Ctrl + PgUp : Geser objek 1 tingkat ke depan (Forward One).",
            "- Ctrl + PgDn : Geser objek 1 tingkat ke belakang (Back One).",
            "Uji coba dengan menempatkan bintang di depan lingkaran, atau lingkaran di depan bulan sabit.",
            "Bandingkan hasilnya dengan gambar contoh latihan."
        ],
        "tujuan": [
            "Memahami fungsi Order untuk mengatur posisi objek bertumpuk",
            "Melatih penggunaan shortcut dalam mengatur urutan objek",
            "Mengembangkan keterampilan desain dengan pengaturan layer"
        ]
    },
    {
        "title": "Latihan Membuat Sudut Tumpul (Fillet) di CorelDraw",
        "image": "images/project21dkv.png",
        "belajar": [
            "1. Buat sebuah bentuk poligon atau segi empat dengan sudut lancip.",
            "2. Klik objek tersebut agar terseleksi.",
            "3. Buka menu <i>Window → Dockers → Corners</i>.",
            "4. Pada panel Dockers Corners, pilih opsi <b>Fillet</b>.",
            "5. Atur nilai <b>Radius</b> sesuai kebutuhan (misalnya 5 mm atau 10 mm).",
            "6. Klik tombol <b>Apply</b> untuk menerapkan efek sudut tumpul.",
            "7. Perhatikan bahwa sudut lancip pada objek kini berubah menjadi tumpul (rounded)."
        ],
        "tujuan": [
            "Memahami cara mengubah sudut lancip menjadi tumpul di CorelDRAW",
            "Melatih penggunaan Dockers Corners dengan opsi Fillet",
            "Menghasilkan desain yang lebih halus dan modern dengan sudut tumpul"
        ]
    },
    {
        "title": "Latihan Membuat Ukuran dengan Parallel Dimension Tool",
        "image": "images/project22dkv.png",
        "belajar": [
            "1. Siapkan objek (kotak/pola) yang akan diberi ukuran.",
            "2. Pilih <b>Parallel Dimension Tool</b> di Toolbox.",
            "3. Klik titik pertama di sisi objek.",
            "4. Klik titik kedua di ujung sisi tersebut.",
            "5. Tarik keluar dan klik untuk menempatkan teks ukuran.",
            "6. Atur posisi dan tampilannya melalui Property Bar (units, precision, text height, arrow style).",
            "7. Ulangi untuk semua sisi yang perlu diberi ukuran.",
            "8. Pastikan hasil rapi dan konsisten agar mudah dibaca."
        ],
        "tujuan": [
            "Memahami fungsi Parallel Dimension Tool.",
            "Melatih memberi ukuran presisi pada objek.",
            "Membuat gambar teknis/desain yang jelas dan rapi."
        ]
    },

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
        image: "images/project04dkv.png",
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
        title: "Project DKV 5 : Desain Dua Lingkaran dengan Efek Transparansi",
        image: "images/project05dkv.png",
        belajar: [
            "Menyiapkan 2 lingkaran menggunakan Ellipse Tool dan memberi warna",
            "Mengatur tingkat transparansi masing-masing lingkaran hingga 50%",
            "Menyeleksi kedua lingkaran sekaligus",
            "Menggabungkan kedua lingkaran menggunakan perintah Object -> Group -> Group"
        ],
        tujuan: [
            "Mempelajari teknik dasar pembuatan bentuk lingkaran dengan Ellipse Tool",
            "Memahami penggunaan efek transparansi untuk menciptakan efek tumpang tindih",
            "Melatih keterampilan mengelola objek dengan fitur Group",
            "Mengembangkan kemampuan mengatur komposisi bentuk sederhana",
            "Meningkatkan pemahaman efek visual dari transparansi dalam desain"
        ]
    },
    {
        title: "Project DKV 6 : Kolase Wisata dengan Bingkai Polygon dan PowerClip",
        image: "images/project06dkv.png",
        belajar: [
            "Menyiapkan gambar objek wisata sebagai bahan desain",
            "Menambahkan beberapa bentuk Polygon Tool untuk membuat bingkai foto",
            "Menggunakan fitur PowerClip Inside untuk memasukkan gambar ke dalam bingkai polygon",
            "Menyesuaikan posisi dan ukuran gambar di dalam bingkai dengan double-click",
            "Mengklik Finish (ikon centang hijau kiri atas) setelah posisi gambar tepat",
            "Mengatur posisi semua polygon agar tersusun rapi dan menarik"
        ],
        tujuan: [
            "Menguasai teknik penggunaan Polygon Tool sebagai bingkai kreatif",
            "Memahami langkah-langkah penggunaan PowerClip Inside untuk menggabungkan gambar dan bentuk",
            "Melatih keterampilan menyesuaikan posisi gambar di dalam bingkai",
            "Mengembangkan kreativitas dalam menyusun komposisi kolase",
            "Menghasilkan desain kolase wisata yang estetis dan harmonis"
        ]
    },
    {
        title: "Project DKV 7 : Desain Bintang Lancip Simetris dengan Polygon Tool",
        image: "images/project07dkv.png",
        belajar: [
            "Menambahkan Polygon Tool lalu mengatur jumlah points/sides menjadi 15",
            "Menghapus salah satu titik menggunakan Shape Tool dengan klik kanan -> Delete",
            "Mengubah semua sisi menjadi lengkung menggunakan Convert to Curve, lalu menarik garis bantu ke dalam hingga membentuk sudut lancip",
            "Menggunakan 2-Point Line Tool untuk membuat garis lurus ke salah satu sudut lancip",
            "Memperbanyak garis dengan fitur Transform (Window -> Dockers -> Transform)",
            "Mengatur tab Rotate, mengganti angle menjadi 24°, memilih titik bawah sebagai pivot, lalu Apply berulang hingga semua sudut terisi garis",
            "Memberi warna pada bentuk utama",
            "Menggandakan bentuk (Copy-Paste), memperbesar, memberi warna putih, lalu mengatur urutan ke belakang (Order -> To Back of Layer)",
            "Mengulangi langkah untuk membuat layer tambahan sesuai kebutuhan"
        ],
        tujuan: [
            "Menguasai teknik pengeditan bentuk dengan Shape Tool dan Convert to Curve",
            "Memahami penggunaan Polygon Tool untuk membuat bentuk simetris kompleks",
            "Melatih keterampilan pengulangan objek dengan fitur Transform dan Rotate",
            "Mengembangkan kemampuan layering warna dan pengaturan urutan objek",
            "Menciptakan desain vektor dengan efek dekoratif dan simetri presisi"
        ]
    },
    {
        title: "Project DKV 8 : Desain Teks Melengkung Mengikuti Bentuk Pisang",
        image: "images/project08dkv.png",
        belajar: [
            "Menambahkan gambar pisang ke lembar kerja CorelDRAW",
            "Membuat area bantu mengikuti lekukan pisang menggunakan Bezier Tool",
            "Menambahkan teks 'PISANG' lalu menyesuaikan bentuknya mengikuti lekukan dengan Envelope Tool",
            "Menggandakan gambar pisang, lalu memindahkannya ke belakang teks dengan Order -> To Back of Layer",
            "Menggunakan PowerClip Inside untuk memasukkan gambar pisang ke dalam teks",
            "Menyeleksi area bantu dan gambar pisang dengan tombol Shift lalu menggunakan Trim",
            "Menghapus area bantu untuk mendapatkan hasil akhir"
        ],
        tujuan: [
            "Melatih keterampilan penggunaan Bezier Tool untuk membuat jalur lekukan",
            "Menguasai Envelope Tool untuk membentuk teks sesuai objek",
            "Memahami teknik PowerClip Inside untuk memasukkan gambar ke dalam teks",
            "Melatih teknik Trim untuk memotong objek mengikuti bentuk bantu",
            "Menghasilkan desain kreatif dengan integrasi teks dan gambar yang harmonis"
        ]
    },
    {
        title: "Project DKV 9 : Efek Pointilisme pada Bentuk Lingkaran",
        image: "images/project09dkv.png",
        belajar: [
            "Menambahkan bentuk Ellipse dan memberi warna",
            "Menerapkan efek Gaussian Blur melalui menu Effects -> Blur -> Gaussian Blur",
            "Mengatur radius blur menjadi 21 untuk efek lembut",
            "Menerapkan efek Pointilizer melalui menu Effects -> Pointilizer",
            "Mengatur parameter Pointilizer: Density 16, Scale 1.0, Screen Angle 30.0, Limit Colors 5, Shape Circle",
            "Mengklik Apply untuk menerapkan efek",
            "Mengulangi langkah yang sama pada setiap ellipse dengan warna berbeda"
        ],
        tujuan: [
            "Mempelajari penggunaan Gaussian Blur untuk menciptakan efek lembut pada objek",
            "Menguasai efek Pointilizer untuk membuat pola titik artistik",
            "Melatih pengaturan parameter efek untuk mendapatkan hasil yang diinginkan",
            "Mengembangkan kreativitas dalam penggunaan warna dan komposisi",
            "Menghasilkan desain grafis dengan gaya pointilisme modern"
        ]
    },
    {
        "title": "Project DKV 10 : Modifikasi Warna Objek Foto",
        "image": "images/project10dkv.png",
        "belajar": [
            "Menambahkan gambar mobil ke lembar kerja CorelDraw",
            "Mengakses menu Effects -> Adjust -> Hue/Saturation/Lightness",
            "Memilih channel warna tertentu (misalnya Red) untuk dimodifikasi",
            "Menggeser nilai Hue untuk mengubah warna sesuai keinginan",
            "Menerapkan perubahan warna tanpa mengubah detail dan tekstur asli gambar"
        ],
        "tujuan": [
            "Mempelajari teknik dasar manipulasi warna pada foto",
            "Menguasai penggunaan Hue, Saturation, dan Lightness di CorelDraw",
            "Memahami cara mengubah warna objek tanpa merusak elemen visual lainnya",
            "Mengembangkan kreativitas dalam eksplorasi warna untuk desain grafis"
        ]
    },
    {
        "title": "Project DKV 11 : Teks di Dalam Bentuk Love",
        "image": "images/project11dkv.png",
        "belajar": [
            "Membuat bentuk hati (love) di CorelDraw",
            "Menambahkan teks 'LOVE' dan memberi warna pink",
            "Menggunakan Effects -> Envelope untuk menyesuaikan bentuk teks agar mengikuti kontur hati",
            "Mengatur Create Envelope from dengan opsi vertical dan mengarahkan ke bentuk love",
            "Menduplikasi bentuk hati, memperbesar, memberi warna merah, dan memposisikannya ke belakang dengan Order -> To Back of Layer",
            "Menghapus outline (Outline Width: None) untuk hasil yang lebih rapi"
        ],
        "tujuan": [
            "Mempelajari teknik pembentukan teks mengikuti bentuk objek",
            "Menguasai penggunaan Envelope Tool untuk efek distorsi teks",
            "Mengatur layering dan posisi objek dalam desain",
            "Meningkatkan keterampilan desain kreatif berbasis tipografi"
        ]
    }, {
        "title": "Project DKV 12 : Desain Simetris dengan Efek Bayangan",
        "image": "images/project12dkv.png",
        "belajar": [
            "Menggunakan fitur Symmetry di CorelDraw melalui Object -> Symmetry -> Create New Symmetry",
            "Menarik garis bantu ke tengah lembar kerja sebagai panduan simetri",
            "Membuat desain hanya di sisi kiri, sehingga sisi kanan otomatis terbentuk sesuai pola simetri",
            "Menduplikasi hasil desain, memperbesar, memberi warna kuning sebagai efek border/bayangan",
            "Memposisikan objek duplikat ke belakang dengan Order -> To Back of Layer",
            "Mengatur komposisi dan posisi agar hasil desain rapi dan seimbang"
        ],
        "tujuan": [
            "Mempelajari teknik pembuatan desain simetris yang cepat dan presisi",
            "Menguasai penggunaan fitur Symmetry untuk efisiensi desain",
            "Menggunakan layering untuk efek visual tambahan",
            "Melatih komposisi warna dan keseimbangan bentuk"
        ]
    },
    {
        "title": "Project DKV 13 : Efek 3D Extrude pada Huruf dengan Gradasi Warna",
        "image": "images/project13dkv.png",
        "belajar": [
            "Membuat huruf S di CorelDraw",
            "Menggunakan Extrude Tool untuk memberikan efek 3D dengan menarik kursor ke kanan",
            "Mengatur posisi dan rotasi efek 3D menggunakan Extrude Rotation agar proporsinya sesuai",
            "Mengonversi huruf menjadi kurva dengan Convert to Curve",
            "Memisahkan objek extrude menggunakan Break Extrude Group Apart",
            "Memberi warna merah pada huruf utama sehingga muncul bayangan atau outline",
            "Mengganti warna outline atau bayangan menjadi pink",
            "Menggunakan Interactive Fill Tool pada outline untuk membuat gradasi warna pink ke putih"
        ],
        "tujuan": [
            "Mempelajari penggunaan Extrude Tool untuk menciptakan efek 3D pada teks",
            "Menguasai teknik rotasi dan proporsi objek 3D",
            "Memahami cara memisahkan objek extrude dari bentuk utama",
            "Melatih keterampilan pewarnaan dan penggunaan gradasi untuk mempercantik tipografi"
        ]
    },
    {
        "title": "Project DKV 14 : Efek Block Shadow pada Teks",
        "image": "images/project14dkv.png",
        "belajar": [
            "Membuat teks 'SMK MUTIPUGA' di CorelDraw menggunakan Text Tool",
            "Memilih efek Block Shadow pada teks",
            "Menarik (drag) teks untuk mengatur panjang dan arah bayangan Block Shadow",
            "Mengatur nilai expand pada Block Shadow agar terlihat proporsional",
            "Mengubah warna huruf menjadi kuning cerah",
            "Mengatur warna Block Shadow menjadi biru tua",
            "Menyesuaikan posisi teks dan bayangan agar hasil terlihat rapi dan menarik"
        ],
        "tujuan": [
            "Mempelajari penggunaan efek Block Shadow pada teks di CorelDraw",
            "Menguasai teknik penyesuaian panjang, arah, dan warna bayangan",
            "Melatih keterampilan tipografi untuk menghasilkan teks yang lebih menarik secara visual",
            "Memahami perpaduan warna antara huruf dan bayangan untuk menciptakan kontras yang kuat"
        ]
    },
    {
        "title": "Project DKV 15 : Efek Blend pada Berbagai Bentuk Geometri",
        "image": "images/project15dkv.png",
        "belajar": [
            "Membuat bentuk besar (lingkaran, bintang, segilima, atau bentuk bebas) di CorelDraw",
            "Membuat bentuk yang sama namun lebih kecil di dalam bentuk besar",
            "Menggunakan Blend Tool untuk menghubungkan bentuk besar dan kecil",
            "Mengatur jumlah langkah (steps) atau jumlah sisi (sides) pada Blend Tool agar hasil lebih rapat dan rapi",
            "Memberikan warna pada outline sesuai tema desain",
            "Membuat dua bentuk sama lalu menghubungkannya menggunakan Blend Tool dengan teknik yang sama",
            "Menciptakan variasi desain seperti bendera bergelombang, lingkaran berlapis, bintang bertingkat, dan segilima berlapis"
        ],
        "tujuan": [
            "Mempelajari penggunaan Blend Tool untuk menciptakan efek berlapis pada bentuk geometri",
            "Melatih keterampilan membuat pola repetitif dengan pengaturan jumlah langkah yang tepat",
            "Memahami komposisi warna pada outline untuk memperkuat visual desain",
            "Mengembangkan kreativitas dalam menggabungkan berbagai bentuk untuk membuat karya tipografi dan ilustrasi unik"
        ]
    },
    {
        "title": "Project DKV 17 : Eksperimen dengan Distort Tool",
        "image": "images/project17dkv.png",
        "belajar": [
            "Gunakan Distort Tool dengan mode Push and Pull → untuk menarik/menjorokkan sisi bentuk agar terlihat melengkung unik",
            "Gunakan Distort Tool dengan mode Zipper → untuk membuat efek bergerigi seperti bintang tajam atau objek berduri",
            "Gunakan Distort Tool dengan mode Twister → untuk memutar objek menjadi spiral atau pusaran",
            "Kombinasikan Distortion dengan warna (Fill dan Outline) agar efek lebih menarik",
            "Bereksperimen dengan jumlah step/distortion untuk menghasilkan variasi desain kreatif"
        ],
        "tujuan": [
            "Mengenal berbagai jenis Distort Tool di CorelDraw (Push and Pull, Zipper, Twister)",
            "Melatih kreativitas dengan memodifikasi bentuk sederhana menjadi lebih ekspresif",
            "Mengembangkan kemampuan membuat variasi desain dekoratif seperti bintang, spiral, atau ornamen abstrak",
            "Membiasakan siswa bereksperimen dengan parameter Distortion agar lebih memahami efek visual yang dihasilkan"
        ]
    },
    {
        "title": "Project DKV 18 : Membuat Bunga Spiral dengan Distort Tool & PowerClip",
        "image": "images/project18dkv.png",
        "belajar": [
            "Pilih Polygon Tool kemudian atur jumlah sisi (points or sides) menjadi 12",
            "Gunakan Shape Tool → klik 2 kali di bagian tengah garis antara dua titik polygon",
            "Tarik titik baru tersebut ke arah dalam sehingga terbentuk kelopak bunga",
            "Pilih Distort Tool lalu gunakan Twister Distortion → ubah Complete Rotations menjadi 1 atau lebih sesuai kebutuhan untuk membuat efek spiral",
            "Beri warna berbeda pada bagian kelopak (fill & outline) agar tampilan lebih menarik",
            "Buat Rectangle sebagai wadah desain",
            "Gunakan PowerClip → masukkan bunga spiral ke dalam Rectangle",
            "Atur Present List menjadi Push Corner agar efek tampak lebih rapi dan dinamis"
        ],
        "tujuan": [
            "Mempelajari cara mengubah polygon menjadi bentuk kreatif menggunakan Shape Tool",
            "Melatih penggunaan Twister Distortion untuk membuat efek spiral pada objek",
            "Mengembangkan keterampilan pewarnaan untuk memperkuat kesan visual desain",
            "Menggunakan PowerClip untuk mengatur komposisi objek dalam sebuah wadah",
            "Memahami teknik finishing dengan Present List agar hasil lebih profesional"
        ]
    }







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
