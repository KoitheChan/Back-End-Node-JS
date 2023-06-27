 const express = require("express");
 const shipmentRoutes = require('./src/shipments/routes');

 const app = express();
 const port = 3000;

 app.use(express.json());
 
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use('/api/v1/shipments', shipmentRoutes);

 app.listen(port, () => console.log('app listening on port 3000'));