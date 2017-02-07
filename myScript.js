var person = {
	firstname: "Renjith",
	lastname: "R",
	fullname: function(){
		return this.firstname+" "+this.lastname;
	}
};

var x=10,y=5,z="qwe";

var flag=true;

var result;

function myfn(){
	document.getElementById("result").value=
	sum(document.getElementById("n1").value,document.getElementById("n2").value);
}

function sum(p1,p2) {
    return Number(p1)+Number(p2);
}