import { useState } from 'react';
import './contadorPessoas.css'
import reset from './imagens/zerar.png';
import homenIcon from './imagens/homenIcon.png';
import mulherIcon from './imagens/mulherIcon.png';
import mais from './imagens/mais.png';
import menos from './imagens/menos.png';

export default function ContadorPessoa() {
    const [countH, setCountH] = useState(0);
    const [countM, setCountM] = useState(0);

    function adicionar(tipo) {
        if (tipo === 1) {
            setCountH(countH + 1);
        } else {
            setCountM(countM + 1);
        }
    }

    function subtrair(tipo) {
        if (tipo === 1 && countH > 0) {
            setCountH(countH - 1);
        } else if (tipo === 2 && countM > 0) {
            setCountM(countM - 1);
        }
    }

    function zerar() {
        setCountH(0);
        setCountM(0);
    }

    return (
        <div className="container">
            <h1>Contador de Pessoas</h1>
            <div className="cabecalho-container">
                <p>Total: {countH + countM}</p>
                <button onClick={zerar} className="botao-zerar">
                    <img src={reset} alt="Zerar contadores" className="icone-zerar" />
                </button>
            </div>
             

            <div className="contadores-container">
                <div className="contador">
                    <img src={homenIcon} alt="Homem" className="icone-pessoa" />
                    <p>Homens: {countH}</p>
                    <div className="contador-botoes">
                        <button onClick={() => subtrair(1)} className="botao-acao">
                            <img src={menos} alt="Menos" className="icone-acao" />
                        </button>
                        <button onClick={() => adicionar(1)} className="botao-acao">
                            <img src={mais} alt="Mais" className="icone-acao" />
                        </button>
                    </div>
                </div>
                
                <div className="contador">
                    <img src={mulherIcon} alt="Mulher" className="icone-pessoa" />
                    <p>Mulheres: {countM}</p>
                    <div className="contador-botoes">
                        <button onClick={() => subtrair(2)} className="botao-acao">
                            <img src={menos} alt="Menos" className="icone-acao" />
                        </button>
                        <button onClick={() => adicionar(2)} className="botao-acao">
                            <img src={mais} alt="Mais" className="icone-acao" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}