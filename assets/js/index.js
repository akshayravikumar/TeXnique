let seconds = 0;
let t;

function add() {
  seconds++;
  $("#timer").text(seconds);
  timer();
}

function timer() {
  t = setTimeout(add, 1000);
}

function reset() {
  seconds = 0;
  $("#timer").text(seconds);
}

function stop() {
  clearTimeout(t);
}



$(document).ready(function() {
    let oldVal;

    function loadProblem() {
        // clear current work
        $('#out').empty();
        $('#user-input').val('');

        // reset styling
        $('#out').parent().removeClass("correct");
        $('#timer').removeClass("done");
        $('#user-input').prop("disabled", false);
        $('#user-input').focus();

        // Reset and start the timer
        reset();
        timer();

        // load problem
        let target = problems[Math.floor(Math.random()*problems.length)];
        // let target = problems[problems.length-1];
        katex.render(target.latex, $("#target")[0], {
            throwOnError: false,
            displayMode: true
        });

        oldVal = "";
    };
    loadProblem();

    $("#user-input").on("change keyup paste", function() {
        let currentVal = $(this).val();
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
                        if (diff < 10) {
                            // Styling changes
                            $('#out').parent().addClass("correct");
                            $('#timer').addClass("done");
                            $('#user-input').prop("disabled", true);

                            // Stop the timer
                            stop();

                            // Load new problem
                            setTimeout(loadProblem, 1500);
                        }
                    }
                });
            }
        });

    });
});
