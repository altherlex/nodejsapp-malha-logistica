# Malha-Logistica

Serviço que provê a melhor e mais barata rota para a sua logística.

[https://malha-logistica.herokuapp.com](https://malha-logistica.herokuapp.com)

## Como usar webservice para calculo:
Ordem de parametros: 
```
/:map_id/:begin_point/:end_point/:autonomy/:price
```

```
$ curl -XGET "https://malha-logistica.herokuapp.com/figure/Sampa/A/D/10/2.json"

{"points":["A","B","D"],"cost":5.0,"distance":25.0}

ou 

$ curl -XGET "https://malha-logistica.herokuapp.com/figure?map_id=Sampa&begin_p
oint=A&end_point=D&autonomy=10&price=2.5&format=json"

{"points":["A","B","D"],"cost":6.25,"distance":25.0}
```

## Executando testes de unidade

```
rspec
```

## Análise

Arquiteturado em padrão RESTFul por ser de fácil chamada por outros sistemas.

## Modo#1: Tradional
* sqlite3 e pg

obs: Não implementado exceções (entrada de dados)

## Modo#2: Elasticsearch (TODO)

* Implementar com Elasticsearch (Lucene): inserção via RESTFul e análise da rota com ruby
* Comparar a performance com Benchmark


### Desafio

> Desenvolvedor Ruby Rails
>
>Entregando mercadorias
>
>O Walmart esta desenvolvendo um novo sistema de logística e sua ajuda é muito importante neste momento. Sua tarefa será desenvolver o novo sistema de entregas visando sempre o menor custo. Para popular sua base de dados o sistema precisa expor um Webservices que aceite o formato de malha logística (exemplo abaixo), nesta mesma requisição o requisitante deverá informar um nome para este mapa. É importante que os mapas sejam persistidos para evitar que a cada novo deploy todas as informações desapareçam. O formato de malha logística é bastante simples, cada linha mostra uma rota: ponto de origem, ponto de destino e distância entre os pontos em quilômetros.
>
>
>A B 10
>
>B D 15
>
>A C 20
>
>C D 30
>
>B E 50
>
>D E 30
>
>
>Com os mapas carregados o requisitante irá procurar o menor valor de entrega e seu caminho, para isso ele passará o mapa, nome do ponto de origem, nome do ponto de destino, autonomia do caminhão (km/l) e o valor do litro do combustivel, agora sua tarefa é criar este Webservices. Um exemplo de entrada seria, mapa SP, origem A, destino D, autonomia 10, valor do litro 2,50; a resposta seria a rota A B D com custo de 6,25.
>
>Você está livre para definir a melhor arquitetura e tecnologias para solucionar este desafio, mas não se esqueça de contar sua motivação no arquivo README que deve acompanhar sua solução, junto com os detalhes de como executar seu programa. Documentação e testes serão avaliados também =) Lembre-se de que iremos executar seu código com malhas bem mais complexas, por isso é importante pensar em requisitos não funcionais também!!
>
>Também gostaríamos de acompanhar o desenvolvimento da sua aplicação através do código fonte. Por isso, solicitamos a criação de um repositório que seja compartilhado com a gente. Para o desenvolvimento desse sistema, nós solicitamos que você utilize a sua (ou as suas) linguagem de programação principal. Pode ser Java, JavaScript ou Ruby.
>
>Nós solicitamos que você trabalhe no desenvolvimento desse sistema sozinho e não divulgue a solução desse problema pela internet. O prazo máximo para entrega é dia 02/04.
>
>Bom desafio!