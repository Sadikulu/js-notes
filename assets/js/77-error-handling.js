document.querySelector("#frmLogin").addEventListener("submit", (e) => {
  e.preventDefault(); //submit butonu'nun formu submit etmesini engelledik
  const emailEl = document.getElementById("txtEmail");
  const passwordEl = document.getElementById("txtPassword");
  try {
    if (!isEmail(emailEl.value)) throw "Please enter a valid email";
    if (!passwordEl.value) throw "Please enter your password";
    e.target.submit();
  } catch (error) {
    alert(error);
  }
  alert("ok");
});
const isEmail = (email) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};
