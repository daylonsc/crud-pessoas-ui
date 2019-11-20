import {Component, OnInit} from '@angular/core';
import {PessoaService} from '../core/services/pessoa.service';
import {Pessoa} from '../core/models/pessoa.model';
import {formatDateToBr, formatDateToUsa, replaceCpfCnpj} from '../core/utils/utils';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  displayDialog: boolean;
  pessoa: Pessoa;
  pessoaSelecionada: Pessoa;
  novaPessoa: boolean;
  pessoas: Pessoa[];
  cols: any[];

  constructor(private pessoaService: PessoaService) {
  }

  ngOnInit() {

    this.getPessoas();

    this.cols = [
      {field: 'nome', header: 'Nome'},
      {field: 'dataNascimento', header: 'Data de nascimento'},
      {field: 'rg', header: 'RG'},
      {field: 'cpf', header: 'CPF'},
    ];
  }

  getPessoas() {
    this.pessoaService.getTodasPessoas().subscribe(result => {
      this.pessoas = result;
    });
  }

  showDialogToAdd() {
    this.novaPessoa = true;
    this.pessoa = new Pessoa();
    this.displayDialog = true;
  }

  save() {
    const pessoas = [...this.pessoas];
    this.pessoa.dataNascimento = formatDateToUsa(this.pessoa.dataNascimentoStr);
    if (this.novaPessoa) {
      this.pessoa.cpf = replaceCpfCnpj(this.pessoa.cpf);
      this.pessoaService.adicionar(this.pessoa).subscribe(result => {
        pessoas.push(this.pessoa);
        this.afterSave(pessoas);
      });
    } else {
      this.pessoaService.Atualizar(this.pessoa).subscribe(result => {
        pessoas[this.pessoas.indexOf(this.pessoaSelecionada)] = this.pessoa;
        this.afterSave(pessoas);
      });
    }
  }

  afterSave(pessoas: Pessoa[]) {
    this.pessoas = pessoas;
    this.pessoa = null;
    this.displayDialog = false;
  }

  delete() {
    const index = this.pessoas.indexOf(this.pessoaSelecionada);
    this.pessoas = this.pessoas.filter((val, i) => i !== index);

    this.pessoaService.deletar(this.pessoaSelecionada.id, this.pessoaSelecionada).subscribe(result => {
      this.pessoa = null;
      this.displayDialog = false;
    });
  }

  onRowSelect(event) {
    this.novaPessoa = false;
    this.pessoa = this.clonePessoa(event.data);
    this.pessoa.dataNascimentoStr = formatDateToBr(this.pessoa.dataNascimento);
    this.displayDialog = true;
  }

  clonePessoa(c: Pessoa): Pessoa {
    const pessoa = new Pessoa();
    // tslint:disable-next-line:forin
    for (const prop in c) {
      pessoa[prop] = c[prop];
    }
    return pessoa;
  }

}
