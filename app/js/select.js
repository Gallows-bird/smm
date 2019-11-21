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

		$('#orderForm').attr('onsubmit', 'newOrder()');
	} else if (label == 2) {
		document.getElementById('linksDiv').style.display = 'block';
		document.getElementById('linkDiv').style.display = 'none';

		$('#orderForm').attr('onsubmit', 'newMassOrderMin()');
	}
}

function checkID() {
	var soc = document.getElementsByName('soc')[0].value;

	if (soc == "instagram") {
		var sum = +typeSel1.options[typeSel1.selectedIndex].getAttribute('id') + +typeSel2.options[typeSel2.selectedIndex].getAttribute('id') + +typeSel3.options[typeSel3.selectedIndex].getAttribute('id');
		var sumlog = +typeSel1.options[typeSel1.selectedIndex].getAttribute('class') + +typeSel2.options[typeSel2.selectedIndex].getAttribute('class') + +typeSel3.options[typeSel3.selectedIndex].getAttribute('class');

	}
	idDescription(sum, sumlog);
}

function idDescription(sum, sumlog) {
	var soc = document.getElementsByName('soc')[0].value;
	document.getElementById('sel_value_log').value = sumlog;
	var dminTotal = $('.dmin');

	if (sum >= 1 && sum <= 100) {
		for (i = 1; i <= dminTotal.length - 1; i++) {
			var idDescMin = 'dmin' + i;
			var idDesc = 'd' + i;
			document.getElementById(idDescMin).style.display = 'none';
			document.getElementById(idDesc).style.display = 'none';

		}
		var idDescMin = 'dmin' + sum;
		var idDesc = 'd' + sum;
		document.getElementById(idDescMin).style.display = 'block';
		document.getElementById('dmin0').style.display = 'none';
		document.getElementById(idDesc).style.display = 'block';
		document.getElementById('d0').style.display = 'none';
		document.getElementById('sel_value').value = sum;
	} else {
		for (i = 1; i <= dminTotal.length - 1; i++) {
			var idDescMin = 'dmin' + i;
			document.getElementById(idDescMin).style.display = 'none';
			document.getElementById(idDesc).style.display = 'none';
			document.getElementById('dmin0').style.display = 'block';
			document.getElementById('d0').style.display = 'block';
			document.getElementById('sel_value').value = 0;
		}
	}

	if (sumlog == 0) {
		document.getElementById('link').placeholder = 'Ссылка на профиль';
	} else if (sumlog == 1) {
		document.getElementById('link').placeholder = 'Ссылка на публикацию';
	} else if (sumlog == 2) {
		document.getElementById('link').placeholder = 'Ссылка на публикацию';
	}
}

function checkPrice() {
	var soc = document.getElementsByName('soc')[0].value;

	var sel1 = document.getElementById('typeSel1');
	var val1 = sel1.options[sel1.selectedIndex].value;

	var sel2 = document.getElementById('typeSel2');
	var val2 = sel2.options[sel2.selectedIndex].value;

	var sel3 = document.getElementById('typeSel3');
	var val3 = sel3.options[sel3.selectedIndex].value;

	var sum = +val1 + +val2 + +val3;

	document.getElementById('sel_cena').value = sum;
}

function viewSum() {
	var strqntspan = 1;

	if (document.getElementById("strqntspan") != null) {
		strqntspan = document.getElementById("strqntspan").value;
		strqntspan = parseInt(strqntspan);
	}

	var qnt = document.getElementById('qnt');
	var cena = document.getElementById('sel_cena');

	var resultTotal = document.getElementById('result');
	var resultView = document.getElementById("resultview");

	var price = parseInt(qnt.value) * cena.value * 0.001 * strqntspan;

	if (isNaN(price)) {
		price = 0;
	}

	resultView.value = price.toFixed(2);
	resultTotal.innerHTML = price.toFixed(2);

}

function strqnt() {
	var ta = document.getElementById('links'),
		text = ta.value,
		lines = text.split(/\n/),
		count = lines.length;
	document.getElementById('strqntspan').value = count;
}