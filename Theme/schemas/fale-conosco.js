fetch('/api/dataentities/faleconosco/schemas/v2', {
  "method": "PUT",
  headers: {
    "content-type": "application/json" // Indicates the content 
   },
   body: JSON.stringify({
      "title": "contato",
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "maxLength": 100,
          "title": "Nome"
        },
        "description": {
          "type": "string",
          "maxLength": 100,
          "title": "description"
        },
        "email": {
          "type": "string",
          "format": "email",
          "title": "Email"
        },
        "message": {
          "type": "string",
          "maxLength": 100,
          "title": "Message"
        },
        "city": {
          "type": "string",
          "maxLength": 100,
          "title": "Cidade"
        },
        "phone": {
          "type": "string",
          "title": "Telefone"
        },
        "subject": {
          "type": "string",
          "maxLength": 100,
          "title": "Subject"
        },
        "state": {
          "type": "string",
          "maxLength": 2,
          "title": "Estado",
          "enum": [
            "AC",
            "AL",
            "AP",
            "AM",
            "BA",
            "CE",
            "DF",
            "ES",
            "GO",
            "MA",
            "MT",
            "MS",
            "MG",
            "PA",
            "PB",
            "PR",
            "PE",
            "PI",
            "RJ",
            "RN",
            "RS",
            "RO",
            "RR",
            "SC",
            "SP",
            "SE",
            "TO"
          ]
        }
      },
      "required": [
        "name",
        "description",
        "email",
        "message",
        "city",
        "phone",
        "state",
        "subject"
      ],
      "v-security": {
        "allowGetAll": false,
        "publicWrite": [
          "name",
          "description",
          "email",
          "message",
          "city",
          "phone",
          "state",
          "subject"
        ],
        "publicJsonSchema": true
      },
      "v-triggers": [
        {
          "name": "insert-contato-table",
          "active": true,
          "condition": "",
          "action": {
            "type": "save",
            "dataEntity": "FL",
            "json": {
              "name": "{!name}",
              "description": "{!description}",
              "email": "{!email}",
              "city": "{!city}",
              "phone": "{!phone}",
              "state": "{!state}",
              "subject": "{!subject}",
              "message": "{!message}"
            }
          }
        }
      ]
    }
  )
}).then(res => res.json()).then(res => console.log(res))