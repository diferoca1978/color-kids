import { defineAction, ActionError } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY)

export const getContact = defineAction({
  accept: 'form',
  input: z.object({
    fullName: z.string().min(3, 'El nombre debe contener minimo 3 letras').max(30, 'El nombre es demasiado largo'),
    email: z.string().email('Debe ser un correo valido'),
    telefono: z.number(),
    inquietudes: z.string().min(10, 'El mensaje debe contener minimo 10 letras.' ).max(500, 'El mensaje es demasiado largo.'),
    terms: z.union([z.literal('true'), z.null()]).refine(val => val === 'true', { 
      message: 'Debes aceptar los términos y condiciones' 
    })
  }),
  handler: async ({fullName, email, telefono, inquietudes}) => {

    
    const { data, error } = await resend.emails.send({
      from: 'Color Kids <color-kids@resend.dev>',
      to: [email],
      subject: 'New contact form submission',
      html:   `<h1>Form submission it works!!</h1>
      <p>Nombre: ${fullName}</p>
      <p>Email: ${email}</p>
      <p>Telefono: ${telefono}</p>
      <p>Inquietudes: ${inquietudes}</p>`

    })

    if (error) {
      throw new ActionError({
        code: 'EMAIL_ERROR',
        message: error.message
      });
      
    }
    return { ok: true, data }
  }
})