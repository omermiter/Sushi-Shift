const back = document.querySelector(".back-cont");

var backNum = 1;

const addBackBtn = document.querySelector("#add-back");


addBackBtn.addEventListener("click", ()=> {
    const br = document.createElement("br");

    const backNameInput = document.createElement("input");
    backNameInput.setAttribute("id", `back-name${backNum}`);
    backNameInput.setAttribute("class", `back-name`);
    backNameInput.setAttribute("type", `text`);

    const backNameLabel = document.createElement("label");
    backNameLabel.innerHTML = "שם ברמן";
    backNameLabel.setAttribute("for", `back-name${backNum}`);

    const backAvgInput = document.createElement("input");
    backAvgInput.setAttribute("id", `back-avg${backNum}`);
    backAvgInput.setAttribute("class", `back-avg`);
    backAvgInput.setAttribute("type", `text`);

    const backAvgLabel = document.createElement("label");
    backAvgLabel.innerHTML = "ממוצע";
    backAvgLabel.setAttribute("for", `back-avg${backNum}`);

    const backSummeryInput = document.createElement("textarea");
    backSummeryInput.setAttribute("id", `back-sum${backNum}`);
    backSummeryInput.setAttribute("class", `back-sum`);

    const backSummeryLabel = document.createElement("label");
    backSummeryLabel.innerHTML = "סיכום ברמן";
    backSummeryLabel.setAttribute("for", `back-sum${backNum}`);
    
    back.appendChild(br);
    back.appendChild(backNameInput);
    back.appendChild(backNameLabel);
    back.appendChild(backAvgInput);
    back.appendChild(backAvgLabel);
    back.appendChild(backSummeryInput);
    back.appendChild(backSummeryLabel);

    backNum += 1;

})