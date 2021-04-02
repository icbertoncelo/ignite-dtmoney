
import {createServer, Model} from 'miragejs'

export function initServer() { 
  createServer({
    models: {
      transaction: Model,
    },
  
    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Desenvolvimento web',
            type: 'deposit',
            category: 'Dev',
            amount: 4000,
            createdAt: new Date()
          },
          {
            id: 2,
            title: 'Conta de luz',
            type: 'withdraw',
            category: 'Contas',
            amount: 400,
            createdAt: new Date()
          },
        ]
      })
    },
  
    routes() {
      this.namespace = 'api'
      
      this.get('/transactions', () => {
        return this.schema.all('transaction')
      })
  
      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)
  
        return schema.create('transaction', data)
      })
    }
  });
}
