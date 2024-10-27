function upDate(previewPic) {
    
    console.log("Événement upDate déclenché");
    console.log("Source de l'image :", previewPic.src);
    console.log("Texte alternatif :", previewPic.alt);

    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {

    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')"; 
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
