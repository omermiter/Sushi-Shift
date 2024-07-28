const copyBtn = document.querySelector("#copy");

const date = new Date();

let dayDate = date.getDate();
let month = date.getMonth() + 1;

copyBtn.addEventListener("click", () => {
    const creator = document.querySelector("#name").value;
    const day = document.querySelector("#day").value;
    const daily = document.querySelector("#daily").value;

    const shift = document.querySelector("#shift").value;
    
    const sitting = document.querySelector("#sitting").value;

    const cust_avg = document.querySelector("#cust-avg").value;

    const cust_num = document.querySelector("#cust-num").value;

    const tip_total = document.querySelector("#tip-total").value;

    const tip_avg = document.querySelector("#tip-avg").value;

    const tip_before = document.querySelector("#tip-before").value;

    const summery = document.querySelector("#sum").value;


    var report = `דו"ח אחמש: ${creator}\n${day}: ${dayDate}.${month}\n\n` + `סה"כ יומי: ${daily}\n` + `סה"כ משמרת: ${shift}\n` + `בישיבה: ${sitting}\n` 
    + `ממוצע סועד: ${cust_avg}\n` + `כמות סועדים: ${cust_num}\n` + `סה"כ טיפים: ${tip_total}\n` + `טיפ ממוצע: ${tip_avg}%\n` + `טיפ לפני: ${tip_before}\n\n` 
    + `${summery}\n\n\n`;

    
    report += "מלצרים:\n";

    const waiterNames = document.getElementsByClassName("waiter-name");

    const waiterAvgs = document.getElementsByClassName("waiter-avg");

    const waiterSums = document.getElementsByClassName("waiter-sum");

    for(var i = 0; i < waiterNames.length; i ++){

        report += `${waiterNames[i].value}- (${waiterAvgs[i].value}) ${waiterSums[i].value}\n\n`;
    }


    report += "\n\n";

    report += "בר קדמי:\n";

    const frontNames = document.getElementsByClassName("front-name");

    const frontAvgs = document.getElementsByClassName("front-avg");

    const frontSums = document.getElementsByClassName("front-sum");


    for(var i = 0; i < frontNames.length; i ++){

        report += `${frontNames[i].value}- (${frontAvgs[i].value}) ${frontSums[i].value}\n`;
    }

    report += "\n\n";


    report += "בר אחורי:\n";

    const backNames = document.getElementsByClassName("back-name");

    const backAvgs = document.getElementsByClassName("back-avg");

    const backSums = document.getElementsByClassName("back-sum");


    for(var i = 0; i < frontNames.length; i ++){

        report += `${backNames[i].value}- (${backAvgs[i].value}) ${backSums[i].value}\n`;
    }

    report += "\n\n";

    const hostes = document.querySelector(".hostes-sum").value;

    report += `מארחות:\n${hostes}\n\n`;

    const delivery = document.querySelector(".delivery-sum").value;

    report += `משלוחים:\n${delivery}\n\n`;

    const sushi = document.querySelector(".sushi-sum").value;

    report += `סושימנים:\n${sushi}\n\n`;

    const hot = document.querySelector(".hot-sum").value;

    report += `מטבח חם:\n${hot}\n\n`;


    const gril = document.querySelector(".gril-sum").value;

    report += `גריל:\n${gril}\n\n`

    navigator.clipboard.writeText(report);

});