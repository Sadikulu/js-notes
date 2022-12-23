const txtName = document.getElementById("txtName");
const txtPoint = document.getElementById("txtPoint");
const btnAdd = document.getElementById("btnAdd");
const deleteEl = document.getElementById("delete");
const updateEl = document.getElementById("update");
const tblStudentsTbody = document.querySelector("tbody");
let count1 = tblStudentsTbody.getElementsByTagName("tr");
let index = 0;
let toplam = 0;
let ortalama = 0;
window.addEventListener("DOMContentLoaded", () => {
  ekle();
});
const sil = (toplam, count1) => {
  document.querySelectorAll(".delete").forEach((button) => {
    console.log(button);
    button.onclick = (e) => {
      const trEl = e.target.closest("tr");
      const name = trEl.querySelector("td:nth-child(2)").innerText;
      const point = Number(trEl.querySelector("td:nth-child(3)").innerText);
      const result = confirm(`Are you sure to delete ${name} ?`);
      if (result) {
        trEl.remove();
        count1--;
        toplam -= point;
      }
      average(index, toplam);
    };
  });
};
const ekle = () => {
  if (!txtName.value || !isNaN(txtName.value)) {
    txtName.value = "";
    txtPoint.value = "";
    txtName.focus();
    return;
  }
  const newLi = document.createElement("tr");
  newLi.innerHTML = `
        <td>${count1.length + 1}</td>
        <td>${txtName.value}</td>
        <td>${txtPoint.value}</td>
        <td>
          <button class="update">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="delete">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </td>`;
  tblStudentsTbody.append(newLi);
  toplam += Number(txtPoint.value);
  /*  let yeni = [];
  yeni.push(index);
  let count = yeni[0];
  console.log(yeni[0]); */
  txtName.value = "";
  txtPoint.value = "";
  txtName.focus();
  sil(toplam, count1);
  average(count1, toplam);
};
btnAdd.addEventListener("click", ekle);

/* const sil = (toplam, count1) => {
  document.querySelectorAll(".delete").forEach((button) => {
    console.log(button);
    button.onclick = (e) => {
      const trEl = e.target.closest("tr");
      const name = trEl.querySelector("td:nth-child(2)").innerText;
      const point = Number(trEl.querySelector("td:nth-child(3)").innerText);
      const result = confirm(`Are you sure to delete ${name} ?`);
      if (result) {
        trEl.remove();
        count1--;
        toplam -= point;
      }
      average(index, toplam);
    };
  });
}; */

const average = (count1, toplam) => {
  ortalama = Math.floor(toplam / count1);
  const ort = document.querySelector(".cizgili tfoot td:nth-child(2)");
  ort.innerHTML = ortalama;
};
txtPoint.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    ekle();
  }
});
