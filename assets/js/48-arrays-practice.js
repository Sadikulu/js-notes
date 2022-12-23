document.querySelector("#btnSetPrices").addEventListener("click", () => {
  const arr = [45000, 20000, 4500, 1000];
  const prices = setPrices(arr, 10);
  document.querySelector("#result").innerHTML = prices;
});
const setPrices = (arr, rate) => {
  if (!arr || typeof arr !== "object" || arr.length <= 0) return false;
  rate = !rate || isNaN(rate) ? 0 : rate;
  for (let i = 0; i < arr.length; i++) {
    arr[i] += (arr[i] * rate) / 100;
  }
  return arr;
};
