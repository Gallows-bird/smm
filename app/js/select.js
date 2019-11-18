function showHideBlocks(val) {
    var soc = document.getElementsByName('soc')[0].value;

    if (val == 0) {
        document.getElementById('typeSel0').style.display = 'block';
        document.getElementById('typeSel1').style.display = 'none';
        document.getElementById('typeSel2').style.display = 'none';
        document.getElementById('typeSel3').style.display = 'none';
        document.getElementById('checked1').checked = true;
        document.getElementById('linksDiv').style.display = 'none';
        document.getElementById('linkDiv').style.display = 'block';

        $('#forms').attr('onsubmit', 'newOrder()');
    } else if (val == 1) {
        document.getElementById('typeSel0').style.display = 'none';
        document.getElementById('typeSel1').style.display = 'block';
        document.getElementById('typeSel2').style.display = 'none';
        document.getElementById('typeSel3').style.display = 'none';
        document.getElementById('checked1').checked = true;
        document.getElementById('linksDiv').style.display = 'none';
        document.getElementById('linkDiv').style.display = 'block';

        $('#forms').attr('onsubmit', 'newOrder()');
    } else if (val == 2) {
        document.getElementById('typeSel0').style.display = 'none';
        document.getElementById('typeSel1').style.display = 'none';
        document.getElementById('typeSel2').style.display = 'block';
        document.getElementById('typeSel3').style.display = 'none';
        document.getElementById('checked1').checked = true;
        document.getElementById('linksDiv').style.display = 'none';
        document.getElementById('linkDiv').style.display = 'block';

        $('#forms').attr('onsubmit', 'newOrder()');
    } else if (val == 3) {
        document.getElementById('typeSel0').style.display = 'none';
        document.getElementById('typeSel1').style.display = 'none';
        document.getElementById('typeSel2').style.display = 'none';
        document.getElementById('typeSel3').style.display = 'block';
        document.getElementById('checked1').checked = true;
        document.getElementById('linksDiv').style.display = 'none';
        document.getElementById('linkDiv').style.display = 'block';

        $('#forms').attr('onsubmit', 'newOrder()');
    }
}

function selectedMode(val) {
    var soc = document.getElementsByName('soc')[0].value;
    var label = parseInt(val.value);

    if (label == 1) {
        document.getElementById('linksDiv').style.display = 'none';
        document.getElementById('linkDiv').style.display = 'block';

        $('#forms').attr('onsubmit', 'newOrder()');
    } else if (label == 2) {
        document.getElementById('linksDiv').style.display = 'block';
        document.getElementById('linkDiv').style.display = 'none';

        $('#forms').attr('onsubmit', 'newMassOrderMin()');
    }
}

function checkID() {
    var soc = document.getElementsByName('soc')[0].value;

    if (soc == "instagram") {
        var sum = +typeSel1.options[typeSel1.selectedIndex].getAttribute('id') + +typeSel2.options[typeSel2.selectedIndex].getAttribute('id') + +typeSel3.options[typeSel3.selectedIndex].getAttribute('id');
        console.log(sum);
    }
    idDescription(sum);
}

function idDescription(sum) {
    var soc = document.getElementsByName('soc') [0].value;
    if (sum >= 1 && sum <=100) {
        for (i = 1; i <= 100; i++) {
            var idDescMin = 'dmin' + i;
            document.getElementById(idDescMin).style.display = 'none';
        }
        var idDescMin = 'dmin' + sum;
        document.getElementById(idDescMin).style.display = 'block';
        document.getElementById('dmin0').style.display = 'none';
    }
}