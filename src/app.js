export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'home'],       name: 'home',       moduleId: 'creditcard/creditcard' },
      { route: 'users',            name: 'users',      moduleId: 'users/index',   nav: true },
      { route: 'users/:id/detail', name: 'userDetail', moduleId: 'users/detail' },
      { route: 'files/*path',      name: 'files',      moduleId: 'files/index',   href:'#files',   nav: true }
    ]);
  }
}