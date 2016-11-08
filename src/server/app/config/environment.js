var proxyConfig = require('./proxy');

var config = {
    beacon: {
        production: {
            username: 'butterfield.website@tripsync',
            password: 'longBW8juice%',
            token: 'Jamie2015drasag6DrewuPhEFRapaYAFracrATHe5UBrUwaBu',
            baseUrl: 'https://data2011.peak15systems.com/beacon2011/service.svc',
            getDepartures: '/get/butterfield/complextext/downloadtransactions?processexecutetoken=BRTPIFGetDepartures&outputFormat=XML',
            updateDepature: '/update/entity/p15_tripdepartures?token=%s&p15_tripdeparturesid=%s',
            getGuests: '/get/butterfield/entity/p15_guests?p15_departuresguestsid=%s',
            updateGuest: '/update/entity/p15_guests?token=%s&p15_guestsid=%s',
            updateCompanyEval: '/insert/complex/evaluation?token=%s&p15_evaluation.br_evaluatortype=100000001&p15_evaluation.p15_guestid=%s'
        },
        dev: {
            username: 'butterfield.website@tripsync',
            password: 'longBW8juice%',
            token: 'OAPDV0ATOAVOEMLUDRLUNOAROUXLUPR4AJOEGIUSTIAFR9ADRLEBLUSIFTHIEVOZ',
            baseUrl: 'https://data2011qa.peak15systems.com/beacon2011qa/service.svc',
            getDepartures: '/get/butterfielddemo/complextext/downloadtransactions?processexecutetoken=BRTPIFGetDepartures&outputFormat=XML',
            updateDepature: '/update/entity/p15_tripdepartures?token=%s&p15_tripdeparturesid=%s',
            getGuests: '/get/butterfielddemo/entity/p15_guests?p15_departuresguestsid=%s',
            updateGuest: '/update/entity/p15_guests?token=%s&p15_guestsid=%s',
            updateCompanyEval: '/insert/complex/evaluation?token=%s&p15_evaluation.br_evaluatortype=100000001&p15_evaluation.p15_guestid=%s'
        },
    },
    proxy: proxyConfig.server || ''
    
    

};
module.exports = config;
