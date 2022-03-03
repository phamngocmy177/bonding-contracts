async function main() {
  const BondContract = await ethers.getContractFactory("Bond");
  // //uniswap token rewards
  // const bondgContract = await BondContract.deploy(
  //   "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
  //   "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
  // );

  // console.log("My Contract deployed to:", stakingContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
