import React from 'react'
import './index.css'

export default function ChatIntro(){
    return(
        <div className="ChatIntro">
            <img src='intro.png' alt='usuário' />
            <h1>Mantenha seu celular conectado</h1>
            <h2>O WhatsApp conecta seu telefone para sincronizar as mensagens.</h2>
            <h2>Para reduzir o uso de dados conecte seu telefone no WIFI.</h2>
        </div>
    )
}