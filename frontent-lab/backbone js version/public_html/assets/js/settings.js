/**
 *  The Front-end Lab
 * ----------------------
 * GNU GPLv3 License (c) - 2014
 *
 * @link http://www.ctwhome.com/felab
 * @copyright GNU GPLv3 License, http://gnu.org/copyleft/gpl.html
 * @author Jesus Garcia <ctw@ctwhome.com> 17/06/14, 08:36.
 *
 * settings.js
 * ---------------------
 * General settings application.
 */

define(function () {
    return{
        urlPath: "felab.local",
        dataPath: "assets/data",

        pages: {
            home: {
                name: "HomeView",
                view: "views/main/HomeView",
                model: "models/main/HomeModel"
                //type: "dashboard"
            }
        }
    }
})