const fs = require('fs');
const path = require('path');
const http = require('http');

const doc1Path = path.join(__dirname, 'static', 'Image.html');
const doc2Path = path.join(__dirname, 'static', 'Video.html');
const vidPath = path.join(__dirname, 'static', 'pexels_videos_2766 (1080p).mp4');
const imgPath = path.join(__dirname, 'static', 'tree-736885_1280.jpg');
const cssPath = path.join(__dirname, 'static', 'style.css');
const video = fs.readFileSync(vidPath);
const videoDoc = fs.readFileSync(doc2Path);
const style = fs.readFileSync(cssPath);
const imgDoc = fs.readFileSync(doc1Path);
const img = fs.readFileSync(imgPath, (err) => { console.log('Eroor ' + err); });
console.log(img);

const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName === '/' || pathName === '/video' || pathName === '/Video.html') {
        res.end(videoDoc)
    }
    else if (pathName === '/pexels_videos_2766%20(1080p).mp4') {
        res.end(video)
    }
    else if (pathName === '/style.css') {
        res.end(style)
    }
    else if (pathName === '/image' || pathName == '/Image.html') {
        res.end(imgDoc)
    }
    else if (pathName === '/tree-736885_1280.jpg') {
        res.end(img)
    }
    else {
        res.end('error')
    }
})
server.listen(8000, '127.0.0.1', () => {
    console.log('Server Started Listening');
})