//if else

const mood = "bagus";

  if(mood === "bagus"){
    console.log("Ngoding");
  }else{
    console.log("Valorant");
  }

//Nested if

const nilai = 20;

  if (nilai >= 80) {
    console.log("Gacor");
  } else if (nilai > 50) {
    console.log("Belajar lagi ya");
  } else if (nilai > 30) {
    console.log("Rungkad");
  } else {
    console.log("Nggak ngerti lagi");
  }

//switch case

const nilaiUjian = "A";

  switch (nilaiUjian) {
    case "A":
      console.log("Gacor");
      break;
    case "B":
      console.log("Boleh juga");
      break;
    case "C":
      console.log("Lumayan");
      break;
    case "D":
      console.log("Hadeuh");
      break;
    default:
      console.log("Sepertinya anda salah jurusan");
  }

//for statement

  for (let ulang = 1; ulang <= 10; ulang++) {
    console.log(`Perulangan ke-${ulang}`);
  }

//while

  let hitung = 1;
  while (hitung <= 10) {
    console.log(hitung);
    hitung++;
  }

//do while

  let counter = 1;
  do {
    console.log(`Hitungan ke ${counter}`);
    counter++;
  } while (counter <= 10);

//function

  function sayHello(firstName, lastName) {
    const say = `Hello ${firstName} ${lastName}`;
    return say;
  }

  const result = sayHello("M. Ari", "Prayitno");
  console.log(result);