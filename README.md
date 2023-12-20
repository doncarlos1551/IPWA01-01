# IPWA01-01
IPWA01-01 Programmierung von Webanwendungsoberflächen

In diesem Repository befindet sich meine Lösung zur Aufgabenstellung des Kurses IPWA01-01. Hierbei habe ich mich für die "Aufgabenstellung 1: CO²-Footprint" entschieden. Um die Webapp ausführen zu können muss diese entweder gebuildet werden, oder es kann ein Dev-Server gestartet werden. Die Webapp wurde mit Hilfe von Vue3 und Quasar gebaut. Um die Web-App bei ihnen Test-Weise lokal auszuführen benötigen Sie folgendes:
- Node.js installiert auf Ihrem System
- Yarn (Node-Modul)
- @quasar/cli (Node-Modul)
- @vue/cli (Node-Modul)

Installation und Ausführung
- Klonen des Repositories
```bash
git clone https://github.com/doncarlos1551/IPWA01-01.git
```
- Navigieren zum Projektverzeichnis
```bash
cd co2-Footprint
```
- Installieren der benötigten Node-Module
```bash
yarn install
```
- Starten des Development-Servers
```bash
yarn run quasar dev
```

Nach diesen Schritten sollte die Web-App auf Ihrem lokalen Dev-Server laufen und im Browser über localhost erreichbar sein. Sie werden in ihrer Konsole die lokale URL mitsamt port genannt bekommen, auf welchem ihr Dev-Server läuft.