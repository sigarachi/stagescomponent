import React,{useState} from 'react';
import StagesComponent from './components/StagesComponent/StagesComponent';

function App() {
  const [data, setData] = useState({
    stages:[
      {
        title: "Этап 1: Проверка компании",
        substages:[
          {
            title: "Регистрация",
            status: "completed",
            info:  "Пройдите регистрацию",
            documents: [],
            controllers: []
          },
          {
            title: "Одобрение партнера",
            status: "completed",
            info: "Получите одобрение партнера",
            documents: [],
            controllers: []
          },
          {
            title: "Анкета ожидает согласования",
            status: "progress",
            info: "Подпишите и отправьте оригиналы документов менеджеру",
            documents: [
              {
                title: "Заявление о присоединении",
                link: "https://www.google.com"
              }, 
              {
                title: "Договор оферты",
                link: "https://www.google.com"
              }
            ],
            controllers: [
              {
                title: "Перейти в заявку",
                link: "https://www.google.com"
              }
            ]
          },
        ]
      },
      {
        title: "Этап 2: Торговые точки",
        substages:[
          {
            title: "Заполните описание точек",
            status: "waiting",
            info:  "",
            documents: [],
            controllers: []
          },
        ]
      },
      //Instert new data here 
      
    ]
  })

  return (
    <div className="App">
      <StagesComponent props={data.stages} />
    </div>
  );
}

export default App;
