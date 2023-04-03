


(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();

document.getElementById("presentacion").textContent = presentacion
let habContaniner = document.getElementById("hab")

skills.forEach(({ name, percent, className }) => {
  habContaniner.innerHTML += `<div class="progress-bars">
  
    <div class="progress-bar">
      <p class="prog-title">${name}</p>
      <div class="progress-con">
        <p class="prog-text">${percent}%</p>
        <div class="progress">
          <span class=${className}></span>
        </div>
      </div>
    </div>
  </div>`
})

let forContainer = document.getElementById("for")
education.forEach(({ degree, institution, date, status }) => {
  forContainer.innerHTML += `<div class="timeline-item">
<div class="tl-icon">
    <i class="fas fa-graduation-cap"></i>
</div>
<p class="tl-duration">${date}</p>
<h5>${degree}<span> - ${institution}|</span></h5>
<p>
   ${status}
</p>
</div>`
})
let projContainer = document.getElementById("proj")
portfolioItems.forEach(({ image, title, githubLink, liveLink }) => {
  projContainer.innerHTML += `<div class="portfolio-item">
  <div class="image">
      <img src="${image}" alt="${title}">
  </div>
  <div class="hover-items">
      <h3>${title} <i class="fab fa-react"></i></h3>
      <div class="icons">
          <a href="${githubLink}" target="_blank" class="icon">
              <i class="fab fa-github"></i>
          </a>
           <a href="${liveLink}" target="_blank" class="icon">
              <i class="fas fa-globe"></i>
          </a>
      </div>
  </div>
</div>

`
})

let expContainer = document.getElementById("exp")
experience.forEach(({ position, company, duration, description }) => {
  expContainer.innerHTML += `<div class="timeline-item">
  <div class="tl-icon">
      <i class="fas fa-briefcase"></i>
  </div>
  <p class="tl-duration">${duration}</p>
  <h5>${position}<span> -${company}</span></h5>
  <p>${description}
  </p>
</div>

`
})



// misDatos
document.getElementById("ubicacion").textContent = misDatos.ubicacion
document.getElementById("email").textContent = misDatos.email
document.getElementById("tlf").textContent = misDatos.telefono
document.getElementById("lang").textContent = misDatos.languages
document.getElementById("linkedin").href = misDatos.linkedin
document.getElementById("git").href = misDatos.githubLink






const btnSubmit = document.getElementById("formContact");
btnSubmit.addEventListener('submit', sendInformation)

function sendInformation(e) {

  e.preventDefault()
  const data = new FormData(e.target);
  data.append("address", "fernandoleonett@gmail.com");
  data.append("owner", "Fernando J H Leonett");
  btnSubmit.reset()

  const values = Object.fromEntries(data);

  try {

    fetch("/api/contact", {
      headers: { 'Content-Type': 'application/json' },
      method: "POST",
      body: JSON.stringify(values)
    });

    Toastify({
      text: "Mensaje Enviado",
      duration: 3000,
      close: true,
      gravity: "bottom",
      position: "center",
      stopOnFocus: false,
      style: {
        background: "linear-gradient(to right, #007a6c, #75b703)",
      },
    }).showToast();



  } catch (error) {

    Toastify({
      text: "Ocurrió un error",
      duration: 3000,
      close: true,
      gravity: "bottom",
      position: "center",
      stopOnFocus: false,
      style: {
        background: "linear-gradient(#cc0d0d, #750b0b)",
      },
    }).showToast();


  }


}

// const btnLink = document.getElementById("file");
// btnLink.addEventListener("click", () =>
//   DownloadFile("CVEN.pdf"
//   )
// );


function DownloadFile(fileName) {
  console.log("download file");
  //Set the File URL.
  // var url = "Files/" + fileName;
  var url = "./img/" + fileName;

  //Create XMLHTTP Request.
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.responseType = "blob";
  req.onload = function () {
    //Convert the Byte Data to BLOB object.
    var blob = new Blob([req.response], { type: "application/octetstream" });

    //Check the Browser type and download the File.
    var isIE = false || !!document.documentMode;
    if (isIE) {
      window.navigator.msSaveBlob(blob, fileName);
    } else {
      var url = window.URL || window.webkitURL;
      link = url.createObjectURL(blob);
      var a = document.createElement("a");
      a.setAttribute("download", fileName);
      a.setAttribute("href", link);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };
  req.send();

}