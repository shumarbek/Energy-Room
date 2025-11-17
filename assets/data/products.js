const products = [
    {
        id: 0,
        name: "NVIDIA GeForce RTX 4070",
        category: "Graphics Card",
        price: 699,
        oldPrice: 0,
        image: "https://www.pny.com/productimages/6423D802-C9A7-4BD6-ABCB-AFE200B6025D/images/PNY-RTX-4070-12GB-VERTO-Dual-Fan-B-gr.png",
        description: "High-performance graphics card with ray tracing and DLSS 3 support for the ultimate gaming experience.",
        features: [
            "12GB GDDR6X memory",
            "Ray Tracing & DLSS 3 support",
            "PCIe 4.0 interface",
            "3 DisplayPort + 1 HDMI output",
            "Up to 4K gaming performance",
            "Dual-fan cooling system"
        ],
        rating: 4.9,
        reviews: 231
    },
    {
        id: 1,
        name: "ASUS ROG Strix G16 Gaming Laptop",
        category: "Gaming Laptop",
        price: 1499,
        oldPrice: 1699,
        image: "https://m.media-amazon.com/images/I/51n5wcLYioL.jpg",
        description: "Powerful gaming laptop with Intel Core i9 processor and RTX 4060 GPU for seamless gameplay and multitasking.",
        features: [
            "Intel Core i9 13th Gen",
            "NVIDIA RTX 4060 8GB",
            "16GB DDR5 RAM, 1TB SSD",
            "165Hz 16-inch QHD+ display",
            "RGB backlit keyboard",
            "Windows 11 Home"
        ],
        rating: 4.8,
        reviews: 185
    },
    {
        id: 2,
        name: "Logitech G Pro X Mechanical Keyboard",
        category: "Gaming Keyboard",
        price: 129,
        oldPrice: 149,
        image: "https://resource.logitech.com/content/dam/gaming/en/products/pro-x-tkl-rapid/gallery/pro-x-tkl-rapid-black-gallery-1-us.png",
        description: "Professional-grade mechanical keyboard designed for esports with swappable switches and customizable lighting.",
        features: [
            "GX Blue Clicky switches",
            "Detachable cable design",
            "Per-key RGB lighting",
            "Compact TKL layout",
            "Onboard memory profiles",
            "Durable aluminum frame"
        ],
        rating: 4.7,
        reviews: 94
    },
    {
        id: 3,
        name: "Custom Gaming PC Beast X",
        category: "Gaming PC",
        price: 1899,
        oldPrice: 2099,
        image: "https://geekawhat.com/wp-content/uploads/2023/07/Best-Prebuilts-Under-1500-Feature-Image.jpg",
        description: "High-end gaming desktop built for performance and speed, capable of running any AAA title at max settings.",
        features: [
            "AMD Ryzen 7 7800X3D",
            "NVIDIA RTX 4080 16GB",
            "32GB DDR5 RAM",
            "2TB NVMe SSD",
            "Liquid cooling system",
            "Tempered glass case with RGB"
        ],
        rating: 4.9,
        reviews: 167
    },
    {
        id: 4,
        name: "Razer DeathAdder V3 Pro",
        category: "Gaming Mouse",
        price: 149,
        oldPrice: 169,
        image: "https://lmt-web.mstatic.lv/eshop/8129/Razer-DeathAdder-V3-Pro_black.png",
        description: "Lightweight wireless gaming mouse with advanced optical sensor and up to 90 hours of battery life.",
        features: [
            "Focus Pro 30K optical sensor",
            "63g ultra-lightweight design",
            "5 programmable buttons",
            "Razer HyperSpeed wireless",
            "Up to 90 hours battery life",
            "USB-C fast charging"
        ],
        rating: 4.8,
        reviews: 112
    },
    {
        id: 5,
        name: "HyperX Cloud Alpha Wireless",
        category: "Gaming Headset",
        price: 199,
        oldPrice: 229,
        image: "https://hp.widen.net/content/pndcbcdeaf/webp/pndcbcdeaf.png?w=573&h=430&dpi=72&color=ffffff00",
        description: "Immersive wireless gaming headset with rich sound, durable design, and industry-leading 300-hour battery life.",
        features: [
            "Dual-chamber 50mm drivers",
            "Up to 300 hours battery life",
            "Detachable noise-cancelling mic",
            "Memory foam ear cushions",
            "2.4GHz low-latency connection",
            "Compatible with PC & console"
        ],
        rating: 4.8,
        reviews: 98
    },
    {
        id: 6,
        name: "Samsung Odyssey G7",
        category: "Gaming Monitor",
        price: 549,
        oldPrice: 599,
        image: "https://images.samsung.com/is/image/samsung/p6pim/uz_ru/lc27g75tqsixci/gallery/uz-ru-odyssey-g7-c27g75t-lc27g75tqsixci-352005431?$624_468_PNG$",
        description: "Curved 27-inch QHD gaming monitor with 240Hz refresh rate and G-SYNC compatibility for smooth visuals.",
        features: [
            "27-inch QHD 2560x1440 resolution",
            "240Hz refresh rate",
            "1ms response time",
            "1000R curvature",
            "G-SYNC & FreeSync support",
            "HDR600 certified"
        ],
        rating: 4.9,
        reviews: 203
    },
    {
        id: 7,
        name: "Secretlab TITAN Evo 2022",
        category: "Gaming Chair",
        price: 449,
        oldPrice: 499,
        image: "https://sm.ign.com/t/ign_ap/deal/n/new-releas/new-release-the-secretlab-titan-evo-lite-is-less-expensive-t_q9wh.1280.jpg",
        description: "Ergonomic gaming chair with customizable lumbar support and premium leatherette finish for long gaming sessions.",
        features: [
            "4D armrests",
            "Adjustable lumbar support",
            "Cold-cure foam padding",
            "Full recline and tilt lock",
            "Magnetic memory foam head pillow",
            "PU leather upholstery"
        ],
        rating: 4.9,
        reviews: 142
    },
    {
        id: 8,
        name: "Logitech G Pro X Mechanical Keyboard",
        category: "Gaming Keyboard",
        price: 129,
        oldPrice: 149,
        image: "https://resource.logitech.com/content/dam/gaming/en/products/pro-x-tkl-rapid/gallery/pro-x-tkl-rapid-black-gallery-1-us.png",
        description: "Professional-grade mechanical keyboard designed for esports with swappable switches and customizable lighting.",
        features: [
            "GX Blue Clicky switches",
            "Detachable cable design",
            "Per-key RGB lighting",
            "Compact TKL layout",
            "Onboard memory profiles",
            "Durable aluminum frame"
        ],
        rating: 4.7,
        reviews: 94
    },
    {
        id: 9,
        name: "Logitech G Pro X Mechanical Keyboard",
        category: "Gaming Keyboard",
        price: 129,
        oldPrice: 149,
        image: "https://resource.logitech.com/content/dam/gaming/en/products/pro-x-tkl-rapid/gallery/pro-x-tkl-rapid-black-gallery-1-us.png",
        description: "Professional-grade mechanical keyboard designed for esports with swappable switches and customizable lighting.",
        features: [
            "GX Blue Clicky switches",
            "Detachable cable design",
            "Per-key RGB lighting",
            "Compact TKL layout",
            "Onboard memory profiles",
            "Durable aluminum frame"
        ],
        rating: 4.7,
        reviews: 94
    },
    {
        id: 10,
        name: "Logitech G Pro X Mechanical Keyboard",
        category: "Gaming Keyboard",
        price: 129,
        oldPrice: 149,
        image: "https://resource.logitech.com/content/dam/gaming/en/products/pro-x-tkl-rapid/gallery/pro-x-tkl-rapid-black-gallery-1-us.png",
        description: "Professional-grade mechanical keyboard designed for esports with swappable switches and customizable lighting.",
        features: [
            "GX Blue Clicky switches",
            "Detachable cable design",
            "Per-key RGB lighting",
            "Compact TKL layout",
            "Onboard memory profiles",
            "Durable aluminum frame"
        ],
        rating: 4.7,
        reviews: 94
    },
    {
        id: 11,
        name: "Logitech G Pro X Mechanical Keyboard",
        category: "Gaming Keyboard",
        price: 129,
        oldPrice: 149,
        image: "https://resource.logitech.com/content/dam/gaming/en/products/pro-x-tkl-rapid/gallery/pro-x-tkl-rapid-black-gallery-1-us.png",
        description: "Professional-grade mechanical keyboard designed for esports with swappable switches and customizable lighting.",
        features: [
            "GX Blue Clicky switches",
            "Detachable cable design",
            "Per-key RGB lighting",
            "Compact TKL layout",
            "Onboard memory profiles",
            "Durable aluminum frame"
        ],
        rating: 4.7,
        reviews: 94
    }
];
