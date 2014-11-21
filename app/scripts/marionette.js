import template from 'template';

var {  AppRouter, Application, Behavior,  Behaviors,  CollectionView,  CompositeView,  Controller,  ItemView,  LayoutView } = Backbone.Marionette;

var { Model, Collection} = Backbone;


/**
 * Add JST compliance
 */
var oldTemplateCache = Backbone.Marionette.TemplateCache.prototype.loadTemplate;

Backbone.Marionette.TemplateCache.prototype.loadTemplate = function(templateId) {
    var tmpl;
    try {
        tmpl = oldTemplateCache(templateId);
    } catch (e) {
        try {
            tmpl = template[templateId]();
        } catch(e2) {}
    }

    if (!tmpl || tmpl.length === 0) {
        throw new Marionette.Error({
            name: 'NoTemplateError',
            message: 'Could not find template: "' + templateId + '"'
        });
    }

    return tmpl;
}

export {  AppRouter, Application, Behavior,  Behaviors,  CollectionView,  CompositeView,  Controller,  ItemView,  LayoutView, Model, Collection };