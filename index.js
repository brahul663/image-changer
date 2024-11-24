let img = document.querySelector(".image");
let imageName = document.querySelector(".image-name");

let prevImage = img.src;
let prevImageName = imageName.textContent;

img.addEventListener("mouseover", ()=>{
    img.src = "https://cdn.pixabay.com/photo/2023/11/03/19/59/malaysian-tiger-8363779_640.jpg";
    imageName.textContent = "Tiger";
})

img.addEventListener("mouseleave", ()=>{
    img.src = prevImage;
    imageName.textContent = prevImageName;
})