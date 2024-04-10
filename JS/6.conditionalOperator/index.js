// if (a == 0) {
//   console.log( 0 );
// }
// if (a == 1) {
//   console.log( 1 );
// }

// if (a == 2 || a == 3) {
//   console.log( '2,3' );
// }

// Switch
let key = 100;
switch (key) {
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
    case 3:
        console.log('2,3');
    default:
        console.log('I dont know');
        break;
}