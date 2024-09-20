console.log('==== Soal 2 ====')

function functionSoal1 () {
    for (let angka = 50; angka <= 100; angka += 5) {
       if (angka <= 60) {
        console.log(angka, 'KURANG')
       } else if (angka > 60 && angka <= 70) {
        console.log(angka, 'CUKUP')
       } else if (angka > 70 && angka <= 80) {
        console.log(angka, 'BAIK')
       } else if (angka > 80) {
        console.log(angka, "LUAR BIASA")
       }
    }
}

functionSoal1()

console.log('==== Soal 2 ====')

function functionSoal2(n) {
    let fibo = [0, 1]; 
  
    for (let i = 2; i < n; i++) {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
  
    return fibo;
}
  
let deretFibonacci = functionSoal2(20);
console.log(deretFibonacci.join(" "));

console.log('==== Soal 3 ====')

function functionSoal3(baris) {
    for (let i = 1; i <= baris; i++) {
      let pola = '';
      for (let j = 1; j <= i; j++) {
        pola += '*';
      }
      console.log(pola);
    }
}
  
functionSoal3(3);

console.log('==== Soal 4 ====')

const functionSoal4 = (value) => {
    const angka = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan"];
    const ribuan = Math.floor(value / 1000);
    const ratusan = Math.floor((value % 1000) / 100);
    const puluhan = Math.floor((value % 100) / 10);
    const satuan = value % 10;

    let result = '';

    if (ribuan > 1) {
        result += angka[ribuan] + ' ribu ';
    } else {
        result += "seribu "
    }

    if (ratusan > 0) {
        if (ratusan === 1){
            result += "seratus ";
        } else {
            result += angka[ratusan] + " ratus "
        }
    }

    if (puluhan > 1) {
        result += angka[puluhan] + " puluh ";
        if (satuan > 0) {
          result += angka[satuan];
        }
      } else if (puluhan === 1) {
        if (satuan === 0) {
          result += "sepuluh";
        } else if (satuan === 1) {
          result += "sebelas";
        } else {
          result += angka[satuan] + " belas";
        }
    } else if (satuan > 0) {
        result += angka[satuan];
    }
    
    console.log(result.trim())
}

functionSoal4(2020)