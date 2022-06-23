import Head from 'next/head'
import Cadastrar from '../components/cadastrar'
import Read from '../components/read'

//importar as configurações do firebase
// import { app, database } from '../services/firebase'
// import { collection, addDoc, getDocs,orderBy,query } from 'firebase/firestore'
// import { useEffect, useState } from 'react'

//definir a coleção
//const contato = collection(database,'contato')

export default function Home() {

  return(
    <>

      <Head>
         <title>Crud simples com firestore</title>
      </Head>

  <main className="container">
        <div className="row">
          <div className="col-md">
              <Cadastrar />
          </div>
          <div className="col-md">
              <Read />
          </div>
         </div>
       </main>
     </>
  )

{/* //   //hooks
//   const[nome, SetNome]=useState('')
//   const[email, SetEmail]=useState('')
//   const[telefone, SetTelefone]=useState('')
//   const[mensagem, SetMensagem]=useState('')

//   //create
//   const create = ()=>{
//     addDoc(contato,
//       {
//         nome:nome,
//         email:email,
//         telefone:telefone,
//         mensagem:mensagem
//       }).then(()=>{
//         SetNome('')
//         SetEmail('')
//         SetTelefone('')
//         SetMensagem('')
//         read()
//       })
//   }

//   //read
// const[lista, setLista]=useState([])

//   const read = ()=>{
//     getDocs( query (contato,orderBy('nome','desc')))
//     .then((data)=>{
//       setLista(data.docs.map((item)=>{
//         return{...item.data(),id:item.id}
//       }))
//     })
//   }
//   //mostrar os documentos ao atualizar a pagina
//   useEffect(()=>{
//     read()
//   },[])

//   return (
//     <>
//       <Head>
//         <title>Crud simples com firestore</title>
//       </Head>

//       <main className="container">
//         <div className="row">
//           <div className="col-md">
//             <div className="text-center"><h3>Cadastrar</h3></div>
            
//             <input 
//               type="text" 
//               placeholder="Nome" 
//               className="form-control" 
//               required 
//               onChange={event=>SetNome(event.target.value)}
//               value={nome}
//             /> 
//             <input 
//               type="email" 
//               placeholder="Email" 
//               className="form-control" 
//               required 
//               onChange={event=>SetEmail(event.target.value)}
//               value={email}
//             /> 
//             <input 
//               type="tel" 
//               placeholder="Telefone" 
//               className="form-control" 
//               required 
//               onChange={event=>SetTelefone(event.target.value)}
//               value={telefone}
//             /> 
//             <textarea 
//               placeholder="Mensagem" 
//               className="form-control" 
//               required 
//               onChange={event=>SetMensagem(event.target.value)}
//               value={mensagem}
//               />
//             <input 
//               type="button" 
//               value="Salvar" 
//               className="btn btn-outline-dark form-control" 
//               onClick={create}
              
//               />
//           </div>
          
//           <div className="col-md">
//             <h3 className="text-center">Exibir</h3>
//             {lista.map((lista)=>{
//               return(
//                 <>
//                 <div className="card">
//                   <div className="card-header bg-dark text-light">Id: {lista.id}</div>
                  
//                   </div>
//                   <div className="card-body bg-secondary">
//                       <p className="card-title text-info">Nome: {lista.nome}</p>
//                       <p className="card-subtitle">email: {lista.email}</p>
//                       <p className="card-subtitle">Telefone: {lista.telefone}</p>
//                       <p className="card-subtitle">Mensagem {lista.mensagem}</p>
//                   </div>
//                   <div className="card-footer bg-dark">
//                     <div className="input-group">
//                     <input type="button" value="Alterar" className="btn btn-outline-warning form-control" />
//                     <input type="button" value="Excluir" className="btn btn-outline-danger form-control" />
//                   </div>
//                 </div>
//                 </>
//               )
//             })}
//           </div>
//         </div>
//       </main>
//     </>
    
//   ) */}
}
