import jwt from "jsonwebtoken";

class generateAuthToken {
  execute(id: string) {
    return jwt.sign({ id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
  }
}
export default new generateAuthToken();
