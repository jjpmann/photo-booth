require('dotenv').load();

var HipChatNotify = require('hipchat-notify');
var hipchat = new HipChatNotify(process.env.HIPCHAT_ROOM, process.env.HIPCHAT_TOKEN);



hipchat.info('Pastry I love cupcake fruitcake <strong>chocolate cake</strong> gummi bears dragée I love.'); // gray
hipchat.warning('<i><b>Warning</b>: Cupcake powder lollipop bonbon liquorice croissant sweet.</i>'); // red
hipchat.success('Tiramisu jelly gummies bear claw brownie caramels applicake chocolate bar I love.'); // green
hipchat.error('<b>Error</b>: Marshmallow cheesecake chocolate topping chocolate cake I love ice cream.'); // red

console.log( 'done' );