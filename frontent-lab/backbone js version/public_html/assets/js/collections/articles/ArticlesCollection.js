/**
 *  The Front-end Lab
 * ----------------------
 * GNU GPLv3 License (c) - 2014
 *
 * @link http://www.ctwhome.com/felab
 * @copyright GNU GPLv3 License, http://gnu.org/copyleft/gpl.html
 * @author Jesus Garcia <ctw@ctwhome.com> 12/06/14, 08:50.
 *
 * JSON
 * ---------------------
 * Data for articles
 */

define([
    'models/data/articleModel'
]), function(ArticleModel){
    return Backbone.Collection.extend({
        url:  'http://assets/data/articles.json',
        model: ArticleModel
    })
}
