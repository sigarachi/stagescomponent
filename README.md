# Stages Component
    Build with React JS 
## About 

Simple React Component with stages and substages. 


## Icons & Meanings 

| Icon | Description | 
| --- | --- |
| ![download](https://github.com/sigarachi/stagescomponent/blob/master/public/resources/icons/download.svg) | Используется при обозначении файла, доступного для скачивания | 
| ![check](https://github.com/sigarachi/stagescomponent/blob/master/public/resources/icons/check.svg) | Используется для обозначения выполненного этапа | 
| ![in_progress](https://github.com/sigarachi/stagescomponent/blob/master/public/resources/icons/in_progress_filled.svg) | Используется для обозначения этапа, находящегося в работе ( в данный момент ) | 
| ![wait](https://github.com/sigarachi/stagescomponent/blob/master/public/resources/icons/wait.svg) | Используется для обозначения этапа, который еще не был выполнен и еще не находится в работе | 


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
