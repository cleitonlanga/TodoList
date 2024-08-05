import React from 'react'

const Filter = ({filter, setFilter, sort, setSort}) => {
  return (
    <div className='filter'>
        <h2>Filtrar por:</h2>
        <div className='filter-options'>
            <div>
                <p>Status: </p>
                <select value={filter} onChange={e => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                   <option value="Completed">Completas</option>
                   <option value="Uncompleted">Pendentes</option> 
                </select>
            </div>
            <div>
                <p>Ordem alfabética:</p>
                <button onClick={() => setSort('Asc')}>Asc</button>
                <button onClick={() => setSort('Desc')}>Desc</button>
            </div>
        </div>
    </div>
  )
}

export default Filter