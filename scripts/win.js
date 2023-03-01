// add the game address here and update the contract name if necessary
const gameAddr = "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82";
const contractName = "Game5";

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  // do whatever you need to do to win the game here:

  // --------- game 2
  // const tx0 = await game.setX(20);
  // await tx0.wait();
  // const tx1 = await game.setY(30);
  // await tx1.wait();

  // --------- game 3
  // const tx = await game.win(45);

  // --------- game 4
  // const tx = await game.win(56);

  // --------- game 5
  const tx0 = await game.giveMeAllowance(11000);
  await tx0.wait();
  const tx1 = await game.mint(11000);
  await tx1.wait();

  const tx = await game.win();

  // did you win? Check the transaction receipt!
  // if you did, it will be in both the logs and events array
  const receipt = await tx.wait();
  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
