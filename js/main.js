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

    }
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
    return false;
    });

    $("#subtBtn").click(function() {
        var num1 = $("#num1").val();
        var num2 = $("#num2").val();
        if ((num1.length == 0) || (num2.length ==0)){
            alert("need two numbers Hombre")
        }
        else {
            $("#result").val(Calculator.subtractIt(num1, num2));
        }
        return false;
    });

    $("#multiBtn").click(function() {
        var num1 = $("#num1").val();
        var num2 = $("#num2").val();
        if ((num1.length == 0) || (num2.length ==0)){
            alert("need two numbers Hombre")
        }
        else {
            $("#result").val(Calculator.multiplyIt(num1, num2));
        }
        return false;
    });

    $("#dividBtn").click(function() {
        var num1 = $("#num1").val();
        var num2 = $("#num2").val();
        if ((num1.length == 0) || (num2.length ==0)){
            alert("need two numbers Hombre")
        }
        if (num2 == 0){
            alert("cannot divide by '0'Hombre")
        }
        else {
            $("#result").val(Calculator.divideIt(num1, num2));
        }
        return false;
    });



    $("#clearbutton").click(function() {
        $("input").val('');
        //$("#num2").val('');
        //$("#result").val('');
        return false;
    });

});