import * as user from '../handlers/user';

describe('user routes',()=>{
    it('should create new user',async()=>{
        const req = {body:{username:'hello', password: 'hi'}}
        const res = {json({token}) {
            console.log(token)
            expect(token).toBeTruthy()
        }}

        await user.createNewUser(req,res, ()=>{})
    })
})