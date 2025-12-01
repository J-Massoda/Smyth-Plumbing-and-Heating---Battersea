class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .nav-link {
                    position: relative;
                    transition: color 0.3s ease;
                }
                .nav-link:hover {
                    color: #FF851B;
                }
                .nav-link.active::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: #FF851B;
                }
                .mobile-menu {
                    transition: all 0.3s ease;
                }
            </style>
            <nav class="bg-white shadow-md">
                <div class="container mx-auto px-4">
                    <div class="flex justify-between items-center py-4">
                        <a href="/" class="flex items-center">
                            <span class="text-2xl font-bold text-navy">Smyth Plumbing</span>
                        </a>
                        
                        <!-- Desktop Navigation -->
                        <div class="hidden md:flex space-x-8">
                            <a href="/" class="nav-link text-navy font-medium active">Home</a>
                            <a href="/services" class="nav-link text-navy font-medium">Services</a>
                            <a href="/about" class="nav-link text-navy font-medium">About</a>
                            <a href="/reviews" class="nav-link text-navy font-medium">Reviews</a>
                            <a href="/contact" class="nav-link text-navy font-medium">Contact</a>
                        </div>
                        
                        <!-- Mobile menu button -->
                        <div class="md:hidden">
                            <button id="mobile-menu-button" class="text-navy focus:outline-none">
                                <i data-feather="menu"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Mobile Menu -->
                <div id="mobile-menu" class="mobile-menu hidden md:hidden bg-white pb-4 px-4">
                    <a href="/" class="block py-2 text-navy font-medium">Home</a>
                    <a href="/services" class="block py-2 text-navy font-medium">Services</a>
                    <a href="/about" class="block py-2 text-navy font-medium">About</a>
                    <a href="/reviews" class="block py-2 text-navy font-medium">Reviews</a>
                    <a href="/contact" class="block py-2 text-navy font-medium">Contact</a>
                    <div class="mt-4">
                        <a href="tel:+447591115721" class="inline-block bg-orange text-navy font-bold py-2 px-6 rounded-lg">
                            Call Now
                        </a>
                    </div>
                </div>
            </nav>
        `;
        
        // Add mobile menu toggle functionality
        const mobileMenuButton = this.shadowRoot.getElementById('mobile-menu-button');
        const mobileMenu = this.shadowRoot.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                feather.replace();
            } else {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);