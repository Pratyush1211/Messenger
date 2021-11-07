const crypto = require("crypto")

function verify(verifiableData, publicKey){
    // To verify the data, we provide the same hashing algorithm and
    // padding scheme we provided to generate the signature, along
    // with the signature itself, the data that we want to
    // verify against the signature, and the public key
    const isVerified = crypto.verify(
        "sha512",
        Buffer.from(verifiableData),
        {
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
        },
        signature
    )

    // isVerified should be `true` if the signature is valid
    console.log("signature verified: ", isVerified)
    return isVerified
}

module.exports = verify