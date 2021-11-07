const { generateKeyPairSync } = require('crypto');
import PASSPHRASE from '../config/passphrase'

const { publicKey, privateKey } = generateKeyPairSync('rsa', {
	modulusLength: 4096,
	publicKeyEncoding: {
		type: 'spki',
		format: 'pem'
	},
	privateKeyEncoding: {
		type: 'pkcs8',
		format: 'pem',
		cipher: 'aes-256-cbc',
		passphrase: PASSPHRASE
	}
});

console.log('Public KEY ', publicKey)
console.log('Private KEY ', privateKey)

module.exports = { publicKey, privateKey }