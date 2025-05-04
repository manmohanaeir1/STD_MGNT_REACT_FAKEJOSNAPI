import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import StudentTable from './StudentTable';
import CreateStudent from './CreateStudent';
import EditStudent from './EditStudent';
import ViewStudent from './ViewStudent';
 
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StudentTable />} />
                <Route path="/student/create" element={<CreateStudent />} />
                <Route path="/student/edit/:std_id" element={<EditStudent />} />
                <Route path="/student/view/:std_id" element={<ViewStudent />} />
             </Routes>
        </BrowserRouter>
    );
}

export default App;