const service = require('../service/rules-service')

module.exports = {
    // List rules
    async list(req, res){
        const rules = await service.list();
        return res.json(rules);
    },

    // List rules by date range 
    async listRulesByIntervail(req, res){
        const rules = await service.listByIntervail(req.params);

        return res.json(rules);
    },

    // Create rules
    async create(req, res){
        const rules = await service.create(req.body);

        return res.json(rules);
    },

    // Remove rule
    async destroy(req, res){

        await service.remove(req.params.type);

        return res.send();
    }
};