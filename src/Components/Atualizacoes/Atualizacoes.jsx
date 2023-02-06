import "./Atualizacoes.css";

export default function Atualizacoes() {
  const atualizacoes = [
    {
      id: 1,
      foto: <img src=".//src/assets/renata.png" alt="" />,
      nome: "Renata Augusto Ferreira",
      status: "complete",
      atividade: "COMPLETOU O TESTE:",
      exame: "TDAH CAB ADHD",
      data: "REALIZADO EM 20/10/2023",
    },
    {
      id: 2,
      foto: <img src=".//src/assets/carlos.png" alt="" />,
      nome: "Carlos Nóbrega Baccio",
      status: "cancel",
      atividade: "CANCELOU O TESTE:",
      exame: "TDAH CAB ADHD",
      data: "REALIZADO EM 20/10/2023",
    },
    {
      id: 3,
      foto: <img src=".//src/assets/suelton.png" alt="" />,
      nome: "Suelton A. Mellis",
      status: "cancel",
      atividade: "CANCELOU O TESTE:",
      exame: "TDAH CAB ADHD",
      data: "REALIZADO EM 20/10/2023",
    },
  ];
  return (
    <>
      <div className="container-atualizacoes">
        <div className="title-atualizacoes">
          <p>Atualizações importantes</p>
        </div>
        <div className="container-all">
          {atualizacoes.map((atual) => (
            <div key={atual.id} className="foto-text">
              <div className="imagem">{atual.foto}</div>
              <div className="text-float">
                <div className="title-text">
                  <p>PACIENTE</p>
                </div>
                <div className="name-att">{atual.nome}</div>
                <div className="exame">
                  <div className={atual.status}>
                    <p>{atual.atividade}</p>
                  </div>
                  <div className={atual.status}>
                    <p>
                      <b>{atual.exame}</b>
                    </p>
                  </div>
                </div>
                <div className="title-text">{atual.data}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
