# stream-scenes

Browser sources to power my offline / standby scenes, and run countdown timers

## Example transcripton server (SSE)

```js
const { createServer } = require('http');

const PORT = 3535;
const CORS_HEADERS = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
	'Access-Control-Max-Age': 2592000
};
const EVENT_STREAM_HEADERS = {
	'Content-Type': 'text/event-stream',
	'Cache-Control': 'no-cache, no-transform',
	Connection: 'keep-alive'
};

const subscribers = new Set();

const server = createServer(async (req, res) => {
	if (req.method === 'OPTIONS') {
		res.writeHead(204, CORS_HEADERS);
		res.end();

		return;
	}

	if (['GET'].indexOf(req.method) > -1) {
		if (req.url === '/sub') {
			req.socket.setNoDelay(true);
			res.writeHead(200, {
				...EVENT_STREAM_HEADERS,
				...CORS_HEADERS
			});
			res.write(':ok\n\n');

			subscribers.add(res);
			req.on('close', () => subscribers.delete(res));

			return;
		}

		res.writeHead(200, CORS_HEADERS);
		res.end();

		return;
	}

	if (['POST'].indexOf(req.method) > -1) {
		if (req.url === '/pub') {
			const buffers = [];

			for await (const chunk of req) {
				buffers.push(chunk);
			}

			const params = new URLSearchParams(Buffer.concat(buffers).toString());
			const message = `event: ${params.get('event')}\ndata: ${params.get('data')}\n\n`;

			subscribers.forEach((res) => res.write(message));
		}

		res.writeHead(200, CORS_HEADERS);
		res.end();

		return;
	}

	res.writeHead(405, CORS_HEADERS);
	res.end(`${req.method} is not allowed for the request.`);
});

server.listen(PORT);
```
