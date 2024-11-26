import './App.css'
import Chartone from './Components/Chartone/Chartone'
import Charttwo from './Components/Charttwo/Charttwo'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Mainone from './Components/Mainone/Mainone'
import Mainthree from './Components/Mainthree/Mainthree'
import Maintwo from './Components/Maintwo/Maintwo'
import Simpleradarchart from './Components/Simpleradarchart/Simpleradarchart'
import Test from './Components/Test/Test'
function App() {
 
  return (
    <>
    <Header></Header>
    <Mainone></Mainone>
    <Test></Test>
    <Maintwo></Maintwo>
   <div className="flex ml-auto mr-auto max-w-[1200px]">
   <Chartone></Chartone>
    <Simpleradarchart></Simpleradarchart>
    <Charttwo></Charttwo>
   </div>
   <Mainthree></Mainthree>
   <Footer></Footer>
    </>
  )
}

export default App
