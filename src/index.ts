async function handleRequest(request: any) {
  return new Response('Hello TypeScript worker!', { status: 200 });
}

addEventListener('fetch', (event: any) => {
  event.respondWith(handleRequest(event.request));
});
