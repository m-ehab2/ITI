var staticfilesToCache = [
    'demo.html',
    'page2.html',
    'CSS/page1.css',
    'JS/page1.js',
    'error_offile.html',
    'wrong_path.html'
]

const cacheName = 'ourData'
self.addEventListener('install', event => {
    console.log('installing service worker')
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(staticfilesToCache)
            })
            .catch(err => {
                console.log(err)
            })
    )
})

self.addEventListener('activate', event => {
    console.log('activating service worker')
})

self.addEventListener('fetch', event => {
    console.log('fetching.........', event)
    event.respondWith(
        caches.match(event.request)
            .then(
                response => {
                    if (response) {
                        console.log('found in cache', event.request.url)
                        return response
                    }
                    //Network request to server
                    console.log('network request', event.request.url)
                    return fetch(event.request).then((res) => {
                        if (res.status != 200) {
                            throw 'invalid resp'
                        }
                        return res;
                    }).catch((err) => {
                        console.log(err);
                        if (err === 'invalid resp') {
                            return caches.match('wrong_path.html');
                        }
                        else {
                            return caches.match('error_offile.html');
                        }
                    })
                }
            )
            .catch(err => {
                console.log(err)
            })
    )
})