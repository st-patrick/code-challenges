let star = '*'
let space = ' '
let tree = ''
let width = 50
let branch = '|'

for (i = 1; i < width; ++i) {
    let count = width - i
    if (i % 2 == 0) {
        tree = space.repeat(count/2 -1 ) + "/" + star.repeat(i - 1) + "\\" + space.repeat(count/2)
    } else {
        tree = space.repeat(count/2) + star.repeat(i) + space.repeat(count/2)
    }
    
    console.log(tree);
}

branch = space.repeat(width/2 - 2) + branch.repeat(4)

console.log(branch);
