/*FD Calculation*/
function caclulateFD(){
	var P=document.getElementById('principleamount').value;
	var r=document.getElementById('interestrate').value;
	var tt=document.getElementById('tenureType').value;

	if(tt=='m')
		var t=document.getElementById('tenure').value/12;
	else
		var t=document.getElementById('tenure').value;

	var n=document.getElementById('frequency').value;
	var amount= P*Math.pow(1+((r/100)/n),n*t);
	amount=Math.round(amount);
	var interest=amount-P;
	document.getElementById('result').hidden=false;
	document.getElementById('result').innerHTML="<table><tr><td>Maturity Amount</td><td>: Rs. "+ amount.toLocaleString('en-IN')+"</td></tr><tr><td>Total Interest Earned</td><td>: Rs. "+ interest.toLocaleString('en-IN')+"</td></tr></table>";
}

/*RD Calculation*/
function caclulateRD(){
	var P=document.getElementById('installment').value;
	var r=document.getElementById('interestrate').value;
	var n=document.getElementById('frequency').value;
	var t=(document.getElementById('durationY').value*12)+parseInt(document.getElementById('durationM').value);
	
	var amount=0;
	 for (var i = t; i>=1; i--){
		 amount=amount + P*Math.pow(1+((r/100)/n),n*i/12);
     }

	amount=Math.round(amount);
	var interest=amount-(P*t);
	
	document.getElementById('rdresult').hidden=false;
	document.getElementById('rdresult').innerHTML="<table><tr><td>Maturity Amount</td><td>: Rs. "+ amount.toLocaleString('en-IN')+"</td></tr><tr><td>Total Interest Earned</td><td>: Rs. "+ interest.toLocaleString('en-IN')+"</td></tr></table>";
}

function toINR(money){
	var x= document.getElementById(money);
	var amount=parseInt(x.value);
	if(!Number.isNaN(amount))
	 x.value=amount.toLocaleString('en-IN');
}

function clearForm(id){
	document.getElementById(id).hidden="hidden";
}