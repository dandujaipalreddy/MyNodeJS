
/*
 * GET home page.
 */

var flight=require('../flight2');
var jet=flight({
number:'10',
origin:'Hyderabad',
destination:'Delhi'
});
exports.jet= function(req, res){
  res.json(jet.getInfo());
};
