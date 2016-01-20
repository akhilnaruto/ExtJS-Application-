/// <reference path="C:\Users\Naruto\Source\Repos\ExtJSApplication\ExtJSApplication\ExtJS/ext-all-debug.js" />

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'SE',
    requires: ['SE.view.MainView'],
    views: [
        'Sessions',
        'SessionForm'
    ],
    stores:[
         'Sessions'
    ],
    models:[
         'Session'
    ],
    launch: function () {
        Ext.create('SE.view.MainView');

    }
});