// const startsEl = document.querySelectorAll(".fa-star");
// const emojisEl = document.querySelectorAll(".far");
// const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];
// updateRating(0);

// startsEl.forEach((startsEl, index) => {
//     startsEl.addEventListener("click", () =>{
//         updateRating(index);
//     });
// })

// function updateRating(index){
//     startsEl.forEach((startsEl, idx) => {
//         if(idx < index + 1){
//             startsEl.classList.add("active");
//         }else{
//             startsEl.classList.remove("active");
//         }
//     });

//     emojisEl.forEach(emojiEl => {
//         emojiEl.style.transform = `translateX(-${index * 50}px)`;
//         emojiEl.style.color = colorsArray[index];
//     });
// }


// --------------------- Tekrar ----------------------

const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".far");
const colorsArray = ["red", "orange","lightblue", "lightgreen", "green"];

starsEl.forEach((starsEl, index) => {
    starsEl.addEventListener("click", () => {
        updateRating(index);
    });
});

function updateRating(index) {
    starsEl.forEach((starEl, idx) => {

        if(idx < index + 1){
            starEl.classList.add("active");
        }else{
            starEl.classList.remove("active");
        }
    });

    emojisEl.forEach(emojiEl => {
        emojiEl.style.transform = `translateX(-${index * 50}px)`;
        emojiEl.style.color = colorsArray[index];
    });

}