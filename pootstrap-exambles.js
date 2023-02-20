const buttons = document.querySelector(".btn-primary");
console.log(buttons);
const butname = document.getElementById("butname");
console.log(butname);
const container = document.querySelector(".container");
console.log(container);

// buttons.forEach((item) => {
container.addEventListener("click", (eo) => {
//       if(eo.target.classList== "btn btn-primary") {
//         butname.innerText = "primary";
//       }else  if(eo.target.classList== "btn btn-secondary") {
//           butname.innerText = "secondary";
//         }else if(eo.target.classList== "btn btn-success") {
//           butname.innerText = "success";
//         } else if(eo.target.classList== "btn btn-danger") {
//           butname.innerText = "danger";
//         } else {butname.innerText = "noooooo";
//   }



  switch (eo.target.className) {
    // className not ClassList !!!!!!!!!
    case"btn btn-primary":
      butname.innerText = "primary";
      console.log(container);
      break;
    case "btn btn-secondary":
      butname.innerText = "secondary";
      break;
case "btn btn-success":
      butname.innerText = "success";
      break;
    case "btn btn-danger":
      butname.innerText = "danger";
      break;
    case "btn btn-warning":
      butname.innerText = "warning";
      break;
    case "btn btn-info":
      butname.innerText = "info";
      break;
    case "btn btn-light":
      butname.innerText = "light";
      break;
    case "btn btn-dark":
      butname.innerText = "dark";
      break;
      case "btn btn-link":
      butname.innerText = "link";
      break;
    default:
        //  alert("link");
         butname.innerText = "Error";

      break;}

});








