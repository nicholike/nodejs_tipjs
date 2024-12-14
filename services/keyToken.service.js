'use strict';
const keytokenModel = require("../models/keytoken.model");

class KeyTokenService {
    static createKeyToken = async ({ userId, publicKey }) => {
        try {
            const publicKeyString = publicKey.toString();
            console.log("Public key exported:", publicKeyString);  //check debug
            const tokens = await keytokenModel.create({
                user: userId,
                publicKey: publicKeyString,
            })
            console.log("Tokens created:", tokens);  // Log kết quả trả về từ MongoDB

            return tokens ? publicKeyString : null
        } catch (error) {
            console.error("Error creating KeyToken:", error);
            return error
        }
    }
}

module.exports = KeyTokenService;