//Install express server
const express = require('express');
const path = require('path');

const app = express();
console.log('suno na sangmarmar ki yeh minare');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/ang'));

app.get('/*', function(req,res) {
    console.log('kuchh b nhi h aage tumhare');
    res.sendFile(path.join(__dirname+'/dist/ang/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);