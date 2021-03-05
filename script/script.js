// Remove paperballs on click
const paperballs = document.querySelector(".paperballs");

const removeDOM = (element) => {
    element.remove();
};

// Generate paperballs over and over with setInterval() function
setInterval(() => {
    // generate random integer number between 1 and 5
    const fractionNumber = (Math.random()*4) + 1;
    const number = Math.floor(fractionNumber);

        // Elements
        const newBalls = document.createElement("img");
            // Attributes
            const src = document.createAttribute("src");
            src.value = '../img/paperBall.webp';

            const className = document.createAttribute("class");
            className.value = 'paperballs'

            const OnClick = document.createAttribute("onclick");
            OnClick.value = 'removeDOM(paperballs)';

            // add all the attributes to the tag
            newBalls.setAttributeNode(src);
            newBalls.setAttributeNode(className);
            newBalls.setAttributeNode(OnClick);

    // append the newBalls element to the create div
    const create = document.querySelector("#create").appendChild(newBalls);

}, 5000);
