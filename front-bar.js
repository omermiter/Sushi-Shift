const front = document.querySelector(".front-cont");

var frontNum = 1;

const addFrontBtn = document.querySelector("#add-front");


addFrontBtn.addEventListener("click", ()=> {
    const br = document.createElement("br");

    const frontNameInput = document.createElement("input");
    frontNameInput.setAttribute("id", `front-name${frontNum}`);
    frontNameInput.setAttribute("class", `front-name`);
    frontNameInput.setAttribute("type", `text`);

    const frontNameLabel = document.createElement("label");
    frontNameLabel.innerHTML = "שם ברמן";
    frontNameLabel.setAttribute("for", `front-name${frontNum}`);

    const frontAvgInput = document.createElement("input");
    frontAvgInput.setAttribute("id", `front-avg${frontNum}`);
    frontAvgInput.setAttribute("class", `front-avg`);
    frontAvgInput.setAttribute("type", `text`);

    const frontAvgLabel = document.createElement("label");
    frontAvgLabel.innerHTML = "ממוצע";
    frontAvgLabel.setAttribute("for", `front-avg${frontNum}`);

    const frontSummeryInput = document.createElement("input");
    frontSummeryInput.setAttribute("id", `front-sum${frontNum}`);
    frontSummeryInput.setAttribute("class", `front-sum`);
    frontSummeryInput.setAttribute("type", `text`);

    const frontSummeryLabel = document.createElement("label");
    frontSummeryLabel.innerHTML = "סיכום ברמן";
    frontSummeryLabel.setAttribute("for", `front-sum${frontNum}`);
    
    front.appendChild(br);
    front.appendChild(frontNameInput);
    front.appendChild(frontNameLabel);
    front.appendChild(frontAvgInput);
    front.appendChild(frontAvgLabel);
    front.appendChild(frontSummeryInput);
    front.appendChild(frontSummeryLabel);

    frontNum += 1;

})