import User from "../Models/user.model.js"; //this was imported from the user.model.js
import bcryptjs from 'bcryptjs'; // a package used to HASH  a password.
import { errorHandler } from "../utils/error.js";
import  jwt  from "jsonwebtoken";

export const signup = async (req, res, next) => {

    // console.log(req.body)   //req.body this was meant to display the details of the user inputted from the Insomania website/ form.
   const{username, gmail, password} = req.body;
   const hashedPassword = bcryptjs.hashSync(password, 10);   //after getting the password above, we hashed it, and passed it below.

   const newUser = new User({username, gmail, password: hashedPassword}) //this was gotten from the model that was created in user.model.js and was used to save the 3 informations in line 7 
     try{
         await     newUser.save()  //this saves it on the data base and the "await" was added becus saving it might take time,
                                      //  "await" will help it the code to stay in that line until the opearation finishes,and using this "await" changed the function from synchronous to asynchronous thtas why the "async" was used in line 4.
    
        res.status(201).json("user created successfully")                              

    }catch(error){
        // res.status(500).json(error.message)
        next(error);
        // next(errorHandler(550, 'error from the function'));
     }
  
}
 
//     const token  = req.cookies.acess_token
//     jwt.verify( token,  process.env.JWT_SECRET, (err, user)  => {

// })




export const signin = async (req, res, next) => {

   const{gmail, password} = req.body;

   try {
      const validUser = await User.findOne({ gmail });
       if(!validUser) return next(errorHandler(404, "User does not exist"))
     const validPassword = bcryptjs.compareSync(password, validUser.password)
      if(!validPassword) return next(errorHandler(401, "Wrong credetials!"))

      const token = jwt.sign({id: validUser._id }, process.env.JWT_secret  )
      const {password: pass,  ...rest}  = validUser._doc;  //the _doc was gotten from the Isomenia website.
      res  
        .cookie('access_token', token, {httpOnly: true })   //access_token is the name given to the cookie and 'httpOnly: true' is to make the 
        .status(200)
        .json(...rest);

   } catch (error) {
   
         next(error);

   }

}
   

  