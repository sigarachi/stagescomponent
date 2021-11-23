# Stages Component
    Build with React JS 
## About 

Simple React Component with stages and substages. 


## Icons & Meanings 

| Icon | Description | Status |
| --- | --- | --- |
| ![download](https://github.com/sigarachi/stagescomponent/blob/master/public/resources/icons/download.svg) | Используется при обозначении файла, доступного для скачивания | - |
| ![check](https://github.com/sigarachi/stagescomponent/blob/master/public/resources/icons/check.svg) | Используется для обозначения выполненного этапа | `completed` |
| ![in_progress](https://github.com/sigarachi/stagescomponent/blob/master/public/resources/icons/in_progress_filled.svg) | Используется для обозначения этапа, находящегося в работе ( в данный момент ) | `progress` |
| ![wait](https://github.com/sigarachi/stagescomponent/blob/master/public/resources/icons/wait.svg) | Используется для обозначения этапа, который еще не был выполнен и еще не находится в работе | `waiting` | 


## User Guide

### Stage


Все поля свойства `stages` являются обязательными (`title` может быть пустым, но оба поля не могут равняться *`NULL` or `undefined`*): 

| Поле | Описание | Тип данных |
| --- | --- | --- |
| title | Имя этапа | Строка |
| unique_name | Уникальное имя объекта | Строка |

Все объекты данного типа хранятся в файле `/data/stages.json`

```json

{
  "stages":[
      {
          "title": "Этап 1: Проверка компании",
          "unique_name": "first"
      },
      {
         "title": "Этап 2: Торговые точки",
         "unique_name":"second"
      }
  ]
}

```


### Substage

Все поля свойства `substages` являются обязательными (`ref` и `unique_name` не могут быть пустыми, все поля не могут равняться *`NULL` or `undefined`*): 

| Поле | Описание | Тип данных |
| --- | --- | --- |
| title | Имя этапа | Строка |
| ref | Имя `stage` внутри которого находится данный подэтап | Строка |
| unique_name | Уникальное имя объекта | Строка |
| status | Статус выполнения этапа | Строка |
| info | Информация/Текст отображаемый пользователю | Строка |

Все объекты данного типа хранятся в файле `/data/substages.json`


```json

{
    "substages":[
        {
            "title": "Регистрация",
            "unique_name": "reg",
            "ref" : "first",
            "status": "completed",
            "info":  "Пройдите регистрацию"
        }
    ]
}

```


### Documents & Controllers Format

| Поле | Описание | Тип данных |
| --- | --- | --- |
| title | Имя этапа | Строка |
| ref | Имя `substage` внутри которого находится данный объект | Строка |
| link |  Ссылка | Строка |


Documents хранятся в файле `/data/documents.json`
Controllers хранятся в файле `/data/controllers.json`


```json

{
    "documents": [
        {
            "title": "Заявление о присоединении",
            "ref" : "ank",
            "link": "https://www.google.com"
        }, 
        {
            "title": "Договор оферты",
            "ref" : "ank",
            "link": "https://www.google.com"
        }
    ]
}


```