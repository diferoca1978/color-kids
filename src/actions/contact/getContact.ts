import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';


export const getContact = defineAction({
  accept: 'form',
  input: z.object({
    fullName: z.string().min(3, 'El nombre debe contener minimo 3 letras').max(30, 'El nombre es demasiado largo'),
    email: z.string().email('Debe ser un correo valido'),
    telefono: z.number(),
    inquietudes: z.string().min(10, 'El mensaje debe contener minimo 10 letras.' ).max(500, 'El mensaje es demasiado largo.'),
    terms: z.union([z.literal('true'), z.null()])
    .refine((val) => val === 'true', {
      message: 'Debes aceptar los términos y condiciones',
    }),
  }),
  handler: async ({fullName, email, telefono, inquietudes, terms}) => {
    console.log({fullName,email,telefono,inquietudes, terms})
    return { ok: true }
  }
})