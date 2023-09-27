class Pessoa {
    constructor(nome) {
      this.nome = nome;
    }
  }
  
  class Funcionario extends Pessoa {
    constructor(nome, cargo, salario) {
      super(nome);
      this.cargo = cargo;
      this._salario = salario;
    }
  
    get salario() {
      return this._salario;
    }
  
    set salario(valor) {
      if (typeof valor === 'number') {
        this._salario = valor;
      }
    }
  
    aumento() {
      // Aumento salarial 
      throw new Error("Forma de aumento.");
    }
  
    dizCargo() {
      console.log(this.cargo);
    }
  }
  
  class Analista extends Funcionario {
    constructor(nome) {
      super(nome, "Analista de Dados", 4000);
    }
  
    aumento() {
      this.salario *= 1.1; // Aumento de 10%
    }
  }
  
  class Designer extends Funcionario {
    constructor(nome) {
      super(nome, "Designer Gráfico", 3600);
    }
  
    aumento() {
      this.salario *= 1.10; // Aumento de 10%
    }
  }
  
  class GerenteDeProjetos extends Funcionario {
    constructor(nome) {
      super(nome, "Gerente de Projetos", 9000);
    }
  
    aumento() {
      this.salario *= 1.15; // Aumento de 15%
    }
  }
  
  // Função para formatar um número sem casas decimais
  function formatarNumero(numero) {
    return numero.toFixed(0);
  }
  
  // Criando instâncias de objetos
  const analista1 = new Analista("Maria");
  const designer1 = new Designer("Pedro");
  const gerente1 = new GerenteDeProjetos("Paula");
  
  analista1.aumento();
  console.log(analista1.nome, analista1.cargo, formatarNumero(analista1.salario));
  
  designer1.aumento();
  console.log(designer1.nome, designer1.cargo, formatarNumero(designer1.salario));
  
  gerente1.aumento();
  console.log(gerente1.nome, gerente1.cargo, formatarNumero(gerente1.salario));
