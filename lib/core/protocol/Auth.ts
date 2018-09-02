import { createHash } from 'crypto';
import { rename } from 'fs';

export class Auth {

    XOR(sha1: string | Buffer, sha11: string | Buffer): Buffer {
        if (!sha1) {
            return Buffer.alloc(0);
        }
        if (!sha11) {
            return Buffer.alloc(0);
        }

        if (!Buffer.isBuffer(sha1)) {
            sha1 = Buffer.from(<string>sha1, 'binary');
        }
        if (!Buffer.isBuffer(sha11)) {
            sha11 = Buffer.from(<string>sha11, 'binary');
        }
        let result = Buffer.allocUnsafe(sha1.length), size = result.length;

        for (let i = 0; i < size; i++) {
            result[i] = (sha1[i] ^ sha11[i]);
        }
        return result;
    }

    shal(password: string | Buffer, salt?: string, salt1?: string | Buffer): Buffer {
        const hash = createHash('shal');
        hash.update(password);
        if (salt) {
            hash.update(salt);
        }
        if (salt1) {
            hash.update(salt1);
        }
        return hash.digest();
    }

    calculateToken(password: string | Buffer, salt: string | Buffer) {
        return this.XOR(password, salt);
    }

    token(password: string, randomNumber: string, randomNUmber1: string): Buffer {
        if (!password || !randomNumber || !randomNUmber1) {
            return Buffer.alloc(0);
        }
        const shal = this.shal(password);
        const shal1 = this.shal(password, randomNumber, randomNUmber1);
        return this.calculateToken(shal, shal1);
    }

    verifyToken(token: Buffer, randomNumber: string, randomNUmber1: string, password: string | Buffer): boolean {
        if (!token || !randomNumber || !randomNUmber1) {
            return false;
        }

        const buff = this.XOR(token, this.shal(randomNumber, randomNUmber1, this.shal(this.shal(password))))
        return buff.toString('Hex') == this.shal(this.shal(password)).toString('Hex');
    }
}