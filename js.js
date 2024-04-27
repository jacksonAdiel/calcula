// This is a JavaScript file


        const $html = document.querySelector('html')
        const $checkbox = document.querySelector('#switch')

        $checkbox.addEventListener('change',function(){
            $html.classList.toggle('dark-mode')
        })
        
function insert(num){
let numero = document.getElementById('resposta').innerHTML;
document.getElementById('resposta').innerHTML = numero + num;

}
function limpar(){
document.getElementById('resposta').innerHTML ="";
}
function deletar(){
	var resultado = document.getElementById('resposta').innerHTML;
	document.getElementById('resposta').innerHTML = resultado.substring(0, resultado.length -1);


}
function total(){
let respostas = document.getElementById('resposta').innerHTML;
document.getElementById('resposta').innerHTML = eval(respostas);

}
function raiz(){
	let raiz = document.getElementById('resposta').innerHTML;
	if (raiz) {
		document.getElementById('resposta').innerHTML = Math.sqrt(raiz);
	} else{
		document.getElementById('resposta').innerHTML = "";
	}
}function potencia(){
	var potencia = document.getElementById('resposta').innerHTML;
	if (potencia) {
		document.getElementById('resposta').innerHTML = potencia*potencia;
	} else{
		document.getElementById('resposta').innerHTML = "";
	}
}
