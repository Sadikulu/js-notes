const txtName = document.getElementById("txtName");
const txtPoint = document.getElementById("txtPoint");
const btnAdd = document.getElementById("btnAdd");
const deleteEl = document.querySelectorAll("#delete");
const updateEl = document.querySelectorAll("#update");
const tamamEl = document.querySelectorAll("#tamam");
const iptalEl = document.querySelectorAll("#iptal");
const tblStudentsTbody = document.querySelector("tbody");
// let count1 = tblStudentsTbody.getElementsByTagName("tr");
let index = 0;
let toplam = 0;
let ortalama = 0;
window.addEventListener("DOMContentLoaded", () => {
  ekle();
});
// const indexAlma = () => {
//   index++;
// };
const ekle = () => {
  if (!txtName.value || !isNaN(txtName.value)) {
    txtName.value = "";
    txtPoint.value = "";
    txtName.focus();
    return;
  }
  const newLi = document.createElement("tr");
  newLi.innerHTML = `<td>${++index}</td>
        <td>${txtName.value}</td>
        <td>${txtPoint.value}</td>
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
  toplam += Number(txtPoint.value);
  txtName.value = "";
  txtPoint.value = "";
  txtName.focus();
  sil(toplam, index);
  iptal(txtName.value, txtPoint.value);
  düzenle(toplam, index);
  tamam(txtName, txtPoint);
  average(index, toplam);
};
btnAdd.addEventListener("click", () => {
  ekle();
});

const sil = (toplam, index) => {
  document.querySelectorAll("#delete").forEach((button) => {
    console.log(button);
    button.onclick = (e) => {
      const trEl = e.target.closest("tr");
      const name = trEl.querySelector("td:nth-child(2)").innerText;
      const point = Number(trEl.querySelector("td:nth-child(3)").innerText);
      const result = confirm(`Are you sure to delete ${name} ?`);
      if (result) {
        trEl.remove();
        index--;
        toplam -= point;
      }
      average(index, toplam);
    };
  });
};
const düzenle = (toplam, index) => {
  document.querySelectorAll("#update").forEach((button) => {
    console.log(button);
    button.onclick = (e) => {
      const trEl = e.target.closest("tr");
      trEl.querySelector(".s1").style.display = "none";
      trEl.querySelector(".s2").style.display = "inline-block";
      const name = trEl.querySelector("td:nth-child(2)");
      const point = trEl.querySelector("td:nth-child(3)");
      /* const nameT = trEl.querySelector("td:nth-child(2)");
      const pointT = trEl.querySelector("td:nth-child(3)"); */
      const nameEl = trEl.querySelector("td:nth-child(2)").innerText;
      const pointEl = trEl.querySelector("td:nth-child(3)").innerText;
      name.innerHTML = `<input type="text" id="name" placeholder=${name.innerText} />`;
      point.innerHTML = `<input type="number" id="point" placeholder=${point.innerText} />`;
      const nameT = document.querySelector("#name");
      const pointT = document.querySelector("#point");
      iptal(nameEl, pointEl);
      tamam(nameT, pointT);
      average(index, toplam);
    };
  });
};
const iptal = (txtName, txtPoint) => {
  document.querySelectorAll("#iptal").forEach((button) => {
    console.log(button);
    button.onclick = (e) => {
      const trEl = e.target.closest("tr");
      trEl.querySelector(".s2").style.display = "none";
      trEl.querySelector(".s1").style.display = "inline-block";
      const name = trEl.querySelector("td:nth-child(2)");
      const point = trEl.querySelector("td:nth-child(3)");
      name.innerHTML = `<td>${txtName}</td>`;
      point.innerHTML = `<td>${txtPoint}</td>`;
      average(index, toplam);
    };
  });
};
const tamam = (nameT, pointT) => {
  document.querySelectorAll("#tamam").forEach((button) => {
    console.log(button);
    button.onclick = (e) => {
      const trEl = e.target.closest("tr");
      trEl.querySelector(".s2").style.display = "none";
      trEl.querySelector(".s1").style.display = "inline-block";
      const name = trEl.querySelector("td:nth-child(2)");
      const point = trEl.querySelector("td:nth-child(3)");
      name.innerHTML = nameT.innerText;
      point.innerHTML = pointT.innerText;
      average(index, toplam);
    };
  });
};
tamam();
/* let mode = true;
document.querySelector("#btn").addEventListener("click", () => {
  if (mode) {
  } else {
  }
  mode = !mode;
}); */
const average = (index, toplam) => {
  ortalama = Math.floor(toplam / index);
  const ort = document.querySelector(".cizgili tfoot td:nth-child(2)");
  ort.innerHTML = ortalama;
};
txtPoint.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    ekle();
    tamam();
  }
});
