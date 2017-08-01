'use strict'

// const keccak256 = require('js-sha3').keccak256
const createKeccakHash = require('keccak/js')
const secp256k1 = require('secp256k1')

var EcdsaSignatureDynamicValue = function() {

  this.evaluate = function(context) {
    return sign(this.message, this.privateKey)
  }

  this.title = function(context) {
    return 'ECDSA Signature'
  }

  // this.text = function(context) {
  //   return this.number.toString() + "!";
  // }

}

EcdsaSignatureDynamicValue.identifier = "com.tallysticks.EcdsaSignatureDynamicValue"
EcdsaSignatureDynamicValue.title = "ECDSA Signature"
EcdsaSignatureDynamicValue.help = "http://tallysticks.io"

EcdsaSignatureDynamicValue.inputs = [
  InputField("message", "Message", "String"),
  InputField("privateKey", "Private key", "String"),
]

registerDynamicValueClass(EcdsaSignatureDynamicValue)

function sign(message, privateKey) {
  const hash = createKeccakHash('keccak256').update(message).digest()
  const sigObj = secp256k1.sign(hash, Buffer.from(privateKey, 'hex'))
  return sigObj.signature.toString('hex')
}