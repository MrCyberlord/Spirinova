
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-8">
            <div className="container mx-auto text-center">
                <p className="text-sm">© 2024 Spirinova Technologies. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="/privacy" className="hover:text-gray-300 text-sm">Privacy Policy</a>
                    <a href="/terms" className="hover:text-gray-300 text-sm">Terms of Use</a>
                    <a href="/contact" className="hover:text-gray-300 text-sm">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
