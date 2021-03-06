import { app, database } from '../services/firebase'
import { collection, addDoc} from 'firebase/firestore'
import { useState } from 'react'

const contato = collection(database,'contato')

export default function Cadastrar() {
    
const[nome, SetNome]=useState('')
const[email, SetEmail]=useState('')
const[telefone, SetTelefone]=useState('')
const[mensagem, SetMensagem]=useState('')

const create = ()=>{
  addDoc(contato,
    {
      nome:nome,
      email:email,
      telefone:telefone,
      mensagem:mensagem
    }).then(()=>{
      SetNome('')
      SetEmail('')
      SetTelefone('')
      SetMensagem('')
      window.location.reload()
    })
  }
    return (
    <> 
          <div>
            <div className="text-center"><h3>Cadastrar</h3></div>
            
            <input 
              type="text" 
              placeholder="Nome" 
              className="form-control" 
              required 
              onChange={event=>SetNome(event.target.value)}
              value={nome}
            /> 
            <input 
              type="email" 
              placeholder="Email" 
              className="form-control" 
              required 
              onChange={event=>SetEmail(event.target.value)}
              value={email}
            /> 
            <input 
              type="tel" 
              placeholder="Telefone" 
              className="form-control" 
              required 
              onChange={event=>SetTelefone(event.target.value)}
              value={telefone}
            /> 
            <textarea 
              placeholder="Mensagem" 
              className="form-control" 
              required 
              onChange={event=>SetMensagem(event.target.value)}
              value={mensagem}
              />
            <input 
              type="button" 
              value="Salvar" 
              className="btn btn-outline-dark form-control" 
              onClick={create}
              
              />
          </div>
    </>
    )

}
