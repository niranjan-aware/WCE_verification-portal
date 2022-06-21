const {Blockchain}=require('../blockchain/createBlockchain')
const {Block}=require('../blockchain/createBlockchain')

let Coin =new Blockchain();
Coin.addBlock(new Block("","niranjan",123456789012))
Coin.addBlock(new Block("","sahil",123456789012))
Coin.addBlock(new Block("","rushi",123456789012))
console.log(JSON.stringify(Coin,null,4))