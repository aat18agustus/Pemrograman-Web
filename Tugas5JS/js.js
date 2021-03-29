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
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var jenis = document.getElementById("jenis").value;
    var pesan = document.getElementById("jenis").value;
    if (nama != "" && email != "" && jenis != "" && pesan != "") {
        alert('Terima Kasih !');
        return true;
    }
}

function Reset() {
    document.getElementById("form").reset();
}