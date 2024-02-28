import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import './styles/App.css'
import { HomePage } from './pages/HomePage'
import { DestinationPage } from './pages/DestinationPage'
import { CrewPage } from './pages/CrewPage'
import { TechnologyPage } from './pages/TechnologyPage'

function App() {
    return (
      <>
          <NavBar></NavBar>
          <Routes>
              <Route path='/' element={<HomePage></HomePage>}></Route>
              <Route path='/destination' element={<DestinationPage></DestinationPage>}></Route>
              <Route path='/crew' element={<CrewPage></CrewPage>}></Route>
              <Route path='/technology' element={<TechnologyPage></TechnologyPage>}></Route>
              <Route path='/*' element={<Navigate to={"/"}></Navigate>}></Route>
          </Routes>
      </>
    )
}

export default App
