import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
  useEffect(() => {
    api.get('transactions').then(response => console.log(response.data))
  }, [])
  
  return (
    <Container>
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Desenvolvimento</td>
          <td className="deposit">R$ 10000,00</td>
          <td>Front</td>
          <td>29/03/2021</td>
        </tr>
        <tr>
          <td>Aluguel</td>
          <td className="withdraw">- R$ 1300,00</td>
          <td>Casa</td>
          <td>29/03/2021</td>
        </tr>
      </tbody>
    </table>
  </Container>
  )
}