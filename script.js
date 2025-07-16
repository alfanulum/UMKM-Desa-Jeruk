let images = [];
let imagesProduk = [];
let currentIndex = 0;
let imageToProductMap = {};

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

async function loadUMKM() {
  try {
    const res = await fetch('data_umkm.json');
    const data = await res.json();
    const umkmNama = decodeURIComponent(getQueryParam('nama_umkm'));
    const selected = data.find(umkm => umkm.nama_umkm === umkmNama);

    if (!selected) {
      document.body.innerHTML = "<h3 class='text-center mt-5'>UMKM tidak ditemukan</h3>";
      return;
    }

    // Isi konten utama
    document.getElementById('nama_umkm').textContent = selected.nama_umkm;
    document.getElementById('informasi').textContent = selected.informasi;
    document.getElementById('maps').innerHTML = selected.maps;
    document.getElementById('info_umkm').textContent = `📍 ${selected.lokasi} | 🏷️ ${selected.kategori}`;
    document.getElementById('kisaran_harga').textContent = selected.harga;
    document.getElementById('info_pemilik').textContent = `Nama Pemilik: ${selected.pemilik}`;
    document.getElementById('no_hp').textContent =  `Nomer Handphone: ${selected.no_hp}`;
    document.getElementById('preview').src = selected.image;

    // Produk list
    const produkList = document.getElementById('produk_list');
    produkList.innerHTML = '';
    (selected.produk || []).forEach(p => {
      const li = document.createElement('li');
      li.textContent = `${p.nama}`;
      produkList.appendChild(li);
    });

    // Jam buka list
    const bukaList = document.getElementById('buka');
    bukaList.innerHTML = '';
    (selected.buka || []).forEach(p => {
      const li = document.createElement('li');
      li.textContent = `${p.hari} ${p.Jam}`;
      bukaList.appendChild(li);
    });

    // Galeri dan produk
    images = [selected.image, ...(selected.image_list || [])];
    imagesProduk = selected.produk || [];

    renderCarousel(images);

    // Atur link WhatsApp
    setWhatsAppLink(selected.no_hp);
  } catch (error) {
    console.error("Gagal memuat data UMKM:", error);
    document.body.innerHTML = "<h3 class='text-center mt-5 text-danger'>Gagal memuat data UMKM.</h3>";
  }
}

function renderCarousel(imgList) {
  const scrollContainer = document.getElementById('carousel_scroll');
  scrollContainer.innerHTML = '';
  imageToProductMap = {};

  imgList.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    if (i === 0) img.classList.add('active');

    if (i > 0 && imagesProduk[i - 1]) {
      imageToProductMap[src] = {
        nama: imagesProduk[i - 1].nama,
        harga: imagesProduk[i - 1].harga
      };
    }

    img.addEventListener('click', () => {
      currentIndex = i;
      updatePreviewImage();
    });

    scrollContainer.appendChild(img);
  });

  updatePreviewImage();
}

function updatePreviewImage() {
  const scrollContainer = document.getElementById('carousel_scroll');
  const thumbnails = scrollContainer.querySelectorAll('img');

  if (thumbnails.length === 0) return;

  document.getElementById('preview').src = images[currentIndex];

  thumbnails.forEach((img, idx) => {
    img.classList.toggle('active', idx === currentIndex);
  });

  const produkInfo = imageToProductMap[images[currentIndex]];
  const produkAktif = document.getElementById('produk_aktif');

  if (produkInfo) {
    produkAktif.style.display = 'block';
    document.getElementById('nama_produk_aktif').textContent = produkInfo.nama;
    document.getElementById('harga_produk_aktif').textContent = produkInfo.harga;
  } else {
    produkAktif.style.display = 'none';
  }

  const activeImg = thumbnails[currentIndex];
  if (activeImg) {
    const scrollLeftPos = activeImg.offsetLeft - 12;
    scrollContainer.scrollTo({ left: scrollLeftPos, behavior: 'smooth' });
  }
}

function scrollCarousel(direction) {
  const maxIndex = images.length - 1;

  if (direction === 1) {
    currentIndex = (currentIndex + 1) > maxIndex ? 0 : currentIndex + 1;
  } else {
    currentIndex = (currentIndex - 1) < 0 ? maxIndex : currentIndex - 1;
  }

  updatePreviewImage();
}

function setWhatsAppLink(no_hp) {
  const btnWa = document.getElementById('btn-wa');
  if (!btnWa || !no_hp) return;

  const normalized = no_hp.replace(/\D/g, '').replace(/^0/, '62');
  const encodedMessage = encodeURIComponent("Halo, saya tertarik dengan produk UMKM Anda.");
  btnWa.href = `https://wa.me/${normalized}?text=${encodedMessage}`;
}

document.addEventListener('DOMContentLoaded', loadUMKM);
