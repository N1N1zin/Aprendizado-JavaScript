var agora = new Date()
var DSem = agora.getDay()
/*
    0 == domingo
    1 == segunda
    2 == terça
    3 == quarta
    4 == quinta
    5 == sexta
    6 == sabado
*/

switch(DSem){
    case 0:
        console.log('É Domingo')
        break
    case 1:
        console.log('É Segunda-feira')
        break
    case 2:
        console.log('É Terça-feira')
        break
    case 3:
        console.log('É Quarta-feira')
        break
    case 4:
        console.log('É Quinta-feira')
        break
    case 5: 
        console.log('É Sexta-feira')
        break
    case 6:
        console.log('É Sábado')
        break
    default:
        console.log('[ERROR] dia inválido')
        break
}