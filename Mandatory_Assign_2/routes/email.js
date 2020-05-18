const router = require('express').Router();
const nodemailer  = require("nodemailer");


router.post("/sendEmail", (req, res) => {   
  // async..await is not allowed in global scope, must use a wrapper
async function main() {
  //console.log("email function")
  
  // create reusable transporter object using the default SMTP transport
  //   const transporter = nodemailer.createTransport({
  //     host: 'smtp.ethereal.email',
  //     port: 587,
  //     auth: {
  //         user: 'claire.reilly39@ethereal.email',
  //         pass: 'WxKEVz7FSFFPegZkCV'
  //     }
  // });
  
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'nodemailertest42@gmail.com',
        pass: 'Anders1234'
    },
    tls:{
      rejectUnauthorized:false
    }
});

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Mr. Foo" <nodemailertest42@gmail.com>', // sender address
      to: "madsrunefrederiksen@gmail.com", // list of receivers
      subject: "Hello from nodemailer", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
  
console.log("/sendEmail")
main().catch(console.error);

});


module.exports = router;