export const ProductService = {
    getProductsData() {
        return [
            {
                id: '1',
                name: 'Lower Lake',
                description: 'img1',
                image: '/images/img-1.jpeg'
            },
            {
                id: '2',
                name: 'Agra Fort',
                description: 'img2',
                image: '/images/img-2.jpeg'
            },
            {
                id: '3',
                name: 'Khatlapura Lake',
                description: 'img3',
                image: '/images/img-3.jpeg'
            },
            {
                id: '4',
                name: 'Lotus Temple',
                description: "img4",
                image: '/images/img-4.jpeg'
            },
            {
                id: '5',
                name: 'Taj Mahal',
                description: 'img5',
                image: '/images/img-5.jpeg'
            },
            {
                id: '6',
                name: 'Karishma Garden',
                description: 'img6',
                image: '/images/img-6.jpeg'
            },
            {
                id: '7',
                name: 'The Konark Sun Temple',
                description: "img7",
                image: '/images/img-7.jpeg'
            },
            {
                id: '8',
                name: 'The India Gate',
                description: 'img8',
                image: '/images/img-8.jpeg'
            }
        ];
    },

    getProductsSmall() {
        return this.getProductsData().slice(0, 10);
    }
}

