async function handleRequest(request) {
  return new Response('Hello worker!', { status: 200 });
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
