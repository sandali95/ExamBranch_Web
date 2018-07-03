const nodemailer = require('nodemailer');
const hbs = require('handlebars');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    port : 25,
    secure:true,
    auth: {
        user: 'exambranch.ucsc.test@gmail.com',
        pass: 'exambranch'
    }
});


module.exports.sendmail = (user)=>{
    const message = "<Dear student,<br> " +"This is to confirm that you have successfully registered for <b>{{exam}}</b><br>"
            +".Following are the subjects you've registered for.Please note that this can not be updated or changed<br>"+
             "<ul>{{#subjects}}<li>{{this}}</li>{{/subjects}}</ul>";
    
    let template = hbs.compile(message);

    let result = template(user);


    let mailOptions = {
        from: 'wathmali123@gmail.com',
        to: user.email,
        subject: `Registartions of ${user.exam}`,
        html:result
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log('error');
    } else {
      console.log('Email sent: ' );
    }
  });
}


