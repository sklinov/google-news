const getTitles = require('./getTitles')
const fs = require('fs')
var parseString = require('xml2js').parseString


describe('Extracting titles from dataset', ()=> {
    
    const expectedTitles = '[{"CAIiEGCeoHRcw-F_oLU4b8sSgLoqFggEKg4IACoGCAow9vBNMK3UCDCvpUk":"Temporary Expanded Public Service Loan Forgiveness Denies Most Requests - NPR"}]'

    test('Gets titles from dataset', () => {
        fs.readFile( './xmlDataset.xml', function(err, data) {
            parseString(data, function (err, result) {
                var news = result
                const titles = getTitles(news)
                expect(titles).toBe(expectedTitles)
            });
         });
    } )
})