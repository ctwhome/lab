/**
 *  The Front-end Lab
 * ----------------------
 * GNU GPLv3 License (c) - 2014
 *
 * @link http://www.ctwhome.com/felab
 * @copyright GNU GPLv3 License, http://gnu.org/copyleft/gpl.html
 * @author Jesus Garcia <ctw@ctwhome.com> 18/06/14, 08:56.
 *
 * routers.js
 * ---------------------
 * Routers of the aplication, called by Require.js
 */

define([
    'settings'
], function (settings) {
    return Backbone.Router.extend({
        /**
         * Array to store the active view
         */
        views: [],
        /**
         * define the routers for the aapplication
         */
        routes: {
            /**
             * Default routing strategy
             */
            '': 'homeView',
            ':route': 'switchPage',
            ':route/:article': 'showArticle',
            ':route/:action/:id': 'switchPage'
        },
        /**
         * Initializes router after construction.
         */
        initialize: function () {
            this.history = [];
            this.navigationView();
            this.sidebarView();
            //this.homeView(); // delete after router configuration

            Backbone.history.start();
        },

        /**
         * Switches the Page when the url change.
         * Activate if the route change.
         *
         * Param {string} route:
         * is the literal after http://.../#'route'
         */
        switchPage: function (route) {
            //detect the name of the router:
            // if is homepage: render home
            var page = settings.pages[route || "home"];
            console.log(page);
            //this.createDashboardView(page.vie w, page.model);
            //break;

        },

        /**
         * Creates the nav bar view.
         */
        navigationView: function () {
            // Create the view inside of the router
            var router = this;
            require([
                'collections/main/NavCollection',
                'views/main/NavView'
            ], function (NavCollection, NavView) {
                console.log("creating nav bar");
                router.nav = new NavView();
            });
        },
        sidebarView: function () {
            require([
                //'collections/nav/NavCollection',
                'views/main/SidebarView'
            ], function (/*NavCollection,*/ SidebarView) {
                console.log("creating the side bar");
                var sidebar = new SidebarView();
            });
        },
        homeView: function () {
            require([
                //'collections/nav/NavCollection',
                'views/main/homeView'
            ], function (/*NavCollection,*/ HomeView) {
                console.log("creating the home view");
                var homeView = new HomeView();
            });
        },
        /**
         * Create the view article
         * @param {string} "article" from route
         */
        showArticle: function (article) {
            require([
                'views/articles/articleView'
            ], function (ArticleView) {

                // Create a new article view
                this.views.article = new ArticleView();
                this.views.article.render();
            })
            // Load model
            // Load view


            console.log("showing article");
            console.log(article);
            // $("#main-content").html("<h1> ARTICLE </h1>");
        }


    });
});




