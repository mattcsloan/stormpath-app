angular.module('appRoutes', []).config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider

        .state('home', {
            url: '/',
            views: {
                header: {
                    templateUrl: '/templates/_common/templates/header.tmpl.html',
                },
                content: {
                    templateUrl: '/templates/home/home.view.html',
                    controller: 'HomeController',
                    controllerAs: 'home'
                },
                footer: {
                    templateUrl: '/templates/_common/templates/footer.tmpl.html',
                }
            }
        })

        .state('dashboard', {
            url: '/dashboard',
            views: {
                header: {
                    templateUrl: '/templates/_common/templates/header.tmpl.html',
                },
                content: {
                    templateUrl: '/templates/dashboard/dashboard.view.html',
                    controller: 'DashboardController',
                    controllerAs: 'dashboard'
                },
                footer: {
                    templateUrl: '/templates/_common/templates/footer.tmpl.html',
                }
            }
        })

        .state('posts', {
            url: '/posts',
            views: {
                header: {
                    templateUrl: '/templates/_common/templates/header.tmpl.html',
                },
                content: {
                    templateUrl: '/templates/posts/posts.view.html',
                    controller: 'PostsController',
                    controllerAs: 'posts'
                },
                footer: {
                    templateUrl: '/templates/_common/templates/footer.tmpl.html',
                }
            }
        })

        .state('portfolio', {
            url: '/portfolio',
            views: {
                header: {
                    templateUrl: '/templates/_common/templates/header.tmpl.html',
                },
                content: {
                    templateUrl: '/templates/portfolio/portfolio.view.html',
                },
                footer: {
                    templateUrl: '/templates/_common/templates/footer.tmpl.html',
                }
            },
            redirectTo: 'portfolio.index'
        })

            .state('portfolio.index', {
                url: '',
                views: {
                    portfolio: {
                        templateUrl: '/templates/portfolio/index/index.view.html',
                        controller: 'PortfolioController',
                        controllerAs: 'portfolio'
                    }
                }
            })

            .state('portfolio.detail', {
                url: '/:portfolioBase/:portfolioTitle',
                views: {
                    portfolio: {
                        templateUrl: '/templates/portfolio/detail/detail.view.html',
                        controller: 'PortfolioDetailController',
                        controllerAs: 'detail',
                        resolve: {
                            portfolioBase: ['$stateParams', '$state', function($stateParams, $state){
                                if(!$stateParams.portfolioBase) {
                                    $state.go('portfolio');
                                }  else {
                                    return $stateParams.portfolioBase;
                                }                               
                            }],
                            portfolioTitle: ['$stateParams', '$state', function($stateParams, $state){
                                if(!$stateParams.portfolioTitle) {
                                    $state.go('portfolio');
                                }  else {
                                    return $stateParams.portfolioTitle;
                                }                               
                            }]
                        }
                    }
                }
            })

        .state('login', {
            url: '/login',
            external: true
        })

        .state('logout', {
            url: '/logout',
            external: true
        })

        .state('register', {
            url: '/register',
            external: true
        })

        ;

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}]);