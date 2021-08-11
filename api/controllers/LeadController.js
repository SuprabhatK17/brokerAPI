/**
 * LeadController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    async createLead(req, res) {
        try {
            let params = req.allParams();
            if (!params.fullName || !params.mobileNumber || !params.emailId) {
                return res.badRequest({   // in built responses
                    err: 'fileds required'
                });
            }
            // Lead is the global model
            const result = await Lead.create({
                fullName: params.fullName,
                mobileNumber: params.mobileNumber,
                emailId: params.emailId
            });
            return res.ok(result);
        }
        catch (err) {

            return res.serverError(err);
        }

    },

    // find All function
    async findLead(req, res) {

        try {
            const leads = await Lead.find();
            return res.ok(leads)
        } catch (err) {

            return res.sererError(err);

        }

    },

    // find by id function
    async findLeadById(req, res) {

        try {

            const lead = await Lead.findOne({
                id: req.params.id
            });

            if(!lead){
                return res.send('not found')
            }else{
                return res.ok(lead);

            }

        } catch (err) {
            return res.serverError(err);
        }

    },

    // update broker data
    async updateLead(req, res) {

        try {

            let params = req.allParams();
            let attributes = {};

            if (params.fullName) {
                attributes.fullName = params.fullname;
            }
            if (params.mobileNumber) {
                attributes.mobileNumber = params.mobileNumber;
            }
            if (params.emailId) {
                attributes.emailId = params.emailId;
            }

            // using inbuilt update method
            const result = await Lead.update({
                id: req.params.id
            }, attributes);

            if(!result){
                return res.send('not found')
            }else{
                return res.ok(result);
            }
            

        } catch (err) {
            return res.serverError(err);
        }

    },

    // delete function
    async deleteLead(req, res) {

        try {
            const result = await Lead.destroy({
                id: req.params.id
            });
            if(!result){
                return res.send('not found');
            }else{
                return res.ok(result);
            }
            

        } catch (err) {
            return res.notFound(err);
        }

    },

    // pagination

    async GetLead(req, res) { 

        try {

            let { page,size } = req.query
            if(!page){
                page=1
            }
            // default number of documents per page
            if(!size){
                size=6
            }
            const limit = parseInt(size);
            // if page = 1 then (1-1)*10=0 so dont skip any document
            //if page = 2 then(2-1)*10 = 10,skip 10 records
            const skip = (page-1) * size;

            //parameters
            // fetch the records through find 
            // total size of records in a single page
            // skip records depend on page number and limit
            const leads = await Lead.find().limit(limit).skip(skip);
            return res.send({
                page,
                size,
                data:leads,
            })
        } catch (err) {

            return res.sendStatus(500).send(err.message);

        }

    },
    
    



};



