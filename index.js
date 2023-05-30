var arrSoNguyen = [];

function hienThiSoNguyen(){
    var soNguyen = document.getElementById("soNguyen").value;
    if (arrSoNguyen.indexOf(soNguyen) != -1) {
        alert("Số này có rồi nha thím, chọn số khác đi");
        return;
    }
    var arrSoNguyenTemp = arrSoNguyen.concat();
    arrSoNguyenTemp.push.apply(arrSoNguyenTemp, soNguyen.split(","));
    var hienThiMang ="";
    for (var i = 0; i < arrSoNguyenTemp.length; i++) {
        hienThiMang += arrSoNguyenTemp[i] + ", ";
    }
    document.getElementById("hienThiMang").innerHTML = hienThiMang;
    arrSoNguyen = arrSoNguyenTemp;
    document.getElementById("soNguyen").value = "";
}
document.getElementById("daySoNguyen").onclick = hienThiSoNguyen;

// Bonus

// -------------------------------------------
// Nút bấm 1: Đếm các số dương
function cacSoDuong(){
    var soDuong = [];
    for (var i = 0; i < arrSoNguyen.length; i++){
        if(arrSoNguyen[i] > 0)
        soDuong.push(arrSoNguyen[i]);
    }
    document.getElementById("hienThiCacSoDuong").innerHTML = "Các số dương gồm: " + soDuong + " ";
}
document.querySelector(".btn-success").onclick = cacSoDuong;

// -------------------------------------------
// Nút bấm 2: Tổng các số dương
function tongCacSoDuong(){
    var cacSoDuong = 0;
    for (var i = 0; i < arrSoNguyen.length; i++) {
        if(arrSoNguyen[i] > 0){
            cacSoDuong += parseInt(arrSoNguyen[i]);
        }
    }
    document.getElementById("hienThiTongSoDuong").innerHTML = "Tổng của các số dương là: " + cacSoDuong;
}
document.querySelector(".btn-danger").onclick = tongCacSoDuong;

// -------------------------------------------
// Nút bấm 3: Tìm số nhỏ nhất
function soNhoNhat(){
    var soNhoNhat = Math.min.apply(Math, arrSoNguyen);
    document.getElementById("hienThiSoNhoNhat").innerHTML = "Số nhỏ nhất là: " + soNhoNhat;
}
document.querySelector(".btn-dark").onclick = soNhoNhat;

// -------------------------------------------
// Nút bấm 4: Tìm số dương nhỏ nhất

function soDuongNhoNhat() {
    var arrSoDuong = [];
    for (var i = 0; i < arrSoNguyen.length; i++) {
      if (arrSoNguyen[i] > 0) {
        arrSoDuong.push(arrSoNguyen[i]);
      }
    }
    if (arrSoDuong.length == 0) {
      document.getElementById("hienThiSoDuongNhoNhat").innerHTML = "この配列には正の数がありません";
    } else {
      var soDuongNhoNhat = arrSoDuong[0];
      for (var j = 1; j < arrSoDuong.length; j++) {
        if (arrSoDuong[j] < soDuongNhoNhat) {
          soDuongNhoNhat = arrSoDuong[j];
        }
      }
      document.getElementById("hienThiSoDuongNhoNhat").innerHTML = "Số dương nhỏ nhất là: " + soDuongNhoNhat;
    }
}
document.querySelector(".btn-primary").onclick = soDuongNhoNhat;

// -------------------------------------------
// Nút bấm 5: Tìm số dương nhỏ nhất
function soChanCuoiMang() {
    var soChanCuoi = -1;
    for (var i = arrSoNguyen.length - 1; i >= 0; i--) {
      if (arrSoNguyen[i] % 2 == 0) {
        soChanCuoi = arrSoNguyen[i];
        break;
        }
    }
    document.getElementById("hienThiSoChanCuoiCung").innerHTML = "Số chẵn cuối là: " + soChanCuoi;
}
document.querySelector(".btn-secondary").onclick = soChanCuoiMang;

// -------------------------------------------
// Nút bấm 6: Đổi chỗ 2 giá trị trong mảng theo vị trí

function doiChoGiaTri() {
  var giaTri1 = document.getElementById("viTri1").value - 1;
  var giaTri2 = document.getElementById("viTri2").value - 1;
  var giaTriTrungGian = arrSoNguyen[giaTri1];
  arrSoNguyen[giaTri1] = arrSoNguyen[giaTri2];
  arrSoNguyen[giaTri2] = giaTriTrungGian;
  var viTri1 = giaTri1 + 1;
  var viTri2 = giaTri2 + 1;
  document.getElementById("hienThiDoiCho").innerHTML = "Vị trí mới của mảng là: " + arrSoNguyen + ". Giá trị tại vị trí " + viTri1 + " và vị trí " + viTri2 + " đã được hoán đổi.";
}
document.querySelector(".btn-info").onclick = doiChoGiaTri;

// -------------------------------------------
// Nút bấm 7: Sắp xếp mảng theo thứ tự tăng dần

function thuTuTangDan(){
  for (var i = 0; i < arrSoNguyen.length - 1; i++) {
    for (var j = i + 1; j < arrSoNguyen.length; j++) {
      if (arrSoNguyen[i] > arrSoNguyen[j]) {
        var soTrungGian = arrSoNguyen[i];
        arrSoNguyen[i] = arrSoNguyen[j];
        arrSoNguyen[j] = soTrungGian;
      }
    }
  }
  document.getElementById("hienThiSapXepTangDan").innerHTML = "Sắp xếp mảng theo thứ tự tăng dần: " + arrSoNguyen;
}
document.querySelector(".btn-light").onclick = thuTuTangDan;

// -------------------------------------------
// Nút bấm 8: Số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về -1

function soNguyenToDauTien(){
  function ktSoNguyenTo(n){
    if (n < 2) {
      return -1;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        return -1;
      }
    }
    return n;
  }
    var soNguyenTo = -1
    for (var i = 0; i < arrSoNguyen.length; i++) {
      var soHienTai = ktSoNguyenTo(arrSoNguyen[i]);
      if (soHienTai != -1) {
        soNguyenTo = soHienTai;
        break;
      }
    }
  document.getElementById("hienThiSonguyenToDauTien").innerHTML = "Số nguyên tố đầu tiên là: " + soNguyenTo;
}
document.querySelector(".btn-white").onclick = soNguyenToDauTien;

// -------------------------------------------
// Nút bấm 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên
var arrSoMoi = [];

function nhapThemSoMoi() {
  var nhapSoMoi = document.getElementById("nhapThemSo").value;
  arrSoMoi = nhapSoMoi.split(", ");
  for (var i = 0; i < arrSoMoi.length; i++) {
    var soMoi = parseInt(arrSoMoi[i]);
    arrSoNguyen.push(soMoi);
  }
  document.getElementById("hienThiSoNhapThem").innerHTML = arrSoNguyen;
}

document.getElementById("nhapThemDaySoMoi").onclick = nhapThemSoMoi;

function timSoNguyenTo() {
  var demSoNguyenTo = 0;
  function kiemTraSoNguyenTo(x) {
    if (x < 2) {
      return -1;
    }
    for (var i = 2; i <= Math.sqrt(x); i++) {
      if (x % i == 0) {
        return -1;
      }
    }
    return x;
  }
  for (var i = 0; i < arrSoMoi.length; i++) {
    if (kiemTraSoNguyenTo(parseInt(arrSoMoi[i])) != -1) {
      demSoNguyenTo++;
    }
  }
  document.getElementById("hienThiCacSoNguyen").innerHTML = demSoNguyenTo;
}

document.getElementById("soNguyenToNhapThem").onclick = timSoNguyenTo;

// -------------------------------------------
// Nút bấm 10: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn

function soSanhSo(){
  var soLuongSoDuong = 0;
  var soLuongSoAm = 0;
  var ketQuaSoSanh = "";
  for (var i = 0; i < arrSoNguyen.length; i++){
    if (arrSoNguyen[i] > 0){
      soLuongSoDuong++;
    } else if (arrSoNguyen[i] < 0){
      soLuongSoAm++;
    }
  }
  ketQuaSoSanh += "Số lượng số dương là: " + soLuongSoDuong + "<br>";
  ketQuaSoSanh += "Số lượng số âm là: " + soLuongSoAm + "<br>";
  if (soLuongSoDuong > soLuongSoAm) {
    ketQuaSoSanh += "Số dương nhiều hơn số âm.";
  } else if (soLuongSoDuong < soLuongSoAm) {
    ketQuaSoSanh += "Số âm nhiều hơn số dương.";
  } else {
    ketQuaSoSanh += "Số lượng số dương và số lượng số âm bằng nhau.";
  }

  document.getElementById("hienThiSoSanh").innerHTML = ketQuaSoSanh;
}
document.getElementById("soSanhSoAmDuong").onclick = soSanhSo;