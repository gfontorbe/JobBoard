# Job Board
Scrape job ads for Web Developer from indeed.de at a given interval, stores them in a Redis database, and displays them via a React app.

See live version [here](https://guillaumefontorbe.com/JobBoardDemo/).

## Features
* Task scheduler using [node-cron](https://github.com/kelektiv/node-cron)
* Web Scraper using [puppeteer](https://github.com/puppeteer/puppeteer)
* Filtering of job advertisement to remove senior and student positions

## Development
Developed using:
* Visual Studio Code
* Node.js 14.17.0
* React
* MaterialUI
### Dependencies
* node-cron ([link](https://github.com/kelektiv/node-cron))
* puppeteer ([link](https://github.com/puppeteer/puppeteer))
* express ([link](https://expressjs.com/))
* node-redis ([link](https://github.com/redis/node-redis))
  
### Configuration
1. Clone repository on your machine
```bash
    git clone https://github.com/gfontorbe/JobBoard.git
```
2. Install dependencies
```bash
npm i
```
3. Launch your Redis database
4. In the worker folder, launch index.js
```bash
node index.js
```
5. In the api folder, launch index.js
```bash
node index.js
```
6. In the client folder, build the client
```bash
npm build
```