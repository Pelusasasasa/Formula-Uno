import React from 'react'
import { AsideBar } from './components/AsideBar'
import { AppRouter } from './router/AppRouter'


export const FormulaUnoApp = () => {
  return (
    <div className='flex h-[calc(100vh-50px)]'>
      <AsideBar/>
      <AppRouter/>
    </div>
  )
}
