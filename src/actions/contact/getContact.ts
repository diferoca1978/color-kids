import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';


export const getContac = defineAction({
  accept: 'form',
  input: z.object({
    nombre: z.string().min(3, 'El nombre debe contener minimo 3 letras').max(30, 'El nombre es demasiado largo'),
    email: z.string().email('Debe ser un correo valido'),
    telefono: z.number(),
    inquietudes: z.string().min(10, 'El mensaje debe contener minimo 10 letras.' ).max(500, 'El mensaje es demasiado largo.')
  }
  ),
  handler: async ({nombre, email, telefono, inquietudes}) => {
    console.log({nombre,email,telefono,inquietudes})
    return { ok: true }
  }
})