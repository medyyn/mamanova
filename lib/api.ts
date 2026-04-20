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
            name: 'Premium Antep Fistigi',
            description: 'Elde toplanmis, taze ve kaliteli Antep fistigi. Mutfaginizin vazgecilmezi.',
            price: 185,
            originalPrice: 220,
            image: 'https://www.nestlegoodnes.com/ph/sites/default/files/styles/3_2_1920px_width/public/2024-04/The%20Pistachio%20Sho.jpeg.webp?itok=NZB_g9nQ',
            category: 'fistik',
            stock: 150,
            rating: 4.8,
            reviews: 234,
            featured: true,
        },
        {
            id: '2',
            name: 'Organik Badem',
            description: 'Dogal ve organik yetistirilen saglikli bademler. Protein deposu.',
            price: 165,
            image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=600',
            category: 'badem',
            stock: 200,
            rating: 4.9,
            reviews: 189,
            featured: true,
        },
        {
            id: '3',
            name: 'Hindistan Cevizi',
            description: 'Bol miktarda ceviz ici, taze ve lezzetli.',
            price: 145,
            originalPrice: 175,
            image: 'https://www.birbes.com/wp-content/uploads/2018/07/Hindistan-Cevizi-Nedir-Faydalar%C4%B1-Ve-Zararlar%C4%B1-Nelerdir-750x375.jpg',
            category: 'ceviz',
            stock: 180,
            rating: 4.7,
            reviews: 156,
        },
        {
            id: '4',
            name: 'Karadut Pekmezi',
            description: 'Geleneksel yontemle uretilen, organik karadut pekmezi.',
            price: 95,
            image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600',
            category: 'pekmez',
            stock: 85,
            rating: 4.6,
            reviews: 98,
            isNew: true,
        },
        {
            id: '5',
            name: 'Findik Ezmesi',
            description: '%100 dogal findik, sekersiz ve katkisiz.',
            price: 125,
            image: 'https://www.hacibabakuruyemis.com/cdn/shop/articles/sekersiz-fistik-ezmesi.jpg?v=1564732191&width=1000',
            category: 'findik',
            stock: 120,
            rating: 4.8,
            reviews: 267,
            featured: true,
        },
        {
            id: '6',
            name: 'Kaju Cevizi',
            description: 'Taze kavrulmus, çitir kaju cevizleri.',
            price: 195,
            originalPrice: 230,
            image: 'https://narayanjigajakwale.in/cdn/shop/files/Cashwe-180-No.jpg?v=1727454538',
            category: 'kaju',
            stock: 95,
            rating: 4.5,
            reviews: 78,
        },
        {
            id: '7',
            name: 'Susam Helvasi',
            description: 'Geleneksel tarifle yapilan, yumusak dokulu helva.',
            price: 75,
            image: 'https://i.lezzet.com.tr/images-xxlarge-recipe/susam_helvasi-40ea2654-3300-4bff-b31f-f2ba4fd287c2.jpg',
            category: 'helva',
            stock: 200,
            rating: 4.7,
            reviews: 145,
        },
        {
            id: '8',
            name: 'Leblebi',
            description: 'Samsun leblebisi, hafif tuzlu ve çitir.',
            price: 45,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Leblebi.jpg/330px-Leblebi.jpg',
            category: 'leblebi',
            stock: 300,
            rating: 4.4,
            reviews: 89,
            isNew: true,
        },
    ];
}

function getMockCategories(): Category[] {
    return [
        { id: '1', name: 'Fistik', slug: 'fistik', image: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=300', productCount: 12 },
        { id: '2', name: 'Badem', slug: 'badem', image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=300', productCount: 8 },
        { id: '3', name: 'Ceviz', slug: 'ceviz', image: 'https://images.unsplash.com/photo-1563412885-bb328049c37a?w=300', productCount: 15 },
        { id: '4', name: 'Pekmez', slug: 'pekmez', image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=300', productCount: 6 },
        { id: '5', name: 'Findik', slug: 'findik', image: 'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=300', productCount: 10 },
        { id: '6', name: 'Helva', slug: 'helva', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300', productCount: 5 },
    ];
}