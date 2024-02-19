import './App.css'
import UserNotification1 from './V1/Notification.jsx'

function App() {

  const parentFunction = message => {
    alert('estoy en el componente padre y el mesanjes es este ' + message)
  }


  return (
    <>
      <h1>Componentes reusables en React :3</h1>

      <hr />

      <UserNotification1
        author={'Ironhack info'}
        message={'Ahora tengo este contenido'}
        topPosition={100}
        mins={5}
        closeButton={true}
        animation={'slide-left'}
        variant={'dark'}
        action={() => window.location = 'https://transform.tools/css-to-js'}
        showMessage={parentFunction}
      />


      <UserNotification1
        author={'Admin'}
        message={'Ahora si que la has liado, merluzo'}
        topPosition={200}
        closeButton={true}
        animation={'fade-in'}
        warning
        action={() => window.location = 'https://preview.my.ironhack.com/lms/courses/course-v1:IRONHACK+WDFT+202401_MAD/modules/ironhack-course-chapter_6'}
      />


      <UserNotification1
        author={'Admin'}
        message={'Cuestionario creado correctamente'}
        topPosition={300}
        closeButton={true}
        animation={'slide-left'}
        avatar={'http://tinyurl.com/ytrty7xa'}
      />

    </>
  )
}

export default App