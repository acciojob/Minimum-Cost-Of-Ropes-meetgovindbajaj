function calculateMinCost() {
  let arr = document
    .getElementById("rope-lengths")
    .value.split(",")
    .map((val) => parseInt(val));
  let ans = 0;
  while (arr.length > 1) {
    arr.sort((a, b) => a - b);
    ans += arr[0] + arr[1];
    arr[1] += arr[0];
    arr.shift();
  }
  document.getElementById("result").innerText = ans;
}
