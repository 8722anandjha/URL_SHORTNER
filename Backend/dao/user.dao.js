import { User } from "../model/user.model.js"

export const findUserByEmail=async(email)=>{
    return await User.findOne({email}).select("+password")
}

export const findUserById=async(id)=>{
    return await User.findById({_id:id})
}

export const createUser = async (name, email, password) => {
  if (!password) {
    throw new Error("Password missing");
  }

  const newUser = new User({ name, email, password });
  await newUser.save();
  return newUser;
};


