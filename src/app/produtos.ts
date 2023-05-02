export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    {
        id: 1,
        descricao: 'Mouse gamer',
        preco: 439.0,
        descricaoPreco: 'À vista no PIX',
        quantidadeEstoque: 10,
        imagem: './assets/mouse-3.jpg',
    },
    {
        id: 2,
        descricao: 'Monitor Apple',
        preco: 1200.5,
        descricaoPreco: 'À vista no PIX',
        quantidadeEstoque: 11,
        imagem: './assets/monitor-1.jpg',
    },
    {
        id: 3,
        descricao: 'Teclado Sem Fio',
        preco: 749.99,
        descricaoPreco: 'À vista no PIX',
        quantidadeEstoque: 12,
        imagem: './assets/teclado-1.jpg',
    },
    {
        id: 4,
        descricao: 'Fone Gamer',
        preco: 599.99,
        descricaoPreco: 'À vista no PIX',
        quantidadeEstoque: 13,
        imagem: './assets/fone-de-ouvido-2.jpg',
    },
    {
        id: 5,
        descricao: 'Fone de ouvido Bluetooth',
        preco: 299.99,
        descricaoPreco: 'À vista no PIX',
        quantidadeEstoque: 14,
        imagem: './assets/fone-de-ouvido-1.jpg',
    },
    {
        id: 6,
        descricao: 'Fone de ouvido Phillips',
        preco: 399.99,
        descricaoPreco: 'À vista no PIX',
        quantidadeEstoque: 15,
        imagem: './assets/fone-de-ouvido-3.jpg',
    },
    {
        id: 7,
        descricao: 'HD 1TB',
        preco: 499.99,
        descricaoPreco: 'À vista no PIX',
        quantidadeEstoque: 16,
        imagem: './assets/hd.jpg',
    },
    {
        id: 8,
        descricao: 'Combo de placa de vídeos',
        preco: 18449.99,
        descricaoPreco: 'À vista no PIX',
        quantidadeEstoque: 17,
        imagem: './assets/placa-video.jpg',
    },
    {
        id: 9,
        descricao: 'Processador Ryzen',
        preco: 1000,
        descricaoPreco: 'À vista no PIX',
        quantidadeEstoque: 18,
        imagem: './assets/processador.jpg',
    },
    {
        id: 10,
        descricao: 'Notebook i3',
        preco: 2500,
        descricaoPreco: 'À vista no PIX',
        quantidadeEstoque: 19,
        imagem: './assets/laptop-1.jpg',
    },
    {
        id: 11,
        descricao: 'Notebook i5',
        preco: 4500,
        descricaoPreco: 'À vista no PIX',
        quantidadeEstoque: 20,
        imagem: './assets/laptop-2.jpg',
    },
    {
        id: 12,
        descricao: 'Mouse Multilaser',
        preco: 20,
        descricaoPreco: 'À vista no PIX',
        quantidadeEstoque: 21,
        imagem: './assets/mouse-1.png',
    },
    {
        id: 13,
        descricao: 'Mouse Logitech',
        preco: 200,
        descricaoPreco: 'À vista no PIX',
        quantidadeEstoque: 22,
        imagem: './assets/mouse-2.jpg',
    },
    {
        id: 14,
        descricao: 'Mouse Sem fio',
        preco: 50,
        descricaoPreco: 'À vista no PIX',
        quantidadeEstoque: 23,
        imagem: './assets/mouse-4.jpg',
    },
    {
        id: 15,
        descricao: 'Teclado Mecânico',
        preco: 159.99,
        descricaoPreco: 'À vista no PIX',
        quantidadeEstoque: 24,
        imagem: './assets/teclado-2.jpg',
    },
];
