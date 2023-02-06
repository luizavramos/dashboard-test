import { Icon } from "@iconify/react";
import "./busca.css";

export default function Busca() {
  return (
    <div>
      <header>
        <nav>
          <div className="navbar">
            <div className="busca">
              <Icon
                icon="ic:twotone-search"
                width="30px"
                height="30px"
                className="icon"
              />
              <input placeholder="Buscar..." type="search" />
            </div>
            <div className="container-main">
            <img src="./src/assets/config.png" alt="" />
              <img src="./src/assets/alert.png" alt="" />
              <div className="perfil">
                <p>
                  Olá, <b>Felipe</b>
                </p>
                <img src="./src/assets/perfil.png" alt="" />
              </div>
              <img src="./src/assets/menu.png" alt="" />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
