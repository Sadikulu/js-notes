const txtName = document.getElementById("txtName");
const txtPoint = document.getElementById("txtPoint");
const btnAdd = document.getElementById("btnAdd");
const deleteEl = document.querySelectorAll("#delete");
const updateEl = document.querySelectorAll("#update");
const tamamEl = document.querySelectorAll("#tamam");
const iptalEl = document.querySelectorAll("#iptal");
const tblStudentsTbody = document.querySelector("tbody");
// let index = 0;
let toplam = 0;
let ortalama = 0;
let sayi = 1;

window.addEventListener("DOMContentLoaded", () => {
  ekle();
});

const indexAlma = () => {
  const indEl = document.querySelectorAll(".ind");
  indEl.forEach((item, index) => {
    if (item) {
      item.innerHTML = `${++index}`;
      sayi = index;
    }
  });
  return sayi;
};

const veriDuzenle = (numaralar, isimler, puanlari) => {
  const isimEl = document.querySelectorAll(".isim");
  const tplmEl = document.querySelectorAll(".tplm");
  const numEl = numaralar - 1;

  isimEl.forEach((item, index) => {
    if (index == numEl) {
      item.innerHTML = `<td>${isimler}</td>`;
    }
  });

  tplmEl.forEach((item, index) => {
    if (index == numEl) {
      item.innerHTML = `<td>${puanlari}</td>`;
    }
  });
};

const toplamAlma = () => {
  const topEl = document.querySelectorAll(".tplm");
  let sum = 0;
  topEl.forEach((item, index) => {
    if (item) {
      sum += Number(item.innerHTML);
    }
  });
  return sum;
};

const ekle = () => {
  if (!txtName.value || !isNaN(txtName.value)) {
    txtName.value = "";
    txtPoint.value = "";
    txtName.focus();
    return;
  }
  const newLi = document.createElement("tr");
  newLi.innerHTML = `<td class="ind">${indexAlma()}</td>
        <td class="isim">${txtName.value}</td>
        <td class="tplm">${txtPoint.value}</td>
        <td>
        <span class="s1">
          <button id="update">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button id="delete">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </span>
        <span class="s2" style="display: none;">
          <button id="tamam">
            <i class="fa-solid fa-check"></i>
          </button>
          <button id="iptal">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </span>
        </td>`;

  tblStudentsTbody.append(newLi);
  // toplam += Number(txtPoint.value);
  txtName.value = "";
  txtPoint.value = "";
  txtName.focus();
  sil();
  düzenle();
  average(indexAlma(), toplamAlma());
};
btnAdd.addEventListener("click", () => {
  ekle();
});

const sil = () => {
  document.querySelectorAll("#delete").forEach((button) => {
    button.onclick = (e) => {
      const trEl = e.target.closest("tr");
      const name = trEl.querySelector("td:nth-child(2)").innerText;
      const result = confirm(`Are you sure to delete ${name} ?`);
      if (result) {
        trEl.remove();
      }
      average(indexAlma(), toplamAlma());
    };
  });
};

const düzenle = () => {
  document.querySelectorAll("#update").forEach((button) => {
    button.onclick = (e) => {
      const trEl = e.target.closest("tr");
      trEl.querySelector(".s1").style.display = "none";
      trEl.querySelector(".s2").style.display = "inline-block";
      const sSayi = trEl.querySelector("td:nth-child(1)").innerText;
      const name = trEl.querySelector("td:nth-child(2)");
      const point = trEl.querySelector("td:nth-child(3)");
      const nameEl = trEl.querySelector("td:nth-child(2)").innerText;
      const pointEl = trEl.querySelector("td:nth-child(3)").innerText;
      name.innerHTML = `<input class="ali" type="text" id="name" placeholder=${name.innerText} />`;
      point.innerHTML = `<input class="veli" type="number" id="point" placeholder=${point.innerText} />`;
      iptal(nameEl, pointEl);
      tamam(sSayi);
      // average(index, toplam);
    };
  });
};

const iptal = (nameEl, pointEl) => {
  document.querySelectorAll("#iptal").forEach((button) => {
    button.onclick = (e) => {
      const trEl = e.target.closest("tr");
      trEl.querySelector(".s2").style.display = "none";
      trEl.querySelector(".s1").style.display = "inline-block";
      const name = trEl.querySelector("td:nth-child(2)");
      const point = trEl.querySelector("td:nth-child(3)");
      name.innerHTML = `<td>${nameEl}</td>`;
      point.innerHTML = `<td>${pointEl}</td>`;
      // average(index, toplam);
    };
  });
};

const tamam = (numaralar) => {
  document.querySelectorAll("#tamam").forEach((button) => {
    button.onclick = (e) => {
      const aliEl = document.querySelector(".ali");
      const veliEl = document.querySelector(".veli");
      console.log(numaralar);
      console.log(aliEl.value);
      console.log(veliEl.value);
      veriDuzenle(numaralar, aliEl.value, veliEl.value);
      const trEl = e.target.closest("tr");
      trEl.querySelector(".s2").style.display = "none";
      trEl.querySelector(".s1").style.display = "inline-block";
      average(indexAlma(), toplamAlma());
    };
  });
};

const average = (index, toplam) => {
  ortalama = Math.floor(toplam / index);
  const ort = document.querySelector(".cizgili tfoot td:nth-child(2)");
  ort.innerHTML = ortalama;
};

txtPoint.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    ekle();
  }
});
