module.exports =
{
    //input: {'respuesta': 'OK'}
    f1_201612331: function(json_input)
    {
        try {
            let response = JSON.parse(JSON.stringify(json_input));
            return response.respuesta
        } catch (error) {
            return null;
        }
    },
    //potencia retorno json
    f2_201612331: function(a, b)
    {
        try {
            let multiply = a ** b;
            let response = `{"response": ${multiply}}`;
            return response;
        } catch (error) {
            return null;
        }
    },
    f3_201612331: function (value_input)
    {
        try {
            if(value_input == 'OK') return 200;
            else return 404;
        } catch (error) {
            return null;
        }
    },

    f4_201612331: function (reverse)
    {
        try {
            var splitString = reverse.split("")
            var reverseArray = splitString.reverse()
            var joinArray = reverseArray.join("")
            return joinArray
        } catch (error) {
            return null;
        }
    },
    f5_201612331 :function (string_min)
    {
        try {
            return string_min.toUpperCase();
        } catch (error) {
            return null;
        }
    }

}
