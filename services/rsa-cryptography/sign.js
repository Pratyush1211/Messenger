const crypto = require("crypto")
import PASSPHRASE from '../config/passphrase'

function sign(verifiableData, privateKey){

    // The signature method takes the data we want to sign, the
    // hashing algorithm, and the padding scheme, and generates
    // a signature in the form of bytes
    const signature = crypto.sign("sha512", Buffer.from(verifiableData), {
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
        passphrase: PASSPHRASE
    })

    let signature = signature.toString("base64") 
    console.log(signature)
    return signature
}

module.exports = sign