function validasiEmail() {
    var rs = document.forms["formInput"]["email"].value;
    var atps = rs.indexOf("@");
    var dots = rs.lastIndexOf(".");
    if (atps < 1 || dots < atps + 2 || dots + 2 >= rs.length) {
        alert("Alamat email tidak valid.");
        return false;
    } else {
        alert("Alamat email valid.");
    }
}

function validasiForm() {
    var number = /^[0-9]+$/;
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var jenis = document.getElementById("jenis").value;
    var Nomer = document.getElementById("nomer").value;
    var alamat = document.getElementById("alamat").value;
    if (nama != "" && email != "" && jenis != "" && Nomer.match(number) && Nomer != "" && alamat != "") {
        alert('Terima Kasih !');
        return true;
    } else if (!Nomer.match(number)) {
        alert("Nomer Handphone Harus Angka !");
        return true;
    }
}

function Reset() {
    document.getElementById("form").reset();
}

/* fungsi untuk Side Bar*/
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}