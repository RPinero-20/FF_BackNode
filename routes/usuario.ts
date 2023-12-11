import { Router } from "express";
import { getUsuario, getUsuarios, postUsuario, putUsuario, deleteUsuario } from "../controller/usuarios";

const userRouter = Router();

userRouter.get('/', getUsuarios );
userRouter.get('/:id', getUsuario );
userRouter.post('/', postUsuario );
userRouter.put('/:id', putUsuario );
userRouter.delete('/:id', deleteUsuario );


export default userRouter;