// require("@nomiclabs/hardhat-waffle");
import "@nomiclabs/hardhat-ethers";
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config({ path: ".env" });

const {
  ALCHEMY_MAINNET_API_KEY_URL,
  ALCHEMY_RINKEBY_API_KEY_URL,
  ALCHEMY_GOERLI_API_KEY_URL, 
  ALCHEMY_MUMBAI_API_KEY_URL, 
  INFURA_ROPSTEN_API_KEY_URL,
  ACCOUNT_PRIVATE_KEY,
  ETHERSCAN_API_TOKEN
 } = process.env

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      forking: {
        url: ALCHEMY_MAINNET_API_KEY_URL,
      }
    },
    rinkeby: {
      url: ALCHEMY_RINKEBY_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    ropsten: {
      url: INFURA_ROPSTEN_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    goerli: {
      url: ALCHEMY_GOERLI_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    mumbai: {
      url: ALCHEMY_MUMBAI_API_KEY_URL,
      accounts: [ACCOUNT_PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_TOKEN
  },
  lockGasLimit: 200000000000,
  gasPrice: 10000000000,
};