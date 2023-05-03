import Menu from "./Menu.JSX"
import Footer from "../inter/Footer"
import IndividualIntervalsExample from "../inter/slide"

function Home(){
    return(
        <div>
            <header className="header">
                <Menu/>
            </header>
            <IndividualIntervalsExample/>
            <Footer/>
        
        </div>
    )
 
}
export default Home