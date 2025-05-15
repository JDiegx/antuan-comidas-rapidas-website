import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const linkVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const LinkInBio = () => {
  return (
    <div className='w-full sm:w-[400px] m-auto'>
      <div className='w-full h-[180px] bg-[url(/background-antuan-comidas-rapidas.png)] bg-cover bg-no-repeat bg-center'></div>
      <div className='w-[160px] h-[160px] bg-white rounded-full shadow-md absolute top-[90px] left-[50%] translate-x-[-50%]'>
        <img src="/antuan-comidas-rapidas-logo.png" alt="Logo of Antuan Comidas Rapidas" />
      </div>
      <div className='w-full flex flex-col items-center justify-center mt-[75px]'>
        <h1 className='text-[32px] text-red-600 font-bold'>Antuan</h1>
        <h2 className='text-[20px] mt-[-13px] font-bold'>Comidas Rapidas🍔</h2>
        <p className='text-[11px] text-zinc-400 mt-[-4px] font-bold'>@antuancomidasrapidas_mtr</p>
      </div>

      <div className='w-full h-[210px] flex flex-col items-center justify-evenly mt-[10px]'>
        {[{
          to: '/menu',
          label: 'Ver el Menú 🍔',
          isLink: true
        }, {
          href: 'https://www.google.com/maps/place/Plazoleta+la+93/@7.5408505,-76.6074382,8z/data=!4m6!3m5!1s0x8e5a2f251520fd75:0xba32fd6f7e0d6291!8m2!3d8.8002637!4d-75.8560639!16s%2Fg%2F11kjm3m2ws?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D',
          label: '¿Cómo llegar? 📍',
          isLink: false
        }, {
          to: '/menu',
          label: 'Pedir a domicilio 🛵',
          isLink: true
        }].map(({ to, href, label, isLink }, i) => (
          <motion.div
            key={label}
            variants={linkVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.15 }}
            className="w-full flex justify-center"
          >
            {isLink ? (
              <Link
                to={to}
                className='w-[90%] h-[50px] border-3 border-black bg-white flex items-center justify-center text-black font-bold text-[18px] transition ease-in-out hover:bg-black hover:text-white'
              >
                {label}
              </Link>
            ) : (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className='w-[90%] h-[50px] border-3 border-black bg-white flex items-center justify-center text-black font-bold text-[18px] transition ease-in-out hover:bg-black hover:text-white'
              >
                {label}
              </a>
            )}
          </motion.div>
        ))}
      </div>

      <div className='w-full h-[320px] flex flex-col items-center justify-evenly'>
        <h3 className='ml-4 font-bold text-[20px] self-start'>Redes y contacto</h3>
        {[{
          href: 'https://api.whatsapp.com/send?phone=573213892812',
          label: '💬 WhatsApp'
        }, {
          href: 'https://www.instagram.com/antuancomidasrapidas_mtr/',
          label: '📸 Instagram'
        }, {
          href: 'https://www.tiktok.com/@antuancomidasrapidas_mtr?_t=8jzMnvCzapa&_r=1',
          label: '🎵 TikTok'
        }, {
          href: 'https://www.facebook.com/people/Antuan-Comidas-R%C3%A1pidas/100092615444780/?mibextid=ZbWKwL',
          label: '👍 Facebook'
        }].map(({ href, label }, i) => (
          <motion.div
            key={label}
            variants={linkVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.45 + i * 0.15 }}
            className="w-full flex justify-center"
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className='w-[90%] h-[50px] border-3 border-black bg-white flex items-center justify-center text-black font-bold text-[18px] transition ease-in-out hover:bg-black hover:text-white'
            >
              {label}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default LinkInBio
