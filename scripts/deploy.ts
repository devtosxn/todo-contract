import { ethers } from "hardhat";


const main = async () => {
  const TodoFactory = await ethers.getContractFactory("Todo");
  const todo = await TodoFactory.deploy();

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
