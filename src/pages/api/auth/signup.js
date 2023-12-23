import connectDB from "../../../../config/db"
import User from "@/model/users"
import bcryptjs from "bcryptjs"

export default async function handler(req, res) {

    connectDB()

    const { username, email, password } = req.body

    const user = await User.findOne({ email })

    if (user) {
        return res.json({ success: false, msg: "User with this email alread exists" })
    }

    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt)

    const newUser = new User({ username, email, password: hashedPassword })

    const savedUser = await newUser.save()

    console.log('savedUser', savedUser)

    return res.json({ success: true, msg: 'User successfully created', savedUser })
} 