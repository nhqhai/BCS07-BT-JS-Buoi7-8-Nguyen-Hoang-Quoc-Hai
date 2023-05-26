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
// Nút bấm 1: Đếm các số dương
function cacSoDuong(){
    var soDuong = 0;
    for (var i = 0; i < arrSoNguyen.length; i++){
        if(arrSoNguyen[i] > 0)
        soDuong ++;
    }
    document.getElementById("hienThiCacSoDuong").innerHTML = soDuong;
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
    document.getElementById("hienThiTongSoDuong").innerHTML = cacSoDuong;
}
document.querySelector(".btn-danger").onclick = tongCacSoDuong;

// Nút bấm 3:
function soNhoNhat(){

}