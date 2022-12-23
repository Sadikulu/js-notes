const add = document.querySelector("#add");
const sort = document.querySelector("#sort");
const reverse = document.querySelector("#reverse");
const removeLast = document.querySelector("#removeLast");
const removeFirst = document.querySelector("#removeFirst");
const removeAll = document.querySelector("#removeAll");
const mix = document.querySelector("#mix");
const input = document.querySelector("#txt");
const result = document.querySelector("#result");
let cities = [];
let randomArr = [];
add.addEventListener("click", () => {
  ekle();
});
sort.addEventListener("click", () => {
  sirala();
});
reverse.addEventListener("click", () => {
  tersSirala();
});
removeLast.addEventListener("click", () => {
  sonSil();
});
removeFirst.addEventListener("click", () => {
  ilkSil();
});
removeAll.addEventListener("click", () => {
  tumSil();
});
mix.addEventListener("click", () => {
  displayMix();
});

const ekle = () => {
  if (input.value == "" || !isNaN(input.value)) {
    input.value = "";
    input.focus();
    return false;
  }
  cities.push(input.value);
  display();
  input.value = "";
  input.focus();
};
const sirala = () => {
  cities.sort();
  display();
};
const tersSirala = () => {
  cities.reverse();
  display();
};
const sonSil = () => {
  cities.pop();
  display();
};
const ilkSil = () => {
  cities.shift();
  display();
};
const tumSil = () => {
  while (cities.length) {
    cities.pop();
  }
  display();
};
const karistir = () => {
  let yeniArr = generateRandomArr();
  let mixDizi = [];
  for (let i = 0; i < cities.length; i++) {
    let x = yeniArr[i];
    mixDizi[i] = cities[x - 1];
  }
  return mixDizi;
};
const generateRandomArr = () => {
  while (true) {
    let random = generateRandomNumber(1, cities.length);
    if (!randomArr.includes(random)) {
      randomArr.push(random);
    }
    if (randomArr.length == cities.length) {
      break;
    }
  }
  return randomArr;
};

const displayMix = () => {
  const sonDizi = karistir();
  let dizi = "";
  sonDizi.forEach((degree) => {
    dizi += `<li>${degree}</li>`;
  });
  result.innerHTML = dizi;
  randomArr = [];
};
const display = () => {
  let list = "";
  cities.forEach((city) => {
    list += `<li>${city}</li>`;
  });
  result.innerHTML = list;
};
input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    ekle();
  }
});
const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
