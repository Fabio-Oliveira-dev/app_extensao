# App Para Orçamento De Serralheria

## Levantamento de requisitos
### Requisitos versão 1.0
- 1° tela, tela inicial
1 - O usuário deverá informar o nome da sua empresa;
- 2.	O usuário deverá informar o tipo de obra;
- 3.	O usuário deverá informar o nome da pessoa/empresa que será o orçamento;
- 4.	Deverá ter um botão para escolha dos materiais onde o usuário poderá colocar cada tipo de material que será usado, o valor do material e as medidas de cada material e os usuários poderão colocar quantos materiais eles quiserem;
- 5.	Deverá ter um botão para a escolha dos custos da obra, e esses custos não deverão ir para o orçamento final do cliente;
- 6.	Deverá ter um botão para o usuário colocar o valor da mão de obra e esse valor deverá ser somado ao valor dos materiais e custos adicionais;
- 7.	Deverá ter um botão para o usuário colocar o prazo de entrega da obra;
- 8.	Deverá ter um botão de salvar o orçamento onde será mostrado o nome da empresa que fez o orçamento, o nome do cliente que receberá o valor total do orçamento com a margem de lucro em real e porcentagem (não deverá ser mostrado no orçamento que irá para o cliente) e prazo de entrega da obra e com a data e a hora que o atual orçamento foi feito;
- 9.	Após o orçamento salvo, o usuário poderá enviar o orçamento por um botão de compartilhar para o whatsapp do cliente;
- 10.	Os orçamentos salvos deverão estar disponíveis em uma aba orçamentos;
- 11.	O usuário poderá fazer o download do orçamento na aba orçamentos;

## Requisitos Funcionais
- 1° tela, tela de inicio
1.	O sistema deve permitir que o usuário informe o nome da sua empresa.
2.	O sistema deve permitir que o usuário informe o tipo de obra.
3.	O sistema deve permitir que o usuário informe o nome da pessoa ou empresa para quem será feito o orçamento.
4.	O sistema deve ter um botão que permita ao usuário adicionar materiais, informando o tipo, valor e medidas, sem limite de quantidade.
5.	O sistema deve ter um botão para adicionar custos da obra, que não serão incluídos no orçamento final do cliente.
6.	O sistema deve ter um botão para adicionar o valor da mão de obra, que será somado ao valor dos materiais e custos adicionais.
7.	O sistema deve ter um botão para definir o prazo de entrega da obra.
8.	O sistema deve ter um botão de salvar o orçamento, exibindo os detalhes da empresa, cliente, valor total com margem de lucro oculta para o cliente, prazo de entrega e data/hora do orçamento.
9.	O sistema deve permitir que, após salvar o orçamento, o usuário compartilhe o orçamento pelo WhatsApp.
10.	O sistema deve exibir os orçamentos salvos em uma aba específica chamada "Orçamentos".
11.	O sistema deve permitir que o usuário faça o download do orçamento salvo na aba "Orçamentos".

## Requisitos Não Funcionais
- 1° tela, tela de inicio
1.	O nome da empresa deve ser armazenado de forma persistente para não ser reescrito a cada novo orçamento.
2.	O sistema deve ter uma interface intuitiva para facilitar a inserção do tipo de obra.
3.	O nome do cliente ou empresa deve ser armazenado corretamente para evitar erros de exibição.
4.	O sistema deve permitir a inserção rápida e dinâmica dos materiais, sem travamentos ou lentidão.
5.	Os custos adicionais devem ser armazenados separadamente para garantir que não sejam somados ao orçamento final do cliente.
6.	A interface deve calcular automaticamente o valor final do orçamento com a soma dos custos de materiais e mão de obra.
7.	O sistema deve armazenar e exibir corretamente o prazo de entrega da obra.
8.	O orçamento salvo deve ser armazenado localmente e/ou em nuvem para evitar perda de dados.
9.	O compartilhamento do orçamento via WhatsApp deve ser feito de maneira eficiente, garantindo compatibilidade com diferentes versões do aplicativo.
10.	O sistema deve exibir os orçamentos salvos em uma aba organizada, permitindo a busca e ordenação.
11.	O download do orçamento deve ser gerado em um formato de fácil leitura, como PDF.

## Requisitos de domínio
- 1° tela, tela de inicio
1.	O nome da empresa informada será usado em todos os orçamentos gerados.
2.	O tipo de obra informado ajudará a categorizar o orçamento.
3.	O orçamento será gerado com os dados do cliente para identificação futura.
4.	Os materiais devem ter valores e medidas especificadas corretamente para cálculos precisos.
5.	Os custos adicionais devem ser separados dos valores apresentados ao cliente.
6.	O valor da mão de obra deve ser somado ao total do orçamento.
7.	O prazo de entrega deve ser definido antes da finalização do orçamento.
8.	O orçamento salvo deve conter o valor total, margem de lucro oculta para o cliente e data/hora de criação.
9.	O compartilhamento deve ser possível apenas após salvar o orçamento.
10.	Os orçamentos salvos devem estar acessíveis para visualização, edição ou exclusão futura.
11.	O orçamento baixado deve manter o mesmo formato do orçamento compartilhado.
