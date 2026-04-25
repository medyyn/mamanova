import { Product, Category } from './types';

const API_BASE = 'https://admin.bazaristo.shop/api';

// export async function getProducts(): Promise<Product[]> {
//     try {
//         const response = await fetch(`${API_BASE}/products`, {
//             cache: 'no-store',
//         });
//         if (!response.ok) throw new Error('Failed to fetch products');
//         return response.json();
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         return getMockProducts();
//     }
// }

export async function getProducts(): Promise<Product[]> {
    return getMockProducts();
}

export async function getProduct(id: string): Promise<Product | null> {
    try {
        const response = await fetch(`${API_BASE}/products/${id}`, {
            cache: 'no-store',
        });
        if (!response.ok) throw new Error('Failed to fetch product');
        return response.json();
    } catch (error) {
        console.error('Error fetching product:', error);
        return getMockProducts().find(p => p.id === id) || null;
    }
}

// export async function getCategories(): Promise<Category[]> {
//     try {
//         const response = await fetch(`${API_BASE}/categories`, {
//             cache: 'no-store',
//         });
//         if (!response.ok) throw new Error('Failed to fetch categories');
//         return response.json();
//     } catch (error) {
//         console.error('Error fetching categories:', error);
//         return getMockCategories();
//     }
// }

export async function getCategories(): Promise<Category[]> {
    return getMockCategories();
}

// Mock data for development/fallback
function getMockProducts(): Product[] {
    return [
        {
            id: '1',
            name: 'Premium Antep Fıstığı',
            description: 'Əllə toplanmış, təzə və keyfiyyətli Antep fıstığı. Mətbəxinizin vazkeçilməzi.',
            price: 85,
            originalPrice: 220,
            image: 'https://www.nestlegoodnes.com/ph/sites/default/files/styles/3_2_1920px_width/public/2024-04/The%20Pistachio%20Sho.jpeg.webp?itok=NZB_g9nQ',
            category: 'fıstıq',
            stock: 150,
            rating: 4.8,
            reviews: 234,
            featured: true,
        },
        {
            id: '2',
            name: 'Orqanik Badam',
            description: 'Təbii və orqanik yetişdirilən sağlam badamlar. Protein deposu.',
            price: 35,
            image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=600',
            category: 'badam',
            stock: 200,
            rating: 4.9,
            reviews: 189,
            featured: true,
        },
        {
            id: '3',
            name: 'Hindistan qozu',
            description: 'Bol miqdarda qoz içi, təzə və ləzzətli.',
            price: 25,
            originalPrice: 175,
            image: 'https://www.birbes.com/wp-content/uploads/2018/07/Hindistan-Cevizi-Nedir-Faydalar%C4%B1-Ve-Zararlar%C4%B1-Nelerdir-750x375.jpg',
            category: 'qoz',
            stock: 180,
            rating: 4.7,
            reviews: 156,
        },
        {
            id: '4',
            name: 'Qaragilə bəkməzi',
            description: 'Ənənəvi üsulla istehsal olunan orqanik qaragilə bəkməzi.',
            price: 60,
            image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600',
            category: 'bəkməz',
            stock: 85,
            rating: 4.6,
            reviews: 98,
            isNew: true,
        },
        {
            id: '5',
            name: 'Fındıq pastası',
            description: '%100 təbii fındıq, şəkərsiz və qatqısız.',
            price: 50,
            image: 'https://www.hacibabakuruyemis.com/cdn/shop/articles/sekersiz-fistik-ezmesi.jpg?v=1564732191&width=1000',
            category: 'fındıq',
            stock: 120,
            rating: 4.8,
            reviews: 267,
            featured: true,
        },
        {
            id: '6',
            name: 'Kaju qozu',
            description: 'Təzə qovrulmuş, xırtıldayan kaju qozları.',
            price: 43,
            originalPrice: 230,
            image: 'https://narayanjigajakwale.in/cdn/shop/files/Cashwe-180-No.jpg?v=1727454538',
            category: 'kaju',
            stock: 95,
            rating: 4.5,
            reviews: 78,
        },
        {
            id: '7',
            name: 'Susam halvası',
            description: 'Ənənəvi reseptlə hazırlanmış yumşaq teksturalı halva.',
            price: 15,
            image: 'https://i.lezzet.com.tr/images-xxlarge-recipe/susam_helvasi-40ea2654-3300-4bff-b31f-f2ba4fd287c2.jpg',
            category: 'halva',
            stock: 200,
            rating: 4.7,
            reviews: 145,
        },
        {
            id: '8',
            name: 'Ləbləbi',
            description: 'Samsun ləbləbisi, yüngül duzlu və xırtıldayan.',
            price: 25,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Leblebi.jpg/330px-Leblebi.jpg',
            category: 'ləbləbi',
            stock: 300,
            rating: 4.4,
            reviews: 89,
            isNew: true,
        },
    ];
}

function getMockCategories(): Category[] {
    return [
        { id: '1', name: 'Fıstıq', slug: 'fıstıq', image: 'https://www.nestlegoodnes.com/ph/sites/default/files/styles/3_2_1920px_width/public/2024-04/The%20Pistachio%20Sho.jpeg.webp?itok=NZB_g9nQ', productCount: 12 },
        { id: '2', name: 'Badam', slug: 'badam', image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=300', productCount: 8 },
        { id: '3', name: 'Hindistan Qozu', slug: 'hindistan qozu', image: 'https://www.birbes.com/wp-content/uploads/2018/07/Hindistan-Cevizi-Nedir-Faydalar%C4%B1-Ve-Zararlar%C4%B1-Nelerdir-750x375.jpg', productCount: 15 },
        { id: '4', name: 'Bəkməz', slug: 'bəkməz', image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=300', productCount: 6 },
        { id: '5', name: 'Kaju', slug: 'kaju', image: 'https://narayanjigajakwale.in/cdn/shop/files/Cashwe-180-No.jpg?v=1727454538', productCount: 10 },
        { id: '6', name: 'Halva', slug: 'halva', image: 'https://i.lezzet.com.tr/images-xxlarge-recipe/susam_helvasi-40ea2654-3300-4bff-b31f-f2ba4fd287c2.jpg', productCount: 5 },
    ];
}