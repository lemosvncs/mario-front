import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["PoweredByIniciativaFIS.svg","favicon.png","fisAI.svg","img/mario.png","img/mariobu.png","img/noto_anxious-face-with-sweat.svg","img/noto_astonished-face.svg","img/noto_disappointed-face.svg","img/noto_enraged-face.svg","img/noto_grinning-face-with-smiling-eyes.svg","img/noto_nauseated-face.svg","img/reinaldo.png","img/reinaldo2.png","img/reinaldo3.png","img/reinaldo4.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-7f64aeee.js","imports":["_app/immutable/start-7f64aeee.js","_app/immutable/chunks/index-e4d2abc4.js","_app/immutable/chunks/singletons-088ac2a6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/mario",
				pattern: /^\/mario\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/reinaldo",
				pattern: /^\/reinaldo\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
