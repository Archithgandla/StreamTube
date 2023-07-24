import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  console.log("access token : "+req.cookies.access_token)
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "You dont have token!"));

  jwt.verify(token,"rfefefef", (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next()
  });
};