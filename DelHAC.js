const express = require('express');
const app = express();
var url = ('url')
var fs = ('fs');

app.listen(3000, () => console.log('listening at 3000'));
app.use('/static', express.static('boxdrop-master')); 
app.post('/api', (request, response) => {
	console.log(request);
});
var url = require('url');
var fs = require('fs');

function renderHTML(path, response) {
    fs.readFile(path, null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}
module.exports = {
  handleRequest: function(request, response) {
      response.writeHead(200, {'Content-Type': 'addPage/html'});

      var path = url.parse(request.url).pathname;
      switch (path) {
			  case '/':
				  renderHTML('./about.html', response);
				  break;
			  case '/awaitingReq':
				  renderHTML('./awaitingReq.html', response);
				  break;
			  case '/codeInput':
				  renderHTML('./codeInput.html', response);
				  break;
			  case '/confscreen':
				  renderHTML('./confscreen.html', response);
				  break;
			  case '/dipscreen':
				  renderHTML('./dipscreen.html', response);
				  break;
			  case '/mapPage':
				  renderHTML('./mapPage.html', response);
				  break;
			  case '/phoneScreen':
				  renderHTML('./phoneScreen.html', response);
				  break;
			  case '/recAuth':
				  renderHTML('./recAuth.html', response);
				  break;
			  case '/recAuthD':
				  renderHTML('./recAuthD.html', response);
				  break;
			  case '/recScreen':
				  renderHTML('./recScreen.html', response);
				  break;
			  case '/ReqOK':
				  renderHTML('./ReqOK.html', response);
				  break;
			  case '/routeMap':
				  renderHTML('./routeMap.html', response);
				  break;
          default:
              response.writeHead(404);
              response.write('Route not defined');
              response.end();
      }

  }
};