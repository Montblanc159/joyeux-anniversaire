const imageContainer = document.getElementsByClassName("image-viewer")[0] as HTMLElement;

export function showImage(url: string) {
    imageContainer.style.backgroundImage = 'url(' + url + ')';
    imageContainer.style.display = "block"
}

imageContainer.addEventListener("click", () => {
    imageContainer.style.display = "none";
})