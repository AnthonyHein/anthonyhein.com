function showHideProj(projNum) {
    var id = "proj" + projNum;
    var x = document.getElementById(id);
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}