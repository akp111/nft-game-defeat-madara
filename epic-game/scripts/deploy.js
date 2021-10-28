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
    txn = await gameContract.mintCharacterNFT(0);
    await txn.wait();
    console.log("Minted NFT #1");
  
    txn = await gameContract.attackBoss();
    await txn.wait();
  
    txn = await gameContract.attackBoss();
    await txn.wait();
  
  
    console.log("Done deploying and minting!");
  
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