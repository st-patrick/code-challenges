let string;
for (let i=0; i<7; i++) {
    string = "";
    for (let j=0; j<15; j++) {
        if ((j < 7-i) || (j > 7+i)) {
            string += " ";
        } else {
            string += "+";
        }
    }
    console.log(string);
}
console.log("      +++      ");
console.log("    ");

let char = "*";
let height = 10;
let part_height = Math.floor(height / 2);
let empty;
for(row = 0; row < part_height; row++) {
    empty = " ".repeat(row);
    string = char.repeat(height - row * 2);
    console.log(empty + string + empty);
};
console.log(" ".repeat(part_height) + "*" + " ".repeat(" "));
for(row = part_height-1; row > -1; row--) {
    empty = " ".repeat(row);
    string = char.repeat(height - row * 2);
    console.log(empty + string + empty);
};

console.log(" ");

let size = 31;
function drawPizzaRow(size, row) {
    if (row == 0) {
        console.log(char.repeat(size));
    } else if(row == Math.ceil(size/2) - 1) {
        console.log(" ".repeat(row) + char.repeat(size - (row * 2)) + " ".repeat(row));
    } else {
        console.log(" ".repeat(row) + char + " ".repeat(size - ((row + 1) * 2)) + char + " ".repeat(row));
    }
};

for (let i=0; i<(Math.ceil(size/2)); i++) {
    drawPizzaRow(size, i);
}

console.log("    /// Diamant ////    ");

diamond_size = 3;
