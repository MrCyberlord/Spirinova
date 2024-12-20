import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ProductList from './components/product/ProductList';
import FilterSidebar from './components/filter/FilterSidebar';

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
