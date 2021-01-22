self.addEventListener('push', function(event) {
    if (event.data) {
        const data = JSON.parse(event.data.text());
        const title = 'Hello!';
        const options = {
            body: data.body,
            icon: '/images/demos/icon-512x512.png',
        };
        const promiseChain = self.registration.showNotification(title, options);

        event.waitUntil(promiseChain);
    } else {
        console.log('This push event has no data.');
    }
});
