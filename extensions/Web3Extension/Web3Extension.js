function add(value1, value2) {
    var result;
    result = value1 + value2;
    return result;
}

async function connectWallet() {
    console.log("Connect to wallet ...");
    var map = {};
    map["id"] = "getWalletAddress";
    map["address"] = "0";
    const { address, publicKey } = await window.aptos.connect();
    console.log("ADDRESS: " + address);
    map["address"] = address;
    GMS_API.send_async_event_social(map);
}