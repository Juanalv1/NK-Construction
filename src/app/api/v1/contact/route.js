import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req){
  const {email, name, phone_number, description} = await req.json()

  const transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    auth: {
        user: "lenynht@nkconstructionllc.com",
        pass: "Nkconst1234$"
    }
});
  transporter.verify(function(error, success) {
    if (error) {
      console.error('Error al verificar la conexión con el servidor SMTP:', error);
    } else {
      console.log('Conexión exitosa con el servidor SMTP');
    }
  });
  const mailOptions = {
    from: 'lenynht@nkconstructionllc.com', // Remitente
    to: 'lenynht@nkconstructionllc.com', // Destinatario
    subject: 'Nuevo Contacto de proyecto', // Asunto
    text: 
      `Nombre: ${name}
Telefono: ${phone_number}
Correo: ${email}
Descripcion: ${description}` // Contenido del correo
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.error('Error al enviar el correo electrónico:', error);
    } else {
      console.log('Correo electrónico enviado:', info.response);
    }
  });

  return NextResponse.json({ message: "Hello World" })
}