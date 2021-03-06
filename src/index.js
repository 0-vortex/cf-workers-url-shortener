const UnexpectedError = new Error('Please provide a source');

const handleRequest = async request => {
  if (request.method === 'GET') {
    try {
      const {pathname} = new URL(request.url || '', `https://${request.headers.host}`);
      const key = pathname.replace(/^\//, '');

      if (key !== '') {
        // eslint-disable-next-line
        const redirectTo = new URL(await REDIRECTS.get(key));

        if (redirectTo) {
          return Response.redirect(redirectTo, 301);
        }
      }
    } catch (e) {
      UnexpectedError.message = 'Key not found';
    }

    return new Response(UnexpectedError, {status: 404});
  }
};

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
