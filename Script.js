/*FD Calculation*/
function calculateFD(){
	var P=document.getElementById('principleamount').value.replace(/,/g, "");
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
function calculateRD(){
	var P=document.getElementById('installment').value.replace(/,/g, "");
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

/*SIP Calculation*/
function calculateSIP(){
	var P=document.getElementById('installment').value.replace(/,/g, "");
	var r=document.getElementById('interestrate').value;
	var n=1;
	var t=(document.getElementById('durationY').value*12)+parseInt(document.getElementById('durationM').value);

	var amount=0;
	 for (var i = t; i>=1; i--){
		 amount=amount + P*Math.pow(1+((r/100)/n),n*i/12);
     }

	amount=Math.round(amount);
	var interest=amount-(P*t);
	
	document.getElementById('sipresult').hidden=false;
	document.getElementById('sipresult').innerHTML="<table><tr><td>Maturity Amount</td><td>: Rs. "+ amount.toLocaleString('en-IN')+"</td></tr><tr><td>Total Interest Earned</td><td>: Rs. "+ interest.toLocaleString('en-IN')+"</td></tr></table>";
}

function changeAmount(money,val){
	var x= document.getElementById(money);
	console.log(x.value);
	var amount=parseInt(x.value.replace(/,/g, ""));
	console.log(amount);
	console.log(wDelta);

	if(!Number.isNaN(amount)&&(amount>=0)&&(wDelta > 0))
		 x.value=amount+val;
	if(!Number.isNaN(amount)&&(amount>=500)&&(wDelta < 0))
		 x.value=amount-val;
	if(Number.isNaN(amount)&&(wDelta > 0)) x.value=0;
	wDelta=0;
	/*kDelta=0;*/
}

window.addEventListener('mousewheel', function(e){
    wDelta = e.wheelDelta;
    console.log(wDelta);
});

/*window.addEventListener('keydown', function(event){
    kDelta = event.keyCode;
    console.log(kDelta);
});*/

function toINR(money){
	var x= document.getElementById(money);
	var amount=parseInt(x.value.replace(/,/g, ""));
	if(!Number.isNaN(amount))
	 x.value=amount.toLocaleString('en-IN');
}

function clearForm(id){
	document.getElementById(id).hidden="hidden";
}