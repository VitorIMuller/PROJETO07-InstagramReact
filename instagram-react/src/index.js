import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import Corpo from './Corpo';
// import Esquerda from './Esquerda';
// import Stories from './Stories'
// import Posts from './Posts'
// import Sidebar from './Sidebar';


function App(){
    return( 
      <div>
        <NavBar/>
        <Corpo />        
      </div>
    )
}



ReactDOM.render(<App />, document.querySelector(".root"));