class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .footer-link {
                    transition: color 0.3s ease;
                }
                .footer-link:hover {
                    color: #FF851B;
                }
            </style>
            <footer class="bg-navy text-white py-12 px-4">
                <div class="container mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <!-- Contact Info -->
                        <div>
                            <h3 class="text-xl font-bold mb-4">Contact Us</h3>
                            <div class="space-y-2">
                                <p class="flex items-center">
                                    <i data-feather="map-pin" class="mr-2 w-4 h-4"></i>
                                    10 Shipley House, Albion Rd, London SW8 2AH
                                </p>
                                <p class="flex items-center">
                                    <i data-feather="phone" class="mr-2 w-4 h-4"></i>
                                    +44 7591 115721
                                </p>
                                <p class="flex items-center">
                                    <i data-feather="clock" class="mr-2 w-4 h-4"></i>
                                    Open 24 Hours
                                </p>
                            </div>
                        </div>
                        
                        <!-- Services -->
                        <div>
                            <h3 class="text-xl font-bold mb-4">Services</h3>
                            <ul class="space-y-2">
                                <li><a href="/services#emergency" class="footer-link">Emergency Plumbing</a></li>
                                <li><a href="/services#boiler" class="footer-link">Boiler Services</a></li>
                                <li><a href="/services#heating" class="footer-link">Heating Systems</a></li>
                                <li><a href="/services#leak" class="footer-link">Leak Detection</a></li>
                                <li><a href="/services#drains" class="footer-link">Blocked Drains</a></li>
                            </ul>
                        </div>
                        
                        <!-- Service Area -->
                        <div>
                            <h3 class="text-xl font-bold mb-4">Service Area</h3>
                            <p class="mb-2">Covering all of Battersea and Greater London:</p>
                            <ul class="space-y-1">
                                <li>• Battersea</li>
                                <li>• Clapham</li>
                                <li>• Wandsworth</li>
                                <li>• Vauxhall</li>
                                <li>• And surrounding areas</li>
                            </ul>
                        </div>
                        
                        <!-- Call to Action -->
                        <div>
                            <h3 class="text-xl font-bold mb-4">Need Help Now?</h3>
                            <a href="tel:+447591115721" class="inline-block bg-orange text-navy font-bold py-3 px-6 rounded-lg mb-4 transition hover:bg-orange-600">
                                Call Our Emergency Line
                            </a>
                            <p class="text-sm">24/7 emergency plumbing services available</p>
                        </div>
                    </div>
                    
                    <!-- Bottom Footer -->
                    <div class="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p class="text-gray-400 mb-4 md:mb-0">© ${new Date().getFullYear()} Smyth Plumbing and Heating. All rights reserved.</p>
                        <div class="flex space-x-4">
                            <a href="/privacy" class="text-gray-400 hover:text-white footer-link">Privacy Policy</a>
                            <a href="/terms" class="text-gray-400 hover:text-white footer-link">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);