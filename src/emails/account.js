const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'motmv2@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along to the app!`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'motmv2@gmail.com',
        subject: 'Account deleted successfully',
        text: `Sorry to see you go ${name}, please provide feedback on why you left!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}