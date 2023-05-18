// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';

// file main.js finished
import home from './home.js';
import login from './login.js';
import signup from './signup.js';
import error from './error.js';
import confirmation from './confirmation.js';
import interests from './interests.js';
import feed from './feed.js';
import profile from './profile.js';

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

function navigateTo(hash) {
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
    root.appendChild(route.component(navigateTo));
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);
