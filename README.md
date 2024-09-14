# Memoteca

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Aqui está um resumo da estrutura do projeto Angular com foco nos principais arquivos e sua função:

### 1. **Principais Arquivos e Diretórios:**

- **`node_modules/`**: Contém todas as dependências do projeto, incluindo as de produção e desenvolvimento. Isso é gerado automaticamente ao rodar `npm install`.
- **`angular.json`**: Arquivo de configuração do Angular CLI. Define as configurações para construção, desenvolvimento, testes, entre outros. Nele, você pode configurar estilos globais, scripts, e outras propriedades específicas do build.

  - **`styles.css`**: Este é o arquivo de estilo global que afeta toda a aplicação. No entanto, cada componente pode ter seu próprio arquivo de estilo local que é aplicado apenas ao escopo daquele componente.

- **`polyfills.ts`**: Suporta funcionalidades em navegadores mais antigos, como o IE11, que não têm suporte nativo para algumas APIs modernas do JavaScript. É usado para garantir que sua aplicação funcione corretamente em uma variedade de navegadores.

- **`environments/`**: Contém os arquivos de configuração de ambiente:

  - **`environment.ts`**: Definições de variáveis de ambiente para desenvolvimento.
  - **`environment.prod.ts`**: Definições de variáveis de ambiente para produção.

- **`assets/`**: Usado para armazenar arquivos estáticos, como imagens, ícones, ou outros recursos que a aplicação precisa carregar.

- **`src/app/`**: Diretório principal da aplicação onde estão os componentes e a lógica do aplicativo.

  - **`app.component.ts`**: Arquivo principal do primeiro componente da aplicação. Contém o código TypeScript que define o comportamento do componente. O decorator `@Component` indica que esta classe é um componente Angular e define seu seletor, template e estilos.

    Exemplo:

    ```typescript
    import { Component } from "@angular/core";

    @Component({
      selector: "app-root",
      templateUrl: "./app.component.html",
      styleUrls: ["./app.component.css"],
    })
    export class AppComponent {
      title = "memoteca";
    }
    ```

  - **`app-routing.module.ts`**: Arquivo onde as rotas da aplicação são configuradas. Ele importa e exporta o `RouterModule` para gerenciar a navegação entre diferentes componentes da aplicação.

    Exemplo:

    ```typescript
    import { NgModule } from "@angular/core";
    import { RouterModule, Routes } from "@angular/router";

    const routes: Routes = [];

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule],
    })
    export class AppRoutingModule {}
    ```

  - **`app.module.ts`**: O módulo raiz da aplicação. Ele organiza a aplicação e seus componentes, declara dependências externas (como o `BrowserModule`), e inicializa a aplicação com o componente principal `AppComponent`.

    Exemplo:

    ```typescript
    import { NgModule } from "@angular/core";
    import { BrowserModule } from "@angular/platform-browser";
    import { AppRoutingModule } from "./app-routing.module";
    import { AppComponent } from "./app.component";

    @NgModule({
      declarations: [AppComponent],
      imports: [BrowserModule, AppRoutingModule],
      providers: [],
      bootstrap: [AppComponent],
    })
    export class AppModule {}
    ```

### 2. **Componentes:**

Cada componente Angular geralmente segue a mesma estrutura, contendo os seguintes arquivos:

- **`.ts`**: O arquivo TypeScript que define a lógica e comportamento do componente.
- **`.html`**: Template HTML que define o layout e estrutura visual do componente.
- **`.css` (ou `.scss`)**: Arquivo de estilo específico para aquele componente.
- **`.spec.ts`**: Arquivo de testes unitários para aquele componente.

### 3. **Dependências de Produção vs Desenvolvimento:**

- **Dependências de Produção**: São bibliotecas e pacotes necessários para o aplicativo funcionar em um ambiente de produção, por exemplo, o próprio Angular.
- **Dependências de Desenvolvimento**: Ferramentas que ajudam no desenvolvimento, mas não são necessárias em produção, como pacotes para testes, linters, e TypeScript.

### 4. **Como isso se conecta:**

- O `AppComponent` é o ponto de entrada da aplicação, exibido assim que o aplicativo é carregado.
- O **`AppModule`** gerencia a configuração da aplicação, declarando componentes e serviços necessários.
- O **`AppRoutingModule`** gerencia a navegação entre as diferentes páginas da aplicação.

Se precisar de mais detalhes sobre algum ponto ou tiver dúvidas sobre algum aspecto específico, me avise!

## Como crio um componente ?

```bash
ng generate component "nome"

```

ou

```bash
ng g c "nome"
```

Também é possível criar passando o caminho
