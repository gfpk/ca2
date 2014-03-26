var Calculator = (function() {





    // Public methods here
    return {
        addIt: function(num1, num2) {

            if ((isNaN(num1) == true) || (isNaN(num2) == true)  ) {
                throw new Error ("at least of fields is not an number");
            }
            result = (parseInt(num1)+ parseInt(num2));

            return result;
        },

        subtractIt: function(num1, num2) {

            if ((isNaN(num1) == true) || (isNaN(num2) == true)  ) {
                throw new Error ("at least of fields is not an number");
            }
            result = (parseInt(num1)- parseInt(num2));

            return result;
        },

        multiplyIt: function(num1, num2) {

            if ((isNaN(num1) == true) || (isNaN(num2) == true)  ) {
                throw new Error ("at least of fields is not an number");
            }
            result = (parseInt(num1)* parseInt(num2));

            return result;
        },

        divideIt: function(num1, num2) {

            if ((isNaN(num1) == true) || (isNaN(num2) == true)  ) {
                throw new Error ("at least of fields is not an number");
            }
            else if (num2 == 0  ) {
                throw new Error ("Cannot divide by '0' Hombre");
            }
            result = (parseInt(num1)/ parseInt(num2));

            return result;
        }

    }
}())