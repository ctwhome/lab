/**
 *  The Front-end Lab
 * ----------------------
 * GNU GPLv3 License (c) - 2014
 *
 * @link http://www.ctwhome.com/felab
 * @copyright GNU GPLv3 License, http://gnu.org/copyleft/gpl.html
 * @author Jesus Garcia <ctw@ctwhome.com> 07/06/14, 10:13.
 *
 * ----------------
 * Main require Aplication
 */

// require Config
require.config({
    baseUrl: 'assets/js',
    paths: {
        jquery: 'lib/jquery/jquery-2.1.1/jquery-2.1.1.min',
        underscore: 'lib/underscore/underscore-1.4.4/underscore-min',
        backbone: 'lib/backbone/backbone-0.9.10/backbone-min',
        handlebars: 'lib/handlebars/handlebrars-1.0.0-rc.3/handlebars.min',
        text: 'lib/require/require-text-2.0.5/text',

        templates: '../templates',

        bootstrap: 'lib/bootstrap/bootstrap-3.1.1/js/bootstrap.min',
        prism: 'lib/prism/prism',

        async: 'lib/require/require-async/async',
        d3: 'lib/d3/d3/d3',                                                        // Data driven documents - grafics generation
        d3layout: 'lib/d3/d3-layout/d3.layout.cloud',
        autosuggest: 'lib/jquery/plugins/autosuggest-1.6.2/jquery.autoSuggest-1.6.2',
        highcharts: 'lib/highcharts/highcharts-3/highcharts',

        app: 'app',
        routers: 'routers'
    },
    shim: {                // Creating the dependencies
        jquery: {
            exports: '$'
        },
        underscore: {
            exports: '_'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        bootstrap: {
            exports: 'Bootstrap'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        d3: {
            exports: 'd3'
        },
        d3layout: {
            deps: ['d3'],
            exports: 'd3'
        },
        facebook: {
            exports: "FB"
        },
        highcharts: {
            exports: 'Highcharts',
            deps: [ 'jquery']
        }
    }
});


// Start the main app logic.
// Chargin all the common libraries for all the project
require([
        'jquery',
        'backbone',
        'handlebars',
        'bootstrap'
    ],
    function () {
        // Load the router to start the history paths
        require([
            'routers'
        ], function (Router) {
            window.app = new Router;
        });
    });