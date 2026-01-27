# Abschlussprojekt_Brauerei


# Projekt initialisieren
```
npm create vite braurei -- --template react
```
## Styling
```
npm install react-bootstrap bootstrap
```
```
App.jsx

import 'bootstrap/dist/css/bootstrap.min.css';
```

## **Backend**
- Node.js MySQL
```
npm install mysql
```
- Befov Express in Applikation installiert wird, muss **package.json** in Ordner ***backend*** generiert werden
```
mpn init
```
- Node.js Express
```
npm install express
```
- Axios
```
npm install axios
```
- Cors
```
npm install cors
```
- Body-parser
```
npm install body-parser
```
- React Router
```
npm install react-router-dom@latest
```

# Projekt staten
## Frontend
```
npm run dev
```

## Backend
```
node server.js
```

# Quellen
## Frontend
### **React Sebastian Springer** ISBN 978-3-8362-9254-2
- 2.4.3  Projekt initialisieren ***S. 63***
- 3.3.1  Eine Komponente pro Datei ***S. 83***
- 3.4.1  Ausdrücke in JSX ***S. 90***
- 3.5    Props - Informationsfluss in einer Applikation ***S. 99***
- 3.4.2  Interationen - Schleifen in Komponenten ***S. 93***
- 3.4.3  Bedingungen in JSX ***S. 93***
- 3.5.1  Props und Kindkomponente ***S. 100***
- 12     Navigation innerhalb einer Applikation - der Router ***S. 415***
- 12.2   Navigation in der Applikation ***S. 417***
- 12.2.2 Eine Navigationsleiste für die Applikation ***S. 420***
- 3.7.1  Auf Events reagieren ***S. 108***


### **[React Bootstrap](https://react-bootstrap.netlify.app/)**
- [Introduction](https://react-bootstrap.netlify.app/docs/getting-started/introduction)
- [Base Nav](https://react-bootstrap.netlify.app/docs/components/navs/#base-nav)
- [Basic Example](https://react-bootstrap.netlify.app/docs/components/cards#basic-example)

### **[W3Schools](https://www.w3schools.com/)**
**[JavaScript](https://www.w3schools.com/js/default.asp)**
- [JavaScript Modules Export](https://www.w3schools.com/js/js_modules_export.asp)
- [JavaScript Objects](https://www.w3schools.com/js/js_objects.asp)

### Info von KI
- **<>...</> = React Fragment**
```
function Content() {
  if (BierListe.length === 0) {
    return <div> Kein Bier gefunden</div>
  } else {
      return (
        <>
            ...
            ...
        </>
      );
    }
}
```
**Ein Fragment** ist ein unsichtbarer Wrapper, der mehrere JSX‑Elemente gruppiert, ohne dass im DOM ein zusätzliches HTML‑Element entsteht.
Es ist also wie ein <div>, aber ohne dass ein <div> erzeugt wird.

**Warum braucht man das?**
In React darf ein return immer nur ein einziges JSX‑Element zurückgeben.
Wenn du mehrere Geschwisterelemente zurückgeben willst, musst du sie um etwas herum gruppieren.

- **Warum { BierListe } in Klammern**
```
import { BierListe } from '../../mockdatabase/BierListe'
```

Weil du einen benannten Export (named export) importierst.
In der Datei ../../mockdatabase/BierListe steht sehr wahrscheinlich etwas wie:
```
export const BierListe = [...]
```
- Einfachste Lösung: HTML‑Datepicker (kein extra Hook nötig)
```
<Form.Control
    type="date"
    value={datum}
    onChange={(e) => setDatum(e.target.value)}
    style={{ width: '18rem' }}
/>

```

## Backend
### **Node.js**
### **[W3Schools](https://www.w3schools.com/nodejs/default.asp)**
- [Node.js MySQL](https://www.w3schools.com/nodejs/nodejs_mysql.asp)

### **Node.js Sebastian Springer*** ISBN 978-3-8362-6255-2
- Kapitel 6 Express ***S. 171***
- 6.2 Installation ***S. 172***
- 4.3.1 CommonJS ***S. 118***
- 6.5.1 Routig ***S. 180***


### MySQL (Node.js)
- **[MySQL Shell API](https://dev.mysql.com/doc/dev/mysqlsh-api-javascript/8.0/)**
- [getWarningCount()](https://dev.mysql.com/doc/dev/mysqlsh-api-javascript/8.0/classmysqlsh_1_1mysqlx_1_1_base_result.html#a12d272534d7c236b9ca5c7065a8e7bfb)
- [MySQL Variable](https://thehotcode.com/nodejs-mysql-variables-safe-query/)
- [conn.end](https://learn.microsoft.com/de-de/azure/mysql/flexible-server/connect-nodejs?tabs=windows#connect-create-table-and-insert-data)
- [React Backend SQL Tutorial](https://medium.com/@ardasenbakkavaci/react-backend-sql-tutorial-9f8f8103d75f)
### Info von KI
- **Empfehlung: Node.js  zusammen mit MySQL und Express verwenden.**

- **Ordnerstruktur:**
```
brauerei/
│
├── backend/          
│   ├── api/
│   ├── db/
│   ├── server.js     
│   └── package.json  
│
├── node_modules/
├── public/
├── src/
├── index.html
├── package.json
└── vite.config.js
```
- **result.warningCount</br>**
MySQL gibt bei CREATE ... IF NOT EXISTS eine Warnung aus, wenn das Objekt bereits existiert.</br>
Diese Warnung wird nicht als Fehler geworfen, weil du IF NOT EXISTS benutzt.</br>
Stattdessen erhöht MySQL einfach:
```
result.warningCount = 1
```
Wenn warningCount === 0, wurde etwas neu erstellt.</br>
Wenn warningCount > 0, existierte es bereits.
```
con.query(`
    CREATE TABLE IF NOT EXISTS bier (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255)
    )
`, function (err, result) {
    if (err) throw err;

    if (result.warningCount === 0) {
        console.log("Tabelle 'bier' wurde erstellt");
    } else {
        console.log("Tabelle 'bier' existiert bereits");
    }
});

```
- **CommonJS statt ES-Modules verwenden**
</br></br>
- **Syntax korrektur**
```
const mockDatenbank = require('./db/mock_datenbank.js')
mockDatenbank(con);
= function(con) {
```

- **Beispiel: Eine Funktion, die etwas Asynchrones macht**
```
Stell dir vor, du hast eine Funktion, die eine Datei liest, eine Datenbankabfrage macht oder etwas anderes, das Zeit braucht.

❌ Ohne Callback (funktioniert nicht)

function ladeDaten() {
    setTimeout(() => {
        console.log("Daten geladen");
    }, 1000);
}

console.log("Start");
ladeDaten();
console.log("Ende");

Ausgabe:

Start
Ende
Daten geladen

Warum?

setTimeout ist asynchron

JavaScript läuft weiter, ohne zu warten

„Ende“ kommt vor „Daten geladen“

🔹 ✔ Mit Callback (funktioniert richtig)

function ladeDaten(callback) {
    setTimeout(() => {
        console.log("Daten geladen");
        callback();  // <-- wird erst ausgeführt, wenn alles fertig ist
    }, 1000);
}

console.log("Start");

ladeDaten(() => {
    console.log("Jetzt geht es weiter, weil die Daten fertig sind");
});

console.log("Ende");

Start
Ende
Daten geladen
Jetzt geht es weiter, weil die Daten fertig sind

Warum?

Der Callback wird erst ausgeführt, wenn die asynchrone Aufgabe fertig ist

Du kannst damit kontrollieren, wann der nächste Schritt passiert

```


