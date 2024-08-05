import React from "react";
import "../../css/modal.css"; // Import a CSS file for styling if needed

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <article className="modal-container">
        <header className="modal-container-header">
          <span className="modal-container-title">
            <svg
              aria-hidden="true"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M14 9V4H5v16h6.056c.328.417.724.785 1.18 1.085l1.39.915H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8v1h-7zm-2 2h9v5.949c0 .99-.501 1.916-1.336 2.465L16.5 21.498l-3.164-2.084A2.953 2.953 0 0 1 12 16.95V11zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.954.954 0 0 0 .436-.795V13h-5v3.949z"
                fill="currentColor"
              ></path>
            </svg>
            Terms and Services
          </span>
          
        </header>
        <section className="modal-container-body rtf">
          <span>
            Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam
            pollicetur.
          </span>
          <p>
            {" "}
            Amet molestias provident magni illo iure, consequuntur autem
            quae odit mollitia voluptatem minus non perspiciatis sequi alias
            delectus sit minima, nesciunt tempore? Optio facere dignissimos non
            ipsam dicta adipisci, natus corrupti quos neque illo laborum animi
            sint. Officia enim, placeat amet repudiandae exercitationem fugiat.
            Tempora incidunt ex atque similique, adipisci numquam excepturi
            aspernatur repellendus molestias, debitis ad optio dolore totam
            aliquam libero quidem delectus pariatur quo iusto nobis. Debitis
            vitae, suscipit iusto possimus dolorum nihil. Porro harum et velit,
            amet debitis dolores odio fugiat voluptate distinctio tenetur cum
            in, maiores dolorum rem! Cumque rerum doloremque fuga modi
            dignissimos rem, aperiam a?
          </p>
          <span>Ut proverbia non nulla veriora sint quam vestra dogmata.</span>
          <p>Quasi vero, inquit, perpetua oratio rhetorum solum...</p>
          <span>An hoc usque quaque, aliter in vita?</span>
          <ol>
            <li>Etenim nec iustitia nec amicitia esse omnino poterunt...</li>
            <li>Pisone in eo gymnasio, quod Ptolomaeum vocatur...</li>
            <li>Certe nihil nisi quod possit ipsum propter se iure laudari.</li>
            <li>Itaque e contrario moderati aequabilesque habitus...</li>
          </ol>
          <p>Utilitatis causa amicitia est quaesita...</p>
          <span>
            Claudii libidini, qui tum erat summo ne imperio, dederetur.
          </span>
          <p>
            Eorum enim est haec querela, qui sibi cari sunt seseque diligunt...
          </p>
          <span>Sed nimis multa.</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dicta quis, delectus quos deleniti possimus fugiat similique facilis provident laudantium? Veritatis doloribus provident, debitis alias doloremque velit laborum mollitia necessitatibus!
          </p>
        </section>
        <footer className="modal-container-footer">
          {/* <button className="button is-ghost" onClick={onClose}>
            Close
          </button> */}
          <button className="button is-primary"onClick={onClose}>Close</button>
        </footer>
      </article>
    </div>
  );
};

export default Modal;
