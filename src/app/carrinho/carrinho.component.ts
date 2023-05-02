import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';
import { Router } from '@angular/router';

@Component({
    selector: 'app-carrinho',
    templateUrl: './carrinho.component.html',
    styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent {
    itensCarrinho: IProdutoCarrinho[] = [];
    total: number = 0;

    constructor(
        public carrinhoService: CarrinhoService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.itensCarrinho = this.carrinhoService.obtemCarrinho();
        this.calcularTotal();
    }

    calcularTotal() {
        this.total = this.itensCarrinho.reduce(
            (prev, curr) => prev + curr.preco * curr.quantidade,
            0
        );
    }

    removeProdutoCarrinho(idProduto: number): void {
        this.itensCarrinho = this.itensCarrinho.filter(
            (produto) => produto.id !== idProduto
        );
        this.carrinhoService.removerProdutoCarrinho(idProduto);
        this.calcularTotal();
    }

    comprar(): void {
        alert('Parabéns você finalizou a sua compra');
        this.carrinhoService.limparCarrinho();
        this.router.navigate(['produtos']);
    }
}
