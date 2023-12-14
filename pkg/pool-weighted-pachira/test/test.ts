// scripts/deployAndInteract.ts
import { ethers } from 'hardhat';
import { HelloWorld } from '../typechain';

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying and interacting with the contract...');

  // Deploy the contract
  const HelloWorldFactory = await ethers.getContractFactory('HelloWorld');
  const helloWorld = await HelloWorldFactory.deploy();
  await helloWorld.deployed();

  console.log('Contract deployed to address:', helloWorld.address);

  // Interact with the deployed contract
  const message = await helloWorld.getMessage();
  console.log('Message:', message);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });