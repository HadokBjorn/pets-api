import authRotes from "@/modules/auth/routes/auth.route";
import { Router } from "express";

const routes = Router();
routes.use("/auth", authRotes);
export default routes;
