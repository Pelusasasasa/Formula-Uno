import React from 'react'
import { AsideBar } from './components/AsideBar'
import { AppRouter } from './router/AppRouter'


export const FormulaUnoApp = () => {
  return (
    <div className='flex h-screen'>
      <AsideBar/>
      <AppRouter/>
    </div>
  )
}
