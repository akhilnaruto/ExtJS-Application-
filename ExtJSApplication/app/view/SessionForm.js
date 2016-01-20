/// <reference path="C:\Users\Naruto\Source\Repos\ExtJSApplication\ExtJSApplication\ExtJS/ext-all-debug.js" />
Ext.define('SE.view.SessionForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.sessionform',
    padding: 5,
    width: 600,
    title: 'Edit Session',
    model: true,
    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            title: '',
            defaults: {
                labelWidth: 90,
                margin: '0,0,10,0',
                anchor: '90%'
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'title',
                    fieldLabel: 'Title',
                    allowBlank: false
                },
                {
                    xtype: 'checkboxfield',
                    name: 'approved',
                    fieldLabel: 'Approved'
                },
                {
                    xtype: 'container',
                    padding: '10,10,10,10',
                    layout: {
                        type: 'hbox',
                        aloign: 'middle',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'button',
                            text: 'Save',
                            formBind: true,
                            margin: '10,10,10,10',
                            handler: function (button) {
                                var form = button.up().up('form');
                                form.updateRecord();
                                button.up('window').destroy();
                            }

                        },
                        {
                            xtype: 'button',
                            text: 'Cancel',
                            margin: '10,10,10,10',
                            handler: function (button) {
                                button.up('window').destroy();
                            }

                        }
                    ]
                }

            ]
        }
    ]

});
