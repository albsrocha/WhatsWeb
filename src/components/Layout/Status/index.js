import Reac,{useState} from "react";
import "./index.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import App from '../../../App.js'
import CloseIcon from '@material-ui/icons/Close';

export default function Status() {

  const [returnValue, setReturnValue] = useState('padrão')

  if(returnValue==='padrão'){
  return (
    <div className="status--window">
      <div className="status--persona">
        <div className="status--header">
          <div className="status-header-user">
            <img src="/img/pp.jpeg" alt="user" />
            <div className="status-header-user-text">
              <span className="status-header-user-text-title">
                {" "}
                Meu Status{" "}
              </span>
              <span className="status-header-user-text-status">
                {" "}
                Sem atualizações{" "}
              </span>
            </div>
          </div>
          <div className="status-header-contact"></div>
        </div>
        <div className="status--others">
          <div className="status-others-title">RECENTE</div>
          <div>{/* Inserir layout para indicar status de outros*/}</div>
        </div>
      </div>
      <div className="status--content">
          <div className="status--content--head">
            <CloseIcon fontSize="large"style={{color:'#FFF', margin:'1% 0% 1% 95%', padding:'4px',cursor:'pointer'}} onClick={()=>(setReturnValue('App'))}/>
            </div>
           <div className="status--content--body">
          <DonutLargeIcon fontSize="Large" className="status--content--img"/>
          <span className="status--content-text">Escolha algum contato para visualizar o status</span>
          </div> 
          </div>
    </div>
    
  );}else{
    return(
      <App/>
    )
  }
}
