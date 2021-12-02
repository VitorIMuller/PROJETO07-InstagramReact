import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import Corpo from './Corpo';
import Esquerda from './Esquerda';
import Stories from './Stories'
import Posts from './Posts'
import Sidebar from './Sidebar';
import Links from './Links';
import Copyright from './Copyright'

function App(){
    return( 
      <div>
        <NavBar/>
        <Sidebar/>
        <Links/>
        <Copyright/>
        <Corpo />
        <Esquerda />
        <Stories />
        <Posts />
        
      </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));