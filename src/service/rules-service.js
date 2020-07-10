const repository = require('../repository/repository')
const moment = require('moment')
moment.locale('pt-BR');

module.exports = {
    initDb (){
        repository.db();
    },
    
    // Add a rule
    create (rules){
        this.initDb();
        repository.create(rules);
    }, 
    
    // Remove a rule
    remove (type){
        repository.remove(type);
    },
    
    // List all the rules
    list (){
        return repository.list();
    },

    // Convert string to date
    convertDate (date){
        //console.log(date)
        let iniDate = date.split('-');
        return new Date(iniDate[2], iniDate[1]-1, iniDate[0]);
    },
    
    // List rules by intervail
    listByIntervail (rangeDate){
        const rules = repository.list();
        var rullesLis = [];

        console.log(rules)
        let rule = rules.filter(element => {
            let iniDate = this.convertDate(rangeDate.iniDate);
            let finDate = this.convertDate(rangeDate.finDate);

            if(element.type == "Dia Especifico"){
                let date = this.convertDate(element.day);
                return  date >= iniDate && date <= finDate;
            }else if(element.type == "Semanal"){
                var contains = 0;

                for(i = moment(iniDate); i.isSame(moment(finDate)) || i.isBefore(moment(finDate)) ; i = moment(i).add(1, 'day')){
                    if(element.day.indexOf(i.format('dddd')) > -1){
                        contains ++;
                        break;
                    } 
                }
                return contains > 0
            }else if(element.type == "Diario"){
                return element;
            }
        })

        // Structuring the display
        for(let rul of rule){
            var {day} = rul;
            var {interval} = rul;
            rullesLis.push({day: day, intervail: interval})
        }

        return rullesLis;
    }

}