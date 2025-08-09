function evaluateExpression(expression, variable, values) {
    let val = {};


    variable.forEach((v, i) => {
        val[v] = values[i];
    });
    console.log(val);

    for (let v in val) {
        expression = expression.replace(new RegExp(`\\b${v}\\b`, 'g'), val[v]);
        console.log(expression);
    }

     function sqrt(x) {
        if (x < 0) throw new Error("Negative inside sqrt"); 
        return Math.sqrt(x);
    }

    try {    
        let func = new Function("sqrt", `return ${expression};`);
        let result = func(sqrt);

        if (!Number.isInteger(result))
            console.log("float");
             result = Number(result.toFixed(2));
        return result;
    }
    catch(e)
    {
        return -1;
    }
  
}

console.log(evaluateExpression("sqrt(a - b) + c",
    ['a', 'b', 'c'],
    [9, 4, 3]
));

