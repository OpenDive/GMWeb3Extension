
async function connectWallet() {
    var map = {};
    map["id"] = "getWalletAddress";
    map["address"] = "0";
    const { address, publicKey } = await window.aptos.connect();
    console.log("ADDRESS: " + address);
    map["address"] = address;
    GMS_API.send_async_event_social(map);
}