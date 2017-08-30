class ReconhecimentoVoz {

    constructor (SpeechRecognition) {
        this.speech = new SpeechRecognition()
    }

    reconhecer () {
        this.speech.start();
    }

    iniciado (callback) {

    }

    resultado (callback) {

        this.speech.onresult = function(event) {

            let result = ''

            for (let i = event.resultIndex; i < event.results.length; i++) {

                if(event.results[i].isFinal) {
                    
                    result = event.results[i][0].transcript

                }else{

                    result += event.results[i][0].transcript
                    
                }

            }

            callback(result)

        }

    }

}
