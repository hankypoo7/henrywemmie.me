let cookies = 0;
let power = 0;
let powerCost = 10;
let upgrades = 1
let clickUPGcost = 10000

function clicked() {
    if (power === 0) {
        cookies += 1;
    } else {
        cookies += power;
    }
    document.getElementById("cookiesText").innerHTML = cookies;
}

function powerBuy() {
    if (cookies >= powerCost) {
        power += 1;
        cookies -= cost;
        powerCost = 10 * (1 + (power * 0.1));
        document.getElementById("cookiesText").innerHTML = cookies;
        document.getElementById("powerPerClickText").innerHTML = power;  // Power per click on the left
        document.getElementById("costText").innerHTML = Math.floor(powerCost);  // Update cost text
        document.getElementById("powerOwnedText").innerHTML = power;  // Owned power in the sidebar
    } else {
        console.log('Not enough cookies!');
    }
}

function clickUPG(){
    if (cookies >= clickUPGcost) {
        upgrades += 1;
        cookies -= clickUPGcost;
        clickUPGcost *= 3.5;
        document.getElementById("cookiesText").innerHTML = cookies;
        document.getElementById("powerPerClickText").innerHTML = power;
    } else {
        console.log('Not enough cookies!');
    }
}
