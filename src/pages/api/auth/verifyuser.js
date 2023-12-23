import User from "@/model/users";
import Middleware from "./middleware"
import connectDB from "../../../../config/db";

export default async function handler(req, res) {
    connectDB()
    Middleware(req, res);
    try {
        const email = req.email
        const user = await User.findOne({ email }).select('-password')
        // const user = await User.findOne({ email }).select('-password').select('-__v')
        // const user = await User.findOne({ email }).select(['-password', '-__v', '-username'])
        console.log('usersssss', user)
        return res.json({ success: true, msg: "Token matched", user })
    } catch (err) {
        return res.json({ success: false, msg: "Server issue" })
    }
}

