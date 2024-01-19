import { Router } from "express";
import { body } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import { createProduct, getOneProduct, getAllProducts } from "./handlers/product";
import { createUpdate, deleteUpdate, getAllUpdates, getOneUpdate, updateUpdate } from "./handlers/update";

const router = Router();

router.get('/product',getAllProducts);

router.put('/product/:id',
    body('name').isString(),
    handleInputErrors,
    getOneProduct
);

router.get('/product/:id',()=>{
    
});

router.post('/product',
    body('name').isString(),
    handleInputErrors,
    createProduct);

router.delete('/product/:id',()=>{
    
})

//Update

router.get('/update',getAllUpdates);

router.get('/update/:id',getOneUpdate);

router.put('/update/:id',
    body('title').optional(),
    body('body').optional(),
    body('version').optional(),
    body('status').isIn(["IN_PROGRESS","SHIPPED","DEPRECATED"]).optional(),
    updateUpdate);

router.post('/update',
    body('title').exists().isString(),
    body('productId').exists().isString(),
    body('body').exists().isString(),
    createUpdate);

router.delete('/update/:id', deleteUpdate);

//update point

router.get('/updatepoint',()=>{

});

router.get('/updatepoint/:id',()=>{
    
});

router.put('/updatepoint/:id',
    body('name').optional().isString(),
    body('description').optional().isString(),
    ()=>{

});

router.post('/updatepoint',
    body('name').isString(),
    body('description').isString(),
    body('updateId').exists().isString(),
    ()=>{
});

router.delete('/updatepoint/:id',()=>{
    
})

router.use((err,req,res,next)=>{
    res.status(400).json({message: `route error :: ${err.message}`})
})

export default router;
