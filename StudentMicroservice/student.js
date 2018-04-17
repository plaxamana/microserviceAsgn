module.exports = function student(opts){
    let seneca = this;

    seneca.add(
        {
            "role": "student",
            "cmd": "addStd"
        },
        function(args, done){
            let student = seneca.make$("Student");
            student.firstName = args.firstName;
            student.lastName = args.lastName;
            student.fullName = student.firstName + " " + student.lastName;
            student.program = args.program;
            student.year = args.year;
            student.save$(function(err, newStd){
                done(err, newStd);
            });
        }
    );

    seneca.add(
        {
            "role": "student",
            "cmd": "listStd"
        },
        function(args, done){
            let students = seneca.make("Student");
            let qry = {};

            students.list$(qry, function(err, stdList){
                done(err, stdList);
            });
        }
    );

    seneca.add(
        {
            "role":"student",
            "cmd":"rmStd"
        },
        function(args, done){
            let students = seneca.make("Student");
            let qry = { fullName: args.fullName};

            students.remove$(qry, function(err, std){
                done(err, std);
            });
        }
    );    
}