import User from "@/model/users"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import connectDB from "../../../../config/db"

export default async function handler(req, res) {
    const { email, password } = req.body
    console.log('req.body', req)

    // let email = req.email
    // let password = req.password

    try {
        connectDB()
        const user = await User.findOne({ email })

        if (!user) {
            return res.json({ success: false, msg: "User with this email does not exist" })
        }

        const matchedPassword = await bcryptjs.compare(password, user.password)


        if (!matchedPassword) {
            return res.json({ success: false, msg: "Incorrect Password" })
        }

        jwt.sign({ email: user.email, password: user.password }, 'fahad', {
            expiresIn: '1h'
        }, (err, token) => {
            if (err) throw err;
            return res.json({ token })
        })
    } catch (err) {
        return res.json({ success: false, msg: "Server has issue" })
    }


} 