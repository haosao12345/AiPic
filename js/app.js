/**
 * APIcture.space - AI Tools Directory
 * Application logic for UI interactions and dynamic content generation
 */

// Function to generate section HTML - Updated for improved SEO
function generateSectionHTML(section) {
    // 如果tools为空数组或长度为0，则不渲染此section
    if (!section.tools || section.tools.length === 0) {
        return '';
    }
    
    // Limit tools to a maximum of 16 per section
    const limitedTools = section.tools.slice(0, 16);
    const toolsHTML = limitedTools.map(tool => {
        // 为工具名获取id（用于链接到详情页）
        const toolId = getToolIdByName(tool.name);
        
        // 优先使用配置中的detailUrl，如果没有则使用默认链接
        let detailUrl;
        if (tool.detailUrl) {
            // 使用工具配置中指定的URL
            detailUrl = tool.detailUrl;
        } else if (toolId && typeof window !== 'undefined' && window.location) {
            // 使用直接的工具HTML页面链接，避免查询参数
            detailUrl = `tools/${toolId}.html`;
        } else {
            // 回退链接
            detailUrl = '#';
        }
        
        return `
            <!-- SEO: Using article tag for individual tools provides better semantic structure -->
            <article class="bg-white rounded-2xl shadow-md border border-gray-50 hover-scale transition-all duration-300 overflow-hidden backdrop-blur-sm">
                <a href="${detailUrl}" target="_blank" rel="noopener" class="block">
                    <div class="p-5 md:p-6">
                        <div class="flex items-center mb-4">
                            <div class="w-11 h-11 rounded-full bg-${tool.iconBg}-50 flex items-center justify-center mr-3 flex-shrink-0 shadow-sm overflow-hidden">
                                <!-- SEO: Added aria-hidden to decorative icon and title attribute -->
                                ${tool.icon.endsWith('.webp') || tool.icon.endsWith('.png') || tool.icon.endsWith('.jpg') || tool.icon.endsWith('.svg') 
                                ? `<img src="assets/images/${tool.icon}" alt="${tool.name} icon" class="w-full h-full object-cover" />` 
                                : `<i class="${tool.icon} text-${tool.iconBg}-500 text-lg" aria-hidden="true" title="${tool.name} icon"></i>`}
                            </div>
                            <!-- SEO: Using h3 for tool names provides proper heading hierarchy -->
                            <h3 class="font-semibold text-sm md:text-base text-dark">${tool.name}</h3>
                        </div>
                        <!-- SEO: Added proper semantic description -->
                        <p class="text-secondary text-xs md:text-sm line-clamp-2 leading-relaxed">${tool.description}</p>
                    </div>
                </a>
            </article>
        `;
    }).join('');

    // Create complete section HTML, with improved semantics
    return `
        <!-- SEO: Using proper section with id and aria-labelledby for accessibility -->
        <section class="bg-white mb-6 md:mb-8 rounded-lg shadow-sm overflow-hidden" id="${section.id}" aria-labelledby="${section.id}-heading">
            <div class="max-w-6xl mx-auto">
                <!-- Title area -->
                <div class="py-4 px-4 md:px-6 border-b border-gray-100">
                    <div class="flex flex-wrap items-center justify-between">
                        <div class="flex space-x-2 overflow-x-auto pb-2 md:pb-0">
                            <!-- SEO: Changed to h2 tag for proper heading hierarchy -->
                            <a href="#${section.id}" class="px-4 py-2 bg-primary text-white rounded-full flex items-center text-sm font-medium">
                                <i class="${section.icon} mr-2" aria-hidden="true"></i>
                                <h2 id="${section.id}-heading" class="text-sm font-medium m-0">${section.title}</h2>
                            </a>
                        </div>
                        
                        ${section.tools.length > 16 ? `
                        <div>
                            <a href="#more-${section.id}" class="px-4 py-2 bg-white border border-gray-200 rounded-full flex items-center text-sm hover:bg-gray-50 transition-colors duration-200">
                                <span>More</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>` : ''}
                    </div>
                </div>
                <!-- Content area -->
                <div class="py-6 md:py-8 px-4 md:px-6">
                    <!-- SEO: Added role="list" for accessibility -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5" role="list">
                        ${toolsHTML}
                    </div>
                </div>
            </div>
        </section>
    `;
}

/**
 * 根据工具名称查找工具ID
 * @param {string} name 工具名称
 * @returns {string|null} 工具ID或null
 */
function getToolIdByName(name) {
    if (!window.toolsData) return null;
    
    // 遍历toolsData查找匹配的工具
    for (const id in window.toolsData) {
        if (window.toolsData[id].name === name) {
            return id;
        }
    }
    
    return null;
}

/**
 * Search functionality - filters tool cards based on search term
 */
class SearchManager {
    constructor() {
        this.searchInput = document.getElementById('search-input');
        this.searchButton = document.getElementById('search-button');
        this.initEventListeners();
    }

    initEventListeners() {
        // Search on button click
        if (this.searchButton) {
            this.searchButton.addEventListener('click', () => this.performSearch());
        }
        
        // Search on Enter key
        if (this.searchInput) {
            this.searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.performSearch();
                }
            });
            
            // Reset search when cleared
            this.searchInput.addEventListener('input', () => {
                if (this.searchInput.value.trim() === '') {
                    this.resetSearch();
                }
            });
            
            // Remove focus effects
            this.removeFocusEffects();
        }
    }

    performSearch() {
        const searchTerm = this.searchInput.value.trim().toLowerCase();
        
        if (!searchTerm) {
            this.resetSearch();
            return;
        }
        
        // Show searching feedback
        const searchFeedback = document.createElement('div');
        searchFeedback.id = 'search-feedback';
        searchFeedback.className = 'fixed top-4 right-4 bg-white text-[#5846c9] px-4 py-2 rounded-lg shadow-lg z-50 text-sm';
        searchFeedback.innerHTML = `<i class="ri-search-line mr-2"></i>Searching for "${searchTerm}"...`;
        document.body.appendChild(searchFeedback);
        
        // Count matching items
        let matchCount = 0;
        
        // Search through all tools in all sections
        sectionConfig.forEach(section => {
            section.tools.forEach(tool => {
                const nameMatch = tool.name.toLowerCase().includes(searchTerm);
                const descMatch = tool.description.toLowerCase().includes(searchTerm);
                
                if (nameMatch || descMatch) {
                    matchCount++;
                }
            });
        });
        
        // Hide non-matching items and sections
        const allArticles = document.querySelectorAll('#sections-container article');
        const allSections = document.querySelectorAll('#sections-container section');
        
        // First, hide all sections
        allSections.forEach(section => {
            section.classList.add('hidden');
        });
        
        // Then show only matching results
        let visibleSections = new Set();
        
        allArticles.forEach(article => {
            // Get the tool name and description from the article
            const toolName = article.querySelector('h3').textContent.toLowerCase();
            const toolDesc = article.querySelector('p').textContent.toLowerCase();
            
            if (toolName.includes(searchTerm) || toolDesc.includes(searchTerm)) {
                // Show this article
                article.classList.remove('hidden');
                
                // Get the parent section and show it
                const parentSection = article.closest('section');
                parentSection.classList.remove('hidden');
                visibleSections.add(parentSection.id);
            } else {
                // Hide this article
                article.classList.add('hidden');
            }
        });
        
        // Update search feedback
        setTimeout(() => {
            if (document.getElementById('search-feedback')) {
                if (matchCount > 0) {
                    searchFeedback.innerHTML = `<i class="ri-check-line mr-2"></i>Found ${matchCount} results for "${searchTerm}"`;
                    searchFeedback.className = 'fixed top-4 right-4 bg-white text-green-600 px-4 py-2 rounded-lg shadow-lg z-50 text-sm';
                } else {
                    searchFeedback.innerHTML = `<i class="ri-error-warning-line mr-2"></i>No results found for "${searchTerm}"`;
                    searchFeedback.className = 'fixed top-4 right-4 bg-white text-orange-500 px-4 py-2 rounded-lg shadow-lg z-50 text-sm';
                    
                    // If no results, reset to initial state after notification
                    setTimeout(() => this.resetSearch(), 1500);
                }
                
                // Remove the feedback after 3 seconds
                setTimeout(() => {
                    if (document.getElementById('search-feedback')) {
                        document.body.removeChild(searchFeedback);
                    }
                }, 3000);
            }
        }, 500);
    }

    resetSearch() {
        // Show all sections and articles - restore initial page view
        const allArticles = document.querySelectorAll('#sections-container article');
        const allSections = document.querySelectorAll('#sections-container section');
        
        allArticles.forEach(article => {
            article.classList.remove('hidden');
        });
        
        allSections.forEach(section => {
            section.classList.remove('hidden');
        });
        
        // Remove any search feedback
        const searchFeedback = document.getElementById('search-feedback');
        if (searchFeedback) {
            document.body.removeChild(searchFeedback);
        }
    }

    removeFocusEffects() {
        // Remove default focus behavior
        this.searchInput.addEventListener('focus', (e) => {
            e.preventDefault();
            this.searchInput.style.outline = 'none';
            this.searchInput.style.boxShadow = 'none';
            this.searchInput.parentElement.style.outline = 'none';
            this.searchInput.parentElement.style.boxShadow = 'none';
            this.searchInput.parentElement.parentElement.style.outline = 'none';
            this.searchInput.parentElement.parentElement.style.boxShadow = 'none';
        });
        
        // Ensure no classes are added on focus
        this.searchInput.addEventListener('blur', () => {
            this.searchInput.style.outline = 'none';
            this.searchInput.style.boxShadow = 'none';
            this.searchInput.parentElement.style.outline = 'none';
            this.searchInput.parentElement.style.boxShadow = 'none';
            this.searchInput.parentElement.parentElement.style.outline = 'none';
            this.searchInput.parentElement.parentElement.style.boxShadow = 'none';
        });
        
        // Disable any programmatic focus effects
        const searchContainer = document.querySelector('.search-container');
        if (searchContainer) {
            searchContainer.addEventListener('focus', (e) => {
                e.preventDefault();
                searchContainer.style.outline = 'none';
                searchContainer.style.boxShadow = 'none';
            }, true);
            
            searchContainer.addEventListener('focusin', () => {
                Array.from(searchContainer.querySelectorAll('*')).forEach(el => {
                    el.style.outline = 'none';
                    el.style.boxShadow = 'none';
                });
            });
        }
    }
}

/**
 * Handles smooth scrolling for anchor links
 */
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize the application when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    // Generate sections based on data
    const container = document.getElementById('sections-container');
    
    sectionConfig.forEach(section => {
        const sectionHTML = generateSectionHTML(section);
        container.innerHTML += sectionHTML;
    });
    
    // Initialize search functionality
    new SearchManager();
    
    // Setup smooth scrolling
    setupSmoothScrolling();
}); 