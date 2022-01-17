import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  clients = [
    {
      id: 123,
      name: 'Client One',
      email: 'clientone@mail.com',
      billingType: 'load',
      rate: 30
    },
    {
      id: 456,
      name: 'Client Two',
      email: 'clienttwo@mail.com',
      billingType: 'load',
      rate: 32
    },
    {
      id: 789,
      name: 'Client Three',
      email: 'clientthree@mail.com',
      billingType: 'hour',
      rate: 24
    },
    {
      id: 101,
      name: 'Client Four',
      email: 'clientfour@gmail.com',
      billingType: 'hour',
      rate: 20
    },
    {
      id: 111,
      name: 'Client Five',
      email: 'clientfive@gmail.com',
      billingType: 'load',
      rate: 35
    },
    {
      id: 213,
      name: 'Client Six',
      email: 'clientsix@gmail.com',
      billingType: 'hour',
      rate: 31
    }
  ];

  constructor() { }

  getClients(): any {
    return this.clients;
  }

  removeClient(clientId): void {
    for (let i = 0; i < this.clients.length; i++) {
      if (this.clients[i].id === clientId) {
        this.clients.splice(i, 1);
      }
    }
  }

  popClient(): void {
    this.clients.pop();
  }

  addClient(client): void {
    this.clients.push(client);
  }

  editClient(client): void {
    for (let i = 0; i < this.clients.length; i++) {
      if (this.clients[i].id === client.id) {
        this.clients[i] = client;
        break;
      }
    }
  }
}
