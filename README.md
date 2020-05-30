# ddgram (WIP)
### telegramBot + Webapp + Hosting + Database
    nodejs, express, pug, i18n, telegramAPI, firebase(Hosteing, Database)



### node,express,pug,i18n,gulp
eine schnelle anwendung. wichtig ist das zusammenspiel der technik und systeme. 
     - schnelle einfaches handling über telegram, datendarstellung per webapp. 
     - bot steuerung für admin von gruppen und kanälen
     - bot steuerung für informationssuchende
     - datendarstellung für themenbezogenen oder localen informationen.  

### TelegramBot
    - bot login
    - bot commands
    - data admin, user speichern
    - data admin, user verwalten

 ### Webapp
    - login per telegram
    - daten verwalten
    - daten speichern



## Install
   
    $ git clone https://github.com/ogerly/ddgram.git
    $ cd <neuer projectordner>
    $ npm install



### .env

lege im root-verzeichnis eine datei an '.env'

    NODE_ENV=development
    PORT= 3000

    BOT_NAME= <Name deines Telegrambots - ohne @>
    BOT_TOKEN = <dein Telegram Bot Token>

    FIREBASE_APIKEY = < Firebase ApiKey >
    FIREBASE_AUTH_DOMAIN = https://< Firebase projectid >.firebaseapp.com/
    FIREBASE_DATABASE_URL = https://< Firebase projectid >.firebaseapp.com/
    FIREBASE_PROJECT_ID = < Firebase projectid >
    FIREBASE_STORAGE_BUCKET = < Firebase projectid >.appspot.com
    FIREBASE_MESSANGER_ID = < Firebase Messanger id >



### Telegram Bot anlegen

Stellen Sie über den Link eine Verbindung zum @BotFather her: https://telegram.me/BotFather. Wenn das Chat-Fenster mit dem Bot im Telegramm geöffnet ist, drücken Sie die Taste Start. 
     **/newbot** 
     und folge den anweisungen, am ende bekommst du den  BOT_TOKEN 

trage nun BOT_TOKEN und BOT_NAME in die  **.env** datei. 

### Firebase Hosting und Database anlegen 

auf der console bei firebase https://console.firebase.google.com/
- lege ein neues Projekt an
- lege eine neue database an
- lege ein neues hosting an 
     
trage nun FIREBASE_APIKEY, IREBASE_AUTH_DOMAIN , FIREBASE_DATABASE_URL, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_MESSANGER_ID ein. 


## starten der anwendung und des telegrambots 
   
      $ npm start
     
 - du kannst deinen bot bei telegram mit **/start** aufrufen
