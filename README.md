# ddgram
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



