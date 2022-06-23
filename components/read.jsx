import { app, database } from '../services/firebase'
import { collection, addDoc, getDocs,orderBy,query, doc, deleteDoc, getDoc, updateDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const contato = collection(database,'contato')

export default function Read() {

  //read
const[lista, setLista]=useState([])

const read = ()=>{
  getDocs(query(contato,orderBy('nome')))
  .then((data)=>{
    setLista(data.docs.map((item)=>{
      return{...item.data(),id:item.id}
    }))
  })
}

useEffect(()=>{
  read()
},[])

//função do botão excluir
const deleteBtn = (id)=>{
  const documento = doc(database,"contato",id)
  deleteDoc(documento)
  .then(()=>{
    read()
  })
}

//rotida de update inicio

//mostar o contato selecionado
const [ID,setID]=useState(null)
const [contatoUnico,setContatoUnico]=useState({})
const [mostrar,setMostrar] = useState(false)
const [nome,SetNome] = useState("")
const [email,SetEmail] = useState("")
const [telefone,SetTelefone] = useState("")
const [mensagem,SetMensagem] = useState("")

const show = async(id)=>{
  setID(id)
  if(ID!=null){
    const contatoSimples = doc(database,"contato",ID)
    const resultado = await getDoc(contatoSimples)
    setContatoUnico({...resultado.data(),id:resultado.id})
    SetNome(contatoUnico.nome)
    SetEmail(contatoUnico.email)
    SetTelefone(contatoUnico.telefone)
    SetMensagem(contatoUnico.mensagem)
  }
  if(mensagem !=""){
    setMostrar(true)
  }
}
useEffect(()=>{
  show()
},[ID])

const bt_cancelar = ()=>{
  setMostrar(false)
  SetNome("")
  SetEmail("")
  SetTelefone("")
  SetMensagem("")
  setID(null)
}

const bt_alterar = (id) =>{
  const contatoShow = doc(database,'contato',id)
  updateDoc(contatoShow,{
    nome:nome,email:email,telefone:telefone,mensagem:mensagem
  }).then(()=>{
    SetNome("")
    SetEmail("")
    SetTelefone("")
    SetMensagem("")
    setID(null)
    read()
    setMostrar(false)
  })
}
//rotina de update fim

return (
  <>
  {mostrar ?(
    <div>
      <h3 className="text-center">Alterar</h3>
      <> 
          <div> 
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
              onClick={()=> bt_alterar(contatoUnico.id)} 
              />
              <input 
              type="button" 
              value="Cancelar" 
              className="btn btn-outline-danger form-control" 
              onClick={bt_cancelar}
              />
          </div>
    </>
    </div>
  ):(
    <></>
  )}
<h3 className="text-center">Exibir</h3>
            {lista.map((lista)=>{
              return(
                <>
                <div className="card">
                  <div className="card-header bg-dark text-light">Id: {lista.id}</div>
                  
                  </div>
                  <div className="card-body bg-secondary">
                      <p className="card-title text-info">Nome: {lista.nome}</p>
                      <p className="card-subtitle">email: {lista.email}</p>
                      <p className="card-subtitle">Telefone: {lista.telefone}</p>
                      <p className="card-subtitle">Mensagem {lista.mensagem}</p>
                  </div>
                  <div className="card-footer bg-dark">
                    <div className="input-group">
                    <input type="button" value="Alterar" className="btn btn-outline-warning form-control" onClick={()=>show(lista.id)}/>
                    <input type="button" onClick={()=>deleteBtn(lista.id)} value="Excluir" className="btn btn-outline-danger form-control" />
                  </div>
                </div>
                </>
              )
            })}

</>
)


}