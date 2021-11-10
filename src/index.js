import argon2 from "argon2-browser";

function _ezhash() {
    console.info('ezhash initialized!');
    return {
        argon2,
        argonHash,
        argonVerify,
    };
}

export async function argonHash(
    pass,
    salt = null,
    time = 1000,
    mem = 1024,
    hashLen = 24,
    parallelism = 1,
    secret = null,
    ad = null,
    type = argon2.ArgonType.Argon2id,
) {
    if (salt === null) {
        salt = crypto.randomUUID().replaceAll('-', '');
    }

    const hash = await argon2.hash({
        // required
        pass,
        salt,
        // optional
        time, // the number of iterations
        mem, // used memory, in KiB
        hashLen, // desired hash length
        parallelism, // desired parallelism (it won't be computed in parallel, however)
        secret, // optional secret data
        ad, // optional associated data
        type, // Argon2d, Argon2i, Argon2id
    });

    return {
        salt,
        hash
    };
}

export async function argonVerify(
    pass,
    encoded = 'enc-hash',
    secret = null,
    ad = null,
    type = argon2.ArgonType.Argon2id,
) {
    const result = await argon2.verify({
        // required
        pass,
        encoded,
        // optional
        secret, // optional secret data
        ad, // optional associated data
        type, // Argon2d, Argon2i, Argon2id, default:guess
    });

    return result;
}

export const instance = _ezhash();