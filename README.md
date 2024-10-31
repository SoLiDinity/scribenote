# Sticky Note Web App
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Flask](https://img.shields.io/badge/flask-blue?style=for-the-badge&logo=flask&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 📄 Description
Aplikasi web untuk membuat Catatan Tempel (<i>Sticky Notes</i>). Dibuat dengan memanfaatkan library Flask menggunakan bahasa Python, Javascript, HTML dan Custom CSS

### ⚡ Fitur
- <strong>Membuat Sticky Notes</strong>  
Buat dan simpan catatan penting dengan bentuk <i>Sticky Notes</i>. Tulis catatan dalam format `markdown*` maupun `HTML`
- <strong>Kustomisasi Sticky Ntes</strong>  
<i>Sticky Notes</i> yang dibuat dapat dikostumisasi dengan bebas baik warna latar, warna teks, serta letaknya.
- <strong>Memanfaatkan Local Storage</strong>  
<i>Sticky Notes</i> yang dibuat akan selalu tersimpan pada <i>local storage</i> browser secara otomatis, dengan begitu catatan tidak akan hilang.

###### <i>*Note: format markdown yang disupport sementara terbatas untuk heading (#), bold (\*\*), dan italics (\*)</i>

### 🔜 Fitur Selanjutnya
- <strong>Simpan Sticky Notes</strong>
Papan <i>Sticky Notes</i> akan dapat disimpan dalam format gambar (.PNG, .JPG, .JPEG).

### 🌐 Demo
Akses demo aplikasi melalui [situs ini](https://solidinity-notes.vercel.app/)

<hr>

## 📄 How To Install
Untuk menyimpan proyek berikut ke perangkat lokal, terdapat beberapa langkah berikut yang perlu dilakukan. Jalankan command berikut pada terminal untuk melakukan klon proyek di perangkat lokal:
```
git clone https://github.com/SoLiDinity/website_notes.git
```

Sangat direkomendasikan untuk menjalankan proyek yang diklon dengan menggunakan <i>virtual environment</i>. Anda dapat membuat `.venv` pada folder proyek dengan menggunakan command berikut:
```
python -m venv .venv
```

Selanjutnya, pastikan untuk menjalankan <i>virtual environment</i> pada proyek yang diklon dengan menggunakan command berikut:
- #### Windows
```
.venv\Scripts\activate
```
- #### macOS/Linux
```
source .venv/bin/activate
```

Pastikan untuk menginstall seluruh modul yang dibutuhkan pada `requirements.txt` untuk dapat menjalankan proyek dengan menjalankan command berikut:
```
pip install -r requirements.txt
```

Untuk menjalankan server, run file `server.py` pada direktori `src\` atau jalankan command berikut pada terminal:

```
python src\index.py
```

server akan dapat diakses melalui ``http://localhost:9000/`` atau ``http://127.0.0.1:9000/``. Untuk menghentikan server, tekan ``ctrl + C`` pada terminal.

<hr>

## Preview
![image](https://github.com/user-attachments/assets/0d2eb980-cf88-4f6f-a6fa-89556ba69d89)
