// JavaScript code goes here
const sliderContainer = document.getElementById("slider-container");
const numberOfSlides = 4;

for (let i = 1; i <= numberOfSlides; i++) {
    const slideDiv = document.createElement("div");
    slideDiv.classList.add("slides-div", "slide-" + i);

    const img = document.createElement("img");
    img.src = `./assets/img${i}.jpg`;
    img.draggable = false;
    img.alt = "";
    img.classList.add("img");
    img.id = `img${i}`;

    const sliderButton = document.createElement("a");
    sliderButton.href = `#slider-one-span${i}`;
    sliderButton.draggable = false;
    sliderButton.classList.add("slider-button");
    sliderButton.id = `slider-button-${i}`;

    slideDiv.appendChild(img);
    slideDiv.appendChild(sliderButton);

    sliderContainer.appendChild(slideDiv);
}
