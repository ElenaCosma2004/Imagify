import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    return res.json({ success: false, message: "Unauthorized. Login again" });
  }

  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode.id) {
      req.user = { id: tokenDecode.id };
    } else {
      return res.json({ success: false, message: "Unauthorized. Login again" });
    }

    next(); //executes the controller function that will return the credit
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
export default userAuth;
