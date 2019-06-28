$(document).ready(function() {
    var target = String.raw`c = \sqrt{a^2 + b^2}`;
    katex.render(target, $("#target")[0], {
        throwOnError: false
    });

    var oldVal = "";
    $("#user-input").on("change keyup paste", function() {
        var currentVal = $(this).val();
        if(currentVal == oldVal) {
            return; //check to prevent multiple simultaneous triggers
        }

        oldVal = currentVal;
        //action to be performed on textarea changed
        katex.render(currentVal, $("#out")[0], {
            throwOnError: false
        });

        html2canvas($('#target'),{
            onrendered: function (targetCanvas) {  
                var width = targetCanvas.width;
                var height = targetCanvas.height;
                var targetData = targetCanvas.getContext("2d").getImageData(0, 0, width, height);
                html2canvas($('#out'),{
                    onrendered: function (outCanvas) {  
                        var outData = outCanvas.getContext("2d").getImageData(0, 0, width, height); 
                        var diff = pixelmatch(targetData.data, outData.data, undefined, width, height, {threshold: 0.1});
                        var result = "";
                        if (diff < 10) {
                            result = "Nice! :D";
                        } else {
                            result = "Rip. :("
                        }
                        $("#result").text(result);
                    }
                });      
            }
        });

    });
});