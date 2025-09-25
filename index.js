let homeScoreEl = document.getElementById("home-team-score")
let guestScoreEl = document.getElementById("guest-team-score")
let homeScore = Number(homeScoreEl.innerText)
let guestScore = Number(guestScoreEl.innerText)
let elementClassesInArray = []

function increaseScore(e, pointsToAdd){
    elementClassesInArray = e.className.split(" ")
    if(elementClassesInArray.includes("home-btn")){
        homeScore += pointsToAdd
        homeScoreEl.innerText = homeScore
    }
    else if(elementClassesInArray.includes("guest-btn")){
        guestScore += pointsToAdd
        guestScoreEl.innerText = guestScore
    }
}

function decreaseScore(e, pointsToSubtract){
    elementClassesInArray = e.className.split(" ")
    
    if(elementClassesInArray.includes("home-btn")){
        homeScore -= pointsToSubtract
        homeScoreEl.innerText = homeScore
    }else if(elementClassesInArray.includes("guest-btn")){
        guestScore -= pointsToSubtract
        guestScoreEl.innerText = guestScore
    }
}









