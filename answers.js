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


// Q-2: Bangladesh Weekend Machine
function getDayType(day){
    switch (String(day).toLowerCase()){
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        default:
            return "Invalid day";
    }
}

// Q-3:Username Gatekeeper
function validateUsername(username){
    if (username.length < 4){
        return "Too Short";
    }
    if(username.includes(" ")){
        return "No Spaces Allowed";
    }
    if(username.toLowerCase().includes("admin")){
        return "Reserved Word";
    }
    return "Available";
}

console.log(validateUsername("admin_rahim"));