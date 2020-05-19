import * as sapper from '@sapper/app';
const mode = process.env.NODE_ENV;

// TODO -- Figure out how I want to add google analytics
// const dev = mode === 'development';

// <script async src="https://www.googletagmanager.com/gtag/js?id=UA-61372432-1"></script>

// <script>
// 	window.dataLayer = window.dataLayer || [];
// 	function gtag(){dataLayer.push(arguments)}
// 	gtag('js', new Date());

// 	gtag('config', 'UA-61372432-1');
// </script>

sapper.start({
	target: document.querySelector('#sapper')
});