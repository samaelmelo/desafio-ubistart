import React, { useEffect } from 'react';
import {Header} from "../components/Header"
import { Table } from 'react-bootstrap';
import {useAmount} from "../hook/useAmount"
import {api} from "../services/api"

export function List() {
  const { amount, setAmount} = useAmount()

  useEffect( () => {
    api.get("/products").then(res => setAmount(res.data))
  }, [])


  return (
    <>
      <Header/>

       <main style={{padding: '1rem'}}>
          {

              amount?.map( item => (


                  <Table  striped bordered hover variant="dark">
                      <thead>
                          <tr>
                            <th>#</th>
                            <th>Título</th>
                            <th>Valor</th>
                            <th>Data</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>{item.name}</td>
                            <td>{item.amount}</td>
                            <td>{item.created_at}</td>
                          </tr>
                         
                        </tbody>
                  </Table>
 

              ))

          }
       

        
        </main> 
    </>
  );
}
