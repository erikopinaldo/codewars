// Grab CSV Columns
// https://www.codewars.com/kata/5276c0f3f4bfbd5aae0001ad/train/javascript

function csvColumns(csv, indices) {
    let matrix = csv.split("\n").map(element => element.split(","))

    return matrix.map(row => row.filter((cell, index) => indices.includes(index)).join(","))
                    .filter(substring => substring !== "")
                    .join("\n")
}