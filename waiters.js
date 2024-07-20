const waiters = document.querySelector(".waiter-cont");

var waiterNum = 1;

const addBtn = document.querySelector("#add-waiter");


addBtn.addEventListener("click", ()=> {
    const br = document.createElement("br");

    const waiterNameInput = document.createElement("input");
    waiterNameInput.setAttribute("id", `waiter-name${waiterNum}`);
    waiterNameInput.setAttribute("class", `waiter-name`);
    waiterNameInput.setAttribute("type", `text`);

    const waiterNameLabel = document.createElement("label");
    waiterNameLabel.innerHTML = "שם מלצר";
    waiterNameLabel.setAttribute("for", `waiter-name${waiterNum}`);

    const waiterAvgInput = document.createElement("input");
    waiterAvgInput.setAttribute("id", `waiter-avg${waiterNum}`);
    waiterAvgInput.setAttribute("class", `waiter-avg`);
    waiterAvgInput.setAttribute("type", `text`);

    const waiterAvgLabel = document.createElement("label");
    waiterAvgLabel.innerHTML = "ממוצע";
    waiterAvgLabel.setAttribute("for", `waiter-avg${waiterNum}`);

    const waiterSummeryInput = document.createElement("input");
    waiterSummeryInput.setAttribute("id", `waiter-sum${waiterNum}`);
    waiterSummeryInput.setAttribute("class", `waiter-sum`);
    waiterSummeryInput.setAttribute("type", `text`);

    const waiterSummeryLabel = document.createElement("label");
    waiterSummeryLabel.innerHTML = "סיכום מלצר";
    waiterSummeryLabel.setAttribute("for", `waiter-sum${waiterNum}`);
    
    waiters.appendChild(br);
    waiters.appendChild(waiterNameInput);
    waiters.appendChild(waiterNameLabel);
    waiters.appendChild(waiterAvgInput);
    waiters.appendChild(waiterAvgLabel);
    waiters.appendChild(waiterSummeryInput);
    waiters.appendChild(waiterSummeryLabel)

    waiterNum += 1;
    console.log(waiterNum);

});