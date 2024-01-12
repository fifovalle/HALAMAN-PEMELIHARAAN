let menghitungMundurTanggal = new Date("Januari 20, 2024 00:00:00").getTime();
let waktu = setInterval(function () {
  let sekarang = new Date().getTime();
  let sisaWaktu = menghitungMundurTanggal - sekarang;

  sisaWaktu = Math.max(0, sisaWaktu);

  let hari = Math.floor(sisaWaktu / (1000 * 60 * 60 * 24));
  let jam = Math.floor((sisaWaktu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let menit = Math.floor((sisaWaktu % (1000 * 60 * 60)) / (1000 * 60));
  let detik = Math.floor((sisaWaktu % (1000 * 60)) / 1000);

  document.getElementById("hari").innerHTML = hari;
  document.getElementById("jam").innerHTML = jam;
  document.getElementById("menit").innerHTML = menit;
  document.getElementById("detik").innerHTML = detik;

  if (sisaWaktu === 0) {
    clearInterval(waktu);
    document.getElementById("hari").innerHTML = "00";
    document.getElementById("jam").innerHTML = "00";
    document.getElementById("menit").innerHTML = "00";
    document.getElementById("detik").innerHTML = "00";
  }
}, 1000);
