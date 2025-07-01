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
```

🔧 Cara Menjalankan Project
1. Install Live Server
Jika kamu menggunakan Visual Studio Code, install ekstensi berikut:

🔌 Live Server Extension
By Ritwick Dey
📦 Link ke VS Code Marketplace

2. Jalankan Website
Setelah membuka folder project:
- Klik kanan pada index.html
- Pilih "Open with Live Server"

Web akan terbuka otomatis di browser (biasanya di http://127.0.0.1:5500/)

⬆️ Cara Menambahkan / Push ke GitHub
Jika kamu ingin mengedit dan mengunggah perubahan ke GitHub:

# Tambah semua perubahan
```bash
git add .
```

# Commit dengan pesan
```bash
git commit -m "Update konten halaman"
```
# Push ke GitHub
```bash
git push origin main
```

🔄 Cara Tarik Perubahan Terbaru (Pull)
Untuk menarik perubahan terbaru dari GitHub:
```bash
git pull origin main
```

🧪 Tips Testing Data JSON
Karena website ini mengambil data dari data_umkm.json, pastikan:
- File ini tidak dibuka langsung via file:///
- Harus diakses melalui Live Server agar JSON bisa di-load
- Jika data gagal muncul, buka DevTools (Ctrl+Shift+I → Console) untuk melihat error-nya
