// const photoUpload = document.querySelector("#photoUpload");
// const uploaderUI = document.querySelector("#uploaderUI");
// const photos = document.querySelector("#photos");
// const createSlideShow = document.querySelector("#createSlideShow");
// const output = document.querySelector("#output");


// uploaderUI.addEventListener("click",(event) =>{   //Click button to get photoUpload
//     photoUpload.click();
// })

// const createCarousel = (photoList) => {
//     const id = "carousel" + Date.now();
//     const carousel = document.createElement("div");
//     carousel.className ="carousel slide";
//     carousel.id = id;
//     let slides = "";
//     let indicators = "";
//     photoList.forEach((photo,index) => {
//         slides += `
//         <div class="carousel-item ${index === 0 && "active"}">
//         <img src="${photo}" class="d-block w-100">
//       </div>
//         `;
//         indicators += `
//         <button type="button" ${index === 0 && 'class="active"'} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" class="active" aria-current="true" aria-label="Slide 1"></button>
//         `
//     })
//     carousel.innerHTML = `
//     <div class="carousel-indicators">
//     ${indicators}
//     <div class="carousel-inner">
//     ${slides}
 

//   <button class="carousel-control-prev" type="button" data-bs-target="#${id}" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#${id}" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
//     `;
//    output.append(carousel);
// };

// photoUpload.addEventListener("change",(event) => {
//     //console.log(event.target.files);   //GET INPUT FILES
//     [...event.target.files].forEach(file =>{        //loop files for multiple photo
//          const img = document.createElement("img");  //img element create 
//     const reader = new FileReader();    //Reading Files
//     reader.addEventListener("load" ,(event) =>{    //Reader load
//         console.log(event.target);
//         img.src = event.target.result;  //(OR) file reader result add in img element
//         // const img = new Image(100);        //HTML IMAGE ELEMENT
//         // img.src = event.target.result;

//         //console.log(img);
//        // document.body.append(img);  //Show photo in document body
//        img.classList.add("photo","me-2");  //img class add create class for photo size
//        photos.append(img);         //photo append in photos          
//     })
//     //reader.readAsText(event.target.files[0]);   //files reading readAsText
//     //reader.readAsDataURL(event.target.files[0]);   //files reading readAsDataURL for one img
//     reader.readAsDataURL(file);                     //loop files reading readAsDataURL

//     })

// })
// createSlideShow.addEventListener("click",() => {
//     const allPhoto = [...document.querySelectorAll(".photo")];
//     createCarousel(allPhoto.map((el) => el.src));


// })

const photoUpload = document.querySelector("#photoUpload");
const uploaderUI = document.querySelector("#uploaderUI");
const createSlideShow = document.querySelector("#createSlideShow");
const output = document.querySelector("#output");

uploaderUI.addEventListener("click",() => 
    photoUpload.click()
);

// photoUpload.addEventListener("change", (event) => {
//     // console.log(event.target);
//     // console.log(event.target.files);
//     // console.log(event.target.files[0]);
//     const img = document.createElement("img");

//     const reader = new FileReader();
//     reader.addEventListener("load",(event) => {
//         console.log(event.target);
//         img.src = event.target.result;
//         document.body.append(img);
//     })
// // reader.readAsText(event.target.files[0]);
// reader.readAsDataURL(event.target.files[0]);
// })      ONE PHOTO CHOSEN

// CAROUSEL
const createCarousel = (photoList) => {
    const id = "carousel" + Date.now();   //(Dynamic ID)
    const carousel = document.createElement("div");
    carousel.className = "carousel slide";
    carousel.id = id;   //
    let slides = " ";
    let indicators = " ";
    photoList.forEach((photo,index) => {
        slides += `
            <div class="carousel-item ${index === 0 && "active"}">
                <img src="${photo}" class="d-block w-100" alt="...">
            </div>`;
        indicators += `<button type="button" ${index === 0 && `class="active"`}
                 data-bs-target="#${id}" data-bs-slide-to="${index}" aria-current="true" aria-label="Slide 1">
             </button>` ;
    })
    carousel.innerHTML = `
      <div class="carousel-indicators">
        ${indicators}
      </div>
      <div class="carousel-inner">
        ${slides}
      </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#${id}" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#${id}" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`;
//document.body.append(carousel);
output.append(carousel);
}

photoUpload.addEventListener("change", (event) => {
[...event.target.files].forEach((file) => {
    const img = document.createElement("img");
    const reader = new FileReader;
    reader.addEventListener("load", (event) =>{
        img.src = event.target.result;
        img.classList.add("photo","me-2");
        photos.append(img);
    })
    reader.readAsDataURL(file);
})
});

//carousel
createSlideShow.addEventListener("click", () => {
    const allPhoto = [...document.querySelectorAll(".photo")];
    createCarousel(allPhoto.map((el) => el.src))
})
