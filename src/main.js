// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';

// file main.js finished
import home from './components/home.js';
import login from './components/login.js';
import signup from './components/signup.js';
import error from './components/error.js';
import confirmation from './components/confirmation.js';
import interests from './components/interests.js';
import feed from './components/feed.js';
import profile from './components/profile.js';

myFunction();

const routes = [
  { path: '/', component: home },
  { path: '/login', component: login },
  { path: '/error', component: error },
  { path: '/signup', component: signup },
  { path: '/confirmation', component: confirmation },
  { path: '/interests', component: interests },
  { path: '/feed', component: feed },
  { path: '/profile', component: profile },
];

const defaultRoute = '/';
const root = document.getElementById('root');

async function navigateTo(hash) {
  const route = routes.find((routeFound) => routeFound.path === hash);

  if (route && route.component) {
    window.history.pushState(
      {},
      route.path,
      window.location.origin + route.path,
    );

    if (root.firstChild) {
      root.removeChild(root.firstChild);
    }
    root.appendChild(await route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);