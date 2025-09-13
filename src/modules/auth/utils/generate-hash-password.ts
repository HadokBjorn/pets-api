import bcrypt from "bcrypt";

class GenerateHashPassword {
  execute(password: string) {
    return bcrypt.hashSync(password, Number(process.env.SALT));
  }
}
export default new GenerateHashPassword();
