function loadMenu() {
    document.getElementById('content').innerHTML = "";
    const contentElement = document.getElementById("content");

    //create headline
    const headline = document.createElement("h2");
    const headText = document.createTextNode("Menu");
    headline.appendChild(headText);
    contentElement.appendChild(headline);

    //MENU

        //create menu div
        const menuContainer = document.createElement("div");
        menuContainer.id = "menuContainer";
        contentElement.appendChild(menuContainer);

        //FoodCard 1
        //div
        const foodCard1 = document.createElement("div");
        foodCard1.className = "foodCard";
        menuContainer.appendChild(foodCard1)

        //Image
        const foodImage = document.createElement("img");
        foodImage.setAttribute('src', './media/burger.gif')
        foodImage.setAttribute('width', '50%');
        //append image to page
        foodCard1.appendChild(foodImage);

        //Text
        const foodText = document.createElement("p");
        const foodTextNode = document.createTextNode("burger");
        foodText.appendChild(foodTextNode);
        //append text to page
        foodCard1.appendChild(foodText);


        //FoodCard 2
        //div
        const foodCard2 = document.createElement("div");
        foodCard2.className = "foodCard";
        menuContainer.appendChild(foodCard2)

        //Image
        const foodImage2 = document.createElement("img");
        foodImage2.setAttribute('src', './media/burger.gif')
        foodImage2.setAttribute('width', '50%');
        //append image to page
        foodCard2.appendChild(foodImage2);

        //Text
        const foodText2 = document.createElement("p");
        const foodTextNode2 = document.createTextNode("another burger");
        foodText2.appendChild(foodTextNode2);
        //append text to page
        foodCard2.appendChild(foodText2);

        //FoodCard 3
        //div
        const foodCard3 = document.createElement("div");
        foodCard3.className = "foodCard";
        menuContainer.appendChild(foodCard3)

        //Image
        const foodImage3 = document.createElement("img");
        foodImage3.setAttribute('src', './media/burger.gif')
        foodImage3.setAttribute('width', '50%');
        //append image to page
        foodCard3.appendChild(foodImage3);

        //Text
        const foodText3 = document.createElement("p");
        const foodTextNode3 = document.createTextNode("another burger");
        foodText3.appendChild(foodTextNode3);
        //append text to page
        foodCard3.appendChild(foodText3);

        //FoodCard 4
        //div
        const foodCard4 = document.createElement("div");
        foodCard4.className = "foodCard";
        menuContainer.appendChild(foodCard4)

        //Image
        const foodImage4 = document.createElement("img");
        foodImage4.setAttribute('src', './media/burger.gif')
        foodImage4.setAttribute('width', '50%');
        //append image to page
        foodCard4.appendChild(foodImage4);

        //Text
        const foodText4 = document.createElement("p");
        const foodTextNode4 = document.createTextNode("another burger");
        foodText4.appendChild(foodTextNode4);
        //append text to page
        foodCard4.appendChild(foodText4);

        //FoodCard 5
        //div
        const foodCard5 = document.createElement("div");
        foodCard5.className = "foodCard";
        menuContainer.appendChild(foodCard5)

        //Image
        const foodImage5 = document.createElement("img");
        foodImage5.setAttribute('src', './media/burger.gif')
        foodImage5.setAttribute('width', '50%');
        //append image to page
        foodCard5.appendChild(foodImage5);

        //Text
        const foodText5 = document.createElement("p");
        const foodTextNode5 = document.createTextNode("another burger");
        foodText5.appendChild(foodTextNode5);
        //append text to page
        foodCard5.appendChild(foodText5);

        //FoodCard 6
        //div
        const foodCard6 = document.createElement("div");
        foodCard6.className = "foodCard";
        menuContainer.appendChild(foodCard6)

        //Image
        const foodImage6 = document.createElement("img");
        foodImage6.setAttribute('src', './media/burger.gif')
        foodImage6.setAttribute('width', '50%');
        //append image to page
        foodCard6.appendChild(foodImage6);

        //Text
        const foodText6 = document.createElement("p");
        const foodTextNode6 = document.createTextNode("another burger");
        foodText6.appendChild(foodTextNode6);
        //append text to page
        foodCard6.appendChild(foodText6);

        //FoodCard 7
        //div
        const foodCard7 = document.createElement("div");
        foodCard7.className = "foodCard";
        menuContainer.appendChild(foodCard7)

        //Image
        const foodImage7 = document.createElement("img");
        foodImage7.setAttribute('src', './media/burger.gif')
        foodImage7.setAttribute('width', '50%');
        //append image to page
        foodCard7.appendChild(foodImage7);

        //Text
        const foodText7 = document.createElement("p");
        const foodTextNode7 = document.createTextNode("another burger");
        foodText7.appendChild(foodTextNode7);
        //append text to page
        foodCard7.appendChild(foodText7);

        //FoodCard 8
        //div
        const foodCard8 = document.createElement("div");
        foodCard8.className = "foodCard";
        menuContainer.appendChild(foodCard8)

        //Image
        const foodImage8 = document.createElement("img");
        foodImage8.setAttribute('src', './media/burger.gif')
        foodImage8.setAttribute('width', '50%');
        //append image to page
        foodCard8.appendChild(foodImage8);

        //Text
        const foodText8 = document.createElement("p");
        const foodTextNode8 = document.createTextNode("another burger");
        foodText8.appendChild(foodTextNode8);
        //append text to page
        foodCard8.appendChild(foodText8);

        
    }
    export default loadMenu;