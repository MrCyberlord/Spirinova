import Header from './components/layout/Header';
import Footer from './components/Layout/Footer';
import ProductList from './components/Product/ProductList';
import FilterSidebar from './components/Filter/FilterSidebar';

const App = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow flex">
                <FilterSidebar />
                <ProductList />
            </div>
            <Footer />
        </div>
    );
};

export default App;
