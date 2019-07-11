// handles.js
//Michelle Torres
module.exports = {
 serverHandle : function (req, res) {
  const url = require('url')
  const qs = require('querystring')
  const intro = '<!DOCTYPE html>' +
    '<html>' +
    '    <head>' +
    '        <meta charset="utf-8" />' +
    '        <title>ECE AST</title>' +
    '    </head>' +
    '    <body>' +
    '         <h1>Work Node js</h1>' +
    '          <br></br>'+
    '          <h2>How does this page works? </h2>' +
    '           <p>This page has 3 posible arguments for the url</p>'+
    '          <h3>Default page</h3>' +
    '           <p>Shows the explanation of the page (Present page)</p>'+
    '          <h3>Hello functionality</h3>' +
    '           <p>You can write "/hello?name=" into the URL of the website and a name and the web page will say hi to you or you can write "/hello?name=Team7" to know a little bit about the members of the team 7 or you can always just say "/hello" an enter anonymously</p>'+
    '          <h3>Error</h3>' +
    '           <p>In case you enter an invalid URL you will get a warning message :(</p>'+
    '    </body>' +
    '</html>'

  const error = '<!DOCTYPE html>' +
    '<html>' +
    '    <head>' +
    '        <meta charset="utf-8" />' +
    '        <title>ECE AST</title>' +
    '    </head>' +
    '    <body>' +
    '         <h1>Page Not Found!</h1>'+
    '    </body>' +
    '</html>'

    const an = '<!DOCTYPE html>' +
      '<html>' +
      '    <head>' +
      '        <meta charset="utf-8" />' +
      '        <title>ECE AST</title>' +
      '    </head>' +
      '    <body>' +
      '         <h3>Hello anonymous</h3>' +
      '    </body>' +
      '</html>'

    const me = '<!DOCTYPE html>' +
        '<html>' +
        '    <head>' +
        '        <meta charset="utf-8" />' +
        '        <title>ECE AST</title>' +
        '    </head>' +
        '    <body>' +
        '         <h2>A little bit about us...</h2>'+
        '         <h3>Mich:</h3>'+
        '         <p>Hello! As you know my name is Mich. I am 22 years old, studying my last semester of Digital Systems and Robotics Engineering at Mexico City. I love music, basketball and traveling. I like to learn languages, right now I speak: English, Spanish, Gemran (a little), and French (also a little bit). Nice to meet you! </p>' +
        '         <h3>Emmanuel:</h3>'+
        '         <p>Hello, my name is Emmanuel Zamudio. I am a student of Tecnológico de Monterrey Campus Estado de México. I am in the seventh semester of Engineering in Digital Systems and Robotics, and I am twenty-one years old. I am also a musician and I have been playing drums for eight years. </p>'
        '    </body>' +
        '</html>'

  const route = url.parse(req.url)
  const path = route.pathname
  const params = qs.parse(route.query)

  if(path==='/'){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(intro)
  }
  else if (path === '/hello' && 'name' in params) {
    if(params['name']== 'Team7'){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(me)
    }
    else{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello ' + params['name'])
    }
  }

  else if (path === '/hello') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(an)
  }

  else{
    res.writeHead(404, {'Content-Type': 'text/html'})
    res.write(error);
}

    res.end()
}
}
