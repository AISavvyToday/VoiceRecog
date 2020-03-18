
const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


const greetings = ['Im good you?', 'Hows it hanging', 'Cut the chase'];
const weather = ['Its looking all good',
				'Actually you may need an umbrella on your way out'

]

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();



recognition.onstart = function(){
	console.log('voice is activated, you can speak to the mike');

};

recognition.onresult = function(event){
	const current = event.resultIndex;
	const transcript = event.results[current][0].transcript;
	content.textContent = transcript;
	readOutLoud(transcript);
};

// add listener to button


btn.addEventListener('click', () => {
	recognition.start();

});


function readOutLoud(message){
	const speech = new SpeechSynthesisUtterance();


	speech.text = 'sorry, i didnt quite get you';

	if(message.includes('how are you')){
		const finalText = greetings[Math.floor(Math.random() * greetings.length)];
		speech.text = finalText;
	}

	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;

	window.speechSynthesis.speak(speech);
}