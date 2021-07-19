---
title: Abschlussprojekt
author: Alexander Bazo und Jakob Fehle
documentclass: scrartcl
classoption:
  - a4paper
header-includes: |

    \usepackage[a4paper,left=2.5cm, right=2.5cm,top=2.5cm, bottom=3cm]{geometry}
    \usepackage{fancyhdr}
    \pagestyle{fancy}
    \fancyhf{}
    \rhead{Webtechnologien}
    \lhead{SL3}
    \fancypagestyle{plain}{
      \fancyhf{}
      \rhead{Webtechnologien}
      \lhead{SL3}}


---

# Abschlussprojekt Movie-Explorer

## Aufgabenstellung

Im Rahmen Ihres Abschlussprojektes implementieren Sie eine Webanwendung, die der Darstellung und Exploration einer Film-Datenbank dient. Mit Hilfe der Anwendung sollen NutzerInnen einen Überblick über die in der Datenbank gespeicherten Filme erhalten und diese editieren und auf verschiedene Weise visualisieren können. Hierzu soll die Javascript-Bibliothek [Alchemy](https://graphalchemist.github.io/Alchemy/#/) verwendet werden, um eine explorierbare Graphen-ähnliche Ansicht aller Filme zu erstellen. Zur Implementierung des Projekts setzen Sie die im Kurs erworbenen Fähigkeiten und die dort besprochenen Technologien und Techniken ein. Das Projekt besteht aus zwei Teilen:

1. Der erste Teil liefert die Datenbasis für den zweiten Teil des Projekts. Hierfür sollen Sie mit Hilfe des Skripts _Movie-Explorer Data-Importer_ eine Datenbank mit den Filmdaten erstellen. Gestalten Sie ein geeignetes Datenbankschema und halten Sie sich dabei an die im Kurs besprochenen Normalisierungsregeln. 

2. Der zweite Teil des Projekts ist die eigentliche Webanwendung, in die Sie die Datenbank aus Teil 1 einbinden und anschließend die geforderten Funktionalitäten umsetzen.
   
## Vorgaben
Im [\textcolor{blue}{Starterpaket}]() finden Sie ein angefangenes Projekt, welches bereits die grobe Ordner- und Dateistruktur der Anwendung vorgibt. 

Die Implementierung der Anwendung erfolgt auf der im Kurs gelernten Technologien. Verwenden Sie das Ihnen zur Verfügung gestellte Starter-Paket, um die Webanwendung (Teil 2 des Projekts) zu implementieren. Das Starter-Paket enthält die Ihnen bekannten node.js Module (`index.js`, `Database.js`) sowie Module, die für die clientseitigen Funktionalitäten der Anwendung zuständig sind (`app.js`, `DatabaseClient.js`). Nutzen sie die bestehenden Module und entwickeln sie diese weiter, und erweitern Sie die Anwendung darüber hinaus auch um zusätzliche Module, um Ihre Applikation modularisiert aufzubauen.

Die zu persistierenden Daten werden in einer SQLite-Datenbank gespeichert. Zur Gestaltung der Benutzeroberfläche verwenden Sie HTML & CSS. Die Graphen-ähnliche Aufbereitung der Datenbank soll mit der Javascript-Bibliothek [*Alchemy*]() gestaltet werden.
## Starten der Anwendung

## Anforderungen

### Teil 1: Importer

Importieren Sie **alle** der in [diesem Archiv]() bereitgestellten Filmdaten in eine SQLite-Datenbank. Entwerfen Sie dazu zuerst ein passenden Datenbankschema, um die Filme vollumfänglich in der Datenbank zu repräsentieren. Beachten Sie die im Kurs besprochenen Normalisierungsregeln und denken Sie bereits an dieser Stelle an die zusätzlichen Anforderungen, die sich aus Aufgabenteil 2 für das Schema ergeben. Verwenden Sie für den automatischen Import das Skript, das wir Ihnen [_hier_]() bereitstellen. **Diesen, in JavaScript bzw. für *Node.js* geschriebenen, Importer müssen Sie an einigen Stellen noch selbständig anpassen.** Der angepasste Skript ist Teil des Projekts und wird zusammen mit der Lösung aus Aufgabenteil 2 eingereicht.


### Teil 2: Webanwendung

Das wesentliche Ziel des Projektes ist es, die bereitgestellten Daten über Ihre Datenbank in das System einzupflegen und im Anschluss für die NutzerInnen – visuell aufbereitet – zugänglich zu machen. Die zu implementierende Anwendung erfüllt dabei zwei grundlegende Funktionen: 

1. Die Informationen werden den NutzerInnen strukturiert zugänglich gemacht. NutzerInnen erhalten unter anderem einen Überblick über die Schauspieler, das Veröffentlichungsjahr und das Genre der Filme.

2. Über eine entsprechende graphische Schnittstelle können NutzerInnen die Inhalte um zusätzliche Informationen editieren. So können Kommentare und Notizen zu den jeweiligen Fan-Fiction Inhalten hinzugefügt und in einer Datenbank persistiert werden. 

Ihre Applikation benötigt mindestens drei Seiten:

1. Eine Startseite, die beim Start Ihrer Anwendung angezeigt wird.

2. Eine Übersichtsseite, bestehend aus einer Listenansicht, die alle Fan-Fiction Inhalte darstellt, und einer Detailansicht, die Informationen über die entsprechende Fan-Fiction Geschichte zur Verfügung stellt. Dabei sollen alle wichtigen Metadaten (z.B. Titel, Autor, Charaktere, Fangemeinde etc.) in der Detailansicht angezeigt werden. Ein Diagramm zeigt die Häufigkeitsverteilung der wichtigsten Wörter der entsprechenden Geschichte an.

3. Eine Lese- und Kommentarseite, die die entsprechende Fan-Fiction Geschichte darstellt und es den NutzerInnen ermöglicht, über ein Eingabefeld öffentliche Notizen und Kommentare zu der jeweiligen Geschichte zu verfassen. Bereiten Sie die Geschichten entsprechend auf, indem Sie  z.B. "junk characters", unnötige Leerzeichen und sonstige Elemente, die den Textfluss stören, entfernen. Natürlich müssen Sie keine Rechtschreibfehler oder sonstige Fehler, die von den Autoren gemacht worden sind, verbessern. Zusätzlich zur Geschichte werden auch die nutzergenerierten Kommentare auf dieser Seite angezeigt. Außerdem können Sie zwischen den einzelnen Geschichten wechseln ohne dabei zur Übersichtsseite zurückspringen zu müssen.

Orientieren Sie sich für die Gestaltung der drei Seiten an den im Folgenden dargestellten Skizzen der Benutzeroberfläche.

## Hinweise zum Vorgehen

### Skizzen der Benutzeroberfläche

Die folgenden Skizzen beschreiben die wesentlichen Bestandteile der Benutzeroberfläche. Bei der Implementierung der Anwendung müssen Sie sich an diesen Vorgaben orientieren. Bitte
beachten Sie dabei jedoch, dass die Skizzen lediglich die Struktur und den Inhalt der Benutzeroberfläche beschreiben, nicht aber deren finales oder vollständiges Aussehen.

![Startseite](Home.PNG){ height=8cm }

![Übersichtsseite](Acts.PNG)

![Lese- und Kommentarseite](Scene.PNG){ height=8cm }

\pagebreak

### Denkbare Benutzerinteraktion

1. Über die Startseite können NutzerInnen über einen Button-Klick zur Übersichtsseite gelangen.

2. Über einen Klick auf die Listenelemente erhalten NutzerInnen die entsprechenden Informationen zu der dazugehörigen Fan-Fiction Geschichte.

3. Über einen Klick auf einen Button springen NutzerInnen zur Lese- und Kommentarseite, die Eingabefelder für Kommentare und Notizen enthält.  Zusätzliche Buttons ermöglichen einen Wechsel der Geschichten. 

### Technischer Rahmen

Die Implementierung der Anwendung erfolgt auf der im Kurs gelernten Technologien. Verwenden Sie das Ihnen zur Verfügung gestellte Starter-Paket, um die Webanwendung (Teil 2 des Projekts) zu implementieren. Das Starter-Paket enthält die Ihnen bekannten node.js Module (`index.js`, `Database.js`) sowie Module, die für die clientseitigen Funktionalitäten der Anwendung zuständig sind (`app.js`, `DatabaseClient.js`). Nutzen sie die bestehenden Module und entwickeln sie diese weiter, und erweitern Sie die Anwendung darüber hinaus auch um zusätzliche Module, um Ihre Applikation modularisiert aufzubauen.

Die zu persistierenden Daten werden in einer SQLite-Datenbank gespeichert. Zur Gestaltung der Benutzeroberfläche verwenden Sie HTML & CSS. Die graphische Aufbereitung auf der Übersichtsseite können Sie mit der im Kurs besprochenen Javascript-Bibliothek [*Chart.js*](http://www.chartjs.org/) gestalten. 

## Projektablauf

### Vorbereitung

- Laden Sie den Quellcode des Starter-Pakets über diesen [_Link_]() herunter.
- Führen Sie im Projektverzeichnis, in einer Kommandozeile, den Befehl `npm install` aus, um alle notwendigen Abhängigkeiten zu installieren.
- Erstellen Sie einen Ordner `data` im Projektverzeichnis und kopieren Sie die von Ihnen generierte Datenbank aus Teil 1 dort hinein.

### Hilfestellung und Feedback

Sollten Sie während der Arbeit an Ihrem Projekt Fragen haben oder Hilfestellungen benötigen, können Sie uns per Mail kontaktieren.  Zusätzlich dazu bieten wir Ihnen folgende Termine an, um Ihnen die Möglichkeit zu geben, den Start und die Finalisierung des Projekts zu besprechen. Wir werden für beide Zeiträume Terminumfragen verschicken und mit Ihnen einen Zeitslot festlegen.

**Zwischen . und . Juli:** Projekt-Kickoff zum Klären offener Fragen und zum Abstimmen des Vorgehens. 

**Zwischen . und . September:** Finale Besprechung des aktuellen Stands vor der Abgabe.

### Abgabekriterien

Laden Sie Ihr gesamtes Projekt bis spätestens 30.09.2020 (23:59 Uhr) als zip-komprimierten Ordner auf GRIPS hoch.  Denken Sie daran, dass Sie auch mehrfach eine Lösung einreichen können und die vorherige Abgabe damit überschreiben.  Bitte reichen Sie bei der Abgabe die erstellte und befüllte Datenbank mit ein. Fügen Sie der Abgabe **nicht** den gesamten JSON-Korpus hinzu. Ihr Abgabe sieht wie folgt aus:

- Teil 1: den Movie-Explorer-Importer mit Ihrer Implementierung.
- Teil 2: Ihre Movie-Explorer Webanwendung inkl. Datenbank.

Der Name der Zip-Datei ergibt sich aus dem Präfix `Projekt_WT_SS21`, ihrem Vor- und Nachnamen jeweils getrennt durch `_` .

Beispiel: **Projekt_WT_SS21_Max_Mustermann.zip**

### Bewertungskriterien

Wesentliches Kriterium zur Bewertung Ihres Projektes ist die Umsetzung aller beschriebenen Funktionen. Ihre Anwendung muss für die definierten Anforderungen einen ernst gemeinten, erkennbaren Lösungsvorschlag beinhalten. Zusätzlich bewerten wir den Aufwand und die Qualität, die bei der Umsetzung der Funktionen erkennbar sind. Dazu gehört die Verwendbarkeit, Fehlertoleranz und ästhetische Qualität der Benutzeroberfläche sowie die Qualität (Struktur) des Datenbankschemas.

*Wir wünschen Ihnen viel Erfolg!*
