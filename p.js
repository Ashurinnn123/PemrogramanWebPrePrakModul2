document.getElementById("Jumlah").addEventListener("click", function () {
  var A1 = parseFloat(document.getElementById("B1").value);
  var A2 = parseFloat(document.getElementById("B2").value);

  var result = A1 + A2;
  alert("Hasil Penjumlahan = " + result);
});

document.getElementById("Clear").addEventListener("click", function () {
  document.getElementById("B1").value = "";
  document.getElementById("B2").value = "";
});
