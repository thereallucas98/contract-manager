# Contract Manager

#### Descrição

Projeto desenvolvido para gerir contratos de diversos clientes.

#### Tecnologias
- Node.js
- React.js
- Typescript
- Typeorm
- Sqlite
- Postgres

#### Instruções

- Para rodar o código, é necessário primeiro escolher em qual banco de dados irá armazenar eles. Pra isso, o código da api já conta com duas dependências do postgres e do sqlite. Na API existe um arquivo chamado **sqlite-orm-config** nele você terá dois objetos **JSON** e escolherá sua database para inserir no arquivo **ormconfig.json**, por padrão foi deixado o sqlite.

- Após decidir qual será seu banco de dados é necessário entrar tanto na pasta **api** quanto na pasta **frontend** e executar individualmente o comando **yarn** ou **yarn install** e ainda na pasta **api** é necessário também executar o comando **yarn typeorm migration:run** para que as tabelas sejam criadas no banco.

- Por fim, para executar o projeto, basta rodar em dois terminais - um para o frontend outro para a api - com os comandos yarn start e yarn dev, respectivamente.

#### Quais são as features existentes?

- É possível cadastrar e logar no sistema;
- É possível cadastrar um cliente ter acesso aos clientes cadastrados na tabela;
- É possível cadastrar um contrato atribuindo a um cliente;
- É possível realizar a filtragem pelo tipo de viabilidade (menor ou maior) e pelo status (aberto até concluído ou cancelado);

#### Quais são os recursos?
- Na página de Dasbhoard haverá alguns dados estatísticos onde ele irá contabilizar o total de contratos existentes com os contratos que vencem até o dia de hoje;
- Na mesma página existe um contabilizador através de cards para contatilizar os contratos que irão vencer em 30, 15, 10 e 4 dias;

#### Quais são os known-issues?
- Atualmente a paginação está com um bug, onde acaba duplicando a próxima página alguns clientes da página anterior;


#### O que existe mas não funciona?
- Edição do perfil todos os campos estão sem suas devidas funcionalidades;
- Inserção de foto no perfil;
- Acessar os contratos a partir das informações dadas no dashboard.