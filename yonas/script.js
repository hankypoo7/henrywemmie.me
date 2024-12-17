let cookies = 0;
let power = 0;
let powerCost = 10;
let upgrades = 0;
let clickUPGcost = 10000;

function clicked() {
    // Add cookies based on power and upgrades
    cookies += power + upgrades;
    document.getElementById("cookiesText").innerHTML = cookies;
    document.getElementById("powerPerClickText").innerHTML = power + upgrades; // Update power per click
}

function powerBuy() {
    if (cookies >= powerCost) {
        power += 1; // Increase power
        cookies -= powerCost; // Deduct cost
        powerCost = Math.floor(powerCost * 1.3); // Update cost

        // Update DOM
        document.getElementById("cookiesText").innerHTML = cookies;
        document.getElementById("powerCostText").innerHTML = powerCost;
        document.getElementById("powerOwnedText").innerHTML = power;
        document.getElementById("powerPerClickText").innerHTML = power + upgrades;
    } else {
        console.log('Not enough cookies for Power Upgrade!');
    }
}

function clickUPG() {
    if (cookies >= clickUPGcost) {
        upgrades += 1; // Increase upgrades
        cookies -= clickUPGcost; // Deduct cost
        clickUPGcost = Math.floor(clickUPGcost * 2.5); // Update cost

        // Update DOM
        document.getElementById("cookiesText").innerHTML = cookies;
        document.getElementById("boostCostText").innerHTML = clickUPGcost;
        document.getElementById("boostOwnedText").innerHTML = upgrades;
        document.getElementById("powerPerClickText").innerHTML = power + upgrades;
    } else {
        console.log('Not enough cookies for Boost Upgrade!');
    }
}
