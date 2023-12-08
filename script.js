// Memilih elemen tombol menu toggle
const menuToggle = document.querySelector(".menu-toggle input");

// Memilih elemen daftar menu di dalam elemen nav
const nav = document.querySelector("nav ul");

// Menambahkan event listener untuk mengatur aksi saat tombol menu toggle diklik
menuToggle.addEventListener("click", function () {
  // Mengubah status kelas "slide" pada elemen daftar menu untuk menampilkan atau menyembunyikan menu
  nav.classList.toggle("slide");
});

const galery = document.querySelector(".galery");
const big = document.querySelector(".big");
const sml = document.querySelectorAll(".sml"); // Memperbaiki pemilihan elemen

galery.addEventListener("click", function (e) {
  if (e.target.classList.contains("sml")) {
    big.src = e.target.src;
    big.classList.add("fade");
    setTimeout(function () {
      big.classList.remove("fade");
    }, 500);
    sml.forEach(function (smol) {
      smol.classList.remove("active");
    });
    e.target.classList.add("active");
  }
});
