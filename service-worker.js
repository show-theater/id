self.addEventListener('push', (event) => {
  const data = event.data?.json() ?? {};
  event.waitUntil(
    self.registration.showNotification(data.title || 'JKT48 Show Theater', {
      body: data.body || '',
      icon: data.icon || '/img/logo.png',
      badge: data.badge || '/img/logo.png',
      tag: data.tag || 'jkt48-reminder',
      renotify: true,
      requireInteraction: true
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});
