// import * as dotenv from "dotenv";
import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "solidity-coverage";
import "@nomiclabs/hardhat-ethers";
import "hardhat-spdx-license-identifier";
import "dotenv/config";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

// dotenv.config();

const PRIVATE_KEY: string | undefined = process.env.PRIVATE_KEY;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts: SignerWithAddress[] = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  paths: {
    artifacts: "./frontend/src/artifacts",
  },

  spdxLicenseIdentifier: {
    overwrite: false,
    runOnCompile: true,
  },

  networks: {
    hardhat: {
      chainId: 1337,
    },
    ftmtest: {
      url: "https://rpc.testnet.fantom.network/",
      chainId: 0xfa2,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    bsctest: {
      url: "https://data-seed-prebsc-2-s2.binance.org:8545/",
      chainId: 97,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    onetest: {
      url: "https://api.s0.b.hmny.io",
      chainId: 1666700000,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};

export default config;
