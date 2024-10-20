import "./styles.css";
import foodImage from "./food.png";
   
const image = document.createElement("img");
const image2 = document.createElement("img");
const image3 = document.createElement("img");
const header = document.querySelector("header");
const content = document.getElementById("content");
const text = document.createTextNode("This is just some random Text");
const text2 = document.createTextNode("This is just some more random Text");
const paragraph = document.createElement("p");
const buttonvalues  = ["Home","Menu","About"];
const subcontent = document.createElement("nav");
const view = document.createElement("div");
const view2 = document.createElement("div");
const view3 = document.createElement("div");
const menu = [
    { meal: "Meatloaf", description: "Classic comfort food that reminds you of home. Made with a special blend of ground beef, breadcrumbs, and seasonings, our meatloaf is moist, flavorful, and satisfying. Served with a side of creamy mashed potatoes and steamed vegetables, it's the perfect comfort meal for any occasion." },
    { meal: "Potato Salad", description: "Our potato salad is a crowd favorite. Made with fresh, locally sourced potatoes, crisp celery, tangy pickles, and a creamy dressing, it's the perfect side dish for any barbecue or picnic. Whether you're enjoying it at a family gathering or a summer cookout, our potato salad is sure to be a hit." },
    { meal: "Liver and Onions", description: "For the adventurous eaters, our liver and onions dish is a must-try. Tender slices of liver are sautéed with caramelized onions, creating a rich and savory flavor combination. Served with a side of buttery mashed potatoes and steamed vegetables, it's a hearty and satisfying meal that will leave you wanting more." },
    { meal: "Fried Chicken", description: "Our fried chicken is crispy, juicy, and full of flavor. Each piece is coated in a secret blend of herbs and spices, then fried to perfection. Served with a side of fluffy buttermilk biscuits and tangy coleslaw, it's a classic Southern dish that will satisfy your cravings." },
    { meal: "Beef Stew", description: "Warm up with a bowl of our hearty beef stew. Tender chunks of beef are simmered with carrots, potatoes, and onions in a rich and flavorful broth. Seasoned with aromatic herbs and spices, it's a comforting and satisfying meal that will keep you cozy on a cold winter's day." },
    { meal: "Spaghetti Bolognese", description: "Indulge in a plate of our delicious spaghetti bolognese. Our homemade bolognese sauce is made with a blend of ground beef, tomatoes, onions, garlic, and herbs, simmered to perfection. Tossed with al dente spaghetti and topped with grated Parmesan cheese, it's a classic Italian dish that will satisfy your pasta cravings." },
    { meal: "Grilled Salmon", description: "For a healthy and flavorful option, try our grilled salmon. Fresh salmon fillets are marinated in a zesty lemon and herb sauce, then grilled to perfection. Served with a side of roasted vegetables and a lemon wedge, it's a light and nutritious meal that's packed with omega-3 fatty acids." },
    { meal: "Vegetable Stir-Fry", description: "Enjoy a colorful and nutritious vegetable stir-fry. Fresh vegetables like bell peppers, broccoli, carrots, and snap peas are stir-fried in a savory sauce, creating a vibrant and flavorful dish. Served over steamed rice or noodles, it's a quick and easy meal that's perfect for busy weeknights." },
    { meal: "Chicken Caesar Salad", description: "For a lighter option, try our chicken caesar salad. Crisp romaine lettuce is tossed with grilled chicken, Parmesan cheese, and homemade caesar dressing. Topped with crunchy croutons, it's a refreshing and satisfying salad that's perfect for lunch or dinner." },
    { meal: "BBQ Ribs", description: "Satisfy your barbecue cravings with our tender and juicy BBQ ribs. Our ribs are slow-cooked to perfection, then slathered in a tangy and smoky BBQ sauce. Served with a side of cornbread and coleslaw, it's a finger-licking good meal that's perfect for summer cookouts." }
];
const homecontent = "Welcome to our restaurant! We offer a wide variety of delicious meals made with fresh, locally sourced ingredients. Whether you're in the mood for classic comfort food, healthy options, or international cuisine, we have something for everyone. Our menu features a range of appetizers, entrees, and desserts that are sure to satisfy your cravings. Come dine with us and experience the flavors of our kitchen!";
const aboutcontent = "Our restaurant has been serving the community for over 20 years. We take pride in offering high-quality meals made with fresh, locally sourced ingredients. Our chefs are passionate about creating delicious dishes that are sure to delight your taste buds. Whether you're dining in with us or ordering takeout, we strive to provide a memorable dining experience for all of our guests. Come visit us and taste the difference!";
const buttonlistener = document.getElementsByClassName("nav_button");
let page = "Home";
image.src = foodImage;
image2.src = "https://picsum.photos/400/400"
image3.src = "https://picsum.photos/401/401"

   


document.body.style.backgroundImage = `url(${foodImage})`;
document.body.style.backgroundSize = "cover";
header.appendChild(subcontent);


for (let i = 0; i < buttonvalues.length; i++) {
  const button = document.createElement("button");
  button.innerHTML = buttonvalues[i];
  subcontent.appendChild(button);
  button.classList.add("nav_button");
  button.id = buttonvalues[i];
}




for (let i = 0; i < buttonlistener.length; i++) {
  buttonlistener[i].addEventListener("click", function () {
    page = buttonlistener[i].id;
    console.log(page);
    displayPage(page);
  });
}

function displayPage(page) {
    content.innerHTML = "";
    view.textContent = "";

    if (page === "Home") {
    homePage();
    } else if (page === "Menu") {
      menuPage();
    } else if (page === "About") {
        aboutPage();
    }
}

function menuPage(){
    content.appendChild(view);
    for (let i = 0; i < menu.length; i++) {
      const menuitem = document.createElement("div");
      const menuitem2 = document.createElement("div");
      const menuitem3 = document.createElement("div");    
      menuitem2.innerHTML = menu[i].meal;
      menuitem3.innerHTML = menu[i].description;
      view.appendChild(menuitem);
      menuitem.appendChild(menuitem2);
      menuitem.appendChild(menuitem3);
      menuitem.classList = "menuitem";
      menuitem2.classList = "meal";
      menuitem3.classList = "price";
    }
    view.id = "menuview";
    view.classList = "view";
};

function homePage(){
    const content = document.getElementById("content");
    content.appendChild(view);
    view.id = "homeview";
    view.classList = "view";
    view.appendChild(view2);
    view.appendChild(paragraph);
    paragraph.id = "homeparagraph";
    paragraph.innerHTML = homecontent;
    view2.id = "homeimage";
    view2.appendChild(image2);
}

function aboutPage(){
    content.appendChild(view);
    view.id = "aboutview";
    view.classList = "view";
    view.appendChild(view3);
    view.appendChild(paragraph);
    paragraph.id = "aboutparagraph";
    paragraph.innerHTML = aboutcontent;
    view3.id = "aboutimage";
    view3.appendChild(image3);
}

displayPage(page);