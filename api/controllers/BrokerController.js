/**
 * BrokerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    async createBroker(req, res) {
        try {
            let params = req.allParams();
            if (!params.firstName || !params.email || !params.contactNo) {
                return res.badRequest({   // in built responses
                    err: 'fileds required'
                });
            }
            // Broker is the global model
            const result = await Broker.create({
                firstName: params.firstName,
                email: params.email,
                contactNo: params.contactNo
            });
            return res.ok(result);
        }
        catch (err) {

            return res.serverError(err);

            //method 1
            //.then(result =>{    // when promise will fullfill
            //    return res.ok(result);
            //})
            //.catch(err =>{   // if any error,something went wrong
            //    return res.serverError(err);
            //})

            //method 2
            //,(err,results)=>{
            //     if(err){
            //         return res.serverError(err);
            //     }else{
            //         return res.ok(results);
            //     }
            // })

            //return res.ok('hello world');
        }

    },

    // find All function
    async findBroker(req, res) {

        try {
            const brokers = await Broker.find();
            return res.ok(brokers)
        } catch (err) {

            return res.sererError(err);

        }

    },

    // find by id function
    async findBrokerById(req, res) {

        try {

            const broker = await Broker.findOne({
                id: req.params.id
            });

            if(!broker){
                return res.send('not found')
            }else{
                return res.ok(broker);

            }

        } catch (err) {
            return res.serverError(err);
        }

    },

    // update broker data
    async updateBroker(req, res) {

        try {

            let params = req.allParams();
            let attributes = {};

            if (params.firstName) {
                attributes.firstName = params.firstName;
            }
            if (params.email) {
                attributes.email = params.email;
            }
            if (params.contactNo) {
                attributes.contactNo = params.contactNo;
            }

            // using inbuilt update method
            const result = await Broker.update({
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
    async deleteBroker(req, res) {

        try {
            const result = await Broker.destroy({
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

    }


};

