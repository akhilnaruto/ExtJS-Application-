/// <reference path="C:\Users\Naruto\Source\Repos\ExtJSApplication\ExtJSApplication\ExtJS/ext-all-debug.js" />


Ext.define('SE.view.Sessions', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.sessiongridpanel',

    listeners: {
        itemdblclick: function (gridpanel, record, item, e) {
            var formWindow = Ext.create('SE.view.SessionForm');
            var form = formWindow.down('form');
            form.loadRecord(record)
            formWindow.show();
        }

    },

    store:'Sessions',

    columns: [
           {
               xtype: 'gridcolumn',
               dataIndex: 'id',
               text: 'Id'
           },
           {
               xtype: 'gridcolumn',
               dataIndex: 'title',
               text: 'Title',
               flex: 1,
               minWidth: 100,
               width: 75
           },
           {
               xtype: 'gridcolumn',
               dataIndex: 'approved',
               text: 'Approved'
           },
           {
               dataIndex: 'sessionTimePretty',
               text: 'Session Start Time',
               width: 100

           }
    ],

    features: [
        {
            ftype: 'grouping',
            groupHeaderTpl: [
                   '{[values.rows[0].get(\'sessionTimePretty\')]} (Session Count: {rows.length})'
            ]
        }
    ]
});