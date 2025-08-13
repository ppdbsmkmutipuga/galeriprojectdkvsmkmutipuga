document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah reload halaman

    let nama = document.getElementById("nama").value;
    let kelas = document.getElementById("kelas").value;
    let komentar = document.getElementById("komentar").value;

    alert(`Terima kasih, ${nama} dari kelas ${kelas}!\nKomentar kamu: "${komentar}" telah kami terima.`);

    // Reset form setelah submit
    this.reset();
});
