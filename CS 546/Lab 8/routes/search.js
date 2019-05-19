const express = require("express");
const router = express.Router();
const axios = require('axios')



router.post("/", async (req, res) => {

  const { data } = await axios.get('https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json')
var str = req.body.name;
var result = []
var count = 0;

  if (str ==undefined || str.length == 0  ){
    res.render('error',{str : str})
    return;

  }
  
  for (var k in data) {
    
    if (data[k].firstName.match(new RegExp(str, "i")) || data[k].lastName.match(new RegExp(str, "i"))) {
        if (count != 20){
          result[count] = data[k]
          count ++;
        }
       
    }
   
}
if (result.length < 1 || result === undefined){
  return res.render('notfound', {str: str})
}

return res.render(`index`, {result: result});   
});


module.exports = router;
