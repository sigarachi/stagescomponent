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
            completed: true,
            info:  "Пройдите регистрацию",
            documents: [],
            controllers: []
          },
          {
            title: "Одобрение партнера",
            completed: true,
            info: "Получите одобрение партнера",
            documents: [],
            controllers: []
          },
          {
            title: "Анкета ожидает согласования",
            completed: false,
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
      }
    ]
  })

  return (
    <div className="App">
      <StagesComponent props={data.stages} />
    </div>
  );
}

export default App;
