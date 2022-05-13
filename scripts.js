var audio = new Audio('tarabana.mp3');
audio.play();
audio.volume="0.2";

function placeImage(x)
{
    var div = document.getElementById("div_picture_right");

    div.innerHTML = ""; // clear images

    for (counter=1;counter<=x;counter++) {
        var imagem=document.createElement("img");
        imagem.src="dacii/dacia"+counter+".jpg";
        imagem.style.width="130px";
        imagem.style.height="90px";
        imagem.style.border="1px solid white";
        div.appendChild(imagem);
    }
}

window.onload = function() {
    placeImage(100);
};
