
const jsonserver = require('json-server')

const employee = jsonserver.create()

const router = jsonserver.router('db.json')

const middlware = jsonserver.defaults()

employee.use(middlware)
employee.use(router)

const port =4000 || process.env.port

employee.listen(port,()=>{
    console.log(`employee server started at ${port} and waiting for the request `)
})