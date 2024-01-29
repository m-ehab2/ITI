self.addEventListener('push', event => {
    console.log(event);
    const options = {
        body: 'This is a notification from your web app!',
    };
    event.waitUntil(
        self.registration.showNotification('Hello World!', options)
    );
});

self.addEventListener('notificationclick', event => {
    event.notification.close();
    // Handle notification click event
    // e.g., open a specific page or perform an action
});
