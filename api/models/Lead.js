/**
 * Lead.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    fullName: {
			type: 'string',
			description: 'The full name for this user.',
			required: true,
			maxLength: 30,
			example: 'Carol Reyna'
		},

		mobileNumber: {
			type: 'string',
			description: 'The username for this user.',
			required: true,
			maxLength: 10,
			example: '8888888888'
		},

		emailId: {
			type: 'string',
			description: 'The username for this user.',
			maxLength: 50,
			example: 'carol.reyna@microsoft.com'
		},

		message: {
			type: 'string',
			description: 'Message entered by the lead',
			maxLength: 500,
			example: 'A51900027648'
		},

		

		


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

