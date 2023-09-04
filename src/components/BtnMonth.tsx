import React from 'react'
import { useData } from '../context/DataContext'

const style: React.CSSProperties = {
    padding: "var(--gap) var(--gap-s)",
    backgroundColor: "var(--color-3)",
    border: "none",
    borderRadius: "var(--gap)",
    color: "var(--color-2)",
    fontWeight: "600",
    textTransform: "capitalize"
}

const BtnMonth = ({ n }: { n: number }) => {

    const { setFinal, setInicio } = useData()

    const monthName = (n: number) => {
        const date = new Date();
        date.setMonth(date.getMonth() + n)
        const name = new Intl.DateTimeFormat('pt-br', { month: "long" }).format(date)
        return name
    }

    const formatDate = (date: Date) => {
        const dd = String(date.getDate()).padStart(2, "0");
        const mm = String(date.getMonth() + 1).padStart(2, "0");
        const yyyy = String(date.getFullYear());
        return `${yyyy}-${mm}-${dd}`
    }

    const setMonth = (n: number) => {
        const date = new Date();
        date.setMonth(date.getMonth() + n)

        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
        const lastDay = new Date(date.getFullYear(), date.getMonth(), + 1, 0)

        setInicio(formatDate(firstDay))
        setFinal(formatDate(lastDay))
    }

    return (
        <button style={style} onClick={() => setMonth(n)}>{monthName(n)}</button>
    )
}

export default BtnMonth