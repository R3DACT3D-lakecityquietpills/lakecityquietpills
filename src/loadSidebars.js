
function loadSidebars() {
    const leftSidebarElement = document.getElementById("leftSidebar");

    //create image
    const leftSidebarImage = document.createElement("img");
    leftSidebarImage.setAttribute('src', 'https://web.archive.org/web/20090830071427/http://geocities.com/dreamingbones/wizard.gif')
    // leftSidebarImage.setAttribute('width', '10%');
    //append image to page
    leftSidebarElement.appendChild(leftSidebarImage);

    const rightSidebarElement = document.getElementById("rightSidebar");

    //create image
    const rightSidebarImage = document.createElement("img");
    rightSidebarImage.setAttribute('src', 'https://web.archive.org/web/20090830071427/http://geocities.com/dreamingbones/wizard.gif')
    // leftSidebarImage.setAttribute('width', '10%');
    //append image to page
    rightSidebarElement.appendChild(rightSidebarImage);
}

export default loadSidebars;

