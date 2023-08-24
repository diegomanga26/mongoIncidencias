import { plainToClass, classToPlain } from 'class-transformer';
import dotenv from 'dotenv';
import { Router } from 'express';
import { SignJWT, jwtVerify } from 'jose';
dotenv.config('../');

const tokenJWT = Router();
const validateJWT = Router();

tokenJWT.use("/:collection", async (req, res) => {
    try {
        const collectionName = req.params.collection;
        const inst = createInstance(collectionName);
        if (!inst)
            return res.status(404).send({ status: 404, message: "colección no encontrada" })

        const encoder = new TextEncoder();
        const jwtconstructor = new SignJWT(Object.assign({}, classToPlain(inst)));
        const jwt = await jwtconstructor
            .setProtectedHeader({ alg: "HS256", typ: "JWT" })
            .setIssuedAt()
            .setExpirationTime("30m")
            .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
        res.status(201).send({ status: 201, message: jwt });
    } catch (error) {
        res.status(404).send({ status: 404, message: 'Token solicitado no existente' })
    }
});

validateJWT.use("/", async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(400).send({ status: 400, token: "Token no enviado" });
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );
        req.data = jwtData;
        next();
    } catch (error) {
        res.status(498).send({ status: 498, token: "Token caducado" });
    }
})

export {
    tokenJWT,
    validateJWT
}