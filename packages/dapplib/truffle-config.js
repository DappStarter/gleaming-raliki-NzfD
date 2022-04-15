require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess glimpse flame suspect notice crime remind equip hockey ensure surge ghost'; 
let testAccounts = [
"0xc755e4153a7751d3618298a5ca1af989903d910af21c98815bb72e90c05e40dc",
"0x81f0e5980cb97747e9609e8eb906943a9aac6f71f059475f595a0a33e344b934",
"0x32b206cbdb0fd248682b8496c36d98307302fdcf8142ba04a3d26472cea2f959",
"0x94a94ea78a841798736dd7299e859b0256850353a3983fce7e61187e56e519b3",
"0x8cdefed7cb44386c14d3b686c33a00298c2372f701b97e798269a53fede2197c",
"0x10ad1a2930233a2f72620b4e212322a316d2f95df146a62c72f04ef9b0513ca9",
"0x0673a7c18367bd5145eae1c05d795259eee6414dcb0b5da618ec4bd0079b1158",
"0x76128afa6ca21b763c4a9bae94efa0d3be9d7e808d4e6f05f5ed551a12a269c2",
"0xd84e68895fc61678e7cae0cb7a86da86c247f159700b83e860664bc17a77b6f9",
"0x511c76500b871f8a56fb779da5081460a71e51115d6bb9fc968743971ff44779"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

