const clearbutton = document.getElementById('clearfilter')

datafiltered = []

function handlecheck(checkbox, brand) {
  //checking if it is checked...
  if (checkbox.checked == true) {
    if (!datafiltered.includes(brand)) { datafiltered.push(brand) }
    Classhandleadd()
    
    //if unchecked...
  } else {
    datafiltered.splice(datafiltered.indexOf(brand),1)
    classhandlerem(brand)
  }
}

//to handle class addings...
function Classhandleadd() {
  for (var i = 0; i < datafiltered.length; i++) {
    tags = document.querySelectorAll(`.${datafiltered[i]}`)
    for (var j = 0; j < tags.length; j++) {
      tags[j].classList.add('show')
    }
  }
}

//to handle class removing...
function classhandlerem(data) {
  tag = document.querySelectorAll(`.${data}`)
  for (var i = 0; i < tag.length; i++){
    tag[i].classList.remove('show')
  }
}
  //to clear all filter option...
  
  function clearall() {
    items = document.querySelectorAll('.box')
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove('show')
    }
    window.location.replace('/')
  }

//to display details:

function details(mobile) {
  data = ''
  title=''
  switch (mobile) {
    case 'samsung-512':
      data = "	Get up to ₹2000 off on Samsung Shop AppAwesome Camera - 48MP Quad Cam with OIS for sharp & steady pics and videos\n Awesome Screen - 90Hz sAMOLED Display for real smooth scrolling"
      break;
    case 'samsung-64':
     
      data = "	Get up to ₹2000 off on Samsung Shop AppAwesome Camera - 48MP Quad Cam with OIS for sharp & steady pics and videos\n Awesome Screen - 90Hz sAMOLED Display for real smooth scrolling"
      break;
    case 'nokia-512':
      
      data = "	Get up to ₹2000 off on Samsung Shop AppAwesome Camera - 48MP Quad Cam with OIS for sharp & steady pics and videos\n Awesome Screen - 90Hz sAMOLED Display for real smooth scrolling"
      break;
    case 'iphone-512':
      
      data = "	Get up to ₹2000 off on Samsung Shop AppAwesome Camera - 48MP Quad Cam with OIS for sharp & steady pics and videos\n Awesome Screen - 90Hz sAMOLED Display for real smooth scrolling"
      break;
    case 'sony-512':
      
      data = "	Get up to ₹2000 off on Samsung Shop AppAwesome Camera - 48MP Quad Cam with OIS for sharp & steady pics and videos\n Awesome Screen - 90Hz sAMOLED Display for real smooth scrolling happy"
      break;
    default:
      data = "none"
      break;
  }
  
  
  document.getElementById('boxhide').style.display = 'none';
  const para = document.createElement("p");
  const node = document.createTextNode(`${data}`);
  para.appendChild(node);
  const element = document.querySelector(".detailview");
  element.classList.remove('hide')
  element.appendChild(documentFragmment);
  }


clearbutton.addEventListener('click',clearall)