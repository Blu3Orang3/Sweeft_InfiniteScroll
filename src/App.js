import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserListScreen from './Screens/UserListScreen';
import UserProfileScreen from "./Screens/UserProfileScreen";

function App() {
  return (
    <Routes>
      <Route path='/' element={<UserListScreen />} />
      <Route path='/user/:id' element={<UserProfileScreen />} />
    </Routes>
  );
}

export default App;
