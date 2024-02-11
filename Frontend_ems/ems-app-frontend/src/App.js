import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListEmployeeComp from './Component/ListEmployeeComp';
import{BrowserRouter,Route,Routes} from "react-router-dom";
import { HeadComp } from './Component/HeaderComp';
import { FootComp } from './Component/FooterComp';
import CreateEmpComp from './Component/CreateEmpComp';
import UpdateEmployeeComp from './Component/UpdateEmployeeComp';

function App() {
  return (
    <div>
      <BrowserRouter>
      <HeadComp></HeadComp>
      
      <Routes>
        <Route path='/' element={<ListEmployeeComp></ListEmployeeComp>}></Route>
        <Route path='/employees' element={<ListEmployeeComp></ListEmployeeComp>}></Route>
        <Route  path='/add-employee' element={<CreateEmpComp></CreateEmpComp>}></Route>
        <Route path='/edit-employee/:id' element={<UpdateEmployeeComp></UpdateEmployeeComp>}></Route>
      </Routes>
      <FootComp></FootComp>
      </BrowserRouter>
    </div>
  );
}

export default App;
