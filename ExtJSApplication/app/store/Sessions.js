/// <reference path="C:\Users\Naruto\Source\Repos\ExtJSApplication\ExtJSApplication\ExtJS/ext-all-debug.js" />
Ext.define('SE.store.Sessions', {
    extend: 'Ext.data.Store',
    model:'SE.model.Session',
    autoLoad: true,
    autoSync: true,
    
    sorters: [
         { property: 'title' }
    ],

    groupField: 'sessionTimeDateTime'
    

});