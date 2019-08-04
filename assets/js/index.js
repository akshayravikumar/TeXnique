$(document).ready(function() {
    let target = problems[Math.floor(Math.random()*problems.length)];
    // let target = problems[problems.length-1];
    katex.render(target.latex, $("#target")[0], {
        throwOnError: false,
        displayMode: true
    });

    let oldVal = "";
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
                            result = "Nice! :D";
                            $('#out').parent().addClass("correct");
                        } else {
                            result = "Rip. :("
                        }
                        // $("#result").text(result);
                    }
                });
            }
        });

    });
});
