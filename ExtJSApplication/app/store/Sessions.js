/// <reference path="C:\Users\Naruto\Source\Repos\ExtJSApplication\ExtJSApplication\ExtJS/ext-all-debug.js" />
Ext.define('SE.store.Sessions', {
    extend: 'Ext.data.Store',
     fields: ['id',
         {
             name: 'title', sortType: 'asUCText'
         },
         'approved',
         {
             dateFormat: 'c',
             name: 'sessionTimeDateTime',
             sortType: 'asDate',
             type: 'date'
         },
         {
             convert: function (v, rec) {
                 var convertIt = Ext.util.Format.dateRenderer('m/d/Y g:i a'),
                     pretty = convertIt(rec.get('sessionTimeDateTime'));
                 return pretty;

             },
             name: 'sessionTimePretty',
             type: 'string'

         }


     ],
     autoLoad: true,
     autoSync: true,
     proxy: {
         type: 'rest',
         url: '/data/sessions.json',
         reader: {
             type: 'json',
             root: 'data'
         }
     },
     sorters: [
         { property: 'title' }
     ],

     groupField: 'sessionTimeDateTime'
    

});