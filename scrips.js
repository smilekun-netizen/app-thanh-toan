function thanhToan() {
  const amount = document.getElementById("amount").value;
  const method = document.querySelector('input[name="method"]:checked').value;

  if (!amount || amount <= 0) {
    alert("Vui lòng nhập số tiền hợp lệ");
    return;
  }

  const result = `Bạn đã thanh toán ${amount} yên bằng ${method}`;
  alert(result);

  const history = document.getElementById("history");
  const item = document.createElement("li");
  item.textContent = result;
  history.appendChild(item);
}