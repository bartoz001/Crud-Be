import User from "../Moduls/User.js"
import bcryptjs from "bcryptjs"
const Register = async (req, res) => {
   try {
      const { username, email, password } = req.body
      const ExistUser = await User.findOne({ email })
      if (!username || !email || !password) {
         res.status(400).json({ message: "Please fill all the fields" })
      }
      if (ExistUser) {
         res.status(400).json({ message: "User already exist" })
      }
      const salt = await bcryptjs.genSalt(10)
      const hashPassword = await bcryptjs.hash(password, salt)
      const user = await User.create({ username, email, password: hashPassword })
      res.status(200).json(user)
   } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Server Error" })
   }
}

const Login = async (req, res) => {
   try {
      const { email, password } = req.body
      const user = await User.findOne({ email })
      if (!user) {
         res.status(400).json({ message: "User not found" })
      }
      const isPasswordValid = await bcryptjs.compare(password, user.password)
      if (!isPasswordValid) {
         res.status(400).json({ message: "Invalid password" })
      }
      res.status(200).json({ message: "Login successful", user: user })
   } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Server Error" })
   }

}

const UserProfile = async (req, res) => {
   try {
     const user_id = req.params.user_id
     const user = await User.findById(user_id)
     res.status(200).json(user)
   }catch (error) {
      console.log(error)
      res.status(500).json({ message: "Server Error" })
   }
}
export { Register, Login ,UserProfile}