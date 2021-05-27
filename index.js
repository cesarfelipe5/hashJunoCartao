const { JunoCardHash } = require('juno-nodejs');
const moment = require('moment');

const cardNumber = 4916427570021469;

// 5359991737400750	Cartão restrito.
// 5579006606178504	Cartão inválido.
// 5500497511776173	Falha na operação.


const publicToken = '094E60085360A1C89E9FE06AD92E831F386F29B0E426E4C0EDA5A9A9CEBBA441'; // Token público da api da JUNO
const environment = 'sandbox'; // 'sandbox' || 'production'
const cardData = {
	holderName: "José da Silva",
	cardNumber: cardNumber,
	securityCode: '734',
	expirationMonth: '11',
	expirationYear: '2022',
};

const junoService = new JunoCardHash(publicToken, environment);

junoService.getCardHash(cardData)
	.then(data => console.log(`${data}`)); // Hash