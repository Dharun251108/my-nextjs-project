import "./globals.css"; 

export const metadata = { 
  title: "Dharun | Software Engineer", 
  description: "Modern, interactive resume built with Next.js and Framer Motion.", 
}; 

export default function RootLayout({ 
  children, 
}: { 
  children: React.ReactNode; 
}) { 
  return ( 
    <html lang="en" className="scroll-smooth"> 
      <body className="bg-background text-foreground antialiased selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body> 
    </html> 
  ); 
} 