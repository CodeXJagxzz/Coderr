function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr;
    if (views < 1000) {
        viewStr = views; 
    } else if (views > 1000000) {
        viewStr = (views / 1000000) + "M"; 
    } else {
        viewStr = (views / 1000) + "K"; 
    }

    let html = `<div class="card">
        <div class="image">
            <img src="${thumbnail}" alt="">
            <div class="capsule">${duration}</div>
        </div>
        <div class="text">
            <h1>${title}</h1>
            <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
        </div> 
    </div>`;

    // Append the created HTML to the .container element and you can use random.math func to change the content of thumbnail , veiws etc....
    document.querySelector(".btn").addEventListener("click", () => {
        document.querySelector(".container").innerHTML += html; //or document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
    });
}

createCard(
    "Introduction to Backend | Sigma Web Dev video #2",
    "CodeWithHarry",
    5600000000,
    8,
    "31:22",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);

// createCard(
//     "Introduction to Express JS | Sigma Web Dev video #22",
//     "CodeWithHarry",
//     56000000,
//     8,
//     "31:22",
//     "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
// );


