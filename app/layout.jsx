import React from 'react'
import '@/assets/styles/globals.css'

export const metadata = {
    title: 'MeowMart | Find Perfect Cat Necessities',
    description: 'Shop for all your cats needs',
    keywords: 'cat, cat supplies, cat needs, cat food, cat toys, shop cat'
}

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <div>{children}</div>
        </body>
    </html>
    
  );
};

export default MainLayout