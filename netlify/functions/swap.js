const { schedule } = require("@netlify/functions");
const { ethers } = require("ethers")
require("dotenv").config()

const IUniswapV2Router02 = require('@uniswap/v2-periphery/build/IUniswapV2Router02.json')

const handler = async function (event, context) {
  console.log("Received event:", event);

  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)

  const ACCOUNT_1 = new ethers.Wallet(process.env.PRIVATE_KEY_1, provider)

  const V2_ROUTER = new ethers.Contract(process.env.V2_ROUTER_ADDRESS, IUniswapV2Router02.abi)

  const PATH = [process.env.WETH_ADDRESS, process.env.TOKEN_ADDRESS]
  const DEADLINE = Math.floor(Date.now() / 1000) + 60 * 10 // 10 minutes

  const transaction = await V2_ROUTER.connect(ACCOUNT_1).swapExactETHForTokens(
    0,
    PATH,
    ACCOUNT_1.address,
    DEADLINE,
    { value: process.env.SWAP_AMOUNT }
  )

  console.log(`Swap Complete!`)
  console.log(`See transaction at: https://goerli.etherscan.io/tx/${transaction.hash}/`)

  return {
    statusCode: 200,
  }
}

exports.handler = schedule("@daily", handler)