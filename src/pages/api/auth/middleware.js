import jwt from "jsonwebtoken";

export default async function handler(req, res, next) {
    // console.log('reqqq', req)
    console.log('reqqq|||', req)
    console.log('reqqq', req.headers['x-auth-token'])
    // console.log("req.header('x-auth-token')", req.header('x-auth-token'))
    // const token = req.header('x-auth-token');
    // const token = req.body.header('x-auth-token');
    // const token = req.body.headers['x-auth-token'];
    const token = req.headers['x-auth-token'];

    if (!token) {
        return res.status(401).json({ success: false, msg: 'Authorization denied, token missing' })
    }

    console.log('tokem', token)

    try {
        // const decoded = await jwt.verify(token, 'fahad');
        const decoded = jwt.verify(token, 'fahad');

        console.log('decodedd', decoded)

        req.email = decoded.email
        req.password = decoded.password
        return next
    } catch (err) {
        return res.status(401).json({ success: false, msg: "Invalid Token" })
    }
}