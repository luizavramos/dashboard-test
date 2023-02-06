import './Dashboard.css';
import { Tooltip } from 'react-tooltip';
import { useState } from 'react';

export default function Dashboard() {
 

  const dashboard = [
    {
      id: "primeira",
      icone: <img src=".//src/assets/icone-pessoa.png" />,
      porcentagem: "+30%",
      number: "26",
      tipo: "Pacientes Ativos"
    },
    {
      id: "segunda",
      icone: <img src=".//src/assets/icone-2.png" />,
      porcentagem: "-10%",
      number: "306",
      tipo: "Testes Realizados"
    },
    {
      id: "terceira",
      icone: <img src=".//src/assets/icone-3.png" />,
      porcentagem: "+30%",
      number: "139",
      tipo: "Testes concluídos"
    },
    {
      id: "quarta",
      icone: <img src=".//src/assets/icone-4.png" />,
      porcentagem: "-3%",
      number: "11",
      tipo: "Testes Cancelados"
    },
  ];
  return (
    <div className="container">
      <p className='title'>Informações gerais</p>
      <div className='card'>
        {dashboard.map((dash) => (
          <div key={dash.id} className="dash" >
          
            <div className='sup-dash'>
              <div>{dash.icone}</div>
              <div className={`icone${dash.id}`} icone>{dash.porcentagem}</div>
            </div>
            <div>
              <p className='number'>{dash.number}</p>
              <p className='type'>{dash.tipo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
