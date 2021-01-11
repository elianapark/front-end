function rollTwenty() {
    return Math.ceil(Math.random() * 20)
}

$('#roller').click(function(){
    $(this).text( rollTwenty() );
});

function statsTilDubs() {
    var min = 21
    var max = 0
    var sum = 0
    var prev = 21
    var curr = 0
    var rollsArr = []
    var output = ``
    var stats = ``

    while (prev != curr) {
        prev = curr
        curr = rollTwenty()
        rollsArr.push(curr)
        output += `<div class="dice sm">${curr}</div>`
        if (curr < min) {
            min = curr
        }
        if (curr > max) {
            max = curr
        }
        sum += curr
    }

    var avg = Math.round(sum / rollsArr.length)

    stats += `<div class="stat"><h3>Min:</h3><div class="dice sm">${min}</div></div>`
    stats += `<div class="stat"><h3>Max:</h3><div class="dice sm">${max}</div></div>`
    stats += `<div class="stat"><h3>Avg:</h3><div class="dice sm">${avg}</div></div>`
    stats += `<div class="stat"><h3>Num rolls:</h3><div class="dice sm">${rollsArr.length}</div></div>`
    
    $('#rolls').html(output)
    $('#stats').html(stats)
}

$("button").click(function(){
    statsTilDubs()
})