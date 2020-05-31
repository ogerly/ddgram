const express = require('express')
require("dotenv").config()
const path = require("path");
const { Telegraf } = require('telegraf')
const pug = require('pug')
const firebase = require('firebase')

 
 

const app = express()
const port = process.env.PORT || "8000"
const bot = new Telegraf(process.env.BOT_TOKEN)
const { MenuTemplate, MenuMiddleware, createBackMainMenuButtons} = require('telegraf-inline-menu');


app.get(firebase.initializeApp ({ 
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSANGER_ID
  })
)
const ref = firebase.database().ref(); 
const sitesRef = ref.child("sites");
const matchesRef = ref.child("matches");

 
app.use(express.static("public"))
//app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views')) // sets the view directory
app.set('view engine', 'pug');
app.engine('pug', require('pug').__express);

app.get('/', (req, res) => {
	res.render("index", {
    title: "Home",
    username: "Jon Doe"    
  });
});
app.get('/login', (req, res) => {
  res.render("login", {
    title: "Login",
    username: "Jon Doe"
  });
});
app.get('/settings', (req, res) => {
    res.render("settings", {
      title: "Einstellungen",
      username: "Jon Doe",
      anyArray: ['kanal1','kanal2','kanal3','kanal4','kanal5'],
      anyGroupArray: ['gruppe1','gruppe2','gruppe3','gruppe4','gruppe5']
    });
});
app.get('/docu', (req, res) => {
  res.render("docu", {
    title: "Dokumentation",
    username: "Jon Doe"
  });
});
/*
app.get('/index', function(req, res) {
    res.status(200).sendFile(path.join(__dirname + '/public/index.html'))
})
 */
 

app.get('*', (req, res, next) => {
	res.status(200).send('Sorry, page not found');
	next();
});



/* << BOT >> */
const menu = new MenuTemplate(ctx => `Hey ${ctx.from.first_name}!`)
const submenu = new MenuTemplate(ctx => `Infos zu ${ctx.match[1]}`)
submenu.interact('Text', 'xxxx', {
	do: async ctx => {
		console.log('Take a look at ctx.match. It contains the chosen city', ctx.match)
		return ctx.answerCbQuery('You hit a button in a submenu')
	}
})
submenu.manualRow(createBackMainMenuButtons())

const submenuS = new MenuTemplate(ctx => `submenuS zu ${ctx.match[1]}`)
submenuS.interact('Text', 'Soziales', {
	do: async ctx => {
		console.log('Take a look at ctx.match. It contains the chosen city', ctx.match)
		return ctx.answerCbQuery('You hit a button in a submenu')
	}
})
submenuS.manualRow(createBackMainMenuButtons())


menu.chooseIntoSubmenu('option1', ['Gruppen','Kanäle', 'Kategorien'], submenuS)
menu.chooseIntoSubmenu('option2', ['Hilfe', 'App'], submenu)


const menuMiddleware = new MenuMiddleware('/', menu)
 
bot.command('start', ctx => menuMiddleware.replyToContext(ctx))



 
bot.command( 'test', (ctx) => { 
    ctx.telegram.sendMessage(ctx.message.chat.id,`
  *Testbereich* 
       
      /menu - Menütests
      *Spracheinstellung*
      /de - Sprachausgabe in deutsch
      /en - Sprachausgabe in englisch 
      *Shopsystem*
      /add - Einen Apfel in den Warenkorb legen
      /cart - Warenkorb anzeigen 
      /checkout - Danke
      *in anderen Gruppen*
      -  Bot begrüsst neue Mitglieder in einer Gruppe
      /ende - Bot aus der gruppe entfernen
      *sontiges*
      -   sende einen _Sticker_ und es kommt eine 
          _daumen nach oben_ Sticker zurück als antwort
      -   der Bot hört auf _hi_
      -   /hilfe, /kontakt, /test, /start
      
      
      `, { parse_mode: 'Markdown' }
    )}
  )
   


bot.use(menuMiddleware)
// Listening

 

app.listen(port, () => {
     bot.launch()
     console.log(`Listening on port http://localhost:${port} : Telegram Bot "${process.env.BOT_NAME}" is running, send /test on https://web.telegram.org/#/im?p=@${process.env.BOT_NAME}`)
})