kotak(6);
function kotak(dimensi) {
  let hasil = "";
  for (let i = 0; i < dimensi; i++) {
    for (let j = 0; j < dimensi; j++) {
      hasil += "*";
    }
    hasil += "\n";
  }
  console.log(hasil);
}

segitiga(6);
function segitiga(dimensi) {
  let hasil = "";
  for (let i = 0; i < dimensi; i++) {
    for (let j = 0; j <= i; j++) {
      hasil += "*";
    }
    hasil += "\n";
  }
  console.log(hasil);
}

segitigaTerbalik(6);
function segitigaTerbalik(dimensi) {
  let hasil = "";
  for (let i = dimensi; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      hasil += "*";
    }
    hasil += "\n";
  }
  console.log(hasil);
}

selangSeling(6);
function selangSeling(dimensi) {
  let count = 0;
  let hasil = "";
  let x, y;
  for (x = 0; x < dimensi; x++) {
    for (y = 0; y < dimensi; y++) {
      count++;
      let countTemp = 0;
      for (let z = 1; z <= count; z++) {
        if (count % 2 == 0) {
          countTemp++;
        }
      }
      if (countTemp == 0) {
        hasil += "*";
      } else {
        hasil += "!";
      }
    }
    hasil += "\n";
  }
  console.log(hasil);
}

gambarPola(5);
function gambarPola(dimensi) {
  let count = 0;
  let hasil = "";
  let x, y;
  for (x = 0; x < dimensi; x++) {
    count++;
    let countTemp = 0;
    for (y = 0; y < dimensi; y++) {
      if (count % 2 == 0) {
        countTemp++;
      }
      for (let z = 0; z <= y; z++) {
        if (countTemp % 2 == z) {
          hasil += "!";
        } else {
          hasil += "*";
        }
      }
    }
    hasil += "\n";
  }
  console.log(hasil);
}
