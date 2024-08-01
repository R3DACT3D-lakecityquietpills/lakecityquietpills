function loadMenu() {
    document.getElementById('content').innerHTML = "";
    const contentElement = document.getElementById("content");

    //create headline
    const headline = document.createElement("h2");
    const headText = document.createTextNode("Menu");
    headline.appendChild(headText);
    //append headline to page
    contentElement.appendChild(headline);

    //create image
    const homepageImage = document.createElement("img");
    homepageImage.setAttribute('src', '../media/greyabstract.jpg')
    homepageImage.setAttribute('width', '50%');
    //append image to page
    contentElement.appendChild(homepageImage);

    //create text
    const homeText = document.createElement("p");
    const homeTextNode = document.createTextNode("sample text");
    homeText.appendChild(homeTextNode);
    //append text to page
    contentElement.appendChild(homeText);
}

export default loadMenu;