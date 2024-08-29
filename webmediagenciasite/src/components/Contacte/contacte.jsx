import "./contacte.scss";


function contacte({ Image}) {
  return (
    <section id="contacte">
      <div className="contact-img">
        <img src={Image} alt="image de contact" />
      </div>
      <div className="contact-form">
        <form>
          <input type="text" name='name' placeholder="Nom et prénom"></input>
          <input type="email"name='email' placeholder="E-mail"></input>
          <input type="text" name='number' placeholder="Téléphone"></input>
          <input type="text" name='name' placeholder="Société"></input>
          <textarea className="txtera" type="text" name='message' placeholder= "Entrez votre message"></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  );
}

export default contacte;
