var heartIcons = document.querySelectorAll(".hearticon")
var heartCounts = document.getElementById("heart")

for (let i = 0; i < heartIcons.length; i++) {
    heartIcons[i].addEventListener("click", function () {
        heartCounts.innerText++
    })
    
    
}
