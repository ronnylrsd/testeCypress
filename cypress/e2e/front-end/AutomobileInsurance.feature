#utf-8
#language: pt

Funcionalidade: tricentis-01 - Automobile Insurance

#    Cenário: 01 Enviar Quote com sucesso
 #       Dado que o usuário acessou o portal Tricentis na categoria Automobile
#        Quando o usuário satisfaz todos os campos obrigatórios
#        E o usuário envia a quote
#        Então o sistema notificará que o e-mail foi enviado com sucesso

#   Cenário: 02 Enviar Quote com sem preencher o último step adequadamente
#        Dado que o usuário acessou o portal Tricentis na categoria Automobile
#        Quando o usuário satisfaz preenche os quatro primeiros passos
#        E não preenche corretamente o último passo
#        E o usuário envia a quote
 #       Então o sistema acusará a necessidade de 'There is still some data missing!'

#    Cenário: 03 Enviar Quote sem preencher nenhum campo
#        Dado que o usuário acessou o portal Tricentis na categoria Automobile
#        Quando o usuário seleciona o 'Send Quote'
#        Então o sistema acusará a necessidade de 'Please, select a price option to send the quote.'

#    Cenário: 04 Selecionar price option sem preencher os 3 primeiros modais
#        Dado que o usuário acessou o portal Tricentis na categoria Automobile
#        Quando o usuário seleciona o 'Select Price Option'
#        Então o sistema acusará a necessidade de 'Please, complete the first three steps to see the price table.'

#    Cenário: 05 Durante o preenchimento dos dados o usário atualiza a página
#        Dado que o usuário acessou o portal Tricentis na categoria Automobile
#        Quando o usuário satisfaz todos os campos obrigatórios
#        E o usuário atualiza a página
#        Então o sistema mostrará o fórmulário vazio

    Cenário: 06 Enviar o mesmo formulário duas vezes
        Dado que o usuário acessou o portal Tricentis na categoria Automobile
        Quando o usuário satisfaz todos os campos obrigatórios com informações já enviadas
        E o usuário envia a quote
        Então o sistema notificará que o e-mail foi reenviado com sucesso

