// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from 'nodemailer'
import readline from 'readline';




const Solution = () => {
  // Write your code here
  const interFace = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  
  interFace.question("Enter your EmailID: ", (email)=>{
    sendMail(email)
    interFace.close()
  })
  
  async function sendMail(email){
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth:{
        user:'codingninjas2k16@gmail.com',
        pass:'slwvvlczduktvhdj'
      }
    });
  
    const mailOptions={
      from: 'codingninjas2k16@gmail.com',
      to: email,
      subject: 'Coding Ninjas',
      text: 'The world has enough coders; be a coding ninja!'
  
    }
  
    try {
      const res = await transporter.sendMail(mailOptions);
      console.log("Email sent: ",res.messageId);
    } catch (error) {
      console.log("Email not sent "+ error)
    }
    
  }
  
};

export default Solution;
