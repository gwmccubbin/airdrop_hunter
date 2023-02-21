# Airdrop Hunter

## Technology Stack & Tools

- Solidity (Writing Smart Contract)
- Javascript (React & Testing)
- [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [Alchemy](https://www.alchemy.com/) (Blockchain Connection)
- [Netlify](https://www.netlify.com/) (Cloud Service)

## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/). We recommend using the latest LTS (Long-Term-Support) version, and preferably installing NodeJS via [NVM](https://github.com/nvm-sh/nvm#intro).
- Create an [Alchemy](https://www.alchemy.com/) account, you'll need to create an API key, and use the Goerli RPC URL for testing.
- Create a [Netlify](https://www.netlify.com/) account.

## Setting Up
### 1. Clone/Download the Repository

### 2. Create a GitHub Repository
Create a GitHub repository at [https://github.com/new](https://github.com/new).

### 3. Connect to GitHub Repository
In your terminal, execute:
`git remote set-url origin <GIT_URL>`

For the **GIT_URL**, this will be the .git link to your personal repository on GitHub.

### 4. Push to GitHub Repository
In your terminal, execute:
`git push origin master`

### 5. Login to Netlify
Once logged in to Netlify, under the **Team overview** tab, scroll down to **Sites** and click on **Import from Git**

Connect to your GitHub account, select the repository you created, and click **Deploy site**

### 6. Configure Environment Variables
While looking at the site's configuration, at the top tab, click on **Site settings**.

On the sidebar, click on **Environment variables**, then click on **Add a variable**.

Here you can add an environment variable, you'll need to add 9 variables:

- **RPC_URL=""** (Alchemy RPC URL)

- **PRIVATE_KEY_1=""**
- **PRIVATE_KEY_2=""**
- **PRIVATE_KEY_3=""**
- **TRANSFER_AMOUNT="10000000"** (10 USDC)

- **TOKEN_ADDRESS="0x07865c6E87B9F70255377e024ace6630C1Eaa37F"** (USDC on Goerli)
- **WETH_ADDRESS="0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6"** (WETH on Goerli)

- **V2_ROUTER_ADDRESS="0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"** (Uniswap V2 Router on Goerli)
- **SWAP_AMOUNT="25000000000000000"** (0.025 ETH)

### Note
If you've set the environment variables after deployment has finished you may want to redeploy. Under the **Deploys** tab, you'll see a list of previous deploys done, there should be a drop down titled **Trigger deploy**. Click on the dropdown, and select the **Clear cache and deploy site** to redeploy the site.