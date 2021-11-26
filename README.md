# Компонент StagesComponent

Можете опробовать [тут]("https://stagecomponent.herokuapp.com") 

## Описание 

Компонент-контейнер с заголовком и внутренними компонентами


## Спецификация

### Иконки & Значения 

| Icon | Description | Status |
| --- | --- | --- |
| ![download](https://github.com/sigarachi/stagescomponent/blob/master/public/resources/icons/download.svg) | Используется при обозначении файла, доступного для скачивания | - |
| ![check](https://github.com/sigarachi/stagescomponent/blob/master/public/resources/icons/completed.svg) | Используется для обозначения выполненного этапа | `completed` |
| ![in_progress](https://github.com/sigarachi/stagescomponent/blob/master/public/resources/icons/progress.svg) | Используется для обозначения этапа, находящегося в работе ( в данный момент ) | `progress` |
| ![wait](https://github.com/sigarachi/stagescomponent/blob/master/public/resources/icons/waiting.svg) | Используется для обозначения этапа, который еще не был выполнен и еще не находится в работе | `waiting` | 


### Входные данные

```js

    const props = {
        name : "StagesComponent",
        text: "Заголовок компонента",
        innerComponents: [] //Внутренние компоненты
    }

```

### Интерфейс 

```css
    .stgs-component{
        width: 30rem;   //Высота
        height: 50rem;  //Ширина
        background-color: #eaeaea; //Цвет фона
        border-radius: 15px;
        //Отступы
        padding-top: 2rem;
        margin-top: 2rem;
        padding-left: 2rem;
        padding-right: 2rem;
        overflow: auto;
    }
```
Компонент представляет собой прямоугольник высотой 50rem и шириной 30rem. 
Отступы компонента `padding: 2rem 2rem 0 2rem;` 
При превышении заданных размеров появляется scroll, позволяющий перемещаться внутри компонента (`overflow: auto;`)
Цвет фона компонента `background-color: #eaeaea;`
Параметры отображения `display: block;`

Измение параметров стиля объекта на данный момент невозможно

### Описание работы

При отрисовке компонента устанавливается заголовок и отрисовываются внутренние компоненты (при наличии). При отрисовке внутренних компонентов внутрь передаются позиция объекта (`props.postion`), текущий выбранный компонент (`props.current`), а также функции: 
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




