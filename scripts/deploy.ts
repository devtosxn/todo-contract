import { ethers } from "hardhat";


const main = async () => {
  console.log("Deploying contract...");

  const TodoFactory = await ethers.getContractFactory("Todo");
  const todo = await TodoFactory.deploy();

  await todo.deployed();

  console.log("Todo Contract deployed to:", todo.address);
  // Deployed Contract Address on Goerli Testnet: 0x2cF7e430AC2Ac5557bd4caD22304282DEf84d580

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
