/*let random_val;
let count;
const MyArr=["https://assets.onecompiler.app/42tcxqrvb/42tcv89x7/silver-button.png",
              "	https://assets.onecompiler.app/42tcxqrvb/42tn2rghj/robo4-removebg-preview.png",
              "https://assets.onecompiler.app/42tcxqrvb/42tn2rghj/robo3-removebg-preview.png",
              "https://assets.onecompiler.app/42tcxqrvb/42tn2rghj/robo2-removebg-preview.png"];
document.getElementById("btn1").onclick=function(){
  random_val=Math.floor(Math.random()*4);
  document.getElementById("MyH1").innerHTML="Random Value: " + random_val;
  document.getElementById("image1").src=MyArr[random_val];
}*/

let count = 0;
const MyArr=["img1.png",
              "img2.png",
              "img3.png",
              "img4.png"];
document.getElementById("btn1").onclick=function(){
  document.getElementById("MyH1").innerHTML="Value: " + count;
  document.getElementById("image1").src=MyArr[count];
  count += 1;
  if (count > 3){
    count = 0;
  }
}