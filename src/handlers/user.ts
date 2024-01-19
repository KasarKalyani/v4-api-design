import prisma from "../db";
import { comparePassword, creatJWT, hashPassword } from "../modules/auth";

export const createNewUser = async(req,res,next)=>{
    try{
        const user = await prisma.user.create({
            data:{
                username: req.body.username,
                password: await hashPassword(req.body.password)
            }
        })
        const token =  creatJWT(user)
        res.json({token})
    }
   catch(e){
        e.type = 'input'
        next(e)
   }

}

export const signin = async(req,res)=>{
    const user = await prisma.user.findUnique({
        where: {
            username: req.body.username
        }
    })

    const isValid = await comparePassword(req.body.password,user.password)

    if(!isValid)
    {
        res.status(401)
        res.json({message: 'nope not found'})
    }
    else{
        res.status(200)
        res.json({message: 'found'})
    }
}





