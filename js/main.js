//  home page

let main = document.createElement("main"),
    left = document.createElement("div"),
    div = document.createElement("div"),
    img = document.createElement("img");
span = document.createElement("span"),
    spanTextNode = document.createTextNode("Make Burger"),
    divTextNode = document.createTextNode("Make Your Burger");

// append elements ( home page)

main.append(left, img, span);
left.appendChild(div);
div.appendChild(divTextNode)
span.appendChild(spanTextNode);
document.body.appendChild(main);

// set Attributes ( home page)

img.setAttribute("src", "../images/main-img.png");
left.classList.add("left");

// style home page

function styleInject(cssText) {
    const head = document.head;
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(cssText));
    head.appendChild(style);
}
// insert the css styles

styleInject(`
  *{
    margin:0;
    padding:0;
  }
  main{
    width:100%;
    height:100vh;
    display:flex;
    justify-content:space-between;
  }
  .left{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .left > div{
    width:45%;
    height:auto;
    color: #1F2939;
    font-size: 72px;
    font-weight: 700;
    line-height: 80px;
  }
  img{
    width:45%;
    height:100%
  }
  span{
    position:absolute;
    top: 43%;
    left: 43%;
    border-radius: 90px;
    background: #5243C2;
    width: 180px;
    height: 180px;
    color: #FFF;
    text-align: center;
    font-size: 24px;
    font-weight: 800;
    line-height: 30px; 
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  `);

// cocking page

let mainSection = document.createElement("section"),
    make = document.createElement("div"),
    hOne = document.createElement("h1"),
    hOneTextNode = document.createTextNode("Make Your Burger"),
    cock = document.createElement("div"),
    details = document.createElement("div"),
    sum = document.createElement("p"),
    calc =document.createElement("div"),
    numb = document.createElement("div"),
    checkout = document.createElement("div");

    // control section

    controlSection = document.createElement("section"),
    images = ["../images/cutlet.png", "../images/mayo.png", "../images/onion.png", "../images/tomatoe.png", "../images/cucumber.png", "../images/cheese.png", "../images/salad.png"];


for (var i = 0; i < images.length; i++) {

    // creat element

    let controlImages = document.createElement("img"),
        plus = document.createElement("button"),
        p = document.createElement("p"),
        min = document.createElement("button"),
        contain = document.createElement("div"),
        btns =document.createElement("div");

    controlImages.src = images[i]

    plus.innerText = '+';

    p.innerText = "0"

    min.innerText = '-';

    // append element

    btns.append(plus , p ,min );
    contain.append(controlImages , btns);

    // set Attributes 

    contain.classList.add("contain");
    btns.classList.add("btns");

    controlSection.appendChild(contain)
}

// append elements (cocking page)

document.body.appendChild(mainSection);
mainSection.classList.add("main-section");
mainSection.append(make, cock, details);
make.appendChild(hOne);
hOne.appendChild(hOneTextNode);
document.body.appendChild(controlSection);
calc.append(numb , checkout)
details.append(sum ,calc)

// set Attributes ( cocking page)

make.classList.add("make");
cock.classList.add("cock");
details.classList.add("details");
controlSection.classList.add("control");
sum.innerText = "Summary";
numb.innerText = "$0.00";
checkout.innerText = "Checkout";

// style cocking page

styleInject(`
.main-section{
    display:none;
    width: 94%;
    height: 80vh;
    grid-template-columns: 18% 50% 28%;
    padding: 2% 3% 0 3%;
    justify-content:space-between;
    align-items:center;
}
.make{
    display: flex;
    align-items: center;
    justify-content: center;
}
h1{
    width:45%;
    height:auto;
    color: #1F2939;
    font-size: 50px;
    font-weight: 700;
    line-height: 50px;
}
.cock{
    background-image:url(../images/burger.png);
    height:100%;
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center;
}
.details{
    background:red;
    height:100%
}
.control{
    width: 94%;
    height: 13vh;
    padding: 0% 3%;
    display:none;
    margin-top: 1%;
}
.control>div>img{
    width: 104px;
    height: 49px;
}
.control>div>div>button{
    width:28px;
    height:28px;
    border:0;
    border-radius: 99px;
    background:#F5F5FF;
    cursor: pointer;
}
.control>div>div>p{
    color: #1F2939;
    font-size: 20px;
    font-weight: 600;
    line-height: 32px;
    margin: 0 10%;
}
.btns{
    display:flex;
}
.contain{
    width: 15%;
}
`)















//   event
span.addEventListener("click", () => {
    main.style.display = "none";
    mainSection.style.display = "grid"
    controlSection.style.display = "flex"
})