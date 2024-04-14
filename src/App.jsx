import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AppBar from './AppBar';


function App() {
  
  return (
    <div style={{width: "100vm",height:"100vh", background:"#eeeeee"}}>
      <AppBar />
     <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
     </Router>
    </div>
  )
}


export default App
