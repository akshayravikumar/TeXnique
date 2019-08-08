let TIMEOUT_SECONDS = 300;
let TIMEOUT_STRING = "five minutes";
let secondsRemaining = TIMEOUT_SECONDS;

function loadBodyText() {
    renderMathInElement(document.body, {
        options: { 
            throwOnError: false,
            display: false
        }
    });
}

// A simple timer
toHHMMSS = function(secs) {
    var sec_num = parseInt(secs, 10)
    var hours   = Math.floor(sec_num / 3600)
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60

    return [hours,minutes,seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v,i) => v !== "00" || i > 0)
        .join(":")
}

function startTimer(onTimeoutFunc) {
    secondsRemaining = TIMEOUT_SECONDS;
    $("#timer").text(toHHMMSS(secondsRemaining));
    setInterval(function() {
        secondsRemaining--;
        $("#timer").text(toHHMMSS(secondsRemaining));
        if (secondsRemaining == 0) {
            clearInterval();
            onTimeoutFunc();
        } 
    }, 1000);
}

function showIntro() {
    $("#game-window").hide();
    $("#ending-window").hide();
    $("#intro-window").show();

    loadBodyText();

    let introText =  "\\text{This is a game to test your \\LaTeX \\, skills." + 
                     " Type as many formulas as you can in " + TIMEOUT_STRING + "!}";

    katex.render(introText, $("#intro-text")[0], 
        {
            throwOnError: false,
            displayMode: false
        }
    );

    $("#start-button").click(function() {
        startGame();
    });
}

function endGame(numCorrect) {
    $("#intro-window").hide();
    $("#game-window").hide();
    $("#ending-window").show();
    $("#timer").text(toHHMMSS(TIMEOUT_SECONDS));
    loadBodyText();

    let problemsText = numCorrect + ((numCorrect == 1) ? " problem" : " problems");
    let endingText = "\\text{You finished " + problemsText + " in " + TIMEOUT_STRING + "!}";
    katex.render(endingText, $("#ending-text")[0], 
        {
            throwOnError: false,
            displayMode: false
        }
    );

    $("#reset-button").click(function() {
        startGame();
    });
}

function startGame() {
    $("#intro-window").hide();
    $("#ending-window").hide();
    $("#game-window").show();

    loadBodyText();

    let oldVal;
    let problemNumber = 0;
    let numCorrect = 0;
    $("#score").text(0);

    // Reset and start the timer
    loadProblem();
    startTimer(function() {
        endGame(numCorrect);
    });

    function loadProblem() {
        // clear current work
        $('#out').empty();
        $('#user-input').val('');

        // reset styling
        $('#out').parent().removeClass("correct");
        $('#user-input').prop("disabled", false);
        $('#user-input').focus();

        // load problem
        let target = problems[Math.floor(Math.random()*problems.length)];
        problemNumber += 1;

        // load problem text

        katex.render(
            "\\textbf{Problem " + problemNumber + ": " + target.title + "}", 
            $("#problem-title")[0], 
            {
                throwOnError: false,
                displayMode: false
            }
        );

        // load problem body
        katex.render(target.latex, $("#target")[0], {
            throwOnError: false,
            displayMode: true
        });

        oldVal = "";
    };

    function validateProblem() {
        let currentVal = $("#user-input").val();
        if(currentVal == oldVal) {
            return; // check to prevent multiple simultaneous triggers
        }

        oldVal = currentVal;
        // action to be performed on textarea changed
        katex.render(currentVal, $("#out")[0], {
            throwOnError: false,
            displayMode: true
        });

        html2canvas($('#target'),{
            onrendered: function (targetCanvas) {
                $('#out').parent().removeClass("correct");
                let width = targetCanvas.width;
                let height = targetCanvas.height;
                let targetData = targetCanvas.getContext("2d").getImageData(0, 0, width, height);
                html2canvas($('#out'),{
                    onrendered: function (outCanvas) {
                        let outData = outCanvas.getContext("2d").getImageData(0, 0, width, height);
                        let diff = pixelmatch(targetData.data, outData.data, undefined, width, height, {threshold: 0.1});
                        let result = "";
                        console.log("diff is " + diff)
                        if (diff < 10) {
                            numCorrect += 1;

                            // Styling changes
                            $('#out').parent().addClass("correct");
                            $('#user-input').prop("disabled", true);
                            $("#score").text(numCorrect);

                            // Load new problem
                            setTimeout(loadProblem, 1500);
                        }
                    }
                });
            }
        });
    }

    $("#skip-button").click(function() {
        loadProblem();
    });

    $("#user-input").on("change keyup paste", function() {
        validateProblem()
    });
}

// Start by showing the intro.
$(document).ready(function() {
    showIntro();
});
