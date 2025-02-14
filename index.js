let wins = 0;
let losses = 0;
let draws = 0;

emoji = {
    rock: "🗿",
    paper: "📄",
    scissors: "✂️"
}

function rock(){
    submit("rock");
}

function paper(){
    submit("paper");
}

function scissors(){
    submit("scissors");
}

function repeatFunction(callback, interval, repeatTimes, endcallback) {
    let repeated = 0;
    const intervalTask = setInterval(doTask, interval)

    function doTask() {
        if ( repeated < repeatTimes ) {
            callback()
            repeated += 1
        } else {
            clearInterval(intervalTask);
            endcallback();
        }
    }
} 

function submit(element){
    let choose;
    document.getElementById("result").innerHTML = `<h1 style="font-size: 3em;"></h1>`
    choose = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
    repeatFunction(() => {
        let choose;
        choose = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
        document.getElementById("emojis").innerHTML = `<h1 style="font-size: 5em; line-height: 0.7;">${emoji[element]}</h1> VS <h1 style="font-size: 5em; line-height: 0.7;">${emoji[choose]}</h1>`;
    }, 30, 50, () => {
    console.log(`choose: ${choose} element: ${element}`)
    document.getElementById("emojis").innerHTML = `<h1 style="font-size: 5em; line-height: 0.7;">${emoji[element]}</h1> VS <h1 style="font-size: 5em; line-height: 0.7;">${emoji[choose]}</h1>`;
    if(choose == element){
        draws++;
        document.getElementById("result").innerHTML = `<h1 style="font-size: 3em;">Draw</h1>`;
    } else if((choose == "rock" && element == "scissors") || (choose == "paper" && element == "rock") || (choose == "scissors" && element == "paper")){
        losses++;
        document.getElementById("result").innerHTML = `<h1 style="font-size: 3em;">Lose</h1>`;
    } else {
        wins++;
        document.getElementById("result").innerHTML = `<h1 style="font-size: 3em;">Win</h1>`;
    }

    if(losses == 0) {
        document.getElementById("info").innerHTML = `Wins: ${wins}<br>Losses: ${losses}<br>Draws: ${draws}<br>Total: ${wins + draws + losses}<br>w/l: ${wins}`;
    } else {
    document.getElementById("info").innerHTML = `Wins: ${wins}<br>Losses: ${losses}<br>Draws: ${draws}<br>Total: ${wins + draws + losses}<br>w/l: ${Math.floor(((wins + 0.001)/losses) * 100) / 100}`;
    }})
}