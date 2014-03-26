var Calculator = (function() {





    // Public methods here
    return {
        addIt: function(num1, num2) {

            if ((isNaN(num1) == true) || (isNaN(num2) == true)  ) {
                throw new Error ("On of fields is not an number");
            }
            result = num1 + num2;

            return result;
        },

        subtractIt: function(weight) {
           return weight * converterValue;
        }

    }
}())