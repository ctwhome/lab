/**
 *  The Front-end Lab
 * ----------------------
 * GNU GPLv3 License (c) - 2014
 *
 * @link http://www.ctwhome.com/felab
 * @copyright GNU GPLv3 License, http://gnu.org/copyleft/gpl.html
 * @author Jesus Garcia <ctw@ctwhome.com> 07/06/14, 15:46.
 *
 * NavView.js
 * ---------------------
 * Navigation bar view
 */
define([
        'text!templates/pages/article.html'
    ],
    function(template) {
        return Backbone.View.extend({
            el: $("#main-content"),
            template: Handlebars.compile(template),
            events: {
            },

            /**
             * When creating the view we set the model related to it
             */
            initialize: function (options) {
                console.log("creating article");
                //this.model = options.model;

                this.$el.html(this.template(
                    {
                        //menu: this.collection.toJSON()
                    }
                ));

                // Render the accountsSwitcher
                this.render().el;

            },

            /**
             * Render the model's view
             * @returns {BrandsPanelView}
             */
            render: function () {
                this.$el.html(this.template());
                return this;
            }
        });
    });
