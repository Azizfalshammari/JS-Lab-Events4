{
  /* <div  class='container'>
<input  id="heightChanger" type="text" value="">
<input  id="weightChanger" type="text" value="">
<input  id="color" type="color" value="">
<input  id="radiusChange" type="text" value="">

<button id="reset"></button>
<div id="toyBox">

</div></div> */
}

let toybox = document.getElementById("toyBox");
let heightChanger = document.getElementById("heightChanger");
let widthChanger = document.getElementById("widthChanger");
let radiusChange = document.getElementById("radiusChange");
let colorpicker = document.getElementById("color");

let resetBtn = document.getElementById('reset');


resetBtn.addEventListener('click', ()=>{
    toybox.style.width = '30%'
    toybox.style.height = '40%'
    toybox.style.backgroundColor = 'blue'
    toybox.style.borderRadius = '0'

})
console.log(heightChanger);

// input.addEventListener("input", updateValue);

// function updateValue(e) {
//     toybox.style.height = e.target.value;
// }
heightChanger.addEventListener("input", () => {
  console.log("hello");

  toybox.style.height = heightChanger.value + "%";
});

widthChanger.addEventListener("input", () => {
  console.log("hello");

  toybox.style.width = widthChanger.value + "%";
});

radiusChange.addEventListener("input", () => {
  console.log("hello");

  toybox.style.borderRadius = radiusChange.value + "%";
});


colorpicker.addEventListener('change', ()=> {
    toybox.style.backgroundColor = colorpicker.value
})


