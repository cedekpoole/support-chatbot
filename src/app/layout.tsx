import './globals.css'
import { Inter } from 'next/font/google'
import Chat from "./components/Chat";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OpenAI Chatbot',
  description: 'A chatbot that uses the OpenAI API to generate text',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Chat />
        {children}
        </body>
    </html>
  )
}
