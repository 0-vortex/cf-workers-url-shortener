import index from './index.handlebars';
import links from './data.json';
import {Color, Solver, hexToRgb} from './util';

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
      } else {
        const brands = [];
        links.forEach(link => {
          if (typeof link.color !== 'undefined') {
            const rgb = hexToRgb(link.color);
            const color = new Color(rgb[0], rgb[1], rgb[2]);
            const solver = new Solver(color);
            const result = solver.solve();

            brands.push({
              className: link.key,
              filter: result.filter,
            });
          }
        });

        const html = index({
          name: 'TED Vortex',
          analytics: '123456',
          background: 'rgba(24,23,23,1)',
          typography: 'rgba(255,255,255,1)',
          primary: 'rgba(184,15,10,1)',
          secondary: 'rgba(15,82,186,1)',
          links,
          brands,
        });

        return new Response(html, {
          headers: {
            'content-type': 'text/html;charset=UTF-8',
          },
        });
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
