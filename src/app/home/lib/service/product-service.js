export const ProductService = {
    getProductsData() {
        return [
            {
                id: '1',
                name: 'Lower Lake',
                description: 'Lower Lake in Bhopal, India, known as "Chhota Talaab" locally, is one of the two major lakes in the city, the other being Upper Lake ("Bada Talaab")',
                image: 'https://luxury-panda.static.domains/img-1.jpeg'
            },
            {
                id: '2',
                name: 'Agra Fort',
                description: 'The Agra Fort, also known as the Red Fort of Agra, is a UNESCO World Heritage Site situated in the city of Agra, Uttar Pradesh, India.',
                image: 'https://luxury-panda.static.domains/img-2.jpeg'
            },
            {
                id: '3',
                name: 'Khatlapura Lake',
                description: 'Khatlapura Lake, also known as Khatlapura Scenic Lake Point, is a picturesque water body situated in Bhopal, Madhya Pradesh, India.',
                image: 'https://luxury-panda.static.domains/img-3.jpeg'
            },
            {
                id: '4',
                name: 'Lotus Temple',
                description: "The Lotus Temple, located in New Delhi, India, is a renowned architectural marvel and an iconic symbol of the Bahá'í Faith.",
                image: 'https://luxury-panda.static.domains/img-4.jpeg'
            },
            {
                id: '5',
                name: 'Taj Mahal',
                description: 'The Taj Mahal, a UNESCO World Heritage Site, is an iconic symbol of love and one of the most renowned architectural wonders globally.',
                image: 'https://luxury-panda.static.domains/img-5.jpeg'
            },
            {
                id: '6',
                name: 'Karishma Garden',
                description: 'Karishma Garden, located in Bhopal, Madhya Pradesh, is a scenic public park known for its lush greenery, recreational facilities, and serene ambiance.',
                image: 'https://luxury-panda.static.domains/img-6.jpeg'
            },
            {
                id: '7',
                name: 'The Konark Sun Temple',
                description: "The Konark Sun Temple, a UNESCO World Heritage Site, is an architectural marvel and one of India's most iconic temples.",
                image: 'https://luxury-panda.static.domains/img-7.jpeg'
            },
            {
                id: '8',
                name: 'The India Gate',
                description: 'The India Gate, a prominent landmark in New Delhi, stands as a symbol of national pride, patriotism, and sacrifice.',
                image: 'https://luxury-panda.static.domains/img-8.jpeg'
            }
        ];
    },

    getProductsSmall() {
        return this.getProductsData().slice(0, 10);
    }
}

