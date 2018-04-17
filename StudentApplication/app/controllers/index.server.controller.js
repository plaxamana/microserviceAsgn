exports.render = function(req, res) {
    // res.redirect(callingUrl);
    // addStd/listStd/rmStd
    let ops = req.body.ops;

    // student infomation
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let fullName = firstName + " " + lastName;
    let year = req.body.year;
    let program = req.body.program;
    
    callingUrl = 'http://localhost:3000/api/students/'+ ops + '?fullName=' + fullName + '&year=' + year + '&program=' + program;
    console.log(req.originalUrl)
    console.log("operation = " + ops);
    
    res.redirect(callingUrl);

};


