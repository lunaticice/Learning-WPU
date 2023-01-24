// Inisialisasi tempat duduk penumpang
let penumpang = [];

let tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array
  } else {
    // telusuri seluruh kursi dari awal
    for (let i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
      }
      // jika ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        console.log(namaPenumpang + ' sudah ada di dalam angkot.');
      }
      // jika seluruh kursi terisi
      else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
      }
    }
  }
  return penumpang;
};

let hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log('Angkot masih kosong.');
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
      } else if (i == penumpang.length - 1) {
        console.log(namaPenumpang + ' tidak ada di dalam angkot.');
      }
    }
  }

  return penumpang;
};
