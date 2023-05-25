import './css/App.css';
import Task from './Task';
import copy from './img/Icon.svg'
import nof from './img/Vector.svg'

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className='header_left'> 
          <img src=''alt='logo' className='header_logo'/>
          <p>Проект</p>
        </div>
        <div className='header_right'> 
          <img src={nof}alt='notification' className='header_notification'/>
          <div className='header_user'>
            <img src=''alt='user avatar' className='header_avatar'/>
            <div className='header_user_panel'>
              <h3 className='header_user_panel_name'>
                Иванов В. А.
              </h3>
              <p className='header_user_panel_post'>
                Должность
              </p>
            </div>
          </div>
        </div>
      </header>
      <main className='main'>
        <section className='main_section_left'>
          <img src={copy}alt='copy' className='section_copy'/>
        </section>
        <Task/>
      </main> 
    </div>
  );
}

export default App;
