//Problem : 1
function anaToVori(ana) {
    var vori = ana/16;
    if (ana < 0) {
    return 'Error: The value cannot be negative';
    }
    else if (ana == undefined) {
    return 'Error: The value cannot be empty';
    }
    else {
    return vori;
    }
    }
    const getVori = anaToVori(32);
    console.log(getVori);
    //problem : 2
    function pandaCost(singara, samucha, zilapi) {
    var sum = singara * 7 + samucha * 10 + zilapi * 15;
    if (singara == undefined || samucha == undefined || zilapi == undefined) {
    return 'Error: You have to give three values';
    }
    else if (singara < 0 || samucha < 0 || zilapi < 0) {
    return 'Error: Negative values are not allowed'
    }
    else {
    return sum;
    }
    }
    const getTotal = pandaCost(2,3,4);
    console.log(getTotal);
    //problem : 3
    function picnicBudget(member) {
    var cost = 0;
    if (member <= 100) {
    cost = member * 5000;
    }
    else if (member <= 200) {
    var firstHundredMembers = 100 * 5000;
    var remainingMembers = member- 100;
    var secondHundredMembers = remainingMembers * 4000;
    cost = firstHundredMembers + secondHundredMembers;
    }
    else {
    var firstHundredMembers = 100 * 5000;
    var secondHundredMembers = 100 * 4000;
    var remainingMembers = member - 200;
    var lastMembers = remainingMembers * 3000;
    cost = firstHundredMembers + secondHundredMembers + lastMembers;
    }
    if (member < 0) {
    return 'Error: The value cannot be negative';
    }
    else if (member == undefined) {
    return 'Error: The value cannot be empty';
    }
    else {
    return cost;
    }
    }
    const totalCost = picnicBudget(205);
    console.log(totalCost);
    //Problem : 4
    function oddFriend(input){
    for(let odd of input){
    if(odd.length % 2 !== 0){
    return odd;
    }
    }
    }
    const input=['Zain','aoyon','arif','tamim'];
    console.log(oddFriend(input));