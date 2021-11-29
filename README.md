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
* Обработка массива innerComponents:
    * Класс компонента определяется по его полю `props.name`
    * Производится присоединение переданных функций к компоненту
    * Для каждого из элементов вызывается функция `render()`
    * Формируется дополнительный набор `props` для вложенного компонента:

    ```js
        const props = {
            name : "Stage",
            position: pos,
            current: currentStage,
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



### Иконки & Значения 

| Icon | Description | Status |
| --- | --- | --- |
| ![download](https://github.com/sigarachi/stagescomponent/blob/master/public/resources/icons/download.svg) | Используется при обозначении файла, доступного для скачивания | - |
| ![check](https://github.com/sigarachi/stagescomponent/blob/master/public/resources/icons/completed.svg) | Используется для обозначения выполненного этапа | `completed` |
| ![in_progress](https://github.com/sigarachi/stagescomponent/blob/master/public/resources/icons/progress.svg) | Используется для обозначения этапа, находящегося в работе ( в данный момент ) | `progress` |
| ![wait](https://github.com/sigarachi/stagescomponent/blob/master/public/resources/icons/waiting.svg) | Используется для обозначения этапа, который еще не был выполнен и еще не находится в работе | `waiting` | 




