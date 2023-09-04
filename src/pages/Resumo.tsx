import Graph from '../components/Graph'
import { useData } from '../context/DataContext'

const Resumo = () => {
  const { data } = useData()
  if (data === null) return null

  return (
    <section>
      <div className="resumo flex mb">
        <div className='box'>
          <h2>Vendas</h2>
          <span>{
            data.filter((item) => item.status !== 'falha')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>

        <div className='box'>
          <h2>Recebido</h2>
          <span>
            {data.filter((item) => item.status === 'pago')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>

        <div className='box'>
          <h2>Em processo</h2>
          <span>{data.filter((item) => item.status === 'processando')
            .reduce((acc, item) => acc + item.preco, 0)
            .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>

      </div>
      <div className='box mb'>
        <Graph data={data}/>
      </div>
    </section>
  )
}

export default Resumo