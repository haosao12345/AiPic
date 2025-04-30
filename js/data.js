// AI Tools Data Configuration

/**
 * Section configuration data for AI tools
 * Each section represents a category of AI tools
 * @type {Array<Object>}
 */
const sectionConfig = [
    {
        id: 'recent',
        title: 'Recently Launched',
        icon: 'ri-time-line',
        showMore: false,
        tools: [
            {
                name: 'Remove.bg',
                description: 'Remove.bg is a free online tool that automatically removes image backgrounds with a single click',
                icon: 'removebg.webp',
                iconBg: 'teal',
                detailUrl: 'tools/removebg.html'
            },
            {
                name: 'Bg Eraser',
                description: 'BG Eraser is a free online tool that supports batch processing to remove backgrounds from multiple images at once',
                icon: 'bgeraser.jpg',
                iconBg: 'teal',
                detailUrl: 'tools/bgeraser.html'
            },
            {
                name: 'Erase BG',
                description: 'Erase BG is a free online AI background removal tool that supports 4K resolution',
                icon: 'erasebgorg.webp',
                iconBg: 'teal',
                detailUrl: 'tools/erasebg.html'
            }
        ]
    },
    {
        id: 'image-generation',
        title: 'Image Generation',
        icon: 'ri-image-line',
        showMore: false,
        tools: [
           
        ]
    },
    {
        id: 'image-editing',
        title: 'Image Editing',
        icon: 'ri-crop-line',
        showMore: false,
        tools: [
            {
                name: 'Remove.bg',
                description: 'Remove.bg is a free online tool that automatically removes image backgrounds with a single click',
                icon: 'removebg.webp',
                iconBg: 'teal',
                detailUrl: 'tools/removebg.html'
            },
            {
                name: 'Bg Eraser',
                description: 'BGEraser is a free online tool that supports batch processing to remove backgrounds from multiple images at once',
                icon: 'bgeraser.jpg',
                iconBg: 'teal',
                detailUrl: 'tools/bgeraser.html'
            },
            {
                name: 'Erase BG',
                description: 'Erase BG is a free online AI background removal tool that supports 4K resolution',
                icon: 'erasebgorg.webp',
                iconBg: 'teal',
                detailUrl: 'tools/erasebg.html'
            }
        ]
    },
    {
        id: 'video-generation',
        title: 'Video Generation',
        icon: 'ri-movie-line',
        showMore: false,
        tools: [
            
        ]
    }
];

// 工具数据
const toolsData = {
    // 工具ID作为键名
    'midjourney': {
        id: 'midjourney',
        name: 'Midjourney',
        description: 'A powerful AI image generation tool that creates high-quality artwork and photorealistic images',
        fullDescription: `Midjourney is a leading AI image generation tool that uses advanced artificial intelligence algorithms to transform text descriptions into high-quality images. Whether you're a professional designer or a creative enthusiast, you can use Midjourney to create stunning visual content.

The tool supports detailed prompt engineering, allowing users to precisely control the style, composition, and details of generated images. Through simple text descriptions, you can create various visual content from surreal artwork to photorealistic images.

Midjourney continuously updates its AI models, providing increasingly high-quality and diverse image generation capabilities. The latest version shows significant improvements in detail representation, character portrayal, and scene construction.`,
        icon: 'ri-shape-line',
        iconColor: 'text-blue-500',
        category: '图像生成',
        rating: 4.9,
        views: '185.6k',
        pricing: '免费增值模式',
        updatedAt: '2025年3月10日',
        creator: 'Midjourney, Inc.',
        website: 'https://www.midjourney.com/',
        platforms: ['Web应用', 'Discord'],
        features: [
            {
                icon: 'ri-ai-generate',
                name: '高质量图像生成',
                description: '基于先进算法的高质量图像生成，支持多种风格和调整'
            },
            {
                icon: 'ri-magic-line',
                name: '文本转图像',
                description: '只需输入文本描述，就能自动生成相应的图像内容'
            },
            {
                icon: 'ri-palette-line',
                name: '风格多样性',
                description: '支持多种艺术风格和渲染方式，从写实到抽象应有尽有'
            },
            {
                icon: 'ri-slideshow-line',
                name: '批量生成',
                description: '可同时生成多个图像变体，提高创作效率'
            },
            {
                icon: 'ri-speed-line',
                name: '快速渲染',
                description: '高效的处理能力，提供比传统方法更快的图像生成速度'
            },
            {
                icon: 'ri-brush-line',
                name: '图像变化',
                description: '可以基于现有图像创建变体或融合多种元素'
            }
        ],
        useCases: [
            {
                name: '创意设计',
                description: '设计师可以快速生成概念图和创意灵感，加速设计过程'
            },
            {
                name: '内容创作',
                description: '博客作者和社交媒体管理员可以创建吸引人的配图，增强内容吸引力'
            },
            {
                name: '游戏开发',
                description: '游戏开发者可以生成游戏资产、角色设计和场景概念图'
            },
            {
                name: '营销物料',
                description: '营销团队可以创建定制化的宣传图像，提升品牌视觉吸引力'
            }
        ],
        reviews: [
            {
                user: {
                    name: '王振',
                    initials: 'WZ'
                },
                rating: 5,
                comment: '这款工具非常好用，界面简洁明了，生成的图像质量很高。特别是它的文本描述转图像功能，准确度令人惊讶。推荐给所有需要快速生成高质量图像的人。'
            },
            {
                user: {
                    name: '李明',
                    initials: 'LM'
                },
                rating: 4,
                comment: '作为一名设计师，这个工具为我节省了大量时间。唯一的缺点是有时候需要多次尝试才能得到满意的结果，但考虑到AI技术的限制，这是可以理解的。'
            },
            {
                user: {
                    name: '张华',
                    initials: 'ZH'
                },
                rating: 5,
                comment: '我从未见过这么强大的AI图像生成工具！即使是非常复杂的描述，它也能很好地理解并呈现出来。对于没有设计背景的人来说，这简直是创作利器。'
            }
        ],
        similarTools: [
            {
                id: 'dalle',
                name: 'DALL-E',
                description: 'OpenAI开发的AI图像生成工具',
                icon: 'ri-image-line',
                iconColor: 'text-green-500'
            },
            {
                id: 'stable-diffusion',
                name: 'Stable Diffusion',
                description: '开源AI图像生成模型',
                icon: 'ri-brush-line',
                iconColor: 'text-purple-500'
            },
            {
                id: 'artbreeder',
                name: 'Artbreeder',
                description: '融合和演化图像的AI工具',
                icon: 'ri-palette-line',
                iconColor: 'text-pink-500'
            }
        ]
    },
    'dalle': {
        id: 'dalle',
        name: 'DALL-E',
        description: 'A powerful text-to-image generation system developed by OpenAI, capable of creating detailed and creative images',
        fullDescription: `DALL-E is an advanced AI image generation tool developed by OpenAI that creates detailed, creative images based on text descriptions. It understands complex language prompts and transforms them into visual representations, opening new possibilities for artistic creation and visual content generation.

As part of the OpenAI product family, DALL-E utilizes powerful deep learning technology, enabling it to understand abstract concepts, detailed features, and style descriptions. Users only need to provide text descriptions, and DALL-E can generate corresponding high-quality images, even creating imaginary things that don't exist in the real world.

The latest version of DALL-E shows significant improvements in image quality, prompt understanding, and creative freedom, supporting more precise control and broader application scenarios.`,
        icon: 'ri-image-line',
        iconColor: 'text-green-500',
        category: '图像生成',
        rating: 4.8,
        views: '156.3k',
        pricing: '信用额度制',
        updatedAt: '2025年2月20日',
        creator: 'OpenAI',
        website: 'https://openai.com/dall-e/',
        platforms: ['Web应用', 'API'],
        features: [
            {
                icon: 'ri-ai-generate',
                name: '自然语言描述',
                description: '理解详细的自然语言描述，生成符合要求的图像'
            },
            {
                icon: 'ri-edit-2-line',
                name: '编辑功能',
                description: '支持对已生成图像进行擦除和重绘，实现精细编辑'
            },
            {
                icon: 'ri-artboard-2-line',
                name: '出图变体',
                description: '基于已生成的图像创建多个风格和内容变体'
            },
            {
                icon: 'ri-crop-line',
                name: '多种尺寸',
                description: '支持正方形、横向和纵向等多种输出尺寸'
            }
        ],
        useCases: [
            {
                name: '广告创意',
                description: '广告团队可以快速生成创意概念图，提高广告制作效率'
            },
            {
                name: '插图设计',
                description: '作家和出版商可以为文章和书籍创建定制插图'
            },
            {
                name: '产品设计',
                description: '产品设计师可以生成概念图，探索不同的设计可能性'
            }
        ],
        reviews: [
            {
                user: {
                    name: '陈晓',
                    initials: 'CX'
                },
                rating: 5,
                comment: 'DALL-E的图像质量令人惊叹，特别是最新版本对细节的把握非常出色。作为一名内容创作者，这个工具极大地提升了我的工作效率。'
            },
            {
                user: {
                    name: '赵芳',
                    initials: 'ZF'
                },
                rating: 4,
                comment: '非常强大的工具，但信用额度的限制有时会影响持续使用。希望未来能提供更多的使用选项。总体来说，生成的图像质量很高。'
            }
        ],
        similarTools: [
            {
                id: 'midjourney',
                name: 'Midjourney',
                description: '强大的AI图像生成工具',
                icon: 'ri-shape-line',
                iconColor: 'text-blue-500'
            },
            {
                id: 'stable-diffusion',
                name: 'Stable Diffusion',
                description: '开源AI图像生成模型',
                icon: 'ri-brush-line',
                iconColor: 'text-purple-500'
            }
        ]
    },
    'stable-diffusion': {
        id: 'stable-diffusion',
        name: 'Stable Diffusion',
        description: 'An open-source text-to-image generation model that can be deployed locally and supports various creative image generation applications',
        fullDescription: `Stable Diffusion is a leading open-source AI image generation model developed by Stability AI. As an open-source project, it allows users to run it on local devices, providing greater privacy protection and customization possibilities.

Unlike other closed-source AI image generation tools, Stable Diffusion's open-source nature makes it the preferred choice for developers and businesses, allowing customization and integration according to specific needs. The model supports text-to-image generation, image-to-image editing, upscaling, and super-resolution among other functions.

With continuous contributions from the community, Stable Diffusion continues to evolve, offering various specialized model variants suitable for different artistic styles and application scenarios. Users can access this powerful tool through WebUI or various integrated applications.`,
        icon: 'ri-brush-line',
        iconColor: 'text-purple-500',
        category: '图像生成',
        rating: 4.7,
        views: '142.8k',
        pricing: '开源免费',
        updatedAt: '2025年3月5日',
        creator: 'Stability AI',
        website: 'https://stability.ai/',
        platforms: ['本地部署', 'Web服务', 'API'],
        features: [
            {
                icon: 'ri-open-source-line',
                name: '开源技术',
                description: '完全开源，允许自定义和本地部署，保护隐私'
            },
            {
                icon: 'ri-cpu-line',
                name: '本地运行',
                description: '可在个人电脑上运行，无需云服务，降低使用成本'
            },
            {
                icon: 'ri-tools-line',
                name: '丰富插件',
                description: '活跃的社区开发了众多插件，扩展基础功能'
            },
            {
                icon: 'ri-image-edit-line',
                name: 'ControlNet支持',
                description: '通过ControlNet实现对生成过程的精确控制'
            }
        ],
        useCases: [
            {
                name: '个人创作',
                description: '艺术爱好者可以在个人电脑上免费创作AI艺术'
            },
            {
                name: '企业定制',
                description: '企业可以基于开源模型开发定制化的图像生成解决方案'
            },
            {
                name: '教育研究',
                description: '学术机构可以研究和改进AI图像生成技术'
            }
        ],
        reviews: [
            {
                user: {
                    name: '刘强',
                    initials: 'LQ'
                },
                rating: 5,
                comment: '作为开发者，我非常喜欢Stable Diffusion的开源特性。可以根据需要进行定制，而且本地部署意味着更好的隐私保护。社区非常活跃，有大量优质资源。'
            },
            {
                user: {
                    name: '马婷',
                    initials: 'MT'
                },
                rating: 4,
                comment: '图像质量很棒，但对硬件要求较高，需要一定的技术知识才能充分发挥其潜力。一旦设置好，使用体验非常出色。'
            }
        ],
        similarTools: [
            {
                id: 'midjourney',
                name: 'Midjourney',
                description: '强大的AI图像生成工具',
                icon: 'ri-shape-line',
                iconColor: 'text-blue-500'
            },
            {
                id: 'dalle',
                name: 'DALL-E',
                description: 'OpenAI开发的AI图像生成工具',
                icon: 'ri-image-line',
                iconColor: 'text-green-500'
            }
        ]
    },
    'adobe-firefly': {
        id: 'adobe-firefly',
        name: 'Adobe Firefly',
        description: 'Adobe推出的创意生成AI工具，专注于商业安全内容创建和与Creative Cloud的无缝集成',
        icon: 'ri-fire-line',
        iconColor: 'text-red-500',
        category: '图像生成',
        rating: 4.8,
        views: '98.4k',
    },
    'runway-gen2': {
        id: 'runway-gen2',
        name: 'Runway Gen-2',
        description: '支持文本到视频、图像到视频转换的AI创意工具，为视频创作者提供强大的生成能力',
        icon: 'ri-movie-line',
        iconColor: 'text-indigo-500',
        category: '视频生成',
        rating: 4.7,
        views: '87.5k',
    },
    'leonardo-ai': {
        id: 'leonardo-ai',
        name: 'Leonardo.ai',
        description: '专注于游戏资产和3D内容创建的AI生成平台，提供高质量的游戏视觉元素',
        icon: 'ri-gamepad-line',
        iconColor: 'text-orange-500',
        category: '图像生成',
        rating: 4.6,
        views: '76.2k',
    },
    'remove-bg': {
        id: 'remove-bg',
        name: 'remove.bg',
        description: '专业的AI背景去除工具，一键去除图片背景，支持批量处理',
        icon: 'ri-image-edit-line',
        iconColor: 'text-teal-500',
        category: '图像编辑',
        rating: 4.9,
        views: '201.3k',
    },
    'relight': {
        id: 'relight',
        name: 'Relight',
        description: 'AI驱动的照片重新打光工具，可调整照片中的光源方向和强度',
        icon: 'ri-sun-line',
        iconColor: 'text-amber-500',
        category: '图像编辑',
        rating: 4.5,
        views: '32.7k',
    }
};

// 分类数据
const categoriesData = [
    {
        id: 'recent',
        name: '近期上线',
        icon: 'ri-time-line',
        description: '最新发布的AI工具',
        toolIds: ['midjourney', 'dalle', 'stable-diffusion', 'adobe-firefly', 'runway-gen2', 'leonardo-ai']
    },
    {
        id: 'image-generation',
        name: '图像生成',
        icon: 'ri-image-line',
        description: '创建各种风格的AI生成图像',
        toolIds: ['midjourney', 'dalle', 'stable-diffusion', 'adobe-firefly', 'leonardo-ai']
    },
    {
        id: 'image-editing',
        name: '图像编辑',
        icon: 'ri-edit-2-line',
        description: '编辑、增强和修改图像的AI工具',
        toolIds: ['remove-bg', 'relight']
    },
    {
        id: 'video-generation',
        name: '视频生成',
        icon: 'ri-movie-line',
        description: '创建和编辑视频内容的AI工具',
        toolIds: ['runway-gen2']
    }
];

// 导出数据供页面使用
window.toolsData = toolsData;
window.categoriesData = categoriesData; 
window.sectionConfig = sectionConfig; 