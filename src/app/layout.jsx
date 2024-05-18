import './globals.css';
import { Poppins } from '@next/font/google';
const poppins = Poppins({
  subsets: ['latin'],
  display: 'optional',
  weight : ['400', '700']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-slate-100'>{children}</body>
    </html>
  )
}
