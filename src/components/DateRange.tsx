import { useData } from "../context/DataContext"
import DateInput from "./DateInput"

const DateRange = () => {

    const { inicio, setInicio, final, setFinal } = useData()

    return (
        <form className='box flex' onSubmit={(e) => e.preventDefault()}>
            <DateInput label='Início' value={inicio} onChange={({ target }) => setInicio(target.value)} />
            <DateInput label='Fim' value={final} onChange={({ target }) => setFinal(target.value)} />
        </form>
    )
}

export default DateRange