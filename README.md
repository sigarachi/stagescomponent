# Stages Component
    Build with React JS 
## About 

Simple React Component with stages and substages. 

## JSON Format

```json
{
    "stages":[
      {
        "title": "Этап 1: Проверка компании",
        "substages":[
          {
            "title": "Регистрация",
            "status": "completed",
            "info":  "Пройдите регистрацию",
            "documents": [],
            "controllers": []
          },
          {
            "title": "Одобрение партнера",
            "status": "completed",
            "info": "Получите одобрение партнера",
            "documents": [],
            "controllers": []
          },
          {
            "title": "Анкета ожидает согласования",
            "status": "progress",
            "info": "Подпишите и отправьте оригиналы документов менеджеру",
            "documents": [
              {
                "title": "Заявление о присоединении",
                "link": "https://www.google.com"
              }, 
              {
                "title": "Договор оферты",
                "link": "https://www.google.com"
              }
            ],
            "controllers": [
              {
                "title": "Перейти в заявку",
                "link": "https://www.google.com"
              }
            ]
          },
        ]
      }
    ]
  }
```
