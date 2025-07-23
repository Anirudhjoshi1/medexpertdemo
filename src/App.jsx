import './App.css'
import Login from './Authentication/Login'
import SignUp from './Authentication/SignUp'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Product from './Pages/Product'
import Report from './Pages/Report'
import Settings from './Pages/Setting'
import {Routes , Route } from "react-router-dom"
import AdminHome from './AdminPages/AdminHome'
import AdminTrainer from './AdminPages/AdminTrainer'
import AdminTrainees from './AdminPages/AdminTrainees'
import AdminReport from './AdminPages/AdminReport'
import AdminSettings from './AdminPages/AdminSetting'
import TrainerSettings from './TrainerPages/TrainerSettings'
import TrainerReports from './TrainerPages/TrainerReports'
import TrainerTrainees from './TrainerPages/TrainerTrainees'
import TrainerHome from './TrainerPages/TrainerHome'
import TraineePerformance from './TrainerPages/TraineePerformance'


function App() {

  return (

    <>   
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/report' element={<Report/>}/>
          <Route path='/settings' element={<Settings/>}/>


          <Route path='admin/home' element={<AdminHome/>}/>
          <Route path='admin/trainers' element={<AdminTrainer/>}/>
          <Route path='admin/trainees' element={<AdminTrainees/>}/>
          <Route path='admin/report' element={<AdminReport/>}/>
          <Route path='admin/setting' element={<AdminSettings/>}/>
          <Route path='trainer/home' element={<TrainerHome/>}/>
          <Route path='trainer/trainees' element={<TrainerTrainees/>}/>
          <Route path='trainer/report' element={<TrainerReports/>}/>
          <Route path='trainer/setting' element={<TrainerSettings/>}/>
          <Route path="/trainer/product/:traineeId" element={<TraineePerformance />} />



        </Routes>
  
    </>
  )
}

export default App
