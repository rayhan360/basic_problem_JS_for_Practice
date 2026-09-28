// Q-1: Value Detective
function describeValue(value) {
    let truthiness;
    if (value){
        truthiness = "truthy";
    }else{
        truthiness = "falsy";   
    }

    const result = `${typeof value} | ${truthiness}`;
    return result;
}


// Q-2
