function loadHome() {
    //clear current content
    document.getElementById('content').innerHTML = "";
    const contentElement = document.getElementById("content");

    //create div container 1
    const mydiv = document.createElement("div");
    mydiv.id = 'mydiv';
    contentElement.appendChild(mydiv);

    //create headline, append to div 1
    const headline = document.createElement("h2");
    const headText = document.createTextNode("Homepage");
    headline.appendChild(headText);
    mydiv.appendChild(headline);

    //create image, append to div 1
    const homepageImage = document.createElement("img");
    homepageImage.setAttribute('src', './media/globe1.gif');
    // homepageImage.setAttribute('src', '../media/greyabstract.jpg')
    // homepageImage.setAttribute('width', '100%');
    mydiv.appendChild(homepageImage);

    //create text, append to div 1
    const homeText = document.createElement("p");
    const homeTextNode = document.createTextNode("Webcore (or Old Web) is an aesthetic expresses nostalgia for Internet culture of the early 1990s to Late 2000s (spanning from roughly the release of the World Wide Web up until Flat Design and smartphones were popularized, so around ~2015).");
    homeText.appendChild(homeTextNode);
    mydiv.appendChild(homeText);

    //create ad banner, append to main content
    const ad = document.createElement('img');
    ad.setAttribute('src', "./media/simbanner.gif");
    ad.classList = "banner";
    contentElement.appendChild(ad);

    //create div container 2
    const mydiv2 = document.createElement("div");
    mydiv2.id = 'mydiv2';
    contentElement.appendChild(mydiv2);

    //create headline, append to div 2
    const header2 = document.createElement("h2");
    const headerText2 = document.createTextNode("Woo hoo!");
    header2.appendChild(headerText2);
    mydiv2.appendChild(header2);

    //create image, append to div 2
    const div2Img = document.createElement("img");
    div2Img.setAttribute('src', './media/gloves.gif');
    // homepageImage.setAttribute('src', '../media/greyabstract.jpg')
    // homepageImage.setAttribute('width', '100%');
    mydiv2.appendChild(div2Img);

    //create text, append to div 2
    const divText2 = document.createElement("p");
    const divTextNode2 = document.createTextNode("A yellow sea sponge named SpongeBob SquarePants, who enjoys being a cook at Krusty Krab, lives in the Pacific Ocean. He embarks on various adventures with his friends at Bikini Bottom.");
    divText2.appendChild(divTextNode2);
    mydiv2.appendChild(divText2);

    //create ad banner 2, append to main content
    const ad2 = document.createElement('img');
    ad2.setAttribute('src', "./media/sims2.gif");
    ad2.classList = "banner";
    contentElement.appendChild(ad2);
    
}


export default loadHome;
