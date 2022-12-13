// function Frutas() {
//     const fruit = (a, b, c) => console.log(`${a}, ${b} e ${c}.`);
//         const frutas = ["🥑", "🍌", "🥥"];
//         fruit(...frutas);

//     return fruit
// }

function Frutas() {
    const frutas = ["🥑", "🍌", "🥥"];
    const arrayNovo = console.log(["🥝", ...frutas, "🍓"]);

    return arrayNovo
}

export default Frutas;