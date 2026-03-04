const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-12 
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                        CS-Ticket System
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                        A Customer Support (CS) Ticket System is a tool used to manage and track customer issues efficiently. It ensures organized workflow and improves response time.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">About Us</li>
                        <li className="hover:text-white cursor-pointer">Our Mission</li>
                        <li className="hover:text-white cursor-pointer">Contact Sales</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Products & Services</li>
                        <li className="hover:text-white cursor-pointer">Customer Stories</li>
                        <li className="hover:text-white cursor-pointer">Download Apps</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Information</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
                        <li className="hover:text-white cursor-pointer">Join Us</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Social Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">@CSTicketSystem</li>
                        <li className="hover:text-white cursor-pointer">@CSTSupport</li>
                        <li className="hover:text-white cursor-pointer">support@cst.com</li>
                    </ul>
                </div>

            </div>

            <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
                <p>© 2026 CS-Ticket System. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;