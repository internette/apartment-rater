'use client'
 
import dynamic from 'next/dynamic'
 
const App = dynamic(() => import('../App.js'), { ssr: false })
 
export function ClientOnly() {
  return <App />
}