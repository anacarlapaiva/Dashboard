import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { ISale } from '../context/DataContext';
import Loading from '../components/Loading';

const Sale = () => {
    const { id } = useParams();
    const { data, loading } = useFetch<ISale>(`https://data.origamid.dev/vendas/${id}`);

    if (data === null) return null;
    if (loading === true) return <Loading />

    return (
        <div>
            <div className='box mb'>
                ID: {data.id}
            </div>
            <div className='box mb'>
                Nome: {data.nome}
            </div>
            <div className='box mb'>
                Preço: {data.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </div>
            <div className='box mb'>
                Status: {data.status}
            </div>
            <div className='box mb'>
                Preço: {data.pagamento}
            </div>
        </div>
    )
}

export default Sale;