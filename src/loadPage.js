function loadHome() {
    document.getElementById('content').innerHTML = "";
    const contentElement = document.getElementById("content");

    //create div container 1
    const mydiv = document.createElement("div");
    mydiv.id = 'mydiv';
    contentElement.appendChild(mydiv);

    //create headline
    const headline = document.createElement("h2");
    const headText = document.createTextNode("Homepage");
    headline.appendChild(headText);
    //append headline to page
    mydiv.appendChild(headline);

    //create image
    const homepageImage = document.createElement("img");
    homepageImage.setAttribute('src', 'https://web.archive.org/web/20020327170629/http://geocities.com:80/osirian63/globe1.gif');
    // homepageImage.setAttribute('src', '../media/greyabstract.jpg')
    // homepageImage.setAttribute('width', '100%');
    //append image to page
    mydiv.appendChild(homepageImage);

    //create text
    const homeText = document.createElement("p");
    const homeTextNode = document.createTextNode("Webcore (or Old Web) is an aesthetic expresses nostalgia for Internet culture of the early 1990s to Late 2000s (spanning from roughly the release of the World Wide Web up until Flat Design and smartphones were popularized, so around ~2015).");
    homeText.appendChild(homeTextNode);
    //append text to page
    mydiv.appendChild(homeText);
}


export default loadHome;
