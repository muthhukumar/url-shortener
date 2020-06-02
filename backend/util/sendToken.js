// import {generateRefreshToken, generateToken} from "./jwt-token";
// import User from "../model/schema/userSchema";

// const sendToken = (res, id)=>{
//     let token, refreshtoken;
//     try {
//       token = generateToken(id);
//       refreshtoken = generateRefreshToken(id);
//       refresh_tokenExpiresIn = new Date(
//         new Date().getTime() + 7 * 24 * 60 * 60 * 1000
//       );
//       newUser.refresh_token = refresh_token;
//       await newUser.save();
//     } catch (err) {
//       return next(new HttpError("Signing up failed, please try again", 500));
//     }
//     res.cookie("refreshtoken", refreshtoken, {
//       httpOnly: true,
//       path: "/user/refresh_token",
//     });
//     res.status(201).json({ token, userId: newUser.id, newUser });

// }
