const crypto = require("crypto")
import PASSPHRASE from "../config/passphrase"

function decrypt(privateKey){
    const decryptedData = crypto.privateDecrypt(
        {
            key: privateKey,
            // In order to decrypt the data, we need to specify the
            // same hashing function and padding scheme that we used to
            // encrypt the data in the previous step
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha512",
            passphrase: PASSPHRASE
        },
        encryptedData
    )
    
    // The decrypted data is of the Buffer type, which we can convert to a
    // string to reveal the original data
    let data = decryptedData.toString()
    console.log("decrypted data: ", data)
    return data
}

module.exports = decrypt