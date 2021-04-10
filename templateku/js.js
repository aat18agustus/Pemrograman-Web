const txtElement = ['Mahasiswa UTM', 'NIM 190441100157', 'Jurusan Sistem Informasi'];
let count = 0;
let txtIndex = 0;
let curentTxt = '';
let words = '';

(function ngetik() {

    if (count == txtElement.length) {
        count = 0;
    }
    curentTxt = txtElement[count];

    words = curentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek').textContent = words;

    if (words.length == curentTxt.length) {
        count++;
        txtIndex = 0;
    }

    setTimeout(ngetik, 500)
})();

//dark/light//
document.body.style.backgroundColor = sessionStorage.getItem('bg');
document.body.style.color = sessionStorage.getItem('cc');

function theme() {
    if (sessionStorage.getItem('bg') === 'rgb(255, 255, 255)') {

        sessionStorage.setItem('bg', 'rgb(6, 23, 37)');
        sessionStorage.setItem('cc', '#777');

    } else if (sessionStorage.getItem('bg') == null || undefined) {
        sessionStorage.setItem('bg', 'rgb(6, 23, 37)');
        sessionStorage.setItem('cc', '#777');

    } else if (sessionStorage.getItem('bg') === 'rgb(6, 23, 37)') {
        sessionStorage.setItem('bg', 'rgb(255, 255, 255)');
        sessionStorage.setItem('cc', '#333');
    }

    document.body.style.backgroundColor = sessionStorage.getItem('bg');
    document.body.style.color = sessionStorage.getItem('cc');

}