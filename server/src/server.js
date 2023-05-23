const express = require('express')
const cors = require('cors')
const UserController = require('./controllers/user.controller')
const ProductController = require('./controllers/product.controller')
const authUserToken = require('./middlewares/verifyToken')
const refreshToken = require('./middlewares/refreshToken')

const userController = new UserController()
const productController = new ProductController()

const app = express()
app.use(express.json())
app.use(cors())

const port = 3000


/* Admin Routes*/ 
app.get('/admin/users',authUserToken,userController.getAll)
app.get('/admin/user/:id',authUserToken, userController.findOne)
app.patch('/admin/user/:id', userController.patch)
app.delete('/admin/user/:id', userController.delete)

app.get('/admin/products',authUserToken,productController.getAllProducts)
app.get('/admin/products/:id', authUserToken,refreshToken,productController.findOneProducts)
app.patch('/admin/products/:id',authUserToken, refreshToken,productController.patchProducts)
app.delete('/admin/products/:id', authUserToken, refreshToken,productController.deleteProducts)



/* User Routes */
app.get('/user/:id', authUserToken,userController.findOne)
app.patch('/user/:id', authUserToken,userController.patch)
app.get('/products/list',productController.getAllProducts)
app.post('/register', userController.create)
app.post('/login', userController.loginUser)
app.post('/logintoken', userController.loginToken)


/*Products Routes */
app.post('/products/register', productController.createProducts)
app.put('/products/:id', productController.updateProducts)
app.patch('/products/:id', productController.patchProducts)




app.listen(port, () => {
    console.log(`Servidor está rodando em
     http://localhost:${port}`)
})
