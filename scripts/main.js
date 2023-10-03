const myImage = document.querySelector("img");

myImage.onclick =() =>{
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/firefox.jpg"){
        myImage.setAttribute("src", "images/firefox2.jpg");
    } else{
        myImage.setAttribute("src", "images/firefox.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    const myName = prompt("名前を入力してください")
    if(!myName){
        setUserName();
    } else{
        localStorage.setItem("name", myName);
        myHeading.textContent = `${myName}さん、Mozillaはかっこいいよ。`;
    }
}

if (!localStorage.getItem("name")){
    setUserName();
} else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent =`Mozillaはかっこいいよ、${storedName}`;
}

myButton.onclick =() =>{
    setUserName();
}