function main() {
    let form = document.querySelector('form');
    let input = document.getElementById('input');

    form.onsubmit = function() {
        findASCII(input.value);
    }

    function findASCII(str) {
        var ascii = '';
        var len = str.length;
        for(var i=0; i<len; i++) {
            ascii += str[i].charCodeAt(0) + " ";
        }
        alert(ascii);
    }
}

window.addEventListener('DOMContentLoaded', main);