export type ContentBlock =
  | { type: "text"; text: string }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      width: number;
      height: number;
    };

export interface Law {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  color: string;
  year: string;
  person: string;
  personDescription: string;
  blocks: ContentBlock[];
  keyPoints: string[];
}

const img = (
  slug: string,
  n: number,
  alt: string,
  caption: string,
  width: number,
  height: number,
): ContentBlock => ({
  type: "image",
  src: `/laws/${slug}/img-${n}.png`,
  alt,
  caption,
  width,
  height,
});

const t = (text: string): ContentBlock => ({ type: "text", text });

export const laws: Law[] = [
  {
    slug: "fitts-law",
    number: 1,
    title: "Fitt's Law",
    subtitle:
      "Waktu yang dibutuhkan untuk mencapai target itu tergantung dari jaraknya, dan berbanding terbalik dengan ukuran si target.",
    color: "hsl(122, 39%, 49%)",
    year: "1954",
    person: "Paul Fitts",
    personDescription: "Psikolog",
    blocks: [
      t("Yang artinya semakin dekat dan besar ukuran target, kita bisa lebih cepat untuk meraihnya."),
      t("Contohnya kalau di dunia nyata. Ukuran pedal rem mobil itu ukurannya lebih besar daripada pedal untuk ngegas, hal tersebut membantu pengemudi lebih cepat ngerem kalau terjadi apa-apa. Sama halnya dengan ukuran tombol \"off\" pada mesin industri yang lebih besar daripada tombol \"on\". Orang jadi lebih cepat untuk mematikan mesin kalau terjadi sesuatu yang berbahaya, dan mengurangi risiko menyalakan mesin tiba-tiba."),
      t("Sekarang Fitt's Law lebih sering dipakai untuk desain UI dan UX. Efeknya kalau kalian lihat, banyak tombol yang dibikin gede biar mudah dan cepat diraih, terutama untuk di mobile. Ditambah, gedenya tombol dapat ngurangin kemungkinan user salah nge-klik atau ngurangin error rates."),
      img("fitts-law", 1, "Ilustrasi pedal rem dan tombol off/on", "Ini contoh pedal rem dan tombol \"off\"/\"on\" — yang lebih penting dibuat lebih besar.", 1054, 640),
      t("Sebagai contohnya di UI dan UX, tombol yang jadi target utama dibuat lebih besar. Sedangkan, link yang ukuran targetnya kecil biasa dipakai untuk interaksi yang jarang digunakan."),
      img("fitts-law", 2, "Contoh tombol target utama lebih besar", "Tombol yang jadi target utama dibuat lebih besar dibanding link.", 1054, 648),
      t("Ini contoh lain, walaupun ukurannya itu ga pas banget (itu saya yang ngukur sendiri). Tapi memperlihatkan kalau yang jadi target utama, ukurannya lebih besar."),
      img("fitts-law", 3, "Dialog Invite people to project", "Dialog \"Invite people to project\" — tombol utama paling menonjol.", 1054, 1246),
    ],
    keyPoints: [
      "Tombol untuk aksi utama harus berukuran lebih besar",
      "Kurangi jarak antara area perhatian user dan tombol terkait",
      "Tombol besar mengurangi error rates di mobile",
    ],
  },
  {
    slug: "hicks-law",
    number: 2,
    title: "Hick's Law",
    subtitle:
      "Waktu yang dibutuhkan untuk mengambil keputusan meningkat seiring dengan semakin kompleks dan bertambahnya suatu pilihan.",
    color: "hsl(232, 64%, 30%)",
    year: "1952",
    person: "William Edmund Hick & Ray Hyman",
    personDescription: "Psikolog",
    blocks: [
      t("Yang artinya semakin banyak dan semakin kompleks pilihan, maka waktu yang dibutuhkan untuk berpikir akan lebih lama."),
      t("Kalau kalian datang ke restoran kelas atas, biasanya menu makanannya akan lebih mudah untuk digunakan, pelanggan merasa tidak kesulitan untuk milih mau pesen apa."),
      img("hicks-law", 1, "Menu tanpa Hick's Law", "Menu yang ini ga pake Hick's Law — pilihan banyak dan padat.", 1054, 640),
      img("hicks-law", 2, "Menu dengan Hick's Law", "Menu yang ini pake Hick's Law — lebih ringkas dan mudah dipilih.", 1054, 640),
      t("Hick's Law ini jangan disalahartikan sebagai aturan untuk ngilangin suatu yang kompleks. Ini jadi alasan kenapa kamera DSLR lebih banyak tombol atau pilihannya daripada kamera yang di hape. Tujuan dari Hick's Law adalah untuk menyederhanakan proses saat ngambil keputusan, bukan mengurangi seluruh proses ya."),
      t("Sebagai contohnya kalau di dunia desain, banyak dipakai di ecommerce. Produk-produk yang banyak itu ga dimunculin sekaligus di websitenya, tapi dimasukin ke dalam berbagai macam kategori. Dan perlahan akan muncul produknya yang lebih spesifik."),
      img("hicks-law", 3, "Home page Amazon", "Contohnya di Home page amazon.com ini.", 1054, 570),
      img("hicks-law", 4, "Menu Departments Amazon", "Menu Departments.", 1054, 570),
      img("hicks-law", 5, "Kategori produk terbuka bertahap", "Kebuka sedikit-sedikit untuk kategori produknya, jadi ga sekaligus dimunculin.", 1054, 570),
      t("Bayangkan semua produknya dimunculin di Home page dan designernya ga pakai Hick's law. User akan pusing sendiri dan ninggalin websitenya."),
    ],
    keyPoints: [
      "Sederhanakan pilihan untuk user, jangan tampilkan semuanya sekaligus",
      "Gunakan kategorisasi untuk memecah pilihan yang kompleks",
      "Tujuannya menyederhanakan proses keputusan, bukan menghilangkan kompleksitas",
    ],
  },
  {
    slug: "jakobs-law",
    number: 3,
    title: "Jakob's Law",
    subtitle:
      "User itu lebih banyak luangin waktunya di website lain selain punya kita. Alhasil, user lebih memilih website kita bekerja sesuai dengan website lain yang sudah dia tau.",
    color: "hsl(49, 98%, 60%)",
    year: "",
    person: "Jakob Nielsen",
    personDescription: "UX Researcher, teman Don Norman (Nielsen Norman Group)",
    blocks: [
      t("Artinya, user ga mau dikagetkan dengan hal yang baru."),
      t("Contohnya gini di dunia nyata. Kalian datang ke warung nasi padang di suatu tempat, karena kalian udah pernah ke tempat nasi padang sebelumnya, pas datang ke warung nasi padang ini, ekspektasi warung nasi padang akan sama dengan yang sudah pernah kalian datangi. Lauknya dipajang di depan warungnya, mesennya juga sama, dan begitu seterusnya."),
      img("jakobs-law", 1, "Warung nasi padang", "Ini ekspektasi kita soal warung nasi padang — lauk dipajang di depan.", 1054, 640),
      t("Contoh lain, datang ke ATM, kalian lebih memilih ATM itu bekerja dengan sama dengan ATM lain. Pasti ga pengen kan kalau ATM nya unik gitu, keyboardnya pake QWERTY, atau perintahnya pake suara."),
      t("Sedangkan di dunia UI dan UX jelas Jakob's Law ini sering dikaitkan dengan konsistensi."),
      t("Karena itu, berhati-hati saat mengatakan \"kita coba yang baru di website kita!\". Bisa jadi malah user kita jadi bingung dan parahnya ninggalin website kita."),
    ],
    keyPoints: [
      "User sudah punya mental model dari website lain",
      "Konsistensi dengan pola desain yang sudah umum sangat penting",
      "Inovasi tanpa alasan kuat bisa membuat user bingung",
    ],
  },
  {
    slug: "law-of-pragnanz",
    number: 4,
    title: "Law of Prägnanz",
    subtitle:
      "Orang akan menerima atau mengartikan sesuatu yang kompleks atau ambigu ke dalam bentuk yang sesederhana mungkin, karena interpretasi yang sederhana itu membutuhkan usaha yang lebih sedikit.",
    color: "hsl(340, 82%, 52%)",
    year: "",
    person: "Gestalt Psychology",
    personDescription:
      "Kata Prägnanz berasal dari Bahasa Jerman, artinya \"good figure\"",
    blocks: [
      t("Bisa diartikan dengan kita lebih memilih dan lebih senang yang sederhana, jelas, dan teratur. Yang secara alami memang mata kita lebih memilih menangkap yang sederhana."),
      t("Ini jadi alasan kenapa kita melihat logo WWF seperti panda, padahal itu gabungan dari bentuk-bentuk yang kompleks. Karena mata kita yang menyederhanakan bentuk itu jadi satu bentuk yang saling menyatu."),
      img("law-of-pragnanz", 1, "Logo WWF panda", "Logo WWF — kita melihatnya sebagai panda, padahal gabungan bentuk yang kompleks.", 1054, 640),
      t("Contoh lain, lebih mudah mengenali 3 lingkaran hitam yang ditimpa segitiga putih. Dibandingkan kita mengenalinya dengan 3 Pacman hitam."),
      img("law-of-pragnanz", 2, "Segitiga Kanizsa", "Kita melihat segitiga putih di atas 3 lingkaran, bukan 3 Pacman.", 1054, 640),
      t("Di dunia UI dan UX, Prägnanz ini bisa digunakan ketika kita melihat sebuah website. Mata si user akan berusaha mengartikan website yang memang rumit menjadi suatu block yang lebih mudah dimengerti. Ini bagian navigasi, ini bagian filter, dst."),
      img("law-of-pragnanz", 3, "Website disederhanakan jadi block", "Mata user menyederhanakan halaman rumit menjadi block-block yang mudah dimengerti.", 1054, 640),
      t("Hukum ini membantu kita ketika ingin membuat wireframe (atau gambaran besar website). Karena kita, temen kita, atau user lebih mudah melihat gambaran website dari satu block ke block lain."),
    ],
    keyPoints: [
      "Manusia secara alami menyederhanakan bentuk kompleks",
      "Gunakan bentuk-bentuk sederhana dan jelas dalam desain",
      "Susun layout dalam block-block yang mudah dipahami",
    ],
  },
  {
    slug: "law-of-proximity",
    number: 5,
    title: "Law of Proximity",
    subtitle:
      "Benda yang berdekatan atau yang terdekat satu sama lain, cenderung berkelompok.",
    color: "hsl(33, 100%, 50%)",
    year: "",
    person: "Max Wertheimer",
    personDescription: "Gestalt Psychology",
    blocks: [
      t("Hukum ini sebenarnya satu seri sama hukum Prägnanz, mereka masuk ke dalam Gestalt of Psychology dan dibuat oleh orang yang sama yaitu Max Wertheimer. Mungkin kalian semua udah sering pakai Law of Proximity ini, cuma ga sadar aja."),
      t("Disekitar kita banyak contohnya. Kita akan memahami yang saling berdekatan itu satu kelompok."),
      img("law-of-proximity", 1, "Orang duduk berkelompok di taman", "Orang yang duduk berdekatan terlihat sebagai satu kelompok.", 1054, 640),
      t("Atau seperti menu yang di Google ini."),
      img("law-of-proximity", 2, "Menu Google", "Menu Google — item dikelompokkan berdasarkan jarak.", 1054, 262),
      t("Contoh lain, yang oren terlihat berbaris ke kanan, sedangkan yang biru berbaris ke bawah. Mereka yang lebih dekat akan terlihat berkelompok."),
      img("law-of-proximity", 3, "Titik oren dan biru", "Titik oren berkelompok ke kanan, biru ke bawah.", 1054, 442),
      t("Law of Proximity ini banyak digunakan di UI dan UX, banyak digunakan untuk representasi data, seperti tabel, chart, dan informasi-informasi lainnya."),
      t("Chat WhatsApp ini juga pake proximity. Kamu nyadar ga? Chat dari orang yang sama akan lebih berdekatan."),
      img("law-of-proximity", 4, "Chat WhatsApp", "Chat WhatsApp — pesan dari orang yang sama saling berdekatan.", 1054, 1786),
      t("Hukum yang sederhana, namun penggunaannya sangat membantu dalam proses mendesain."),
    ],
    keyPoints: [
      "Kelompokkan elemen yang berhubungan dengan menempatkannya berdekatan",
      "Beri jarak antar kelompok yang berbeda",
      "Berguna untuk layout data seperti tabel dan chart",
    ],
  },
  {
    slug: "law-of-similarity",
    number: 6,
    title: "Law of Similarity",
    subtitle:
      "Mata kita cenderung melihat suatu yang sama (warna, bentuk, dll) sebagai satu kesatuan, walaupun benda tersebut terpisah-pisah.",
    color: "hsl(328, 81%, 29%)",
    year: "",
    person: "Gestalt Psychology",
    personDescription:
      "Satu paket dengan Proximity, Continuity, Closure, dan Connectedness",
    blocks: [
      t("Ini aslinya satu paket juga sama yang lain, kalau kalian cari Gestalt of Psychology, isinya bakal ada lima teori di dalamnya: Proximity, Similarity, Continuity, Closure, dan Connectedness."),
      t("Contohnya, kita akan mudah melihat warna merah di gambar walaupun terpisahkan oleh jarak."),
      img("law-of-similarity", 1, "Titik merah di antara titik hitam", "Titik merah langsung terlihat sebagai satu kelompok walau terpisah.", 1054, 640),
      t("Efeknya di dunia UI dan UX, contohnya ketika mendesain sebuah link, umumnya dengan style berwarna biru dan bergaris bawah/underline. Melihat satu halaman sekilas kita tau style tersebut merupakan link, yang mempunyai fungsi yang sama."),
      img("law-of-similarity", 2, "Style link yang sama di satu halaman", "Style link yang sama langsung dikenali fungsinya di seluruh halaman.", 1054, 640),
      t("Hal ini yang jadi aturan juga desain itu perlu konsisten. Jadi walaupun elemen di desain tersebar di satu halaman. Dengan adanya kesamaan, user lebih mudah melihatnya dan mengetahui fungsinya."),
      t("Similarity ini ga ditentukan hanya dengan warna ya. Bisa juga dengan ukuran dan bentuk. Dan ga cuma link, tapi semua elemen desain. Seperti button, header, form input, dll."),
      img("law-of-similarity", 3, "Similarity lewat bentuk, ukuran, warna", "Gestalt: similarity bisa lewat bentuk (shape), ukuran (size), dan warna (color).", 1054, 1938),
    ],
    keyPoints: [
      "Elemen dengan fungsi sama harus punya tampilan yang sama",
      "Konsistensi visual membantu user memahami fungsi elemen",
      "Similarity bisa lewat warna, ukuran, atau bentuk",
    ],
  },
  {
    slug: "millers-law",
    number: 7,
    title: "Miller's Law",
    subtitle: "Rata-rata kita hanya bisa mengingat 7 (±2) item di kepala kita.",
    color: "hsl(0, 73%, 41%)",
    year: "1956",
    person: "George Miller",
    personDescription: "Psikolog Kognitif",
    blocks: [
      t("Kalau saya kasih nomor HP saya seperti di gambar. Nomor yang paling bawah — yang dikelompokkan — menurut Miller's Law akan lebih mudah untuk diingat."),
      img("millers-law", 1, "Nomor HP dikelompokkan", "Nomor yang dikelompokkan (0878 - 7086 - 70) lebih mudah diingat.", 1054, 640),
      t("Biasanya hukum ini dihubungkan juga dengan hukum yang lain, bisa dengan Hick's Law. Intinya membantu kita agar ingatan tidak terbebani oleh terlalu banyak informasi."),
      t("Perlu diingat, Miller's Law ini digunakan untuk work memory, yaitu ingatan yang berjalan."),
      t("Ada beberapa hal yang perlu diperhatikan untuk mengurangi beban informasi untuk user:"),
      t("Pertama, kurangi menggunakan element yang ga penting, karena user perlu memproses setiap informasi yang mereka dapatkan."),
      t("Kedua, kurangi pilihan untuk user, bisa kita gunakan Hick's Law juga untuk yang satu ini."),
      t("Dan, last but not least, berhati-hatilah menggunakan icon, kadang icon yang sulit dimengerti akan membuat user bingung."),
      t("Ada contohnya di Codecademy, bayangkan kita ikut coursenya sampai 9 step. Angka tersebut melebihi batas work memory kita. Dibagian akhir biasanya Codecademy akan memberikan rangkuman apa aja yang sudah pernah kita pelajari. Hal ini bagus untuk membantu user mengingat kembali dan mengurangi beban informasi yang perlu diingat."),
      img("millers-law", 2, "Course Codecademy 9 step", "Course di Codecademy dengan 9 step — melebihi batas work memory.", 1054, 640),
      img("millers-law", 3, "Rangkuman Codecademy", "Di akhir, Codecademy memberi rangkuman apa yang sudah dipelajari.", 1054, 640),
    ],
    keyPoints: [
      "Batasi jumlah item yang ditampilkan sekaligus (idealnya 5-9)",
      "Kurangi elemen yang tidak penting",
      "Gunakan icon yang mudah dimengerti",
    ],
  },
  {
    slug: "pareto-principle",
    number: 8,
    title: "Pareto Principle",
    subtitle:
      "Di banyak kejadian, sekitar 80% akibat/efek/kejadian berasal dari 20% sebab/asal mula/sumber.",
    color: "hsl(187, 100%, 28%)",
    year: "",
    person: "Vilfredo Pareto",
    personDescription: "Ahli Ekonomi dari Italia",
    blocks: [
      t("Prinsip ini lebih mengarah ke research dan decision making. Yang umumnya diketahui dengan prinsip 80/20."),
      t("Dasar pemikirannya muncul dari hasil beliau mengamati bahwa di Italia 80% dari kekayaan dan lahan di sana hanya dimiliki oleh 20% dari populasi."),
      t("Namun, prinsip ini selalu muncul diberbagai hasil research bukan hanya di bidang ekonomi saja. Tidak terkecuali dalam research UI dan UX juga."),
      t("Sebagai contoh: Microsoft menyadari dengan memperbaiki 20% bug teratas yang ada, 80% error dan crash yang ada dapat teratasi. Sebanyak 10% pengguna hp menggunakan 90% dari wireless bandwidth. Sebanyak 20% dari penduduk U.S, terdapat 68% orang yang membayar pajak."),
      t("Pareto Principle ini dapat membuka mata kita ketika melihat fitur pada sebuah aplikasi. Kasarnya 20% dari fitur yang dianggap penting dapat meningkatkan experience dari 80% pengguna."),
      t("Tapi jangan dipaksakan harus 20% dan 80% ya. Prinsip ini hanya memberikan gambaran bahwa jika kalian fokus pada fitur tertentu, dapat meningkatkan sebagian besar experience yang ada."),
      img("pareto-principle", 1, "Diagram 20% effort 80% results", "Prinsip 80/20 — 20% usaha menghasilkan 80% hasil.", 1054, 780),
    ],
    keyPoints: [
      "Fokus pada 20% fitur yang memberikan 80% dampak",
      "Angka 80/20 adalah gambaran, bukan aturan kaku",
      "Berguna untuk prioritisasi dalam product development",
    ],
  },
  {
    slug: "parkinsons-law",
    number: 9,
    title: "Parkinson's Law",
    subtitle:
      "Setiap pekerjaan akan mengisi seluruh waktu yang tersedia untuk menyelesaikan pekerjaan tersebut.",
    color: "hsl(15, 25%, 16%)",
    year: "1955",
    person: "Cyril Parkinson",
    personDescription: "Ahli Ekonomi",
    blocks: [
      t("Sebagai contoh, jika mengerjakan desain 1 halaman diberi waktu 10 jam. Maka pekerjaan tersebut cenderung akan menggunakan 10 jam hingga selesai, walaupun dalam kenyataannya dapat selesai dalam 1 jam. Dimana hal tersebut bisa dibilang tidak efisien."),
      t("Parkinson's Law ini yang akhirnya memunculkan ide bahwa batasan / constraint bisa jadi jalan terbaik untuk diterapkan."),
      t("Parkinson's Law ini bisa diterapkan dimanapun, meskipun lebih sering digunakan pada time management. Misalkan, mengerjakan tugas dimenit-menit terakhir akan membuat kita lebih produktif."),
      t("Contoh lain, punya lemari baju tapi masih banyak space kosong? Kita akan cenderung untuk mengisinya hingga terlihat penuh."),
      img("parkinsons-law", 1, "Lemari baju", "Lemari dengan ruang kosong cenderung kita isi sampai penuh.", 1261, 934),
      t("Parkinson's Law akan berguna saat digunakan dalam mendesain sesuatu yang berhadapan dengan constraint / batasan. Perlu diperhatikan, ga cuma batasan dalam waktu ya. Deadline itu constraint dari waktu, fit itu constraint dari space (ruang), dst."),
      t("Sebagai contoh, pernah pakai Waze? Waze didesain untuk cocok digunakan saat berkendara, dimana waktu dalam menggunakan aplikasi sangat menentukan keselamatan. Saat kita ingin melaporkan apa yang terjadi di jalan, Waze memberikan kita constraint waktu untuk menyelesaikan task tersebut. Di tombol \"later\" nya bakal ada garis yang mengindikasikan waktu. Dan kalau kita tidak mengklik apapun, maka screen tersebut akan close secara otomatis. Time saving dan membiarkan pengemudi fokus nyetir aja!"),
      img("parkinsons-law", 2, "Aplikasi Waze", "Waze — tombol \"later\" punya garis waktu; layar tertutup otomatis.", 1054, 804),
      t("Contoh lain pada tombol \"No thanks\" yang ada di gambar di bawah ini."),
      img("parkinsons-law", 3, "Tombol No thanks", "Contoh lain — tombol \"No thanks\".", 1054, 1054),
    ],
    keyPoints: [
      "Constraint/batasan bisa meningkatkan efisiensi",
      "Berlaku untuk waktu, ruang, dan konteks lainnya",
      "Desain dengan constraint membantu user fokus pada task utama",
    ],
  },
  {
    slug: "serial-position-effect",
    number: 10,
    title: "Serial Position Effect",
    subtitle:
      "User punya kecenderungan mengingat dengan sangat baik benda yang berada di awal dan di akhir di dalam suatu series.",
    color: "hsl(271, 81%, 26%)",
    year: "",
    person: "Herman Ebbinghaus",
    personDescription: "Psikolog dari Jerman",
    blocks: [
      t("Yang artinya user punya short-term memory yang lebih mudah digunakan untuk mengingat beberapa hal saja. Dan hal ini juga berefek pada benda-benda yang berada di antara awal dan akhir."),
      t("Kita cenderung lebih mudah mengingat nama anak pertama dan anak terakhir, kejadian di awal dan di akhir film, ataupun di awal dan di akhir sebuah cerita. Namun, sebaliknya, daya ingat kita mengenai apa yang ada di antara awal dan akhir menjadi lebih sulit."),
      t("Lalu, bagaimana penerapannya dalam desain? Ada 4 cara yang bisa kita lakukan:"),
      t("Pertama, taruh informasi yang relevan dengan task si user. Sediakan tools yang dapat membantu user untuk menuju goalsnya, membantunya lebih efisien dan akurat dalam menjalankan task. Seperti contoh dengan menaruh page number, grid, atau ruler."),
      img("serial-position-effect", 1, "Grid dan ruler pada desain", "Menaruh grid/ruler membantu user tetap fokus pada task.", 1054, 838),
      t("Kedua, taruh petunjuk di desain kalian. Bila memungkinkan bantu user agar dia ga perlu mengingat-ingat hal yang telah terjadi. Contohnya, di game balap biasa di sediakan peta jadi user tau habis jalan lewat mana."),
      img("serial-position-effect", 2, "Peta di game balap", "Game balap menyediakan peta agar user tak perlu mengingat jalan.", 1054, 646),
      t("Ketiga, bantu user untuk mengurangi informasi yang perlu diingat. Sesuai dengan Miller's Law juga, dimana kita hanya bisa menjaga beberapa item saja di ingatan kita. Hal ini sering dipakai di ecommerce, dimana kita perlu menyediakan apa yang user pernah lakukan. Seperti memperlihatkan filter yang dipilih atau sorting yang aktif yang mana."),
      img("serial-position-effect", 3, "Filter dan sorting aktif", "Menampilkan filter/sorting yang sedang aktif.", 1054, 742),
      t("Atau, seperti selalu memunculkan counter berapa jumlah item yang sudah ada di cart kita saat belanja online."),
      img("serial-position-effect", 4, "Counter keranjang belanja", "Counter jumlah item di keranjang belanja.", 1054, 748),
      t("Dan last but not least, buat informasi yang ada di awal dan di akhir lebih mencolok. Seperti yang bisa kita liat di website Apple di bawah ini."),
      img("serial-position-effect", 5, "Bagian awal website Apple", "Website Apple — bagian awal dibuat menonjol.", 1054, 652),
      t("Dimana informasi yang ada di bagian tengah tidak begitu tertarik untuk diingat."),
      img("serial-position-effect", 6, "Bagian tengah website Apple", "Bagian tengah kurang menonjol untuk diingat.", 1054, 724),
      t("Namun, di bagian akhir website memanfaatkan call to action untuk user."),
      img("serial-position-effect", 7, "Call to action di akhir website", "Bagian akhir memanfaatkan call to action.", 1054, 700),
    ],
    keyPoints: [
      "Taruh informasi penting di awal dan akhir",
      "Sediakan petunjuk agar user tidak perlu mengingat",
      "Kurangi beban informasi di bagian tengah",
    ],
  },
  {
    slug: "teslers-law",
    number: 11,
    title: "Tesler's Law",
    subtitle:
      "Dari setiap aplikasi, pasti ada sejumlah kompleksitas yang tidak bisa dikurangi atau dihilangkan.",
    color: "hsl(120, 56%, 23%)",
    year: "1980",
    person: "Larry Tesler",
    personDescription:
      "Dikenalkan saat bekerja di Xerox PARC. Dikenal juga sebagai The Law of Conservation of Complexity",
    blocks: [
      t("Jadi jangan salah, kompleksitas juga ga selamanya buruk. Karena bisa jadi, user memang membutuhkan kontrol untuk menjalankan pekerjaannya."),
      t("Seperti contohnya, cockpit pesawat tempat pilot mengemudi. Kontrol dengan banyak pilihan dan kompleksnya informasi diperlukan agar pesawat bisa dikendalikan dengan aman."),
      img("teslers-law", 1, "Cockpit pesawat", "Cockpit pesawat — kompleksitas kontrol memang dibutuhkan.", 1054, 798),
      t("Tapi, kita harus pertimbangkan ketika mendesain sebuah aplikasi: Device nya seperti apa, bentuk kegiatan yang dipakai, target usernya siapa, market si device, dan kesan si device."),
      t("Bandingkan saat menggunakan Microsoft Word dan Google Docs. Masing-masing memiliki kompleksitas yang berbeda. Tergantung dari sisi mana pertimbangan saat mendesain aplikasi tersebut."),
      img("teslers-law", 2, "Microsoft Word", "Microsoft Word — kompleksitas dan kontrol lebih banyak.", 1054, 664),
      img("teslers-law", 3, "Google Docs", "Google Docs — tampil lebih sederhana.", 1054, 744),
      t("Kompleksitas yang ada di aplikasi seperti Adobe After Effects mungkin sebagian besar memang dibutuhkan agar user dapat menjalankan pekerjaannya."),
      img("teslers-law", 4, "Adobe After Effects", "Adobe After Effects — kompleksitas yang sebagian besar memang diperlukan.", 1054, 648),
      t("Dan yang menjadi pertanyaannya adalah, siapa yang akan berhadapan dengan kompleksitasnya itu: si aplikasi atau si user."),
      t("Terkadang pertimbangan ini perlu dipikirkan oleh Product Manager saat membuat aplikasi, karena sisi manapun yang kita pilih, kompleksitas tidak akan berkurang, hanya berpindah dari aplikasi ke user atau sebaliknya."),
      t("Intinya, tidak peduli mana sisi yang kita pilih, kompleksitas tidak akan berkurang. Dan tugas kita sebagai designer, memastikan user dapat menggunakannya dengan mudah."),
    ],
    keyPoints: [
      "Kompleksitas tidak bisa dihilangkan, hanya dipindahkan",
      "Pertimbangkan device, user, dan konteks penggunaan",
      "Tugas designer: memastikan user tetap bisa menggunakannya dengan mudah",
    ],
  },
  {
    slug: "von-restorff-effect",
    number: 12,
    title: "Von Restorff Effect",
    subtitle:
      "Ketika dipaparkan sejumlah objek yang sama, salah satu objek yang berbeda dari yang lain cenderung lebih mudah diingat.",
    color: "hsl(162, 100%, 22%)",
    year: "1933",
    person: "Hedwig von Restorff",
    personDescription:
      "Psikiater asal Jerman. Dikenal juga sebagai The Isolation Effect",
    blocks: [
      t("Sebagai contohnya, ketika sulit mengingat hal yang penting yang ingin dipelajari, kita highlight kata-kata/kalimat penting. Hal ini mempermudah kita untuk mengingat hal tersebut."),
      img("von-restorff-effect", 1, "Highlight kalimat penting", "Meng-highlight kalimat penting agar lebih mudah diingat.", 1054, 1458),
      t("Tapi kalau yang dihighlight sebanyak itu, apakah masih termasuk Von Restorff Effect? Kalau semuanya di-highlight, itu sudah menjadi Law of Similarity."),
      img("von-restorff-effect", 2, "Terlalu banyak highlight", "Kalau semuanya di-highlight, efek isolasinya hilang (jadi Law of Similarity).", 1054, 778),
      t("Kalau di dunia UI dan UX, udah sering ini dipakai untuk memunculkan item yang perlu perhatian khusus, untuk memperlihatkan mana item yang active, untuk CTA button, atau untuk menunjukkan halaman yang active, carousel yang active, dll."),
      img("von-restorff-effect", 3, "Item yang perlu perhatian khusus", "Menonjolkan item yang perlu perhatian khusus.", 1054, 822),
      img("von-restorff-effect", 4, "Item aktif", "Menunjukkan item yang sedang aktif.", 1054, 708),
      img("von-restorff-effect", 5, "Tombol CTA", "Tombol call-to-action (CTA) yang menonjol.", 1054, 786),
      t("Tentunya Von Restorff Effect ini tidak hanya dibedakan oleh warna, bisa juga lewat ukuran, dan bentuk."),
    ],
    keyPoints: [
      "Gunakan perbedaan visual untuk menonjolkan elemen penting",
      "Jangan menonjolkan terlalu banyak elemen (kehilangan efek isolasi)",
      "Bisa lewat warna, ukuran, atau bentuk",
    ],
  },
  {
    slug: "zeigarnik-effect",
    number: 13,
    title: "Zeigarnik Effect",
    subtitle:
      "Pekerjaan yang belum selesai atau terinterupsi lebih mudah diingat daripada pekerjaan yang selesai.",
    color: "hsl(174, 100%, 24%)",
    year: "1920",
    person: "Bluma Wulfovna Zeigarnik",
    personDescription: "Psikiater dan Psikolog dari Rusia",
    blocks: [
      t("Fenomena ini ditemukan pertama kali ketika Ia menyadari bahwa pelayan di sebuah restauran mengingat dengan sangat baik pesanan yang belum dibayar. Namun, ketika semua pesanan sudah dibayar, pelayan tersebut malah tidak bisa mengingat kembali secara detil pesanannya."),
      t("Hal ini terjadi karena ketika kita mengerjakan sesuatu dan gagal untuk mencapainya, pikiran tentang pekerjaan tersebut akan selalu muncul di kepala kita meskipun kita sedang mengerjakan pekerjaan lain."),
      img("zeigarnik-effect", 1, "Game yang terinterupsi", "Pekerjaan yang terinterupsi (seperti game yang berhenti di tengah) lebih mudah diingat.", 1054, 840),
      t("Pernah nyoba main game, dan berhenti ditengah-tengah sebelum game nya selesai? Pikiran kita akan cenderung untuk mengingat game tersebut karena adanya interupsi."),
      t("Di dunia desain UI dan UX, biasa dipakai sebagai progress bar. Desain progress bar mempengaruhi user untuk menyelesaikan pekerjaannya. Meninggalkan progress bar setengah penuh membuat user mudah mengingat bahwa pekerjaannya belum selesai."),
      t("Zeigarnik Effect ini jadi salah satu metode yang bagus untuk mengakali user agar mengerjakan sesuatu yang seharusnya ga harus dikerjakan."),
      t("Contoh di LinkedIn yang menggunakan progress bar sehingga user merasa harus melengkapi profile nya."),
      img("zeigarnik-effect", 2, "Progress bar profil LinkedIn", "Progress bar profil LinkedIn mendorong user melengkapi profilnya.", 1054, 408),
    ],
    keyPoints: [
      "Progress bar mendorong user menyelesaikan task",
      "Tugas yang belum selesai lebih mudah diingat",
      "Efektif untuk onboarding dan profile completion",
    ],
  },
];

export function getLawBySlug(slug: string): Law | undefined {
  return laws.find((law) => law.slug === slug);
}
