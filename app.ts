import express from 'express';
import path from 'path';

const app: express.Application = express();

app.use('/api/', require('./server/routes'));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/client'));

app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname,'./client/index.html'));
})

app.listen(3000, () => {
    console.log("This starter is running on port 3000");
});