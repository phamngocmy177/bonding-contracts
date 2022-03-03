async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const BondContract = await ethers.getContractFactory("Bond");
  // const bondContract = await BondContract.deploy(
  //   "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
  //   "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
  // );

  // console.log("stakingContract address:", bondContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
