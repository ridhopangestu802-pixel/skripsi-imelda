# Skripsi Imelda - Pengaruh Marketing Rachel Vennya

## Deskripsi Proyek
Website interaktif untuk penelitian skripsi tentang pengaruh marketing Rachel Vennya terhadap keputusan pembelian Seblak Bas Aci Neng Jinju pada Gen Z.

## Fitur
- ✅ Halaman presentasi skripsi yang menarik
- ✅ Form survei online interaktif
- ✅ Dashboard dengan visualisasi data real-time
- ✅ Backend untuk proses data responden
- ✅ Upload & parsing CSV otomatis
- ✅ Analisis statistik dan korelasi

## Instalasi

### 1. Clone Repository
```bash
git clone https://github.com/ridhopangestu802-pixel/skripsi-imelda.git
cd skripsi-imelda
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment
```bash
cp .env.example .env
```

### 4. Jalankan Server
```bash
npm start
```

Server akan berjalan di `http://localhost:3000`

## Struktur Folder
```
skripsi-imelda/
├── public/
│   ├── index.html
│   ├── survey.html
│   ├── dashboard.html
│   ├── css/
│   │   ├── style.css
│   │   ├── survey.css
│   │   └── dashboard.css
│   └── js/
│       ├── survey.js
│       ├── dashboard.js
│       └── chart-config.js
├── backend/
│   ├── server.js
│   ├── routes/
│   │   ├── survey.js
│   │   └── analytics.js
│   ├── controllers/
│   │   ├── surveyController.js
│   │   └── analyticsController.js
│   ├── models/
│   │   └── responden.js
│   └── db.js
├── data/
│   └── responden.csv
├── package.json
├── .env.example
└── README.md
```

## API Endpoints

### Survey
- `POST /api/survey/submit` - Submit responden baru
- `GET /api/survey/responses` - Dapatkan semua responden

### Analytics
- `GET /api/analytics/stats` - Statistik deskriptif
- `GET /api/analytics/correlation` - Analisis korelasi
- `POST /api/analytics/upload-csv` - Upload file CSV

## Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js
- **Database**: SQLite
- **Visualization**: Chart.js
- **Data Processing**: csv-parser

## Author
Ridho Pangestu (@ridhopangestu802-pixel)

## License
MIT
