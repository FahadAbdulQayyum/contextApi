import User from "@/model/users";
import Middleware from "./middleware"
import connectDB from "../../../../config/db";

export default async function handler(req, res) {
    connectDB()
    try {
        Middleware(req, res);
        const email = req.email
        const user = await User.findOne({ email }).select('-password')
        // const user = await User.findOne({ email }).select('-password').select('-__v')
        // const user = await User.findOne({ email }).select(['-password', '-__v', '-username'])
        console.log('usersssss', user)
        return res.status(200).json({ success: true, msg: "Token matched", user })
    } catch (err) {
        return res.json({ success: false, msg: "Server issue" })
    }
}

