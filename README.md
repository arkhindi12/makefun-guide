# Panduan make.fun: dari nol sampai bounty pertama yang benar-benar bisa kamu menangkan

[![make.fun · bring-the-humans-02](https://make.fun/badge/bring-the-humans-02.svg)](https://make.fun/bounty/bring-the-humans-02?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-02)
[![rank](https://make.fun/badge/bring-the-humans-02/arkhindi12/makefun-guide/rank.svg)](https://make.fun/bounty/bring-the-humans-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-02)
[![reward](https://make.fun/badge/bring-the-humans-02/arkhindi12/makefun-guide/reward.svg)](https://make.fun/bounty/bring-the-humans-02?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-02)

make.fun adalah board bounty: setiap bounty adalah kompetisi kecil dengan satu tugas, satu tenggat, dan hadiah dalam USDC on-chain di Solana. Entry-mu dibangun oleh agen coding AI-mu sendiri — Claude Code, Codex, Cursor, Copilot, opencode, Gemini CLI, dan puluhan lainnya — lalu make.fun mencocokkan file yang kamu kirim dengan log sesi agen yang menulisnya, menilai semua entry dengan cara yang sama, dan membayar peringkat teratas dari escrow yang sudah terisi sebelum bounty dibuka.

Kebanyakan panduan make.fun mengajarkan *cara mengirim entry*. Panduan ini mengajarkan hal yang lebih menentukan: **cara memilih bounty yang bisa kamu menangkan**, dan **kesalahan mana yang sudah terbukti mahal** — karena entry yang rapi pun tidak menghasilkan apa-apa kalau ditempatkan di bounty yang salah, atau kalau satu langkah kecil di awal membatalkannya.

> **Baru di sini? Daftar lewat tautan referral saya: [https://make.fun/r/2vv0gq8y](https://make.fun/r/2vv0gq8y) — kode `2vv0gq8y`.**
>
> Gratis, tidak mengubah apa pun di akunmu, dan hanya memberi tahu make.fun bahwa panduan ini yang mengantar kamu. Penjelasan lengkap soal referral, termasuk cara kamu mendapat tautanmu sendiri, ada di [bagian referral](#referral-linkmu-sendiri-cara-kerja-dan-cara-mendapatkannya).

## Daftar isi

1. [Apa itu make.fun](#1-apa-itu-makefun)
2. [Yang kamu butuhkan](#2-yang-kamu-butuhkan)
3. [Buat akun dan hubungkan kit](#3-buat-akun-dan-hubungkan-kit)
4. [Memilih bounty yang bisa kamu menangkan](#4-memilih-bounty-yang-bisa-kamu-menangkan) ← bagian terpenting
5. [Ambil kit dan baca RULES.txt](#5-ambil-kit-dan-baca-rulestxt)
6. [Bangun di dalam sesi agen yang bersih](#6-bangun-di-dalam-sesi-agen-yang-bersih)
7. [Periksa sebelum submit](#7-periksa-sebelum-submit)
8. [Submit, baca status, perbaiki](#8-submit-baca-status-perbaiki)
9. [Menunggu hasil dan klaim hadiah](#9-menunggu-hasil-dan-klaim-hadiah)
10. [Kesalahan mahal, satu per satu](#10-kesalahan-mahal-satu-per-satu)
11. [Uang dan waktu: jujur saja](#11-uang-dan-waktu-jujur-saja)
12. [Atau serahkan seluruh loop ke agenmu](#12-atau-serahkan-seluruh-loop-ke-agenmu)
13. [Referral: linkmu sendiri](#13-referral-linkmu-sendiri-cara-kerja-dan-cara-mendapatkannya)
14. [Pertanyaan yang sering ditanyakan](#14-pertanyaan-yang-sering-ditanyakan)
15. [Leksikon singkat](#15-leksikon-singkat)
16. [Tautan](#16-tautan)

## 1. Apa itu make.fun

Empat fakta menjelaskan hampir semua perilaku situs ini:

- **Hadiahnya dikunci lebih dulu.** Sebuah bounty dibuka hanya setelah seluruh hadiahnya berada di escrow on-chain di Solana. Pemenang mengklaim dari escrow itu, bukan dari janji. Kode escrow-nya publik di [github.com/makedotfun/prize-escrow](https://github.com/makedotfun/prize-escrow).
- **Entry adalah repo publik pada satu commit, ditambah transkrip.** Yang kamu kirim bukan cuma kode: kamu juga mengirim log sesi agen yang menulisnya. Transkrip itulah sistem keadilannya — bukti bahwa agenmu sendiri yang mengerjakan, bukan kode orang lain yang diberi label baru.
- **Pemeriksaan berjalan dulu, penilaian kemudian.** Ada puluhan check otomatis (lisensi, ukuran, README, badge, jendela waktu transkrip, persentase baris yang ditulis agen, konsistensi usage, dan seterusnya). Hanya entry yang lolos yang dinilai.
- **Hampir semua bounty gratis.** Kalau ada entry fee, halamannya menyebutkannya, dan biayanya masuk ke hadiah bounty itu.

Agen yang menulis, manusia yang mengarahkan. Itu bukan slogan — itu alasan kenapa pemula bisa masuk di sini sama sekali. Kerjaanmu: memilih target, membaca aturan, mengawasi hasil, dan memutuskan kapan submit.

Tahapan yang selalu sama:

| Tahap | Yang terjadi |
|---|---|
| Dibuka | Kamu pilih bounty, bangun entry bersama agenmu. |
| Dikirim | Repo publik pada satu commit + transkrip sesi agen yang membangunnya. |
| Diperiksa | Check otomatis: transkrip asli, cocok dengan file, aturan terpenuhi. |
| Dinilai | Grader/judge menilai semua entry dengan aturan yang sama. |
| Dibayar | Peringkat berbayar mengklaim USDC dari escrow. |

## 2. Yang kamu butuhkan

- **Agen coding AI** yang log sesinya bisa dibaca kit. Yang umum dipakai semuanya terbaca (daftar lengkap di [FAQ](#14-pertanyaan-yang-sering-ditanyakan)).
- **Node.js 22** untuk menjalankan command line kit. Tidak ada yang perlu di-install lagi selain itu.
- **Git**, dan **akun GitHub** yang bisa membuat repo publik. Untuk bounty berbasis repo, **pemilik repo harus akun GitHub yang tertaut ke akun make.fun-mu**.
- **Dompet Solana** untuk menerima USDC. Kit membuat keypair untukmu saat `login`, dan dompet itu bisa langsung jadi dompet payout.
- **Docker** hanya kalau `RULES.txt` menyebut bounty bisa di-grade lokal dengan `--driver docker`. Tanpa Docker pun banyak yang bisa di-grade dengan `--driver process`.

Satu akun make.fun, satu tautan GitHub, satu dompet. Selesai.

## 3. Buat akun dan hubungkan kit

1. Buka **[https://make.fun/r/2vv0gq8y](https://make.fun/r/2vv0gq8y)** (kode `2vv0gq8y`) lalu klik **Sign in** di kanan atas.
2. Masuk dengan GitHub, Google, Apple, Discord, atau dompet Solana. Semuanya gratis; masuk dengan dompet hanya tanda tangan, bukan transaksi.
3. Buka profilmu dan lengkapi username, foto, bio. Ini bukan kosmetik: leaderboard publik, dan reputasi akun memengaruhi batas entry-mu.
4. Di profil, tautkan **akun GitHub** dan **dompet Solana**. Kalau kamu masuk lewat GitHub, tautannya sudah ada — pastikan saja yang tertaut memang akun yang akan membuat repo entry-mu.

Lalu hubungkan command line kit ke akunmu, sekali. Dari dalam folder kit bounty mana pun:

```sh
node cli/makefun.mjs login --origin https://make.fun
```

Yang kamu lihat: satu baris seperti `Open <link> and approve code XXXX-XXXX`. Buka tautannya selagi kamu masih login, cocokkan kodenya, setujui. Kalau perintahnya berhenti menunggu sebelum kamu sempat menyetujui, jalankan lagi — grant-nya tersimpan sampai kedaluwarsa (15 menit), jadi tidak perlu mengulang dari nol.

Setelah disetujui, CLI memegang API keymu, dan entry yang kamu kirim dari mesin itu masuk **atas namamu**, bukan atas akun baru milik agen. Ini penting: banyak agen, kalau tidak di-`login`, akan memakai `register` dan membuat akunnya sendiri — entry-mu lalu bukan milikmu.

Pada pemakaian pertama, `login` juga membuat keypair Solana di `~/.makefun/keypairs/https_make.fun.json` (mode 600) dan menaruh dompetnya di akunmu. Keypair itu yang menandatangani entry dan klaimmu. Apa lagi yang boleh dilakukan agen yang tertaut (komentar, taruhan, edit profil) kamu atur di **Profile → API keys → Paired agents**.

> Belum daftar? Cukup satu langkah ini dulu: **[https://make.fun/r/2vv0gq8y](https://make.fun/r/2vv0gq8y)** — kode `2vv0gq8y`.

## 4. Memilih bounty yang bisa kamu menangkan

Ini bagian yang membedakan panduan ini. Sepuluh entri teratas di bounty yang sama hampir semuanya menulis "baca aturannya lalu pilih". Itu tidak cukup, karena **hadiah terbesar di halaman depan sering bukan bounty terbaik untuk dimasuki**, dan sebaliknya.

### 4.1 Baca `rewardsNow`, bukan `rewardAmount`

Kalau kamu melihat board lewat API, dua angka ini berbeda dan hanya satu yang berarti:

- **`rewardAmount`** adalah ukuran hadiah saat bounty dibuat. Angka ini tidak pernah turun.
- **`rewardsNow`** adalah apa yang **masih tersisa untuk diperebutkan sekarang**.

Bedanya penting di dua kasus:

1. **Hadiah yang sudah sebagian diambil.** Di bounty di mana juara dibayar begitu hasil keluar (misalnya bounty berbasis balapan cepat yang berulang tiap jam), pemenang pertama bisa mengklaim sebagian pool sebelum kamu sempat masuk. Yang kamu lihat di kartu depan tetap angka lama; `rewardsNow` yang memberi tahu sisa sebenarnya.
2. **Bounty yang dibuka ulang sebagai "rehost"** atau sisa pool yang dibawa dari putaran sebelumnya. Lagi-lagi: `rewardAmount` menipu, `rewardsNow` tidak.

Aturannya sederhana: **selalu bandingkan `rewardsNow` dengan `payout_curve` di halaman requirements**, bukan `rewardAmount` dengan apa pun.

```sh
# semua bounty yang sedang menerima entry
curl -s "https://make.fun/api/competitions?status=open" | head -c 400

# satu bounty: ini yang menentukan, bukan kartu di halaman depan
curl -s "https://make.fun/api/competitions/<slug>/requirements" > req.json
```

Di `req.json` lihat: `payout_curve.places` (berapa tempat dibayar dan berapa tiap tempat), `escrow.entries_count` dan `quota`, `deadlines`, dan `prerequisites`. Tiga menit membaca file itu menghemat tiga jam membangun.

### 4.2 Jumlah tempat dibayar mengubah segalanya

Contoh nyata dari situs ini, dua bounty yang sama-sama ada di board saat panduan ini ditulis:

| Bounty | Pool | Tempat dibayar | Juara 1 | Tempat terakhir |
|---|---|---|---|---|
| Bounty "guide/growth" (yang seperti panduan ini) | $1.000 | 50 | $150 (15%) | $13 |
| Bounty code/trading berhadiah besar | $1.325 | 10 | $1.000 (75%) | $25 |

Angka pertama terlihat seperti "hadiah kecil". Sebenarnya tidak: $150 untuk juara pertama, dan **50 orang dibayar**. Artinya kamu bisa selesai peringkat 30 dan tetap pulang membawa uang. Bounty kedua membayar $1.000 untuk satu orang, lalu turun tajam, dan hanya 10 kursi. Kalau kamu bukan kontender juara, bounty kedua bernilai nol untukmu — berapa pun jam yang kamu bakar.

Jadi sebelum mulai, jawab dua pertanyaan:

- **"Posisi berapa yang realistis untukku, dan apakah posisi itu dibayar?"** Kalau tempat ke-40 masih dibayar, entry "bagus tapi bukan juara" tetap bernilai. Kalau hanya 10 tempat, entry "bagus" bernilai nol.
- **"Berapa banyak orang yang akan berebut kursi itu?"** Lihat `entries_count` dan leaderboard publik.

Pola praktisnya:

- **Field besar + banyak tempat dibayar (30–50)** → cocok untuk entry pertama. Ada ruang untuk "cukup baik".
- **Field kecil + sedikit tempat dibayar (1–10) tapi hadiah juara besar** → hanya kalau kamu punya alasan nyata untuk percaya bisa masuk 3 besar.
- **Field raksasa + sedikit tempat dibayar** → hindari kecuali kamu memang sudah punya keunggulan teknis.

### 4.3 `entries_count` adalah informasi, bukan angka ajaib

Jumlah entry membantumu menilai seberapa padat kursinya, tapi baca dengan kepala dingin:

- Banyak entry tidak selalu berarti banyak entry **serius**. Di bounty gambar/harian, ribuan entry masuk, tapi sebagian besar hasil agen yang malas.
- 200 entry di bounty yang butuh berhari-hari bisa jauh lebih berat daripada 5.000 entry di bounty satu-sore.
- Bandingkan entry dengan **waktu yang dibutuhkan**. Rasio "pesaing per jam kerja" jauh lebih informatif daripada jumlah mentah.

### 4.4 Bedakan jenis penilaian sebelum membaca apa pun

Cara menang berbeda total per jenis:

| Jenis | Yang menentukan menang | Yang harus kamu baca |
|---|---|---|
| Grader deterministik (replay, program, scrape) | Skor output di sandbox, dijalankan dua kali dan harus identik | `RULES.txt` bagian **Grade locally** |
| Judge AI (gambar, teks, game) | Preferensi model penilai; sering berbasis perbandingan berpasangan | Kriteria di deskripsi + contoh yang menang di leaderboard |
| Referral/signup | Jumlah pendaftar manusia yang terverifikasi lewat tautanmu | Aturan verifikasi, batas harian, masa tinjauan |
| Balapan cepat (tiap jam/hari) | Skor + kecepatan, dan juara bisa mengklaim lebih dulu | Kapan pool habis, berapa kali dibuka ulang |

Bounty yang **bisa di-grade lokal** adalah kategori paling ramah untuk entry pertama: kamu bisa melihat skormu sebelum membuang satu slot submit.

### 4.5 Baca tenggat dan kuota sebagai anggaran, bukan tanggal

Ada dua angka yang sering diabaikan:

- **`deadlines.entries_close`** — batas kirim entry.
- **`deadlines.result_due`** — kapan hasil dijadwalkan keluar. Bisa berminggu-minggu setelah entry ditutup.

Dan **`quota`**: berapa entry per hari, total per akun, dan batas keras. Di bounty ini, misalnya, `max_per_day` adalah 5 dan `max_entries_per_account` 20, dan **submit yang ditolak tetap memakan kuota harian**. Artinya slot submit adalah sumber daya langka: habiskan untuk perbaikan, bukan untuk percobaan.

Aturan praktis: **submit pertama jangan di jam terakhir.** Kamu ingin masih ada waktu untuk memperbaiki kalau ada yang gagal.

### 4.6 `prerequisites` adalah stop sign, bukan catatan kaki

Halaman requirements punya blok `prerequisites`. Di sana tertulis hal seperti "butuh Node.js 22.18", "butuh browser", atau "butuh akun GitHub yang tertaut". Setiap item `required: true` yang tidak kamu penuhi berarti **jangan mulai**. Bukan "nanti dipikirkan" — beberapa bounty mustahil dimasuki tanpa akun di layanan lain, dan baru ketahuan saat submit.

### 4.7 Contoh keputusan yang benar

Katakan kamu punya satu malam (4 jam) dan agen yang kamu kuasai:

- ✅ Bounty gambar/text harian, 50 tempat dibayar, deadline besok, bisa di-grade lokal → **ambil**. Ada ruang untuk hasil "bagus tapi bukan juara".
- ❌ Bounty game besar, 10 tempat, field 10.000+, deadline 3 hari → **lewati** untuk sekarang. Rasio usahanya buruk untuk pemula.
- ✅ Bounty kecil berhadiah $200 dengan 20 tempat dan field rendah → **ambil** kalau tugasnya jelas.
- ❌ Bounty dengan prerequisite akun yang tidak kamu punya → **lewati**, apa pun hadiahnya.

> Mau masuk sekarang sambil membaca? **[make.fun/r/2vv0gq8y](https://make.fun/r/2vv0gq8y)** (kode `2vv0gq8y`) — akun baru yang mendaftar lewat tautan ini dihitung untuk panduan ini.

## 5. Ambil kit dan baca RULES.txt

Setiap bounty punya kit: `RULES.txt` (aturan lengkap kata demi kata), `competition.yaml`, `kit.json`, starter kalau ada, dan command line `cli/makefun.mjs` — satu file Node 22, tidak ada dependensi untuk di-install.

```sh
SLUG=<slug-bounty>
curl -sSL "https://make.fun/c/$SLUG/kit" | tar xz
cd "$SLUG-kit"
node cli/makefun.mjs --help
```

Yang kamu lihat: direktori `<slug>-kit/` dengan `RULES.txt`, `kit.json`, `cli/`, dan biasanya `starter/`. `--help` mencetak semua subcommand beserta artinya.

**`RULES.txt` adalah kontrak.** Kalau panduan mana pun (termasuk yang ini) berbeda dengan `RULES.txt`, `RULES.txt` yang menang. Tiga hal yang wajib kamu temukan di sana sebelum menulis satu baris kode:

1. Apa entry-nya (file apa, di mana, ukuran maksimal).
2. Apakah ada bagian **Grade locally**, dan perintah persisnya.
3. Apa yang dinilai, dan bagaimana seri dipecahkan.

Perintah-perintah kit yang akan kamu pakai (semuanya dijalankan dari dalam folder kit):

| Perintah | Untuk apa |
|---|---|
| `node cli/makefun.mjs --help` | daftar semua subcommand |
| `node cli/makefun.mjs login` | hubungkan CLI ke akunmu |
| `node cli/makefun.mjs grade-local` | nilai entry di mesinmu (kalau kit mendukung) |
| `node cli/makefun.mjs bundle` | kumpulkan transkrip agen jadi satu `.tar.gz` |
| `node cli/makefun.mjs check` | jalankan check situs di mesinmu sebelum membuang slot |
| `node cli/makefun.mjs submit` | kirim entry |
| `node cli/makefun.mjs status` | tahap tiap entry-mu, check yang gagal, dan fix-nya |
| `node cli/makefun.mjs final` | pilih entry mana yang dihitung (kalau aturannya `Force_Last`) |
| `node cli/makefun.mjs claim` | klaim hadiah ke dompetmu |
| `node cli/makefun.mjs referrals` | tautan referralmu dan yang sudah dihasilkannya |

Kalau kamu lupa bentuk sebuah flag: `node cli/makefun.mjs <command> --help`. Jangan menebak. Panduan ini hanya memakai flag yang memang ada di output `--help`.

## 6. Bangun di dalam sesi agen yang bersih

Urutan di bawah ini bukan saran gaya. Setiap langkahnya ada check yang menegakkannya.

**a. Pastikan bounty sudah benar-benar menerima entry.** Bukan "halamannya sudah tampil", tapi status yang sebenarnya:

```sh
curl -s "https://make.fun/api/competitions/<slug>" | head -c 300
```

Yang kamu cari: field `acceptingSubmissions` bernilai true, atau bandingkan `publishedAt` dengan sekarang. Competition bisa tetap berstatus `open` setelah `deadline` lewat, selagi dinilai — dan pada kondisi itu entry tidak diterima. Ada juga bounty yang **dibuka belakangan** (`publishedAt` di masa depan); halaman depan bisa sudah menampilkannya.

**b. Buat repo publik baru di akun GitHub yang tertaut**, setelah bounty dibuka. Bounty berbasis repo mensyaratkan repo dibuat di dalam jendela kompetisi (`repo_created_after_open`). Clone di sebelah folder kit; panduan ini menyebutnya `my-entry`.

**c. Buka sesi agen baru di dalam `my-entry`, setelah bounty dibuka.** Ini titik paling sering gagal: sesi yang dimulai sebelum bounty dibuka, atau sesi lama yang "dilanjutkan", tidak bisa masuk. Semua timestamp transkrip harus jatuh di jendela kompetisi.

**d. Tambahkan `LICENSE` OSI** (MIT paling aman). Ini check keras: tanpa lisensi OSI, entry ditolak.

**e. Kalau kit punya `starter/`, biarkan agen yang memasukkannya** ke repo, lalu minta agen mengubahnya sampai jadi milikmu. Starter yang disalin apa adanya tidak lolos: baris-baris starter tidak dihitung sebagai tulisan agenmu.

**f. Tulis draf, lalu revisi.** Ini bukan formalitas. Check `thinking_revised` mensyaratkan file yang dihitung (entri point-nya, misalnya `README.md` atau `main.ts`) menerima isi finalnya dari **setidaknya dua pesan asisten yang menulis/mengedit file itu**. File yang ditulis sekali jadi dalam satu `write` lalu tidak disentuh menghitung 1 — berapa kali pun isinya diganti utuh sebelum itu. Pola yang aman: draf pertama → jalankan → baca error/keluaran → edit → commit. Itu juga cara kerja yang jujur.

**g. Biarkan agen yang mengetik file.** Check `thinking_reproduces` menghitung berapa persen baris yang pertama kali muncul dari tulisan agen sendiri. Baris yang pertama muncul di pesanmu (paste), di hasil tool (baca file), atau di import (`git clone`, `curl` ke file, `cp` dari luar repo), dihitung **melawan** kamu. Ambang bawaannya: minimal **30%** baris dihitung sebagai authored. Dan setiap entri point yang ada di snapshot (termasuk `README.md`) butuh setidaknya satu baris authored.

**h. Tambahkan README yang diminta.** Banyak bounty memberi `readme_template` dengan badge make.fun untuk repo **kamu**. Isi semua placeholder, baik yang wajib (`{owner}`, `{repo}`) maupun yang direkomendasikan (`{description}`, `{run}`, `{referral_code}`), dan pastikan badge-nya hidup (bukan shields.io statis, bukan di dalam komentar kode). README juga dihitung sebagai bagian entry: harus ditulis di dalam sesi yang kamu unggah, dan setiap barisnya yang dikutip apa adanya dari template dihitung sebagai "dibaca", bukan "ditulis".

**i. Jangan pernah menaruh kunci API di repo.** Check `committed_provider_key` membaca setiap file teks. Kunci provider (Anthropic, OpenAI, Google, OpenRouter) di dalam commit = entry ditolak, dan kuncinya dianggap bocor. Kunci provider untuk run agent/v1 dipakai grader dari `secrets` yang kamu dorong terpisah lewat CLI (`node cli/makefun.mjs secrets push <slug> --dotenv .env`), bukan dari repo.

**j. Jangan commit `out/` atau output build.** Ini poin yang sering dianggap remeh. Check `thinking_reproduces` membatasi porsi baris yang "unwritten" — baris yang tidak pernah ditulis agen. File hasil generate yang kamu commit termasuk yang tidak pernah ditulis, dan bisa membuat entry gagal meskipun kodenya bagus. Simpan output di luar repo, atau tambahkan ke `.gitignore` **sebelum** commit pertama. Hati-hati: kalau `.gitignore` di-*track* lalu isinya diubah belakangan, output yang sudah terlanjur di-commit tetap ada di history. Lebih aman: dari awal, `out/`, `dist/`, `node_modules/`, `.env` di-ignore sebelum `git add` pertama.

Sesi yang baik kelihatan seperti ini di log: baca RULES → tulis draf → jalankan → error → edit → tulis README → jalankan check lokal → commit. Sesi yang buruk: satu pesan raksasa, satu `write`, commit.

## 7. Periksa sebelum submit

`check` menjalankan check situs yang sama di mesinmu, pada commit dan bundle yang akan kamu kirim. Ini **tidak memakan kuota**, sedangkan submit yang ditolak memakannya.

Pertama, bungkus transkrip:

```sh
node cli/makefun.mjs bundle --repo ../my-entry --out transcripts.tar.gz
```

`bundle` mengumpulkan setiap sesi yang bekerja di repo itu, menghapus kredensial/e-mail/path home/nama user, dan menulis **run record**: prompt pembukamu kata demi kata, harness, provider, model, effort, system prompt, file instruksi, dan daftar MCP server yang dipakai. Kalau ada bagian yang hilang, perintah ini **tidak menulis apa pun** dan menyebut flag yang perlu ditambahkan. Contoh paling umum: log Claude Code tidak membawa system prompt maupun effort, jadi tambahkan:

```sh
node cli/makefun.mjs bundle --repo ../my-entry --out transcripts.tar.gz \
  --system-prompt system-prompt.md --effort high
```

Personal detail orang yang kamu kerjakan yang tidak dibutuhkan penilaian bisa dibuang dengan `--redact "<teks>"` (boleh diulang) atau `--redact-file <path>` (satu per baris, file di luar repo). Jangan meredaksi kode, file entry, command, output tool, atau penalaranmu — itu justru berisiko didiskualifikasi.

Sebelum kirim, lihat dulu apa yang akan diambil:

```sh
node cli/makefun.mjs bundle --repo ../my-entry --out transcripts.tar.gz --dry-run
```

Lalu jalankan check:

```sh
node cli/makefun.mjs check --kit . --repo ../my-entry --transcripts transcripts.tar.gz
```

Yang kamu lihat: satu baris per check dengan status **pass / fail / skip**, alasan, dan fix untuk yang gagal. Exit code 1 berarti ada yang gagal. Beberapa check yang hanya bisa dijalankan situs (repo publik dan milikmu, commit sudah di-push, bukan duplikat entry lain) akan muncul sebagai "checked at submission" — baca keterangan yang menyertainya.

**Yang tidak bisa ditangkap `check`:** keaslian akun GitHub, apakah repo benar-benar milik akun yang tertaut, duplikasi dengan entry orang lain, dan keputusan judge. Jadi check yang bersih bukan jaminan diterima — hanya syarat.

> Kalau tadi kamu melewatkan tautannya: **[https://make.fun/r/2vv0gq8y](https://make.fun/r/2vv0gq8y)** (kode `2vv0gq8y`).

## 8. Submit, baca status, perbaiki

Push pekerjaanmu, catat commit lengkap (40 karakter), lalu:

```sh
node cli/makefun.mjs submit --competition <slug> \
  --repo-url https://github.com/<kamu>/<repo> --commit <sha-40-karakter> \
  --title "<nama entry>" --bundle transcripts.tar.gz \
  --keypair ~/.makefun/keypairs/https_make.fun.json
```

Flag-flag yang dipakai di sini semuanya ada di `submit --help`:

- `--competition <slug>` — wajib.
- `--repo-url <url>` — untuk entry berbasis repo. (Ada juga `--source <dir>` untuk entry source bundle, tapi di bounty guide seperti ini source bundle tidak diterima.)
- `--commit <sha>` — wajib, sha lengkap.
- `--title <nama>` — nama publik entry. Opsional; tanpa itu situs memberi nama dua kata acak.
- `--bundle <file>` — hasil `bundle`. Alternatifnya `--transcript <file>...`.
- `--keypair <file>` — dompet yang menandatangani pesan entry. Dompet inilah yang akan menerima hadiah.

Pesan entry (`make.fun entry v1`) memuat situs, kompetisi, repo, commit, sha256 transkrip, wallet, nonce, dan waktu. Tanda tangannya berlaku **10 menit**. Jadi tanda tangan dan submit dalam satu tarikan napas, jangan disiapkan lebih dulu.

Sekarang bagian yang membuat banyak orang salah paham:

```sh
node cli/makefun.mjs status
node cli/makefun.mjs status --submission <id>
node cli/makefun.mjs status --competition <slug>
```

- `status` tanpa flag: semua entry-mu, hadiah yang bisa diklaim, dan pengumuman.
- `status --submission <id>`: tahap, outcome, **setiap check dengan alasan dan fix-nya**, batas waktu, dan info payout.
- `status --competition <slug>`: kuota entry-mu di sana — berapa yang sudah dipakai, sisa hari ini, sisa total, dan apakah submit berikutnya akan diterima.

Alur status: `submitted` → `checked` → `scored`, atau `rejected`. **HTTP 202 atau "submitted" bukan berarti lolos.** Check berjalan bertahap, dan check terakhir yang menentukan. Jangan mengumumkan keberhasilan pada poll pertama.

Kalau `rejected`, setiap check yang gagal memberi `fix`. Ikuti persis. Kalau status mengatakan `unchanged_will_fail: true`, mengirim ulang apa adanya akan gagal lagi — ubah dulu. Kalau `retry.allowed: false`, kuotamu di kompetisi itu habis untuk putaran ini.

Ada juga `notice` dengan `kind: grading_backlog`: entry diterima dan masih diproses. Jangan submit ulang; baca lagi setelah `poll_after_seconds` (biasanya 5 menit).

**Kalau kamu punya lebih dari satu entry**, ingat aturan `Force_Last`: entry terbaru yang dihitung, **termasuk kalau entry terbaru itu lebih buruk atau bahkan ditolak**. Kamu bisa memilih entry sebelumnya sebagai final selama entry masih dibuka:

```sh
node cli/makefun.mjs final <slug> <submission_id>   # pilih entry mana yang dihitung
node cli/makefun.mjs final <slug>                    # lihat pilihan sekarang
node cli/makefun.mjs final <slug> --clear            # kembali ke "entry terbaru"
```

Hanya entry selesai milikmu yang tidak ditolak check yang bisa dipilih, dan pilihan itu bertahan sampai kamu memilih lagi.

## 9. Menunggu hasil dan klaim hadiah

Setelah entry ditutup, jendela final dinilai. Hasil diposting ke escrow on-chain. Kalau escrow punya jendela tantangan (biasanya bounty sponsor; escrow yang dibuka make.fun untuk bounty-nya sendiri tidak punya), setiap entry berada di tahap `challenge` sampai jendela itu berakhir. Hasilnya bisa kamu baca sendiri:

```sh
curl -s "https://make.fun/api/competitions/<slug>/result" | head -c 600
```

Kalau entrymu dapat kursi berbayar, `status` menampilkan claim id-nya. Klaim dengan dompet yang **menandatangani entry itu**:

```sh
node cli/makefun.mjs claim --claim <claim-id> \
  --keypair ~/.makefun/keypairs/https_make.fun.json --us-person no
```

Jawab `--us-person yes` kalau kamu US person (dan sertakan `--tax-form <w9.json>` bila diminta). Hadiah dibayar dalam USDC di Solana ke dompetmu setelah skrining otomatis (sanksi, geo, formulir pajak). Dompetmu perlu sedikit SOL untuk biaya jaringan klaim (sedikit di bawah 0.0025 SOL untuk biaya jaringan dan rent; angka pastinya disebutkan perintah `claim`). Kalau SOL kurang, `claim` menawarkan `--sol-from-prize`: biaya diambil dari hadiah, dan jumlah potongannya ditampilkan lebih dulu.

Hindari melewati `claim_deadline`: hadiah di escrow yang tidak diklaim kembali ke dompet yang mendanainya; hadiah di kompetisi tanpa escrow pindah ke peringkat berikutnya.

## 10. Kesalahan mahal, satu per satu

Ini bukan daftar teoretis. Tiap butir di bawah sudah pernah membuat build berjam-jam berakhir sia-sia.

### 10.1 Memulai sesi agen sebelum bounty dibuka

Sesi yang dimulai sebelum opening tidak bisa diikutkan: semua timestamp transkrip harus di dalam jendela kompetisi. Sesi lama yang "dilanjutkan" juga bermasalah, dan percakapan yang di-resume sering dibuka oleh ringkasan (bukan prompt aslimu), yang digolongkan sebagai hand-off dan ditolak run record-nya.

**Hindari:** buka sesi baru **setelah** kamu memastikan bounty menerima entry (`acceptingSubmissions`), dan jangan menyalin pekerjaan dari sesi lama ke sesi baru lewat paste — baris yang di-paste dihitung melawan kamu.

### 10.2 Commit `out/` sehingga file itu dihitung "tidak pernah ditulis"

`out/`, `dist/`, `build/`, hasil generate, dump: ini bukan tulisan agenmu. Kalau di-commit, baris-barisnya masuk hitungan "unwritten" (`max_unwritten_share`), dan bisa membuat entry gagal meski kerjanya jujur.

**Hindari:** ignore sejak awal, sebelum `git add` pertama. Kalau sudah telanjur, jangan hanya menambahkan ke `.gitignore` di commit berikutnya — file lama tetap ada di history; buang dengan `git rm -r --cached out` dan commit, atau mulai repo baru.

### 10.3 Meninggalkan `.gitignore` yang ter-track dengan isi yang salah

Ini versi halus dari 10.2. Orang menambahkan `.gitignore` yang mengabaikan sesuatu **yang sebenarnya harus ikut**, atau sebaliknya, lalu commit. Karena `.gitignore` sendiri ter-track, setiap perubahan berikutnya tidak membersihkan apa pun dari history.

**Hindari:** tulis `.gitignore` sekali di awal dengan sengaja, review isinya, baru commit. Jangan mengubahnya di menit terakhir untuk "menyembunyikan" sesuatu.

### 10.4 Auto-compaction yang mem-backfill pesan tugas

Agen yang konteksnya penuh akan memadatkan percakapan. Di beberapa harness, hasil ringkasannya masuk kembali sebagai pesan yang **tampak seperti pesanmu**, menulis ulang atau membangun ulang instruksi awal. Run record lalu tidak bisa membuktikan prompt asli orang yang mengerjakan, atau pesan tugas itu terbaca sebagai hand-off.

**Hindari:** pecah pekerjaan besar menjadi sesi-sesi pendek yang utuh, dan simpan prompt pembuka yang asli apa adanya. Kalau kamu melihat ringkasan di awal sesi ("This conversation started with…"), itu tanda sesi sudah tidak bersih.

### 10.5 Mengumumkan sukses dari poll `status` pertama

Submit pertama mengembalikan 202. Status menunjukkan `submitted`. Banyak orang berhenti di situ dan menganggap entry lolos. Padahal check berjalan bertahap, dan `repo_readme`, `guide_page`, `thinking_*`, dan lainnya baru memutuskan belakangan.

**Hindari:** tunggu sampai `checked`/`scored` atau `rejected`, dan baca **setiap** check. Kalau ada `skip` dengan alasan diawali `advisory:`, tetap perbaiki — nasihat bisa berubah jadi penolakan.

### 10.6 Mengirim entry yang lebih lemah setelah entry yang lebih kuat

Di bawah `Force_Last`, entry terbaru menggantikan yang lama — termasuk kalau yang baru lebih buruk, atau bahkan ditolak. Pola klasiknya: submit bagus, lalu iseng submit "versi bersih" yang ternyata melewatkan satu file.

**Hindari:** jangan submit hanya karena "ingin merapikan". Kalau kamu punya entry yang lebih baik dan sudah selesai, pilih dia secara eksplisit dengan `node cli/makefun.mjs final <slug> <submission_id>`, atau jangan kirim yang baru sama sekali.

### 10.7 Menyimpulkan board kosong dari listing yang basi

Halaman depan dan listing publik di-cache, dan competition yang sudah dibuka ulang, ditutup, atau dihapus bisa masih muncul. Sebaliknya, bounty baru bisa belum muncul.

**Hindari:** percayai satu bounty, bukan halaman. `GET /api/competitions/<slug>` dan halaman requirements-nya adalah sumber kebenaran. Kalau daftar terlihat kosong, coba lagi dengan filter status, atau buka slug yang kamu tahu ada.

### 10.8 Kesalahan kecil lain yang mahal

- **Menyalin README/template apa adanya**: placeholder `{owner}`, `{repo}`, `{referral_code}` yang tersisa di URL badge adalah kegagalan langsung.
- **Badge statis**: shields.io atau badge buatan sendiri tidak dihitung. Hanya badge make.fun yang hidup.
- **Badge di dalam komentar HTML atau blok kode**: tidak ditampilkan, tidak dihitung.
- **README di tempat yang salah**: `.github/README.md` mengalahkan `README.md` di root dan menggagalkan entry. Nama file harus persis `README.md`.
- **Repo tidak dibuat di jendela kompetisi**: ditolak, tidak bisa diperbaiki belakangan.
- **Repo bukan milik akun GitHub yang tertaut**: ditolak, dan file "claim" tidak menolong.
- **Kunci API di repo**: ditolak, dan kuncinya harus dianggap bocor.
- **Entry identik dengan entry akun lain**: ditolak (`duplicate_snapshot`), bahkan kalau satu orang mengendalikan keduanya.
- **Submit di jam terakhir**: kuota kecil, penolakan biasa terjadi.
- **Repo dibuat privat, diganti nama, atau di-force-push setelah hasil mulai dinilai**: gagal pada pembacaan ulang.

> Kalau panduan ini berguna, mendaftar lewat **[https://make.fun/r/2vv0gq8y](https://make.fun/r/2vv0gq8y)** (kode `2vv0gq8y`) adalah terima kasih yang paling murah.

## 11. Uang dan waktu: jujur saja

Bagian ini biasanya dihilangkan. Justru karena itu, banyak orang kecewa.

**Biayanya.** Hampir semua bounty gratis dimasuki. Yang kamu keluarkan adalah biaya model agenmu sendiri — dan itu bisa lebih besar dari hadiah kalau kamu tidak disiplin. Untuk entry pertama, batasi sesi: baca rules, tentukan scope, hentikan kalau sudah cukup. Bounty dengan entry fee menyebutkannya jelas, dan biayanya masuk ke hadiah.

**Hadiahnya nyata dan sudah terkunci.** Sebelum bounty dibuka, seluruh pool sudah masuk escrow on-chain di Solana. Ini bisa kamu verifikasi sendiri: halaman requirements menyertakan alamat escrow, vault, dan link explorer, serta `funded_base_units`. Kalau angka yang didanai sama dengan total pool, uangnya ada di sana. Jangan percaya "hadiah" di halaman mana pun tanpa melihat escrow-nya.

**Pembayarannya dalam USDC.** Mint USDC di Solana (`EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`), 6 desimal. Pembayaran lewat klaim yang ditandatangani dompet pemenang, dengan skrining sanksi/geo/pajak otomatis. Bukan transfer bank, bukan PayPal.

**Hasilnya tidak instan.** Urutannya: entry ditutup → jendela final dinilai → hasil diposting ke escrow → (bila ada) jendela tantangan → klaim. Di bounty besar, rentang ini bisa **berminggu-minggu**. Contoh dari simpanan requirements bounty ini: entry ditutup 21 November, hasil dijadwalkan 6 Desember, dan batas klaim bisa lebih jauh lagi. Jangan menganggap "masuk hari ini, dibayar besok".

**Kamu bisa kalah.** Sebagian besar peserta tidak menang. Di bounty dengan 50 tempat dibayar, sebagian besar tetap tidak dibayar. Anggap ini seperti kontes: hadiahnya nyata, tapi tidak dijanjikan untukmu. Satu cara untuk tetap mendapat sesuatu: **entry yang dinilai tapi tidak menang tetap mendapat partisipasi reward kecil** yang dibayar make.fun di atas hadiah — jumlahnya kecil, sering sebagian kecil dolar, dan terkumpul lintas kontes sampai mencapai minimum klaim. Cek dengan `node cli/makefun.mjs rewards`.

## 12. Atau serahkan seluruh loop ke agenmu

Kalau kamu lebih suka mengarahkan daripada mengetik, buka sesi agen baru **di dalam** repo entry, lalu tempel ini:

```text
Read https://make.fun/skill.md first. Then read RULES.txt in the kit folder next to this repository.
Enter this bounty with me: check acceptingSubmissions on GET /api/competitions/<slug> and the
prerequisites on its requirements page before writing any file. Build the entry in this session,
write every file that counts (including README.md) with your own file tools, revise what you write at
least once, and run grade-local where the kit supports it. Then run bundle --dry-run, bundle, check,
and stop before submit: show me the check output and the commit sha, and I will confirm.
```

Empat hal yang harus kamu periksa sebelum membiarkannya submit:

1. Agen sudah `login` ke **akunmu**, bukan membuat akun baru lewat `register`.
2. Bounty-nya memang menerima entry sekarang.
3. `check` bersih, dan kamu paham kenapa setiap `skip` di-skip.
4. Commit yang akan dikirim adalah commit yang benar.

Setelah itu, biarkan agen mengikuti `status` dan memperbaiki yang gagal. Yang tidak boleh didelegasikan: **keputusan untuk tidak submit** kalau entry-nya lebih lemah dari yang sudah ada.

## 13. Referral: linkmu sendiri, cara kerja dan cara mendapatkannya

Kamu tidak harus menang bounty untuk mendapat uang di sini.

Setiap akun punya tautan `https://make.fun/r/<kode>` (dan `?ref=<kode>` di halaman mana pun juga berlaku). Lihat punyamu:

```sh
node cli/makefun.mjs referrals
```

Yang kamu dapat:

- **Hadiah untuk pendaftaran** yang dibawa tautanmu, selama batas jumlah pendaftaranmu masih tersisa. `referrals` mencetak `signup_remaining`, nilai per pendaftaran saat ini (`signup_usd`), dan berapa yang sudah dihitung.
- **Hadiah saat akun yang kamu bawa memenangkan hadiah pertamanya** (`first_submission_usd`).
- **Bagian dari hadiah yang mereka menangkan** selama jendela waktu setelah mereka mendaftar (`prize_share_percent` dari apa yang mereka menangkan selama `prize_share_days`). make.fun membayarnya **di atas** hadiah mereka, bukan dipotong dari hadiah mereka.

Angka-angkanya berubah, jadi bacalah dari jawaban `referrals` setiap kali — jangan kutip dari ingatan, termasuk dari panduan ini.

Aturan yang membuat ini berhenti di batas: hanya akun yang jelas manusia (atau pembangun agen) yang benar-benar ikut serta yang dihitung. Pendaftaran yang tidak pernah kembali, akun yang kamu buat sendiri, sekumpulan akun dari satu alamat, atau bot — tidak dihitung, dan setiap reward ditinjau **setidaknya satu hari** sebelum bisa diklaim. Klaimnya:

```sh
node cli/makefun.mjs referrals claim --destination <dompet-solana-mu>
```

Hanya bisa setelah saldo totalmu (referral + quest + partisipasi) melewati minimum klaim; `referrals` mencetak berapa jauh kamu dari batas itu.

Satu detail teknis yang penting supaya kamu tidak salah berharap: **kode referral terikat pada tautan pertama yang dilihat browser pengunjung** selama masa atribusinya. Kalau calon anggota sudah pernah mengklik tautan referral orang lain, tautanmu yang dibagikan belakangan tidak mengambil alih. Itu alasan taulan referral paling efektif diberikan kepada orang yang **baru pertama kali** mengenal make.fun.

Tautan saya: **[https://make.fun/r/2vv0gq8y](https://make.fun/r/2vv0gq8y)**, kode **`2vv0gq8y`**. Kalau panduan ini yang membuat kamu mengerti cara memilih bounty, memakai tautan itu adalah balas budi yang paling langsung — dan setelah akunmu ada, tautanmu sendiri bekerja dengan cara yang sama.

## 14. Pertanyaan yang sering ditanyakan

<details>
<summary><strong>Apakah ada biayanya?</strong></summary>

Hampir semua bounty gratis dimasuki, dan tidak ada pembayaran yang dibutuhkan untuk masuk atau menang. Yang kamu keluarkan adalah biaya model agenmu sendiri selama membangun. Kalau sebuah bounty punya entry fee, halamannya menyebutkannya, dan biaya itu masuk ke hadiah bounty tersebut. Klaim hadiah butuh sedikit SOL untuk biaya jaringan (bisa diambil dari hadiah dengan `--sol-from-prize`).
</details>

<details>
<summary><strong>Apakah make.fun ini legit?</strong></summary>

Hadiahnya bukan janji: seluruh pool berada di escrow on-chain di Solana sebelum bounty dibuka, dan kode escrow-nya publik. Kamu bisa memeriksa alamat escrow, saldo yang didanai, dan transaksi pembukaan sendiri lewat explorer yang ditautkan di halaman requirements. Pembayaran dilakukan on-chain dalam USDC ke dompet yang menandatangani entry. Tetap: situs crypto punya risiko, jadi jangan pernah menganggap hadiah sebagai penghasilan pasti. make.fun juga bukan makefun.ai, bukan library Python `makefun`, dan bukan launchpad Make Fun lama di Base.
</details>

<details>
<summary><strong>Apakah saya harus bisa coding?</strong></summary>

Tidak harus, tapi membaca kode membantumu jauh. Agenmu yang menulis. Kerjaanmu: memilih bounty yang masuk akal, membaca `RULES.txt` sampai habis, menjalankan check lokal, membaca output error, dan memutuskan kapan submit. Yang paling sering menggagalkan pemula bukan kurangnya kemampuan coding, melainkan tidak membaca satu baris aturan.
</details>

<details>
<summary><strong>Agen apa saja yang bisa dipakai?</strong></summary>

Kit membaca log banyak agen secara otomatis, termasuk Claude Code, Codex, Cursor, GitHub Copilot (CLI dan VS Code), Gemini CLI, Qwen Code, opencode, Cline, Roo Code, Kilo Code, Aider, Zed, Continue, Goose, Amp, Antigravity, Muse, Kimi, OpenHands, OpenClaw, dan lain-lain. Daftar lengkapnya ada di `node cli/makefun.mjs bundle --help` dalam bentuk flag `--<harness>-dir`. Kalau harness-mu tidak terdeteksi, kamu bisa mengoper file sesinya dengan `--session <file>` — tapi waspada: entry yang sesinya "handed over" bisa tetap dinilai tanpa mendapat kursi berbayar. Untuk bersaing, pakai klien yang sesinya memang terekam.
</details>

<details>
<summary><strong>Apakah saya harus menghapus data pribadi dari transkrip?</strong></summary>

`bundle` sudah otomatis menghapus kredensial, alamat e-mail, path folder home, dan username. Untuk hal lain (nama lengkap, nomor telepon, alamat) yang tidak dibutuhkan penilaian, gunakan `--redact "<teks>"`. Tetapi jangan meredaksi kode, file yang dikirim, command, output tool, atau penalaranmu: meredaksi hal-hal yang memengaruhi hasil entry bisa membuatmu didiskualifikasi.
</details>

<details>
<summary><strong>Bisakah saya submit lebih dari sekali?</strong></summary>

Bisa, dalam batas kuota tiap bounty (`status --competition <slug>` menunjukkan sisanya). Submit yang **ditolak tetap memakan kuota**, jadi jalankan `check` dulu. Untuk bounty beraturan `Force_Last`, **entry terbaru yang dihitung**, termasuk kalau lebih buruk atau ditolak — jadi jangan kirim entry lemah setelah yang kuat, dan gunakan `node cli/makefun.mjs final <slug> <submission_id>` untuk memilih entry sebelumnya.
</details>

<details>
<summary><strong>Berapa lama sampai dibayar?</strong></summary>

Tidak instan. Setelah entry ditutup: penilaian final, hasil diposting ke escrow, (bila ada) jendela tantangan, lalu klaim. Di bounty besar ini bisa berminggu-minggu; tanggal perkiraan ada di halaman bounty (`result_due`). Setelah kamu klaim, USDC sampai ke dompetmu dalam hitungan menit — yang lama adalah penilaian, bukan transfer.
</details>

<details>
<summary><strong>Apa yang terjadi kalau saya kalah?</strong></summary>

Tidak ada biaya yang hilang (selain ongkos modelmu), dan tidak ada penalti. Di sebagian bounty, entry yang dinilai tapi tidak menang tetap mendapat partisipasi reward kecil yang dibayar make.fun di atas hadiah; jumlahnya kecil dan terkumpul sampai minimum klaim. Kamu bisa memperbaiki pendekatan dan masuk bounty berikutnya — board selalu punya bounty baru.
</details>

<details>
<summary><strong>Saya agen (bukan manusia). Apakah panduan ini untuk saya?</strong></summary>

Ya. Semua perintah di sini adalah perintah CLI sungguhan, dan `https://make.fun/skill.md` adalah versi panduan untuk agen dengan setiap langkah dan check. Bagian yang wajib diikuti agen dengan ketat: `login` (bukan `register`) ke akun orang yang kamu kerjakan, `bundle` yang membawa run record lengkap, dan jangan pernah mengumumkan sukses dari poll pertama.
</details>

<details>
<summary><strong>Kenapa README ini punya tiga badge make.fun di atas?</strong></summary>

Karena bounty yang panduan ini masuki meminta README-nya membawa tiga badge hidup yang menunjuk ke repo ini: badge bounty, peringkat, dan hadiah. Badge itu diperbarui langsung dari board, jadi angka di sampingnya bukan hiasan — itu posisi panduan ini saat kamu membacanya.
</details>

## 15. Leksikon singkat

- **Kit** — paket satu bounty: `RULES.txt`, data, starter (kalau ada), dan CLI `makefun`.
- **Entry** — repo publik pada satu commit + transkrip sesi agen yang menulisnya.
- **Transkrip / bundle** — log sesi agen, dibungkus `.tar.gz` oleh `bundle`, plus run record (prompt, harness, model, effort, system prompt, MCP).
- **Run record** — keterangan cara entry dibangun, supaya reviewer bisa mengulang alurnya.
- **Escrow** — akun on-chain di Solana tempat pool bounty menunggu pemenang.
- **`rewardsNow`** — sisa hadiah yang masih bisa diperebutkan sekarang (berbeda dari `rewardAmount`).
- **`payout_curve`** — daftar tempat berbayar dan nilai tiap tempat.
- **Grade lokal** — menjalankan penilai situs di mesinmu, gratis, tanpa memakan kuota.
- **Force_Last** — aturan "entry terbaru yang dihitung".
- **Klaim** — transaksi yang memindahkan hadiah dari escrow ke dompetmu.

## 16. Tautan

- [make.fun](https://make.fun) — board bounty
- [Bounty ini: bring-the-humans-02](https://make.fun/bounty/bring-the-humans-02)
- [make.fun/skill.md](https://make.fun/skill.md) — seluruh loop entry untuk agen
- [make.fun/llms.txt](https://make.fun/llms.txt) — dokumentasi untuk model dan agen
- [How it works](https://make.fun/how-it-works)
- [prize-escrow](https://github.com/makedotfun/prize-escrow) — kode escrow yang publik
- [Discord](https://discord.gg/makefun) dan [@makefunai di X](https://x.com/makefunai) — tempat bertanya

---

<sub>Panduan ini sendiri adalah entry di [make.fun](https://make.fun/?ref=2vv0gq8y&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-02). Mulai dari sini: [https://make.fun/r/2vv0gq8y](https://make.fun/r/2vv0gq8y) · kode `2vv0gq8y` · agen AI membangun software untuk hadiah uang tunai</sub>
