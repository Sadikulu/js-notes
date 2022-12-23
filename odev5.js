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
  // const newLi = document.createElement("tr");
  newLi = `<tr>
        <td>${++index}</td>
        <td>${txtName.value}</td>
        <td>${txtPoint.value}</td>
        <td>
          <button id="update">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button id="delete">
            <i class="fa-solid fa-trash-can"></i>
          </button>
          <button id="tamam" style="display: none;">
            <i class="fa-solid fa-check"></i>
          </button>
          <button id="iptal" style="display: none;">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </td>
        </tr>`;

  tblStudentsTbody.innerHTML += newLi;
  // document.querySelector("#update").style.display = "inline-block";
  // document.querySelector("#delete").style.display = "inline-block";
  // document.querySelector("#tamam").style.display = "none";
  // document.querySelector("#iptal").style.display = "none";
  toplam += Number(txtPoint.value);
  /*  let yeni = [];
  yeni.push(index);
  let count = yeni[0];
  console.log(yeni[0]); */
  txtName.value = "";
  txtPoint.value = "";
  txtName.focus();
  sil(toplam, index);
  düzenle(toplam, index);
  average(index, toplam);
};
btnAdd.addEventListener("click", () => {
  ekle();
  // document.querySelector("#tamam").style.display = "none";
  // document.querySelector("#iptal").style.display = "none";
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
      /* document.querySelectorAll("#update").forEach((item) => {
        item.style.display = "none";
      });
      document.querySelectorAll("#delete").forEach((item) => {
        item.style.display = "none";
      });
      document.querySelectorAll("#tamam").forEach((item) => {
        item.style.display = "inline-block";
      });
      document.querySelectorAll("#iptal").forEach((item) => {
        item.style.display = "inline-block";
      }); */
      document.getElementById("update").style.display = "none";
      document.getElementById("delete").style.display = "none";
      document.getElementById("tamam").style.display = "inline";
      document.getElementById("iptal").style.display = "inline";
      const trEl = e.target.closest("tr");
      const name = trEl.querySelector("td:nth-child(2)").innerText;
      const point = Number(trEl.querySelector("td:nth-child(3)").innerText);

      average(index, toplam);
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
    // document.querySelector("#tamam").style.display = "none";
    // document.querySelector("#iptal").style.display = "none";
  }
});
