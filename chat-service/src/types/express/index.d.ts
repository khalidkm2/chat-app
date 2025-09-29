// types/express.d.ts

import { IUser } from "../../middleware";

declare global {
  namespace Express {
    interface Request {
      user?: IUser; // optional because user may not exist
    }
  }
}