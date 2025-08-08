function getWorkoutSuggestion(inputTime) {
    let [time, period] = inputTime.split(" ");
    period = period.toLowerCase();
    let [hours, min] = time.split(":");
    
    
    if (hours < 1 || hours > 12 || min < 0 || min > 59 || period !== 'am' && period !== 'pm')
        return "Invalid Time Format";

    if (period === 'am') {
        if (hours >= 5 && hours < 9) {
            return "cardio Session";
        } else if (hours >= 9 && hours < 12) {
            return "strength training";
        }
    } 
    else if (period === 'pm') {
        if (hours === 12 || (hours >= 1 && hours < 5)) {
            return "yoga and flexibility";
        } else if (hours >= 5 && hours < 8) {
            return "high-intensity interval training";
        } else if (hours >= 8){
            return "light stretching and cool down";
        }
    }
    
}

console.log(getWorkoutSuggestion("06:30 AM"));
console.log(getWorkoutSuggestion("10:15 AM"));
console.log(getWorkoutSuggestion("03:00 PM"));
console.log(getWorkoutSuggestion("05:45 PM"));
console.log(getWorkoutSuggestion("11:59 pm"));
 