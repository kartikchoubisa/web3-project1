require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/uWclKPe3HxtQSumBI_zHpqAN8KNjtmFk',
      accounts: ['080b6b8da49da77800a6868a5b9ffe28ca438a6a0b3262dd87beb73e456e120b'],
    },
  },
};