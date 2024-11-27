function order(id, nama, nomor) {
    const whatsappNumber = "+62 838-2406-3521"; // Ganti dengan nomor WhatsApp Anda
    const message = `Halo, saya ingin membeli akun:\n` +
                    `- Nama: ${nama}\n` +
                    `- ID: ${id}\n` +
                    `- Nomor Akun: ${nomor}\n` +
                    `Silakan konfirmasi ketersediaan.`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}
function order2 (id, nama, nomor) {
    const whatsappNumber = "+62 858-6043-1612"; // Ganti dengan nomor WhatsApp Anda
    const message = `Halo, saya ingin membeli akun:\n` +
                    `- Nama: ${nama}\n` +
                    `- ID: ${id}\n` +
                    `- Nomor Akun: ${nomor}\n` +
                    `Silakan konfirmasi ketersediaan, {Maap no wa Bang Latex76 sedang tidak aktif, jadi saya menggunakan no mc saja }.`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}

// Tambahkan event listener untuk klik pada gambar profil
const profilePic = document.getElementById("profile-pic");

profilePic.addEventListener("click", () => {
    // Jika sudah diperbesar, kecilkan kembali
    if (profilePic.classList.contains("zoomed")) {
        profilePic.classList.remove("zoomed");
    } else {
        // Jika belum diperbesar, perbesar gambar
        profilePic.classList.add("zoomed");
    }
});

// Event listener untuk gambar produk
document.querySelectorAll(".product img").forEach((img) => {
    img.addEventListener("click", () => {
        // Jika gambar sudah fullscreen, keluarkan
        if (img.classList.contains("fullscreen")) {
            img.classList.remove("fullscreen");
            document.body.style.overflow = "auto"; // Aktifkan scrolling
        } else {
            // Tambahkan kelas fullscreen
            img.classList.add("fullscreen");
            document.body.style.overflow = "hidden"; // Nonaktifkan scrolling
        }
    });
});

// Ambil semua link di navigasi
const navLinks = document.querySelectorAll("nav ul li a");

// Tambahkan event listener untuk setiap link
navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Mencegah reload halaman saat link diklik

        // Ambil target dari data-target
        const targetId = link.getAttribute("data-target");

        // Sembunyikan semua section
        const sections = document.querySelectorAll(".content-section");
        sections.forEach((section) => {
            section.classList.remove("active");
        });

        // Tampilkan section yang sesuai dengan target
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add("active");
        }
    });
});

// Periksa semua produk
document.querySelectorAll(".product").forEach((product) => {
    const isSoldOut = product.getAttribute("data-soldout") === "true"; // Cek status sold out
    const button = product.querySelector("button"); // Ambil tombol dalam elemen produk

    if (button) {
        if (isSoldOut) {
            // Jika produk sold out
            button.textContent = "Sold Out"; // Ubah teks tombol
            button.disabled = true; // Nonaktifkan tombol
            button.style.backgroundColor = "#d9534f"; // Ubah warna tombol menjadi merah
            button.style.cursor = "not-allowed"; // Ubah kursor
            button.onclick = null; // Hapus fungsi klik
        } else {
            // Jika produk masih tersedia
            button.textContent = "Pesan via WhatsApp"; // Pastikan teks tombol
            button.disabled = false; // Aktifkan tombol
            button.style.backgroundColor = "#28a745"; // Warna tombol hijau
            button.style.cursor = "pointer"; // Tampilkan kursor aktif
            button.onclick = () => {
                order(
                    product.querySelector("p").textContent, // ID Produk
                    product.querySelector("h3").textContent, // Nama Produk
                    1 // Nomor Produk (contoh)
                );
            };
        }
    }
});