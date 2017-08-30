# reconhecimento-voz
Reconhecimento de voz com API Speech (ainda não lançada oficialmente)

# Como usar

1. Configure o navegador e veja se há suporte para Speech API
2. Invoque a classe e passe no construtor Speech API
3. Utilize a Classe

# Validando Speech API no navegador

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null

# Utilizando a classe

let speech = new ReconhecimentoVoz(window.SpeechRecognition)

Pronto, basta usar como seu contexto exigir

# AVISO

Speech API ainda esta em desenvolvimento, não  utilize em produção pois ainda esta em fase de projeto de acordo com a MDN
