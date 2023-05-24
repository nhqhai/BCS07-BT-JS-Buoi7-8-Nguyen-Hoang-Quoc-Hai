var arrSoNguyen = [];

function hienThiSoNguyen(){
    var soNguyen = document.getElementById("soNguyen").value;
    var arrSoNguyenTemp = arrSoNguyen.concat();
    arrSoNguyenTemp.push.apply(arrSoNguyenTemp, soNguyen.split(","));
    var hienThiMang ="";
    for (var i = 0; i < arrSoNguyenTemp.length; i++) {
        hienThiMang += arrSoNguyenTemp[i] + "<br>";
    }
    document.getElementById("hienThiMang").innerHTML = hienThiMang;
    arrSoNguyen = arrSoNguyenTemp;
}
document.querySelector(".btn-warning").onclick = hienThiSoNguyen;

// -------------------------------------------
// Tổng các số dương
function tongSoDuong(){
    var tongSoDuong = 0;
    for (var i = 0; i < arrSoNguyen.length; i++) {
        tongSoDuong += parseInt(arrSoNguyen[i]);
    }
    document.getElementById("hienThiTongSoDuong").innerHTML = tongSoDuong;
}
document.querySelector(".btn-success").onclick = tongSoDuong;

// -------------------------------------------
// Đếm các số dương
function demSoDuong(){

}