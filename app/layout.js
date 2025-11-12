export const metadata = {
  title: 'Hackathon Project Ideas for Beginners',
  description: 'Generate effective hackathon project ideas perfect for beginners',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
