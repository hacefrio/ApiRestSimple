import * as express from "express"
import { AppDataSource } from "./data-source"
import routes from "./routes"
import * as cors from "cors"

const port = process.env.PORT || 3000
AppDataSource.initialize().then(async () => {

    // create express app   
    const app = express()
    app.use(cors());
    app.use(express.json())
    app.use('/',routes)
    app.listen(port,    () => console.log(`Server running on port ${port}`))
    
    
 
    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))
