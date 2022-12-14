const hre = require("hardhat");

const main = async ()=>{
    const [owner, superCoder] = await hre.ethers.getSigners();
    const domainContractFactory = await hre.ethers.getContractFactory("Boss");
    const domainContract = await domainContractFactory.deploy("Boss Baby","BB",
    "ipfs://QmUbLWBnWcg1RzfYYDaG7yptHWMdq9tmnhVBpG8z47VKoo/", 
    "ipfs://QmcLkK5x1QW3v3etFZrxq9Wg8UGc3exQYj2Y73cwXoskFs/");
    await domainContract.deployed()
    console.log("contract depolyed to : ", domainContract.address)

    //After deployed access contract
//    const domainContract = await ethers.getContractAt("Boss", "0xcb4026b2C94347214C8b44a535a2E04d4719CB75");
   const reveal = await domainContract.reveal();
   console.log("reveal",reveal);

    const disableWhitelist = await domainContract.setOnlyWhitelisted(false);
    console.log("disableWhitelist",disableWhitelist)
    // let whitelistUsers = await domainContract.whitelistUsers(
    //     [
    //         "0xd510e5719E13fE6b8a4085A1C908aBf42A274E38",
    //         "0x33FECEb91256b22Ef1c8Ff3BE04b85E3b9Dae5A0",
    //         "0x840fb996d57DC7A65AecCB6b1198369261FD45f3",
    //         "0xeaB3D31283605c1730658304029e13F1b8f79BE3",
    //         "0xE8DF3b34F6AA7F96d79eF5d0D9d040eE3146CACE",
    //         "0x46D13FaCE7e3209845Afb30Bc493830883fc1c39",
    //         "0xdd8A5C81299C549856b66680e30A77a0Bc9f96Dc",
    //         "0x70c71C697f07644a6872aa118B062fa4e131C8C4",
    //         "0xf0385478eF8BA85CB5db60C89C5214a4Fe5B028f",
    //         "0xDEadb7d1441CF8240eb6EB0D27dB9ba69b19eC11",
    //         "0x2cd83CEF6A2d7e72E811e181C550735cE188653a",
    //         "0x5F670e6989A61288EABC9c1901648999b1153925",
    //         "0xfbA94B3371bfE88563921F3DF9F319FB8Fda1182",
    //         "0x406eDC9FfbEC8BDa34EF599ee62358dE7EB592d6",
    //         "0x1D19dA85322C5F14201bE546c326E0e6f521B6E6",
    //         "0x592d4fe19a2e3577E574945303bc7c6ea864d115",
    //         "0x6e52ED03682545DF3Ed9ebeB8E73AFc16c9448c1",
    //         "0x65c6DC89FCC1a7bdf604aAB25066534687b52681",
    //         "0x90945Be9Bff172021345184035E7bC3B7041E532",
    //         "0xa6A6062c3b1b18Bd23d384B3F3300D7821a96D79",
    //         "0xE386d2C575e6793560064c8BACD5ab63159b6d5C",
    //         "0xCA95644867c9C52421057ff0a84e2Cda0DbDaA1A",
    //         "0xDBd90d084ba4b565C3b47E9fe22E83ab57120d39",
    //         "0xF8260f898aaBDb443B282276c0F10b0d80BA3D64",
    //         "0x004070e8Cc7851A9541Fb745f2D5120c002948fD",
    //         "0x8E8d5c1ad7983F9967B49aCCB7cbdAcd08150d57",
    //         "0xB70e17795630Bd2CA14C10672eC98Cd2A4005EFb",
    //         "0x700C12C46E7986F1dC97f221CbD6aCcECB11e780",
    //         "0x4CB11cc4Ce988B40a6C20E798904199519a665fa",
    //         "0x29d965968CD276D138902d7D49C12fC89304b645",
    //         "0x3346Ff7B85C0b9a674e029a75748a42614b66161",
    //         "0xc6F38CA3B9F12a7C9B17c6d8E832779adC4F548D",
    //         "0xe7D8463a7e4e23E8CfB3ffBFd61940FDD5431695",
    //         "0x2aC3539A17DD6F4655532772b0273f0EF36524CA",
    //         "0x3016e04d44D39848EBa32A6672E24C452eB1351D",
    //         "0x8767C8b66c2438e4aEB6736524d7840Af0C35723",
    //         "0xF42D50F911a8fCc8AD45210848fB0621E6f6065F",
    //         "0x467B95deA18dBd8AE2C19743f823E653D89fD6Ff",
    //         "0x7c482D493cE05e7365b49Fbe84D8860b0EFb8986",
    //         "0xe7d390A851186372217a055a5caD117da91DB8Ae",
    //         "0x5224Bb8c9F7E61E7C3B144Eb0F2663650A4f4C79",
    //         "0x6D821caA538228BDf622FC84fb4DD719DecA55c3",
    //         "0x88aaeaa930168Ad41D82D33fa4CCEb5a8f53Ddd3",
    //         "0xC5025F423C4bF2e40f759C21B528F6DC360210cD",
    //         "0xB0Ed0e9e41Aa579696D006A3a6778BA7b381ED14",
    //         "0x8bAb278A079022eC9150365C0b1F61db243b56f9",
    //         "0x205b43e9640DC9d55380dF9b305892884F9490Aa",
    //         "0xE16Abd5205ad67A9369524f530d3ACdB7ddA6618",
    //         "0x5B3FE5b83917E301C0B69097FF8F507d1fd1122c",
    //         "0x7C9D4CfD530BE4ae1DA52d77D0470da85D738E2d",
    //         "0x12f4d99a7249E194a0b7990a3db41546cC1b1A7c",
    //         "0xf824256ff86B14b91C0216D9E7b732899ae5fBad",
    //         "0x406eDC9FfbEC8BDa34EF599ee62358dE7EB592d6",
    //         "0x29d965968CD276D138902d7D49C12fC89304b645",
    //         "0x40E74d28Ee815286c8AEE1bC271E9360dA2a9692",
    //         "0x5D92B2e8b551b2751734EE53f721e282952352F4",
    //         "0xD8430211a7FE6086bC336A3fF9bdBD6Af5D2433F",
    //         "0x6bd0Ef02363E69BeBEF64a2C411d87d94eaA85c8",
    //         "0x92E4a49fa1C23Bc83666AdDeBEf3876e4b483D56",
    //         "0xfb6140838e08dd410FA683DE1bdF33db5dd6b7f8",
    //         "0xf11e52Cd7A6FA7c77157C8dde1494eB91b635a3a",
    //         "0x41960bC94E5D2F8Eecc373EF5152AEaa25D3e214",
    //         "0xB545E975b14C6d73a996e1D0DfeE32B4979120f2",
    //         "0x607587371985864F81f52763F6e83260E11A6B5F",
    //         "0xbB55D91915a823b8D155d2975a6e01A93B5BF49c",
    //         "0x646b710fDf715FFb853A5659B9E9B953228249C0",
    //         "0x6522320211353657287315b9016a9281E078f6Db",
    //         "0xAD6E4D83C1A0865c15292050e8E0472421309Fa3",
    //         "0x33f6EE932cEa603Fafd6854827259bE172C91Da4",
    //         "0x9711b81f1D6777B114c74fd2EDdDc659e5EB526f",
    //         "0x03a751594162C5C006d593bB88f59ee2eFB68606",
    //         "0xc250493E54C29A8Ed53CF0204d86ABfb7ACed91e",
    //         "0x4C6165286739696849Fb3e77A16b0639D762c5B6",
    //         "0x8de966fb7801bfa3733460c3d389b1163af5ee1f",
    //         "0x9155b032b5033D5c93d61787a0710Ffb7dd806Cb",
    //         "0xE8DF3b34F6AA7F96d79eF5d0D9d040eE3146CACE",
    //         "0x85dA9E13b461E05eEDA05D45Fd8A5F468FB5288f",
    //         "0x3a4A428cfB444f5A5af9369Fd9E972a42137b1Bd",
    //         "0xc5c0f21f79f24dfcda6313d1aea513a7b98d6662",
    //         "0xC47c5D03dFA20E8bc639995862b2B3F917756DfC",
    //         "0x6B7497ad46d7e3AF1a0B9ACC16660f2b76f087B9",
    //         "0x6565219E0bB323E56A7e668fD1e629498C9D9aAe",
    //         "0xc4dF0D10de5d5cEda903330760694e3885D0A433",
    //         "0x124474fdbeCDDEf33732E84c4834fAEe38Ef0C44",
    //         "0x6d6C0c1c38FB3966EFb4a7f7EB68e9Bf73a5e861",
    //         "0x385d5b29DEbdbf54AD98e0B4c6e5d93a7f838fAc",
    //         "0xeD3419BBB6AEC9225D6ccB9DDB4F73007B5F5083",
    //         "0x4e95eEad927bA1aF62B67Ef343F198b6E3559616",
    //         "0x88aaeaa930168Ad41D82D33fa4CCEb5a8f53Ddd3",
    //         "0xa7B94DC626cD8E8ac8Ee5D9E608A52CDF94490C5",
    //         "0x2790994715141617B8e75c0079456d0ED78a6D51",
    //         "0x8E8d5c1ad7983F9967B49aCCB7cbdAcd08150d57",
    //         "0xD1c167E2D91F759FB2125AA4a827D4e21C0Eb99C",
    //         "0xf3b91dBB608087d5Ad41f722A33e297D4702464F",
    //         "0x2c74Fb5eb61E873329E44fc4c07288Fa7A5FCb32",
    //         "0x5e58362fb8919c248935a12278bf9e4f09f6b9a5",
    //         "0x205b43e9640DC9d55380dF9b305892884F9490Aa",
    //         "0x85dA9E13b461E05eEDA05D45Fd8A5F468FB5288f",
    //         "0xB6D55c1Ef1Cf4AaF312591CA3a819d38Ce5cE02f",
    //         "0xC47c5D03dFA20E8bc639995862b2B3F917756DfC",
    //         "0x90c65BcEc6D72A167DeC7537d285B38Abcc92254",
    //         "0xE8DF3b34F6AA7F96d79eF5d0D9d040eE3146CACE",
    //         "0xdb3119E89960B76bD33Ba8C64c06B4be36aE3278",
    //         "0x248e715bc56B0f03743F5eCF6F1495a1F059D984",
    //         "0x4e95eEad927bA1aF62B67Ef343F198b6E3559616",
    //         "0xCA95644867c9C52421057ff0a84e2Cda0DbDaA1A",
    //         "0x4B96ed995C83e2254389D3D6dD0EfA394BBAE421",
    //         "0x6BFb096e34D28De369F45E24bC0B8733cA2942FA",
    //         "0x2A10ba89dFcc92563F8115E2FAb966C3Fc1375bF",
    //         "0xe762DA1eda105d68F4801394636830A83763b1b0",
    //         "0x205b43e9640DC9d55380dF9b305892884F9490Aa",
    //         "0xB0Ed0e9e41Aa579696D006A3a6778BA7b381ED14",
    //         "0xC9B7C325b26dbca6eCCEAA2E0f2148B7aD242Ca5",
    //         "0x5f39045DB4775953e4c4F749AFde061AD88fEAA8",
    //         "0xC47c5D03dFA20E8bc639995862b2B3F917756DfC",
    //         "0x12a86c453392A35371DFa94D7569E18438Db26a4"
    //         ]
    // );
    // console.log("whitelistUsers",whitelistUsers);

    // let iswhitelisted = await domainContract.isWhitelisted("0xeaB3D31283605c1730658304029e13F1b8f79BE3");
    // console.log("iswhitelisted",iswhitelisted);

    let setDR = await domainContract.mint(2,{value: hre.ethers.utils.parseEther("10")});
    await setDR.wait();

    let tokenURI = await domainContract.tokenURI(1);
    console.log("tokenURI",tokenURI);

    let walletOfOwner = await domainContract.walletOfOwner(owner.address);
    console.log("walletOfOwner",walletOfOwner);

    // let whitelistUsers = await domainContract.whitelistUsers([superCoder.address]);
    // console.log("whitelistUsers",whitelistUsers);

    // let iswhitelisted = await domainContract.isWhitelisted(superCoder.address);
    // console.log("iswhitelisted",iswhitelisted);

    // // set white list nft mint limit 2
    // let setNftPerAddressLimit = await domainContract.setNftPerAddressLimit(2);
    // console.log("setNftPerAddressLimit",setNftPerAddressLimit);

    let setCost = await domainContract.setCost(hre.ethers.utils.parseEther("55"));
    console.log("setCost",setCost);

    // let getCost = await domainContract.cost;
    // console.log("getCost",getCost);

    // const bal = await hre.ethers.provider.getBalance(superCoder.address);
    // console.log("contract bef : ", hre.ethers.utils.formatEther(bal));
    // let setDR1 = await domainContract.connect(superCoder).mint(1,{value: hre.ethers.utils.parseEther("20")});
    // await setDR1.wait();
    // let setDR2 = await domainContract.connect(superCoder).mint(1,{value: hre.ethers.utils.parseEther("20")});
    // await setDR2.wait();

    // // let setDR3 = await domainContract.connect(superCoder).mint(1,{value: hre.ethers.utils.parseEther("20")});
    // // await setDR3.wait();
    // const bal1 = await hre.ethers.provider.getBalance(superCoder.address);
    // console.log("contract after : ", hre.ethers.utils.formatEther(bal1));

    // let walletOfOwner1 = await domainContract.connect(superCoder).walletOfOwner(superCoder.address);
    // console.log("walletOfOwner1",walletOfOwner1);

    // await domainContract.reveal()
    // let tokenURI1 = await domainContract.tokenURI(1);
    // console.log("tokenURI1",tokenURI1);
    
}

const runMain = async ()=>{
    try {
        await main()
        process.exit(0);
    } catch (error) {
        console.log("error: ",error)
        process.exit(1)
    }
}

runMain();