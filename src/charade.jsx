import { useState } from 'react';

function Charade() {
    // Explication de la charade
const explanation = () => {
    return (
        <div>
            <h2>Explication de la réponse :</h2>
            <p>Ce composant React implémente une section de charade/énigme/quizz où l'utilisateur peut entrer une réponse à une question. Le composant utilise le hook useState pour gérer l'état de la réponse utilisateur et le message de feedback.</p>
        </div>
    )
}
// États pour la réponse utilisateur et le message de feedback
const [reponseUtilisateur, setReponseUtilisateur] = useState('');
const [message, setMessage] = useState('');
  
// Réponse correcte (à modifier selon la charade/énigme)
const REPONSE_CORRECTE = 'REACT';

// Fonction pour vérifier la réponse
const verifierReponse = () => {
    if (reponseUtilisateur.toUpperCase() === REPONSE_CORRECTE) {
      setMessage('✅ correcte ! ');
      setExplanation();
    } else {
      setMessage('❌ Faux ! Essaie encore.');
      setReponseUtilisateur(''); // Réinitialise l'input
    }
  };

  return (
    <div className="card">
      <p>Bienvenue dans la section Charade/Enigme/Quizz !<br />
      lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <input
        type="text"
        value={reponseUtilisateur}
        onChange={(e) => setReponseUtilisateur(e.target.value)}
        placeholder="Votre réponse ici"
      />
      
      <button onClick={verifierReponse}>
        Valider
      </button>
      
      {message && <p>{message}</p>}
        {message.includes('correcte') && explanation()}
    </div>
  )
}
export default Charade
