const products = [
    // PC Components - Graphics Card
    {
        id: 0,
        name: "NVIDIA GeForce RTX 4070",
        category: "PC Components",
        subcategory: "Graphics Card",
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
    // Gaming Accessories - Keyboard
    {
        id: 2,
        name: "Logitech G Pro X Mechanical Keyboard",
        category: "Gaming Accessories",
        subcategory: "Keyboard",
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
    // Gaming Accessories - Mouse
    {
        id: 4,
        name: "Razer DeathAdder V3 Pro",
        category: "Gaming Accessories",
        subcategory: "Mouse",
        price: 149,
        oldPrice: 169,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUxgwg3oorXNmQ1ArcwdApvezXOEzdkd3KrA&s",
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
    // Gaming Accessories - Headset
    {
        id: 5,
        name: "HyperX Cloud Alpha Wireless",
        category: "Gaming Accessories",
        subcategory: "Headset",
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
    // Gaming Accessories - Headset
    {
        id: 8,
        name: "Razer BlackShark V2 Pro",
        category: "Gaming Accessories",
        subcategory: "Headset",
        price: 179,
        oldPrice: 199,
        image: "https://razer.syntes.io/public/xLkYtDbfEYD4KipZdckVwZ/800x600-razer-blackshark-v2-pro-2023-white-product-promo.png",
        description: "Wireless gaming headset with TriForce Titanium 50mm drivers and THX Spatial Audio for immersive sound.",
        features: [
            "TriForce Titanium 50mm drivers",
            "THX Spatial Audio",
            "HyperClear Cardioid mic",
            "Up to 24-hour battery life",
            "Memory foam ear cushions",
            "2.4GHz wireless connection"
        ],
        rating: 4.8,
        reviews: 213
    },
    // Gaming Accessories - Mouse
    {
        id: 9,
        name: "Corsair Dark Core RGB Pro SE",
        category: "Gaming Accessories",
        subcategory: "Mouse",
        price: 89,
        oldPrice: 109,
        image: "https://testingback.avtech.uz/storage/products/21692/jE6nUntOFSf3qS3def7z-large_default.jpg",
        description: "Wireless gaming mouse with customizable side grips, 18,000 DPI sensor, and Qi wireless charging.",
        features: [
            "18,000 DPI optical sensor",
            "Qi wireless charging compatible",
            "Customizable side grips",
            "9 programmable buttons",
            "RGB lighting zones",
            "3 connectivity modes"
        ],
        rating: 4.7,
        reviews: 178
    },
    {
        id: 10,
        name: "ASUS TUF Gaming VG279QM",
        category: "Gaming Monitor",
        price: 329,
        oldPrice: 379,
        image: "https://icd.uz/upload/iblock/4e6/ua630034yjvvcz1zat7l5sogvvg23vza.jpg",
        description: "27-inch Full HD gaming monitor with 280Hz refresh rate and ELMB SYNC technology for blur-free gaming.",
        features: [
            "27-inch Full HD IPS",
            "280Hz refresh rate",
            "1ms response time",
            "ELMB SYNC technology",
            "G-SYNC compatible",
            "Shadow Boost enhancement"
        ],
        rating: 4.8,
        reviews: 267
    },
    // Gaming Accessories - Mouse
    {
        id: 11,
        name: "Cooler Master MM731",
        category: "Gaming Accessories",
        subcategory: "Mouse",
        price: 79,
        oldPrice: 99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdk56NdFrGfr21jJkPOuHfjJMZDJPLC1khrOzHOizfZwQ3C8E4neOAmBBD0T8WjxuC8jo&usqp=CAU",
        description: "Lightweight wireless gaming mouse with 19,000 DPI optical sensor and 59g ultra-lightweight design.",
        features: [
            "59g ultra-lightweight",
            "19,000 DPI optical sensor",
            "Bluetooth & 2.4GHz wireless",
            "Up to 72 hours battery",
            "USB-C fast charging",
            "PTFE mouse feet"
        ],
        rating: 4.6,
        reviews: 145
    },
    // PC Components - Processor
    {
        id: 12,
        name: "AMD Ryzen 9 7950X",
        category: "PC Components",
        subcategory: "Processor",
        price: 699,
        oldPrice: 799,
        image: "https://uptrend.uz/wp-content/uploads/2024/08/AMD-Ryzen%E2%84%A2-9-Raphael-7950X.png",
        description: "16-core, 32-thread processor with advanced Zen 4 architecture for extreme gaming and productivity.",
        features: [
            "16 cores, 32 threads",
            "Up to 5.7GHz boost clock",
            "80MB total cache",
            "AMD EXPO technology",
            "PCIe 5.0 support",
            "170W TDP"
        ],
        rating: 4.9,
        reviews: 187
    },
    // PC Components - RAM
    {
        id: 13,
        name: "Corsair Vengeance RGB 32GB DDR5",
        category: "PC Components",
        subcategory: "RAM",
        price: 149,
        oldPrice: 0,
        image: "https://files.ox-sys.com/cache/800x_/image/c1/91/d2/c191d259f5893de57f5061f539f253bb687bc50f1cded5931bce643a036110a1.jpg",
        description: "High-performance DDR5 memory with dynamic RGB lighting and optimized for AMD and Intel platforms.",
        features: [
            "32GB (2x16GB) DDR5",
            "6000MHz speed",
            "CL30 latency",
            "RGB lighting",
            "Intel XMP 3.0 & AMD EXPO",
            "Aluminum heat spreader"
        ],
        rating: 4.8,
        reviews: 156
    },
    // PC Components - Storage
    {
        id: 14,
        name: "Samsung 980 Pro 2TB NVMe SSD",
        category: "PC Components",
        subcategory: "Storage",
        price: 159,
        oldPrice: 199,
        image: "https://sabtm.com.tm/wp-content/uploads/2023/10/61jktxrgyxs.jpg",
        description: "PCIe 4.0 NVMe SSD with incredible speeds for gaming, graphics, and heavy computing workloads.",
        features: [
            "2TB storage capacity",
            "PCIe 4.0 interface",
            "7000MB/s read speed",
            "5000MB/s write speed",
            "M.2 2280 form factor",
            "5-year warranty"
        ],
        rating: 4.9,
        reviews: 234
    },
    // PC Components - Power Supply
    {
        id: 15,
        name: "ASUS ROG Thor 1200P Power Supply",
        category: "PC Components",
        subcategory: "Power Supply",
        price: 349,
        oldPrice: 399,
        image: "https://dlcdnwebimgs.asus.com/gain/684DD066-82FC-4C2B-A0DB-7957EA004D40",
        description: "1200W Platinum certified power supply with OLED power display and Aura Sync RGB lighting.",
        features: [
            "1200W 80+ Platinum",
            "OLED power display",
            "RGB lighting with Aura Sync",
            "Fully modular cables",
            "135mm PWM fan",
            "10-year warranty"
        ],
        rating: 4.8,
        reviews: 89
    },
    // PC Components - Cooling
    {
        id: 16,
        name: "NZXT Kraken Z73 RGB",
        category: "PC Components",
        subcategory: "Cooling",
        price: 299,
        oldPrice: 349,
        image: "https://cdn.shopify.com/s/files/1/0460/2567/0805/products/NZXT-KRAKEN-Z73-RGB-360MM-AIO-WITH-LCD-DISPLAY-LIQUID-COOLER.webp?v=1657250029",
        description: "360mm AIO liquid cooler with customizable LCD display and advanced cooling performance.",
        features: [
            "360mm radiator",
            "2.36 LCD display",
            "RGB infinity mirror design",
            "6th gen Asetek pump",
            "CAM software control",
            "3x Aer P 120mm fans"
        ],
        rating: 4.8,
        reviews: 167
    },
    // PC Components - Case
    {
        id: 17,
        name: "Lian Li O11 Dynamic EVO",
        category: "PC Components",
        subcategory: "Case",
        price: 159,
        oldPrice: 189,
        image: "https://m.media-amazon.com/images/I/71x-3P9loBL.jpg",
        description: "Mid-tower dual chamber case with reversible design and excellent water cooling support.",
        features: [
            "Reversible design",
            "Dual chamber layout",
            "Tempered glass panels",
            "Support for 420mm radiators",
            "8+ expansion slots",
            "USB 3.1 Type-C"
        ],
        rating: 4.9,
        reviews: 278
    },
    // Gaming Accessories - Keyboard
    {
        id: 18,
        name: "SteelSeries Apex Pro TKL",
        category: "Gaming Accessories",
        subcategory: "Keyboard",
        price: 179,
        oldPrice: 199,
        image: "https://m.media-amazon.com/images/I/71fkAj9lVKL.jpg",
        description: "World's fastest mechanical gaming keyboard with adjustable actuation and OLED smart display.",
        features: [
            "Adjustable actuation (0.4mm-3.6mm)",
            "OLED smart display",
            "Aircraft-grade aluminum frame",
            "Per-key RGB lighting",
            "Magnetic wrist rest",
            "USB passthrough"
        ],
        rating: 4.8,
        reviews: 192
    },
    // Gaming Accessories - Mouse
    {
        id: 19,
        name: "Razer Viper V2 Pro",
        category: "Gaming Accessories",
        subcategory: "Mouse",
        price: 149,
        oldPrice: 169,
        image: "https://m.media-amazon.com/images/I/51XTRRMyJML.jpg",
        description: "Ultra-lightweight wireless gaming mouse designed in collaboration with top esports professionals.",
        features: [
            "58g ultra-lightweight",
            "Focus Pro 30K optical sensor",
            "Optical mouse switches",
            "HyperSpeed wireless technology",
            "Up to 80 hours battery",
            "USB-C charging"
        ],
        rating: 4.9,
        reviews: 145
    },
    // Gaming Accessories - Headset
    {
        id: 20,
        name: "SteelSeries Arctis Nova Pro Wireless",
        category: "Gaming Accessories",
        subcategory: "Headset",
        price: 349,
        oldPrice: 399,
        image: "https://www.gadgetgear.nl/wp-content/uploads/2022/07/SteelSeries-Arctis-Nova-Pro-Wireless-en-GameDAC.jpg",
        description: "Multi-system wireless gaming headset with active noise cancellation and dual battery system.",
        features: [
            "Active Noise Cancellation",
            "Dual wireless connectivity",
            "Hot-swappable batteries",
            "360° spatial audio",
            "ClearCast Gen 2 mic",
            "Multi-system compatibility"
        ],
        rating: 4.8,
        reviews: 134
    },
    {
        id: 21,
        name: "Alienware AW3423DW Monitor",
        category: "Gaming Monitor",
        price: 1299,
        oldPrice: 1499,
        image: "https://m.media-amazon.com/images/I/71ufV5NQ44L._UF894,1000_QL80_.jpg",
        description: "34-inch QD-OLED curved gaming monitor with ultra-fast response time and infinite contrast.",
        features: [
            "34-inch QD-OLED",
            "3440x1440 resolution",
            "175Hz refresh rate",
            "0.1ms response time",
            "G-SYNC Ultimate",
            "VESA DisplayHDR 400"
        ],
        rating: 4.9,
        reviews: 267
    },
    {
        id: 22,
        name: "Noblechairs EPIC Gaming Chair",
        category: "Gaming Chair",
        price: 399,
        oldPrice: 449,
        image: "https://img.overclockers.co.uk/images/GC-031-NC/de106cfc0f87f26acf8fba6d1b4ce907.jpg",
        description: "Premium gaming chair with integrated lumbar support and high-density cold foam padding.",
        features: [
            "Integrated lumbar support",
            "4D armrests",
            "High-density cold foam",
            "Steel frame construction",
            "Multi-tilt mechanism",
            "PU leather upholstery"
        ],
        rating: 4.7,
        reviews: 178
    },
    // Streaming Equipment - Controller
    {
        id: 23,
        name: "Elgato Stream Deck MK.2",
        category: "Streaming Equipment",
        subcategory: "Controller",
        price: 149,
        oldPrice: 169,
        image: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_53/532345/16957750_800.jpg",
        description: "15-key studio controller with customizable LCD keys to control your tools and platforms.",
        features: [
            "15 customizable LCD keys",
            "Adjustable stand",
            "Cross-platform compatibility",
            "Drag and drop interface",
            "Plugin ecosystem",
            "USB-C connection"
        ],
        rating: 4.8,
        reviews: 223
    },
    // Streaming Equipment - Microphone
    {
        id: 24,
        name: "Blue Yeti X Professional Microphone",
        category: "Streaming Equipment",
        subcategory: "Microphone",
        price: 169,
        oldPrice: 199,
        image: "https://m.media-amazon.com/images/I/61yw+MkDwpL._UF1000,1000_QL80_.jpg",
        description: "Professional USB condenser microphone with high-resolution streaming and voice recording.",
        features: [
            "4-capsule array",
            "Blue VOICE effects",
            "Multi-function smart knob",
            "LED metering",
            "Multiple pattern selection",
            "Plug and play USB"
        ],
        rating: 4.7,
        reviews: 189
    },
    {
        id: 25,
        name: "ASUS ROG Swift PG32UQX",
        category: "Gaming Monitor",
        price: 2999,
        oldPrice: 3499,
        image: "https://dlcdnwebimgs.asus.com/files/media/B43D5AC4-7D8F-4843-920D-A8B1EC379965/v1/img/ready2.png",
        description: "32-inch 4K UHD gaming monitor with mini-LED backlight and G-SYNC ULTIMATE certification.",
        features: [
            "32-inch 4K UHD",
            "Mini-LED backlight",
            "144Hz refresh rate",
            "G-SYNC ULTIMATE",
            "DisplayHDR 1400",
            "Quantum dot technology"
        ],
        rating: 4.9,
        reviews: 94
    },
    // Gaming Accessories - Keyboard
    {
        id: 26,
        name: "Corsair K100 RGB Optical Keyboard",
        category: "Gaming Accessories",
        subcategory: "Keyboard",
        price: 229,
        oldPrice: 259,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDieQPH91WQJ0cDzWQqcRQTMTWShmndV3MrRVcYD9QvXeqF40OvqXh90YtK6GqqvWPRX8&usqp=CAU",
        description: "Premium optical-mechanical gaming keyboard with Corsair OPX switches and dynamic RGB lighting.",
        features: [
            "OPX optical-mechanical switches",
            "AXON hyper-processing technology",
            "Per-key RGB lighting",
            "Elgato Stream Deck integration",
            "PBT double-shot keycaps",
            "Aluminum frame"
        ],
        rating: 4.8,
        reviews: 167
    },
    // Gaming Accessories - Mouse
    {
        id: 27,
        name: "Logitech G502 X Plus",
        category: "Gaming Accessories",
        subcategory: "Mouse",
        price: 159,
        oldPrice: 179,
        image: "https://m.media-amazon.com/images/I/61LaIVlVOwL.jpg",
        description: "Advanced LIGHTFORCE hybrid optical-mechanical switches with LIGHTSYNC RGB and wireless connectivity.",
        features: [
            "LIGHTFORCE hybrid switches",
            "LIGHTSYNC RGB",
            "HERO 25K sensor",
            "LIGHTSPEED wireless",
            "13 programmable buttons",
            "PowerPlay compatibility"
        ],
        rating: 4.8,
        reviews: 201
    },
    // Streaming Equipment - Microphone
    {
        id: 28,
        name: "HyperX QuadCast S Microphone",
        category: "Streaming Equipment",
        subcategory: "Microphone",
        price: 139,
        oldPrice: 159,
        image: "https://hyperx.com/cdn/shop/files/hyperx_quadcast_01_main_9ef081ae-4cc5-402b-93f8-d442e34edc6d.jpg?v=1763563139",
        description: "USB condenser microphone with anti-vibration shock mount and dynamic RGB lighting effects.",
        features: [
            "Four selectable patterns",
            "Anti-vibration shock mount",
            "Built-in pop filter",
            "RGB lighting effects",
            "Gain control adjustment",
            "Tap-to-mute sensor"
        ],
        rating: 4.7,
        reviews: 278
    },
    // PC Components - Case
    {
        id: 29,
        name: "Fractal Design Torrent RGB",
        category: "PC Components",
        subcategory: "Case",
        price: 229,
        oldPrice: 269,
        image: "https://m.media-amazon.com/images/I/71AGjC99elL.jpg",
        description: "High-airflow mid-tower case with two 180mm front fans and innovative bottom intake design.",
        features: [
            "Two 180mm front fans",
            "Three 140mm bottom fans",
            "Open-air front panel",
            "Dual chamber design",
            "Tool-free side panels",
            "Excellent cable management"
        ],
        rating: 4.9,
        reviews: 156
    },
    // PC Components - Power Supply
    {
        id: 30,
        name: "Be Quiet! Dark Power 13 1000W",
        category: "PC Components",
        subcategory: "Power Supply",
        price: 289,
        oldPrice: 329,
        image: "https://i5.walmartimages.com/seo/quiet-Dark-Power-PRO-13-1600W-ATX-3-0-Power-Supply-80-Plus-Titanium-Efficiency-PCIe-5-Modular-Overclocking-Support-10-Year-Warranty-BN501_56557a6d-757b-47e7-b4c9-906665892321.57c5ad16fbe6bc01ecea75bfbcd411f7.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
        description: "80 Plus Titanium certified power supply with fully modular cables and silent operation.",
        features: [
            "1000W 80+ Titanium",
            "Fully modular design",
            "135mm Silent Wings fan",
            "Japanese capacitors",
            "Zero RPM mode",
            "12-year warranty"
        ],
        rating: 4.9,
        reviews: 89
    },
    // PC Components - Cooling
    {
        id: 31,
        name: "Noctua NH-D15 chromax.black",
        category: "PC Components",
        subcategory: "Cooling",
        price: 109,
        oldPrice: 129,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjCfjjDx9N2X1gUoruX3PTjAOyxHBhDeHugg&s",
        description: "Premium dual-tower CPU cooler with dual NF-A15 fans and complete black chromax.black finish.",
        features: [
            "Dual tower design",
            "Two NF-A15 140mm fans",
            "Six heatpipes",
            "NT-H1 thermal compound",
            "RAM compatibility up to 65mm",
            "SecuFirm2 mounting system"
        ],
        rating: 4.9,
        reviews: 345
    },
    // PC Components - RAM
    {
        id: 32,
        name: "G.Skill Trident Z5 RGB 64GB",
        category: "PC Components",
        subcategory: "RAM",
        price: 289,
        oldPrice: 329,
        image: "https://www.dateks.lv/images/pic/2400/2400/194/1111.jpg",
        description: "64GB DDR5 memory kit with aggressive heatspreader design and vibrant RGB lighting.",
        features: [
            "64GB (2x32GB) DDR5",
            "6000MHz CL30",
            "AMD EXPO & Intel XMP 3.0",
            "Customizable RGB lighting",
            "Aluminum heatspreader",
            "Lifetime warranty"
        ],
        rating: 4.8,
        reviews: 134
    },
    // PC Components - Storage
    {
        id: 33,
        name: "WD Black SN850X 4TB NVMe",
        category: "PC Components",
        subcategory: "Storage",
        price: 399,
        oldPrice: 449,
        image: "https://m.media-amazon.com/images/I/61KpMgB6INL.jpg",
        description: "High-performance PCIe 4.0 NVMe SSD designed for gamers, content creators, and professionals.",
        features: [
            "4TB storage capacity",
            "PCIe 4.0 performance",
            "7300MB/s read speed",
            "6600MB/s write speed",
            "WD Black Dashboard control",
            "5-year limited warranty"
        ],
        rating: 4.9,
        reviews: 178
    },
    // PC Components - Processor
    {
        id: 34,
        name: "Intel Core i9-14900K",
        category: "PC Components",
        subcategory: "Processor",
        price: 589,
        oldPrice: 649,
        image: "https://m.media-amazon.com/images/I/51ZKpp9PV0L.jpg",
        description: "24-core processor with up to 6.0GHz max turbo frequency and Intel Thermal Velocity Boost.",
        features: [
            "24 cores (8P+16E)",
            "Up to 6.0GHz max turbo",
            "36MB Intel Smart Cache",
            "Intel UHD Graphics 770",
            "PCIe 5.0 support",
            "Unlocked for overclocking"
        ],
        rating: 4.8,
        reviews: 267
    },
    // PC Components - Motherboard
    {
        id: 35,
        name: "MSI MAG B650 TOMAHAWK",
        category: "PC Components",
        subcategory: "Motherboard",
        price: 219,
        oldPrice: 249,
        image: "https://www.icd.uz/upload/iblock/03d/7exc19kaadayrn91310db58e7gfvghe2.png",
        description: "AMD B650 gaming motherboard with robust power design and comprehensive cooling solutions.",
        features: [
            "AMD B650 chipset",
            "AM5 socket support",
            "DDR5 memory support",
            "PCIe 4.0 x16 slot",
            "2.5G LAN + Wi-Fi 6E",
            "Extended heatsink design"
        ],
        rating: 4.7,
        reviews: 189
    },
    // PC Components - Motherboard
    {
        id: 36,
        name: "ASUS ROG Crosshair X670E HERO",
        category: "PC Components",
        subcategory: "Motherboard",
        price: 699,
        oldPrice: 799,
        image: "https://cdn.sanity.io/images/yqd1zell/production/a7fb66694e47114636b0855aa4feb7a71c028ef4-500x500.png",
        description: "Premium AMD X670E gaming motherboard with robust power delivery and extensive connectivity.",
        features: [
            "AMD X670E chipset",
            "20+2 power stages",
            "PCIe 5.0 x16 slot",
            "DDR5 6400+ support",
            "10G LAN + Wi-Fi 6E",
            "OLED system display"
        ],
        rating: 4.9,
        reviews: 112
    },
    {
        id: 37,
        name: "Gigabyte AORUS FO48U Monitor",
        category: "Gaming Monitor",
        price: 1299,
        oldPrice: 0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX21jUjgLrQ6jQ_a2ZyuZ20Ty_-hooegm-5g&s",
        description: "48-inch 4K OLED gaming monitor with 138Hz refresh rate and HDMI 2.1 support.",
        features: [
            "48-inch 4K OLED",
            "138Hz refresh rate",
            "0.1ms response time",
            "HDMI 2.1 support",
            "98% DCI-P3 color",
            "Built-in KVM switch"
        ],
        rating: 4.8,
        reviews: 156
    },
    // Gaming Accessories - Keyboard
    {
        id: 38,
        name: "Razer BlackWidow V4 Pro",
        category: "Gaming Accessories",
        subcategory: "Keyboard",
        price: 199,
        oldPrice: 229,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEMKGFVuysji4fbpweeo_HSTIWoEKBitnnlA&s",
        description: "Full-size mechanical gaming keyboard with Razer Green mechanical switches and multi-function dial.",
        features: [
            "Razer Green mechanical switches",
            "Multi-function dial",
            "8K Hz polling rate",
            "Doubleshot ABS keycaps",
            "Plush leatherette wrist rest",
            "Under-glow RGB lighting"
        ],
        rating: 4.8,
        reviews: 178
    },
    // Gaming Accessories - Mouse
    {
        id: 39,
        name: "Finalmouse Starlight-12",
        category: "Gaming Accessories",
        subcategory: "Mouse",
        price: 189,
        oldPrice: 0,
        image: "https://royalgear.ca/cdn/shop/files/finalmouseares_1024x1024.jpg?v=1741552471",
        description: "Ultra-lightweight magnesium alloy gaming mouse with advanced sensor technology and unique design.",
        features: [
            "42g magnesium alloy body",
            "Custom 3360 sensor",
            "Kailh GM 8.0 switches",
            "USB-C charging",
            "PTFE skates",
            "Limited edition design"
        ],
        rating: 4.7,
        reviews: 89
    },
    // Gaming Accessories - Headset
    {
        id: 40,
        name: "Audeze LCD-GX Gaming Headset",
        category: "Gaming Accessories",
        subcategory: "Headset",
        price: 899,
        oldPrice: 999,
        image: "https://images.hifiklubben.com/image/55ebaa81-404b-494a-acff-6563e1a8fd7d/pdp_e/audlcdgx.jpg",
        description: "Open-back planar magnetic gaming headset with exceptional sound quality and comfort.",
        features: [
            "Planar magnetic drivers",
            "Open-back design",
            "Detachable boom microphone",
            "Memory foam earpads",
            "Low distortion sound",
            "Premium build quality"
        ],
        rating: 4.9,
        reviews: 67
    },
    {
        id: 41,
        name: "Herman Miller Embody Gaming Chair",
        category: "Gaming Chair",
        price: 1495,
        oldPrice: 1695,
        image: "https://rifyo.com/cdn/shop/files/Photo-Product-Embody-Gaming-Chair-Cyan.png?v=1687411624",
        description: "Ergonomic gaming chair designed in collaboration with Logitech G for maximum comfort during long sessions.",
        features: [
            "Pixelated support system",
            "Copper-infused cooling foam",
            "Four-layer backrest",
            "Sync fabric upholstery",
            "Fully adjustable arms",
            "12-year warranty"
        ],
        rating: 4.9,
        reviews: 234
    },
    // Streaming Equipment - Lighting
    {
        id: 42,
        name: "Elgato Key Light Air",
        category: "Streaming Equipment",
        subcategory: "Lighting",
        price: 129,
        oldPrice: 149,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6LXP-EZ0ajBTee8IMNozv7QSGbCkeiKpO3g&s",
        description: "Professional LED studio light with adjustable brightness and color temperature control.",
        features: [
            "1400 lumens output",
            "Adjustable color temperature",
            "App control via smartphone",
            "Studio-grade CRI 95+",
            "Desk clamp mount",
            "USB-C power"
        ],
        rating: 4.8,
        reviews: 189
    },
    // Streaming Equipment - Audio Mixer
    {
        id: 43,
        name: "GoXLR Mini Audio Mixer",
        category: "Streaming Equipment",
        subcategory: "Audio Mixer",
        price: 249,
        oldPrice: 299,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmFMPbgWtjar_4NR1UCB8f0ynS2ttDU64nKA&s",
        description: "Compact audio mixer with professional voice effects and intuitive control interface for streamers.",
        features: [
            "4-channel audio mixer",
            "Voice effects processor",
            "Sampler with 5 slots",
            "Motorized fader",
            "RGB lighting",
            "USB connectivity"
        ],
        rating: 4.7,
        reviews: 156
    },
    {
        id: 44,
        name: "LG UltraGear 45GR95QE Monitor",
        category: "Gaming Monitor",
        price: 1699,
        oldPrice: 1899,
        image: "https://www.mytrendyphone.co.uk/images/LG-UltraGear-45GR95QE-B-45-Curved-OLED-Gaming-Monitor-240Hz-WQHD-8806084809384-24092024-00-p.webp",
        description: "45-inch curved OLED gaming monitor with 240Hz refresh rate and ultra-wide 21:9 aspect ratio.",
        features: [
            "45-inch curved OLED",
            "3440x1440 resolution",
            "240Hz refresh rate",
            "0.03ms response time",
            "HDMI 2.1 support",
            "NVIDIA G-SYNC Compatible"
        ],
        rating: 4.9,
        reviews: 134
    },
    // Gaming Accessories - Keyboard
    {
        id: 45,
        name: "Ducky One 3 Mechanical Keyboard",
        category: "Gaming Accessories",
        subcategory: "Keyboard",
        price: 109,
        oldPrice: 0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlhRoAiIoWXffZY020Ul4aw2LXAtlmHzKNH2iGTQypj9qpG3k-Yzu0AaFzJRiyT5byCv8&usqp=CAU",
        description: "Hot-swappable mechanical keyboard with Quack Mechanics design and customizable keycaps.",
        features: [
            "Hot-swappable PCB",
            "Cherry MX switches",
            "Double-shot PBT keycaps",
            "RGB backlighting",
            "Dual-layer sound dampening",
            "USB Type-C connection"
        ],
        rating: 4.8,
        reviews: 278
    },
    // Gaming Accessories - Mouse
    {
        id: 46,
        name: "Glorious Model O Wireless",
        category: "Gaming Accessories",
        subcategory: "Mouse",
        price: 79,
        oldPrice: 99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZrQutw9lqqrFsG11IMV4DD1ANcvPB6ooYQ&s",
        description: "Ultra-lightweight wireless gaming mouse with honeycomb design and BAMF sensor technology.",
        features: [
            "69g lightweight design",
            "BAMF sensor (19,000 DPI)",
            "G-Skates feet",
            "USB-C charging",
            "71-hour battery life",
            "RGB lighting"
        ],
        rating: 4.7,
        reviews: 345
    },
    // Streaming Equipment - Webcam
    {
        id: 47,
        name: "Logitech Brio 4K Webcam",
        category: "Streaming Equipment",
        subcategory: "Webcam",
        price: 199,
        oldPrice: 249,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn99ODwCX_AQl2xQJiDHy5UGyL36WA1L_6LRMMKuTPRmBNykSeDzNc5Z_pmk-eW1SSuRk&usqp=CAU",
        description: "Premium 4K Ultra HD webcam with HDR and Windows Hello facial recognition.",
        features: [
            "4K Ultra HD resolution",
            "HDR support",
            "Windows Hello facial recognition",
            "RightLight 3 with HDR",
            "5x digital zoom",
            "USB-C connection"
        ],
        rating: 4.8,
        reviews: 189
    },
    // PC Components - Case
    {
        id: 48,
        name: "Phanteks Evolv X Case",
        category: "PC Components",
        subcategory: "Case",
        price: 199,
        oldPrice: 229,
        image: "https://www.phanteks.store/cdn/shop/files/EvolvX2_Black_11_1800x1800.png?v=1737154322",
        description: "Premium full-tower case with RGB lighting, tempered glass panels, and advanced cable management.",
        features: [
            "Dual-system capable",
            "RGB lighting control",
            "Tempered glass panels",
            "Advanced cable management",
            "Built-in fan hub",
            "Tool-free design"
        ],
        rating: 4.8,
        reviews: 167
    },
    // PC Components - Power Supply
    {
        id: 49,
        name: "Seasonic Prime TX-1000",
        category: "PC Components",
        subcategory: "Power Supply",
        price: 299,
        oldPrice: 349,
        image: "https://img.overclockers.co.uk/images/CA-074-SS/bead0608085770901d916e68345c6027.jpg",
        description: "80 Plus Titanium certified power supply with fully modular cables and hybrid silent fan control.",
        features: [
            "1000W 80+ Titanium",
            "Fully modular cables",
            "Hybrid silent fan control",
            "Japanese capacitors",
            "12-year warranty",
            "135mm fluid dynamic bearing fan"
        ],
        rating: 4.9,
        reviews: 134
    },
    // PC Components - Cooling
    {
        id: 50,
        name: "Arctic Liquid Freezer II 420",
        category: "PC Components",
        subcategory: "Cooling",
        price: 129,
        oldPrice: 149,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZYBS9LCG3PSfaQ7NDLGKe-ilxGKFmLt-4Q&s",
        description: "420mm all-in-one liquid cooler with VRM cooling and addressable RGB lighting.",
        features: [
            "420mm radiator",
            "VRM cooling system",
            "Addressable RGB",
            "PWM sharing technology",
            "Low-noise operation",
            "6-year warranty"
        ],
        rating: 4.8,
        reviews: 223
    },
    // PC Components - RAM
    {
        id: 51,
        name: "Team Group T-Force Delta RGB 32GB",
        category: "PC Components",
        subcategory: "RAM",
        price: 119,
        oldPrice: 139,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs1ITxSIYqaHjpHIpWnZfC_5WR63qKXmzpJg&s",
        description: "DDR5 memory with full-color RGB lighting and asymmetric heat spreader design.",
        features: [
            "32GB (2x16GB) DDR5",
            "6000MHz CL38",
            "Full-color RGB lighting",
            "Asymmetric heat spreader",
            "Intel XMP 3.0 support",
            "Lifetime warranty"
        ],
        rating: 4.7,
        reviews: 189
    },
    // PC Components - Storage
    {
        id: 52,
        name: "Sabrent Rocket 4 Plus 2TB",
        category: "PC Components",
        subcategory: "Storage",
        price: 199,
        oldPrice: 229,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjytnzoEGQxcr8aK_wlbrSlW05wOP3c2Z0YNthtUVvZtCvUZTlqxHKgphyt_tVlubUvk&usqp=CAU",
        description: "High-performance PCIe 4.0 NVMe SSD with Phison E18 controller and advanced thermal management.",
        features: [
            "2TB storage capacity",
            "PCIe 4.0 interface",
            "7100MB/s read speed",
            "6600MB/s write speed",
            "Advanced thermal management",
            "5-year warranty"
        ],
        rating: 4.8,
        reviews: 156
    },
    // PC Components - Processor
    {
        id: 53,
        name: "AMD Ryzen 7 7800X3D",
        category: "PC Components",
        subcategory: "Processor",
        price: 449,
        oldPrice: 499,
        image: "https://i0.wp.com/compunilestore.com/wp-content/uploads/2024/09/Ryzen-7-5xxx-G-.webp?resize=600%2C576&ssl=1",
        description: "8-core processor with 3D V-Cache technology for the ultimate gaming performance.",
        features: [
            "8 cores, 16 threads",
            "3D V-Cache technology",
            "Up to 5.0GHz boost",
            "104MB total cache",
            "AMD EXPO memory support",
            "120W TDP"
        ],
        rating: 4.9,
        reviews: 278
    },
    // PC Components - Motherboard
    {
        id: 54,
        name: "ASRock B650E Steel Legend",
        category: "PC Components",
        subcategory: "Motherboard",
        price: 279,
        oldPrice: 319,
        image: "https://static.nix.ru/images/asrock-b650e-steel-legend-wifi-7056782254.png?good_id=705678&width=500&height=500&view_id=2254",
        description: "AMD B650E gaming motherboard with PCIe 5.0 support and Polychrome RGB synchronization.",
        features: [
            "AMD B650E chipset",
            "PCIe 5.0 x16 slot",
            "DDR5 6400+ support",
            "2.5G LAN + Wi-Fi 6E",
            "Polychrome RGB sync",
            "8-layer PCB design"
        ],
        rating: 4.7,
        reviews: 134
    },
    {
        id: 55,
        name: "Gigabyte M32U Monitor",
        category: "Gaming Monitor",
        price: 699,
        oldPrice: 799,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxcvEMDlB8cgTGSI-0fHC45jONCjAI9SZaAQ&s",
        description: "32-inch 4K IPS gaming monitor with 144Hz refresh rate and built-in KVM switch.",
        features: [
            "32-inch 4K IPS",
            "144Hz refresh rate",
            "1ms response time",
            "Built-in KVM switch",
            "HDMI 2.1 support",
            "94% DCI-P3 color"
        ],
        rating: 4.8,
        reviews: 189
    },
    // Gaming Accessories - Keyboard
    {
        id: 56,
        name: "Wooting 60HE Analog Keyboard",
        category: "Gaming Accessories",
        subcategory: "Keyboard",
        price: 175,
        oldPrice: 0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_hWvv1r3r6AP8g7QIFW3zpr1sIMHPnwQjA&s",
        description: "Analog mechanical keyboard with adjustable actuation points and rapid trigger technology.",
        features: [
            "Analog mechanical switches",
            "Adjustable actuation points",
            "Rapid trigger technology",
            "TKL 60% layout",
            "Per-key RGB lighting",
            "Hot-swappable switches"
        ],
        rating: 4.9,
        reviews: 267
    },
    // Gaming Accessories - Mouse
    {
        id: 57,
        name: "Pulsar X2 Wireless Mouse",
        category: "Gaming Accessories",
        subcategory: "Mouse",
        price: 99,
        oldPrice: 119,
        image: "https://zerkgamingmods.co.uk/wp-content/uploads/2025/01/Pulsar-X2-V3-%E2%80%93-Wireless-Gaming-Mouse.webp",
        description: "Ultra-lightweight symmetrical wireless mouse with PixArt 3395 sensor and 70-hour battery life.",
        features: [
            "52g lightweight design",
            "PixArt 3395 sensor",
            "Kailh GM 8.0 switches",
            "70-hour battery life",
            "USB-C charging",
            "Symmetrical shape"
        ],
        rating: 4.8,
        reviews: 178
    },
    // Streaming Equipment - Webcam
    {
        id: 58,
        name: "Razer Kiyo Pro Ultra Webcam",
        category: "Streaming Equipment",
        subcategory: "Webcam",
        price: 299,
        oldPrice: 349,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0guCEimCqVJeqKWrP3r7VtsXOvisshh6o3g&s",
        description: "Advanced streaming webcam with large sensor and adaptive light sensor for professional quality.",
        features: [
            "Large Sony STARVIS 2 sensor",
            "Adaptive light sensor",
            "4K 30fps / 1080p 60fps",
            "Razer AI-powered features",
            "USB-C connectivity",
            "Adjustable mounting"
        ],
        rating: 4.8,
        reviews: 112
    },
    // Streaming Equipment - Controller
    {
        id: 59,
        name: "Logitech G Pro X Superlight",
        category: "Streaming Equipment",
        subcategory: "Controller",
        price: 199,
        oldPrice: 249,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhgtrhsvUs6aPxsJBPcQZroehdxmLQXuibZw&s",
        description: "Lightweight and durable gaming controller with adaptive triggers and haptic feedback.",
        features: [
            "Lightweight design",
            "Adaptive triggers",
            "Haptic feedback",
            "Gyroscopic motion tracking",
            "USB-C connectivity",
            "100% customizability"
        ],
        rating: 4.9,
        reviews: 223
    }
];