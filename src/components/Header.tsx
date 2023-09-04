import React, { useEffect, useState } from 'react'
import { useData } from '../context/DataContext'
import DateRange from './DateRange'
import Months from './Months'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const [title, setTitle] = useState('Resumo')
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/') {
            setTitle('Resumo')
        } else if (location.pathname === '/vendas') {
            setTitle('Vendas')
        }
    }, [location])
    const context = useData()
    if (context === null) throw new Error('Deve-se envolver num provider')

    console.log(context.data)

    return (
        <header className='mb'>
            <div className='daterange mb'>
                <DateRange />
                <h1 className='box bg-3'>{title}</h1>
            </div>
            <Months />
        </header>
    )
}

export default Header
