const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Luffy", "Naruto", "Akp"],       // Names
        ["https://imagizer.imageshack.com/img922/315/PL0xlQ.jpg", // Images
            "https://imagizer.imageshack.com/img924/3237/9qCyDZ.jpg",
            "https://imagizer.imageshack.com/img922/9290/gbDivj.png"],
        [100, 200, 300],                    // HP values
        [100, 50, 200],                       // Attack damage values
        "Maadara", // Boss name
        "https://imagizer.imageshack.com/img922/5108/g3dVBO.jpg", // Boss image
        10000, // Boss hp
        50 // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
    let txn;
    // We only have three characters.
    // an NFT w/ the character at index 2 of our array.
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
    txn = await gameContract.attackBoss();
    await txn.wait();
    txn = await gameContract.attackBoss();
    await txn.wait();
    txn = await gameContract.attackBoss();
    await txn.wait();
    txn = await gameContract.attackBoss();
    await txn.wait();
    txn = await gameContract.attackBoss();
    await txn.wait();
    txn = await gameContract.attackBoss();
    await txn.wait();
    txn = await gameContract.attackBoss();
    await txn.wait();
    txn = await gameContract.attackBoss();
    await txn.wait();

    // // Get the value of the NFT's URI.
    // let returnedTokenUri = await gameContract.tokenURI(1);
    // console.log("Token URI:", returnedTokenUri);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();