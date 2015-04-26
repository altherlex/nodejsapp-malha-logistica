# Teste de performance RubyOnRails vc NodeJS

https://gist.github.com/altherlex/60d880db939b9b0e6d85

## Malha-Logistica
Serviço que provê a melhor e mais barata rota para a sua logística.

[https://nodejsapp-malha-logistica.herokuapp.com](https://nodejsapp-malha-logistica.herokuapp.com)

## Como usar webservice para calculo:
Ordem de parametros: 
```
/:map_id/:begin_point/:end_point/:autonomy/:price
```

```
$ curl -XGET "https://nodejsapp-malha-logistica.herokuapp.com/figure/Sampa/A/D/10/2.json"

{"points":["A","B","D"],"cost":5.0,"distance":25.0}

ou 

$ curl -XGET "https://nodejsapp-malha-logistica.herokuapp.com/figure?map_id=Sampa&begin_p
oint=A&end_point=D&autonomy=10&price=2.5&format=json"

{"points":["A","B","D"],"cost":6.25,"distance":25.0}
```

## Executando testes de unidade (jasmine-npm)

```
jasmine
```
