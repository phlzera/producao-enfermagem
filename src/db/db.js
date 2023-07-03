const db = {
  "pacientes": [
    {
      "id": 1,
      "nome": "João",
      "sobrenome": "Silva",
      "dataNascimento": "1990-01-01",
      "documento": "123456789"
    },
    {
      "id": 2,
      "nome": "Maria",
      "sobrenome": "Santos",
      "dataNascimento": "1995-05-10",
      "documento": "987654321"
    }
  ],
  "funcionarios": [
    {
      "id": 1,
      "nome": "Pedro",
      "sobrenome": "Gomes",
      "dataNascimento": "1985-03-15",
      "documento": "543216789",
      "registroCoren": "12345",
      "admin": false,
      "senha": "senha1"
    },
    {
      "id": 2,
      "nome": "Ana",
      "sobrenome": "Rodrigues",
      "dataNascimento": "1992-09-20",
      "documento": "987612345",
      "registroCoren": "54321",
      "admin": true,
      "senha": "senha2"
    }
  ],
  "responsaveis": [
    {
      "id": 1,
      "nome": "José",
      "sobrenome": "Ferreira",
      "dataNascimento": "1978-12-05",
      "documento": "987654321",
      "cidade": "São Paulo",
      "bairro": "Centro",
      "rua": "Rua A",
      "numero": "123",
      "telefone": "+551112345678",
      "pacientes": [1]
    },
    {
      "id": 2,
      "nome": "Luciana",
      "sobrenome": "Menezes",
      "dataNascimento": "1980-06-15",
      "documento": "123456789",
      "cidade": "Rio de Janeiro",
      "bairro": "Copacabana",
      "rua": "Rua B",
      "numero": "456",
      "telefone": "+5522987654321",
      "pacientes": [2]
    }
  ],
  "evolucoes": [
    {
      "ID": 1,
      "idPaciente": 1,
      "idAutor": 1,
      "evolucao": "Paciente apresentou melhora significativa",
      "sistolica": 120,
      "diastolica": 80,
      "pulso": 70,
      "temperatura": 36.5,
      "saturacao": 98.5,
      "data": "2023-06-27"
    },
    {
      "ID": 2,
      "idPaciente": 2,
      "idAutor": 2,
      "evolucao": "Paciente está estável",
      "sistolica": 130,
      "diastolica": 85,
      "pulso": 75,
      "temperatura": 37.0,
      "saturacao": 97.0,
      "data": "2023-06-28"
    }
  ]
}

  export default db;
  
  
  
  
  
  