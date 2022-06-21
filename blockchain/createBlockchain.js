var CryptoJS = require("crypto-js")
var SHA256 = require("crypto-js/sha256")
var express = require('express');
const blkSchema = require("./blkSchema");
var router = express.Router();
var  blockChainSchema =require('./blkSchema')
require('./mongoose')



class Block{
    constructor(index,firstName,adharNumber,previousHash=""){
        this.index=index
        this.firstName=firstName
        this.adharNumber=adharNumber
        this.previousHash=previousHash
        this.hash=this.calculateHash();
    }
  
    calculateHash(){
        return SHA256(this.index+this.previousHash+JSON.stringify(this.firstName)+this.adharNumber).toString()
    }

    // mineBlock(difficulty){
    //     while()
    // }
}

class Blockchain{
    constructor(){
        this.chain=[this.createGensisBlock()]

    }

    createGensisBlock(){
        return new Block(0,"GensisBlock","NULL","0")
    }

    getLatestBlock(){
        return this.chain[this.chain.length-1]
    }

    addBlock(newBlock){
        newBlock.previousHash=this.getLatestBlock().hash
        newBlock.hash=newBlock.calculateHash()
        newBlock.index=this.getLatestBlock().index+1
        this.chain.push(newBlock)
            let BlockC=new blockChainSchema({index:newBlock.index,firstName:newBlock.firstName,adharNumber:newBlock.adharNumber,ppreviousHash:newBlock.previousHash,currentHash:newBlock.hash},'blockChainSchema')
            BlockC.save()
          
    }

    isChainValid(){
        for(let i=1;i<this.chain.length;i++){
            const currentBlock=this.chain[i]
            const previousBlock=this.chain[i-1]
            if(currentBlock.hash !==currentBlock.calculateHash()){
                return false
            }
            if(currentBlock.previousHash !==previousBlock.hash){
                return false
            }
            return true
        }
    }
}

 

// const app=express()
// const port= process.env.PORT||3000

// app.use(express.json())

// app.use(router)

module.exports = {
    Blockchain,Block
  };
