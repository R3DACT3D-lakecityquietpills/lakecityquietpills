function loadAbout() {
    //clear current content
    document.getElementById('content').innerHTML = "";
    const contentElement = document.getElementById("content");

    //create headline, append to div 1
    const headline = document.createElement("h2");
    const headText = document.createTextNode("About");
    headline.appendChild(headText);
    contentElement.appendChild(headline);

    //create div container 1
    const mydiv = document.createElement("div");
    mydiv.id = 'aboutDiv';
    contentElement.appendChild(mydiv);

    
    


    //create image, append to div 1
    const homepageImage = document.createElement("img");
    homepageImage.setAttribute('src', './media/book1.gif');
    homepageImage.classList = "homepageImg";
    // homepageImage.setAttribute('src', '../media/greyabstract.jpg')
    // homepageImage.setAttribute('width', '100%');
    mydiv.appendChild(homepageImage);

    //create text, append to div 1
    const homeText = document.createElement("p");
    const homeTextNode = document.createTextNode("Webcore (or Old Web) is an aesthetic expresses nostalgia for Internet culture of the early 1990s to Late 2000s (spanning from roughly the release of the World Wide Web up until Flat Design and smartphones were popularized, so around ~2015).");
    homeText.appendChild(homeTextNode);
    mydiv.appendChild(homeText);

    
}

export default loadAbout;