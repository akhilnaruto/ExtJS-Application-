﻿/// <reference path="C:\Users\Naruto\Source\Repos\ExtJSApplication\ExtJSApplication\ExtJS/ext-all-debug.js" />
Ext.define('SE.model.Session', {
    extend: 'Ext.data.Model',
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
    
    proxy: {
        type: 'rest',
        url: '/data/sessions.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }

});