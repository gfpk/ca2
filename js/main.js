window._skel_config = {
    prefix: 'css/skel/style',
    preloadStyleSheets: true,
    resetCSS: true,
    boxModel: 'border',
    grid: { gutters: 20 },
    breakpoints: {
        wide: { range: '1200-', containers: 1140, grid: { gutters: 10 } },
        narrow: { range: '481-1199', containers: 960 },
        mobile: { range: '-480', containers: 'fluid', lockViewport: true, grid: { collapse: true } }

    },
};

$(document).ready(function() {
    $("#addBtn").click(function() {
        var num1 = $("#num1").val();
        var num2 = $("#num2").val();


        if ((num1.length == 0) || (num2.length ==0)){
                alert("need two numbers Hombre")
        }

        else {
            $("#result").val(Calculator.addIt(num1, num2));
        }
    });









    $("#clearbutton").click(function() {
        $("#num1").val('');
        $("#num2").val('');
    });

});