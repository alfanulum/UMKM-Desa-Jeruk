# 🌾 UMKM Desa Jeruk

Website informasi UMKM lokal Kelurahan Jeruk, Lakarsantri – Surabaya.  
Dikembangkan sebagai bagian dari **KKN UPN "Veteran" Jawa Timur Tahun 2025**.

Website ini bertujuan untuk membantu masyarakat menemukan dan mendukung pelaku UMKM di wilayah Kelurahan Jeruk dengan tampilan modern, cepat, dan mudah diakses.

---

## 🎯 Fitur Utama

- 🔍 Filter berdasarkan kategori, lokasi, dan kata kunci
- 🧾 Informasi pemilik, produk, lokasi, harga, dan rating
- 🎨 Desain modern dominan warna oranye
- 💾 Tanpa database (menggunakan file `data_umkm.json`)

---

## 🧰 Teknologi yang Digunakan

- HTML5, CSS3, JavaScript
- [Bootstrap 5.3](https://getbootstrap.com/)
- Font Awesome (untuk ikon)
- Live Server (via ekstensi VSCode)
- Data statis JSON (`data_umkm.json`)

---

## 📦 Struktur Folder
UMKM-Desa-Jeruk/
├── asset/
│ ├── css/
│ │ └── style.css
│ └── image/
│ └── umkm.jpg
├── data_umkm.json
├── index.html
└── README.md

---

## 🛠️ Cara Clone Project

Buka terminal atau Git Bash dan jalankan perintah berikut:

```bash
git clone https://github.com/alfanulum/UMKM-Desa-Jeruk.git
cd UMKM-Desa-Jeruk
code .
💡 Pastikan kamu sudah install Git dan Visual Studio Code

🔧 Cara Menjalankan Project
1. Install Live Server
Jika kamu menggunakan Visual Studio Code, install ekstensi berikut:

🔌 Live Server Extension
By Ritwick Dey
📦 Link ke VS Code Marketplace

2. Jalankan Website
Setelah membuka folder project:

Klik kanan pada index.html

Pilih "Open with Live Server"

Web akan terbuka otomatis di browser (biasanya di http://127.0.0.1:5500/)

⬆️ Cara Menambahkan / Push ke GitHub
Jika kamu ingin mengedit dan mengunggah perubahan ke GitHub:

bash
Copy
Edit
# Tambah semua perubahan
git add .

# Commit dengan pesan
git commit -m "Update konten halaman"

# Push ke GitHub
git push origin main
🔄 Cara Tarik Perubahan Terbaru (Pull)
Untuk menarik perubahan terbaru dari GitHub:

bash
Copy
Edit
git pull origin main
🧪 Tips Testing Data JSON
Karena website ini mengambil data dari data_umkm.json, pastikan:

File ini tidak dibuka langsung via file:///

Harus diakses melalui Live Server agar JSON bisa di-load

Jika data gagal muncul, buka DevTools (Ctrl+Shift+I → Console) untuk melihat error-nya

📩 Kontak
Jika ada pertanyaan atau saran:

📧 Email: info@umkmjeruk.id
📞 WhatsApp: 0812-3456-7890
📍 Alamat: Kelurahan Jeruk, Lakarsantri, Surabaya

📝 Lisensi
© 2025 UMKM Kelurahan Jeruk
Website ini dibuat untuk keperluan KKN Mahasiswa dan dapat dimodifikasi untuk pengembangan lokal selanjutnya.

yaml
Copy
Edit

---

### ✅ Langkah Selanjutnya

1. Salin isi di atas ke dalam file `README.md` di dalam folder project kamu.
2. Jalankan:

```bash
git add README.md
git commit -m "Add detailed README"
git push origin main


