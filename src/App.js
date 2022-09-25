import "./Main.scss";
import BarraNavegacao from "./componentes/barra_navegacao";
import CardPerfil from "./componentes/card_perfil";
import CardPadrao from "./componentes/card_padrao";
import {data} from "./db"

function App() {
 
  return (
    <>
      <BarraNavegacao />
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <CardPerfil />
            </div>
            <div className="column is-9">
              <CardPadrao valores={data.valoresSobre} titulo={'Sobre mim'} useHr={false} />
              <CardPadrao valores={data.valoresExperiancias} titulo={'Experiências'} useHr={true} />
              <CardPadrao valores={data.valoresFormacao} titulo={'Formação'} useHr={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
