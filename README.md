# Компонент StagesComponent

Можете опробовать ![тут]("https://stagecomponent.herokuapp.com") 

## Краткое Описание 

Компонент-контейнер с заголовком и внутренними компонентами

## Спецификация StagesComponent


### Входные данные

```js

    const props = {
        name : "StagesComponent",
        text: "Заголовок компонента",
        innerComponents: [] //Внутренние компоненты
    }

```

### Алгоритм работы компонента

* На вход компоненту подаются `props` с параметрами согласно Входным Данным;
* Устанавливается заголовок компонента;
* Обработка массива innerComponents:
    * Класс компонента определяется по его полю `props.name`
    * Для каждого из элементов вызывается функция `render()`
    * Формируется дополнительный набор `props` для вложенного компонента:

    ```js
        const props = {
            name : "Stage",
            position: pos,
            current: currentStage,
            updateStage: updateStage,
            setCurrentStage: setCurrentStage,
            text: "Заголовок компонента",
            innerComponents: []
        }
     
    ```

* Код передаваемых функций

```js

//Устанавливает следующий элемент в качестве текущего

const updateStage = () => {
    if(props.innerComponents.length >= stage + 1) {
            const newValue = stage + 1;
            setStage(newValue);
    }
}

// Устанавливает выбранный компонент в качестве текущего

const setCurrentStage = (int) => {
        const newValue = int;
        setStage(newValue);
}


```

### Стили

```css
    .stgs-component{
        width: 30rem;   /* Высота */
        height: 50rem;  /* Ширина */
        background-color: #eaeaea; /* Цвет фона */
        border-radius: 15px;
        /* Отступы */
        padding-top: 2rem;
        margin-top: 2rem;
        padding-left: 2rem;
        padding-right: 2rem;
        overflow: auto;
    }
```

Измение параметров стиля объекта на данный момент невозможно


# Компонент Stages

## Краткое описание

Компонент-контейнер с заголовком и внутренними компонентами

## Спецификация Stages

### Входные данные

```js

    const props = {
        name : "Stage",
        position: pos,
        current: currentStage,
        updateStage: updateStage,
        setCurrentStage: setCurrentStage,
        text: "Заголовок компонента",
        innerComponents: []
    }

```

### Алгоритм работы компонента

* На вход компоненту подаются `props` с параметрами согласно Входным Данным;
* Устанавливается заголовок компонента;
* Производится присоединение переданных функций к компоненту;
* Обработка массива innerComponents:
    * Класс компонента определяется по его полю `props.name`
    * Для каждого из элементов вызывается функция `render()`
    * Формируется дополнительный набор `props` для вложенного компонента:

    ```js
        const props = {
            name : "Stage",
            position: pos,
            current: current,
            updateCurrent: updateCurrent,
            setSubStage: setSubStage,
            text: "Заголовок компонента",
            innerComponents: []
        }
     
    ```
* Код передаваемых функций

```js

const updateCurrent = () => {
    if(current + 1 <= props.innerComponents.length) {
        const newValue = current + 1;
        setCurrent(newValue)
    }
    else{
        props.icon= "done"
        props.updateStage()
    }
    
}

const setSubStage = (value) => {
    const newValue = value;
    setCurrent(newValue)
}

```

### Стили

```css

.stg{
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
}

.stg-title{
    font-weight: bold;
    font-size: 1.2em;
    display: flex;
}

.stg-img{
    margin-left: 0.5rem;
    height: 1.5rem;
}

.stg-body{
    margin-top: 1rem;
}

```

### Иконки & Значения 

| Icon | Description | Status |
| --- | --- | --- |
| ![done](https://github.com/sigarachi/stagescomponent/blob/master/public/resources/icons/done.svg) | Обозначает выполненный этап | `done` |


# Компонент Substages

## Краткое описание

Компонент-контейнер с заголовком и внутренними компонентами

## Спецификация Substages

### Входные данные


```js

   const props = {
        name : "Substage",
        position: pos,
        current: current,
        updateCurrent: updateCurrent,
        setSubStage: setSubStage,
        text: "Заголовок компонента",
        innerComponents: []
    }

```

### Алгоритм работы компонента

* На вход компоненту подаются `props` с параметрами согласно Входным Данным;
* Устанавливается заголовок компонента;
* Производится присоединение переданных функций к компоненту;
* Обработка массива innerComponents:
    * Класс компонента определяется по его полю `props.name`
    * Для каждого из элементов вызывается функция `render()` с его `props`

### Стили

```css

.sb-stg{
    display: flex;
    flex-direction: column;
    height: 1.8rem;
}

.sb-stg-main{
    display: flex;
    flex-direction: row;
}

.sb-stg-title{
    padding: .45rem .4rem;
}
.sb-stg-status{
    padding: .3rem .3rem;
}

.sb-stg-body {
    padding: 0 2.5rem;
}

.sb-stg-documents{
    padding: 1rem 0;
}

.current{
    transition: 0.4s ease-in-out;
    background-color: white;
    border-radius: 15px;
    height: auto;
    -webkit-box-shadow: 0px 8px 14px -2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 8px 14px -2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 8px 14px -2px rgba(34, 60, 80, 0.2);
}

.bold{
    transition: 0.1s linear;
    padding: .35rem .4rem;
    font-weight: bold;
    font-size: 1.1em;
}

.next-stage{
    margin-top: 2rem;
    height: 3rem;
}

.ctrl{
    background-color:#4aa44a;
    color: white;
    font-size: 1em;
    text-decoration: none;
    padding: .4rem 1rem;
    border-radius: 10px;
}

```


### Иконки & Значения 

| Icon | Description | Status |
| --- | --- | --- |
| ![download](https://github.com/sigarachi/stagescomponent/blob/master/public/resources/icons/download.svg) | Используется при обозначении файла, доступного для скачивания | - |
| ![check](https://github.com/sigarachi/stagescomponent/blob/master/public/resources/icons/completed.svg) | Используется для обозначения выполненного этапа | `completed` |
| ![in_progress](https://github.com/sigarachi/stagescomponent/blob/master/public/resources/icons/progress.svg) | Используется для обозначения этапа, находящегося в работе ( в данный момент ) | `progress` |
| ![wait](https://github.com/sigarachi/stagescomponent/blob/master/public/resources/icons/waiting.svg) | Используется для обозначения этапа, который еще не был выполнен и еще не находится в работе | `waiting` | 


# Пример входных данных для рисования формы

```json

{
    "name" : "StagesComponent",
    "text" : "Первые шаги",
    "data": {
        "stagesCount": "2"
    },
    "innerComponents":[
        {
            "name": "Stage",
            "text": "Этап 1",
            "data": {
                "subStagesCount": "3"
            },
            "innerComponents":[
                {
                    "name": "Substage",
                    "text": "Регистрация",
                    "data": {
                        "textHint": "Пройдите регистрацию"
                    },
                    "innerComponents":[
                        {
                            "name": "Input",
                            "text": "Логин",
                            "innerComponents":[]
                        },
                        {
                            "name": "Input",
                            "text": "Пароль",
                            "innerComponents":[]
                        },
                        {
                            "name": "Checkbox",
                            "text": "Принимаю пользовательское соглашение",
                            "data": {
                                "link": "https://github.com/sigarachi/stagescomponent"
                            },
                            "innerComponents":[]
                        }
                    ]
                },
                {
                    "name": "Substage",
                    "text": "Одобрение партнера",
                    "data": {
                        "textHint": "Получите одобрение партнера"
                    },
                    "innerComponents":[
                        {
                            "name": "Document",
                            "text": "Рекомендации",
                            "data": {
                                "link": "https://github.com/sigarachi/stagescomponent"
                            },
                            "innerComponents":[]
                        }
                    ]
                },
                {
                    "name": "Substage",
                    "text": "Анкета ожидает согласования",
                    "data": {
                        "textHint": "Подпишите и отправьте оригиналы документов менеджеру"
                    },
                    "innerComponents":[
                        {
                            "name": "Document",
                            "text": "Заявление о присоединении",
                            "data": {
                                "link": "https://github.com/sigarachi/stagescomponent"
                            },
                            "innerComponents":[]
                        },
                        {
                            "name": "Document",
                            "text": "Договор оферты",
                            "data": {
                                "link": "https://github.com/sigarachi/stagescomponent"
                            },
                            "innerComponents":[]
                        }
                    ]
                }
            ]
        },
        {
            "name": "Stage",
            "text": "Этап 2",
            "data": {
                "subStagesCoubt": "3"
            },
            "innerComponents":[
                {
                    "name": "Substage",
                    "text": "Заполните описание точек",
                    "data": {
                        "textHint": "Описание точек"
                    },
                    "innerComponents":[
                        {
                            "name": "Input",
                            "text": "Название точки",
                            "innerComponents":[]
                        },
                      
                        {
                            "name": "Textarea",
                            "text": "Какой-то документ",
                            "data": {
                                "rows": "5",
                                "cols": "57"
                            },
                            "innerComponents":[]
                        },
                        {
                            "name": "Checkbox",
                            "text": "Подтвердить информацию",
                            "innerComponents":[]
                        }
                    ]
                }
            ]
        }
    ]
}

```


