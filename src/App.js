import  Navbar  from './components/Navbar'
import ShoppingContextProvider from './components/ShoppingContextProvider'
import ProductSection from './components/ProductSection';
import './navbar.css'


function App() {
	return <>
		<Navbar/>
		<ShoppingContextProvider>
			<ProductSection/>
		</ShoppingContextProvider>
	</>
}

export default App
