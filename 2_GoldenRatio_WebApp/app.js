function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createGRatioDivs(pDiv, flip) {
    var newDiv = document.createElement("div");
    var pStyle = window.getComputedStyle(pDiv);
    
    var newWidth, newHeight;
    if(flip) {
        newHeight = pStyle.height;
        newWidth = Math.floor(parseInt(newHeight)/1.62)+"px";
    }
    else {
        newWidth = pStyle.width;
        newHeight = Math.floor(parseInt(newWidth)/1.62)+"px";
    }
    newDiv.style.width = newWidth;
    newDiv.style.height = newHeight;
    newDiv.style.backgroundColor = getRandomColor();
    pDiv.appendChild(newDiv);
    return newDiv;
}

function main() {
    var pDiv = document.getElementById("parent");
    pDiv.style.backgroundColor = getRandomColor();
    var flip = true;
    for(var i = 0; i<6; i++) 
    {
        pDiv = createGRatioDivs(pDiv, flip);
        flip = !flip;
    }
}

main();