// 1. The type ok keys we want, which in this case is "rsa"
// 2. An object with the properties of the key
const crypto = require("crypto")


function encrypt(data, publicKey){

	const encryptedData = crypto.publicEncrypt(
		{
			key: publicKey,
			padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
			oaepHash: "sha512",
		},
		// We convert the data string to a buffer using `Buffer.from`
		Buffer.from(data)
	)
	
	// The encrypted data is in the form of bytes, so we print it in base64 format
	// so that it's displayed in a more readable form
	let encryptedString = encryptedData.toString("base64")
	console.log("encypted data: ", encryptedString)
	return encryptedString
}

module.exports = encrypt