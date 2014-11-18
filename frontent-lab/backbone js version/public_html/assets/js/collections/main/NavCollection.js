/**
 *  The Front-end Lab
 * ----------------------
 * GNU GPLv3 License (c) - 2014
 *
 * @link http://www.ctwhome.com/felab
 * @copyright GNU GPLv3 License, http://gnu.org/copyleft/gpl.html
 * @author Jesus Garcia <ctw@ctwhome.com> 07/06/14, 15:08.
 *
 * NavCollection
 * ---------------------
 * Colection for the navigation menu
 */

define([
    'models/nav/NavModel'
]), function(NavModel){
    return Backbone.Collection.extend({
        url: 'http://assets/data/info.json',
        model: NavModel,

        fetch: function () {
            this.add([
                {
                    id: 'campaigns',
                    title: 'Campaigns',
                    icon: 'fa-codepen',
                    submenu: true
                },
                {
                    id: 'addressbook',
                    title: 'Adress Book',
                    icon: 'icon-address-book'
                },
                {
                    id: 'settings',
                    title: 'Settings',
                    icon: 'fa-gears',
                    submenu: true
                },
                {
                    id: 'logout',
                    title: 'Log-out',
                    icon: 'icon-arrow-left4'
                }
            ]);
            this.trigger('reset');
        }
    });

};


