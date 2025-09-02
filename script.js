// Heart Counts
var heartIcons = document.querySelectorAll(".hearticon")
var heartCounts = document.getElementById("heart")

for (let i = 0; i < heartIcons.length; i++) {
    heartIcons[i].addEventListener("click", function () {
        heartCounts.innerText++
        
    })
    
    
}

var callBtn = document.querySelectorAll(".call-btn")
const historyContainer = document.getElementById("history-container")
const data = {
    name:["National Emergency","Police","Fire Service", "Ambulance", "Woman & Child Helpline", "Anti-Corruption", "Electricity Outage", "Brac", "Bangladeh Railway"],
    num:["999", "999", "999", "1994-999999", "109", "106", "16216", "16445", "163"]
    
    }

var coins = parseInt(document.getElementById("coin").innerText);
for (let i = 0; i < callBtn.length; i++) {
    callBtn[i].addEventListener("click", function () {
        if (coins >= 20) {
            
            const div = document.createElement("div");
            div.innerHTML=`<div class="flex items-center justify-between bg-[#FAFAFA] rounded-lg p-4 text-[#111111] text-lg">
                        <div>
                          <h1 class="  font-semibold">${data.name[i]}</h1>
                          <p class="text-[#5C5C5C]  ">${data.num[i]}</p>
                        </div>                        
                      <p>time</p>
                  </div>
                  `
                  historyContainer.appendChild(div)
                  
                  alert(`Calling...\n${data.name[i]}\n${data.num[i]}`)                    
                coins = coins-20;
                document.getElementById("coin").innerText = coins;
        }
                
        else{
                callBtn[i].addEventListener("click", function () {
                    alert("Invalid! Not enough coins.")
                    
                })
            }
    })
    }



const clearBtn = document.getElementById("clear-btn")
clearBtn.addEventListener("click", function () {
    historyContainer.innerHTML = ''
    
})