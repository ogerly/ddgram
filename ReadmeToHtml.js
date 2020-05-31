var marked = require('marked');
const html2pug = require('html2pug')
var fs = require('fs');

var readMe = fs.readFileSync('README.md', 'utf-8');
var markdownReadMe = marked(readMe);

//fs.writeFileSync('./public/README.html', markdownReadMe);

 
const pug = html2pug(markdownReadMe, { tabs: true })

fs.writeFileSync('./views/includes/README.pug', pug);