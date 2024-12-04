function update(previewPic) {
    console.log("Mouseover event triggered");

    // Imprimer les informations de l'image sur la console
    console.log("Source:", previewPic.src);
    console.log("Alt Text:", previewPic.alt);

    // Sélectionner la div avec l'identifiant 'image'
    const imageDiv = document.getElementById('image');

    // Modifier l'arrière-plan avec l'image survolée
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;

    // Modifier le texte pour afficher la description de l'image
    imageDiv.textContent = previewPic.alt;
}

function cancel() {
    console.log("Mouseout event triggered");

    // Réinitialiser l'image de fond de la div
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "none";

    // Réinitialiser le texte de la div
    imageDiv.textContent = "Hover over an image below to display here";
}
