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
- 2.4.3 Projekt initialisieren ***S. 63***
- 3.3.1 Eine Komponente pro Datei ***S. 83***
- 3.4.1 Ausdrücke in JSX ***S. 90***
- 3.5   Props - Informationsfluss in einer Applikation ***S. 99***
- 3.4.2 Interationen - Schleifen in Komponenten ***S. 93***
- 3.4.3 Bedingungen in JSX ***S. 93***
- 3.5.1 Props und Kindkomponente ***S. 100***

### **[React Bootstrap](https://react-bootstrap.netlify.app/)**
- [Introduction](https://react-bootstrap.netlify.app/docs/getting-started/introduction)
- [Base Nav](https://react-bootstrap.netlify.app/docs/components/navs/#base-nav)
- [Basic Example](https://react-bootstrap.netlify.app/docs/components/cards#basic-example)

### **[W3Schools](https://www.w3schools.com/)**
**[JavaScript](https://www.w3schools.com/js/default.asp)**
- [JavaScript Modules Export](https://www.w3schools.com/js/js_modules_export.asp)
- [JavaScript Objects](https://www.w3schools.com/js/js_objects.asp)

### Info von KI
- <>...</> = React Fragment
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

- Warum { BierListe } in Klammern
```
import { BierListe } from '../../mockdatabase/BierListe'
```

Weil du einen benannten Export (named export) importierst.
In der Datei ../../mockdatabase/BierListe steht sehr wahrscheinlich etwas wie:
```
export const BierListe = [...]
```

## Backend
### **Node.js**
### **[W3Schools](https://www.w3schools.com/nodejs/default.asp)**
- [Node.js MySQL](https://www.w3schools.com/nodejs/nodejs_mysql.asp)

### **Node.js Sebastian Springer*** ISBN 978-3-8362-6255-2
- Kapitel 6 Express ***S. 171***
- 6.2 Installation ***S. 172***

### Info von KI
- Empfehlung: Node.js  zusammen mit MySQL und Express verwenden.

- Ordnerstruktur:
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