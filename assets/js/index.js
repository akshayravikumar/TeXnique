let TIMEOUT_SECONDS = 180;
let TIMEOUT_STRING = "three minutes";
let secondsRemaining = TIMEOUT_SECONDS;

let oldVal;
let problemNumber = 0;
let numCorrect = 0;
let problemsOrder;
let debug = false;
let lastTarget = '';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayLaTeXInBody() {
    renderMathInElement(document.body, {
        options: {
            throwOnError: false,
            display: false
        }
    });
}

// A simple timer
function displayTime(secs) {
    let minutes = Math.floor(secs / 60) % 60;
    let seconds = secs % 60;
    let displayText = minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
    $("#timer").text(displayText);
}

function startTimer(onTimeoutFunc) {
    secondsRemaining = TIMEOUT_SECONDS;
    let timer = setInterval(function() {
        secondsRemaining--;
        displayTime(secondsRemaining);
        if (secondsRemaining == 0) {
            clearInterval(timer);
            onTimeoutFunc();
        }
    }, 1000);
}

function showIntro() {
    $("#game-window").hide();
    $("#ending-window").hide();
    $("#intro-window").show();

    let introText =  "This is a game to test your \\(\\LaTeX\\) skills." +
                     " Type as many formulas as you can in " + TIMEOUT_STRING + "!";
    $("#intro-text").text(introText);

    displayLaTeXInBody();
    $("#container").show();
}

function endGame() {
    $("#intro-window").hide();
    $("#game-window").hide();
    $("#ending-window").show();
    displayLaTeXInBody();

    let problemsText = numCorrect + ((numCorrect == 1) ? " problem" : " problems");
    let endingText = "You finished " + problemsText + " in " + TIMEOUT_STRING + "!";
    $("#ending-text").text(endingText);
}


function startGame() {
    problemNumber = 0;
    numCorrect = 0;
    oldVal = "";
    problemsOrder = [...Array(problems.length).keys()];
    shuffleArray(problemsOrder);

    $("#intro-window").hide();
    $("#ending-window").hide();
    $("#game-window").show();

    displayLaTeXInBody();

    $("#score").text(0);

    displayTime(TIMEOUT_SECONDS);

    // Reset and start the timer
    loadProblem();
    startTimer(function() {
        endGame(numCorrect);
    });
}

function loadProblem() {
    // clear current work
    $('#out').empty();
    $('#user-input').val('');

    // reset styling
    $('#out').parent().removeClass("correct");
    $('#user-input').prop("disabled", false);
    $('#user-input').focus();

    // load problem
    let target = problems[problemsOrder[problemNumber]];
    if (debug) {
      target = problems[1];
    }
    problemNumber += 1;

    // load problem text
    let problemText = "Problem " + problemNumber + ": " + target.title;
    $("#problem-title").text(problemText);

    displayLaTeXInBody();

    // load problem body
    katex.render(target.latex, $("#target")[0], {
        throwOnError: false,
        displayMode: true
    });

    oldVal = "";
};

function validateProblem() {
    let currentVal = $("#user-input").val();
    if (currentVal == oldVal) {
        return; // check to prevent multiple simultaneous triggers
    }

    oldVal = currentVal;
    // action to be performed on textarea changed
    katex.render(currentVal, $("#out")[0], {
        throwOnError: false,
        displayMode: true
    });

    if (currentVal == '') {
      // Defensively return if the input is empty.
      return;
    }

    html2canvas($('#target')[0], {}).then(function (targetCanvas) {
        $('#out').parent().removeClass("correct");
        let width = targetCanvas.width;
        let height = targetCanvas.height;
        let targetData = targetCanvas.getContext("2d").getImageData(0, 0, width, height);
        let curTarget = $('#problem-title').text();
        html2canvas($('#out')[0], {}).then(function (outCanvas) {
            if (outCanvas.width != width || outCanvas.height != height) {
              console.log("doesn't match");
              return;
            }
            let outData = outCanvas.getContext("2d").getImageData(0, 0, width, height);
            let diff = pixelmatch(targetData.data, outData.data, undefined, width, height, {threshold: 0.1});
            let result = "";
            console.log("diff is " + diff)
            if (diff < 10) {
                if (lastTarget == curTarget) {
                  return;
                }
                lastTarget = curTarget;
                numCorrect += 1;

                // Styling changes
                $('#out').parent().addClass("correct");
                $('#user-input').prop("disabled", true);
                $("#score").text(numCorrect);

                // Load new problem
                setTimeout(loadProblem, 1500);
            }
        });
    });
}

// Start by showing the intro.
$(document).ready(function() {
    // Handlers
    $("#start-button").click(function() {
        startGame();
    });

    $("#reset-button").click(function() {
        startGame();
    });

    $("#skip-button").click(function() {
        loadProblem();
    });

    $("#user-input").on("change keyup paste", function() {
        validateProblem()
    });

    showIntro();
});
