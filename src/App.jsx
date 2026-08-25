import { useEffect, useState } from "react";
import "pannellum/build/pannellum.css";
import "pannellum/build/pannellum.js";
import "./App.css";

function App() {
  const [sceneName, setSceneName] = useState("afuera");
  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    const viewer = window.pannellum.viewer("panorama", {
      default: {
        firstScene: "afuera",
        sceneFadeDuration: 800,
      },

      scenes: {
        marketing: {
          title: "Sala de Equipo Marketing",
          type: "equirectangular",
          panorama: "/panoramas/marketing.jpg",

          hotSpots: [
            {
              pitch: 0,
              yaw: -15,
              type: "scene",
              text: "Ir a Entrada",
              sceneId: "entrada",
            },
          ],
        },

        entrada: {
          title: "Salón de Entrada",
          type: "equirectangular",
          panorama: "/panoramas/entrada.jpg",

          hotSpots: [
            {
              pitch: -10,
              yaw: -60,
              type: "scene",
              text: "Ir a Marketing",
              sceneId: "marketing",
            },

            {
              pitch: -10,
              yaw: 180,
              type: "scene",
              text: "Salir al exterior",
              sceneId: "afuera",
            },

            {
              pitch: -5,
              yaw: 80,
              type: "scene",
              text: "Ir a Pasillo Chico",
              sceneId: "pasilloChico",
            },
          ],
        },

        afuera: {
          title: "Entrada Principal",
          type: "equirectangular",
          panorama: "/panoramas/afuera.jpg",

          hotSpots: [
            {
              pitch: 0,
              yaw: -205,
              type: "scene",
              text: "Entrar a Heidelberg Center",
              sceneId: "entrada",
            },
          ],
        },

        pasilloChico: {
          title: "Pasillo Chico",
          type: "equirectangular",
          panorama: "/panoramas/pasillo chico.jpg",

          hotSpots: [
            {
              pitch: -10,
              yaw: -50,
              type: "scene",
              text: "Volver a Entrada",
              sceneId: "entrada",
            },

            {
              pitch: -10,
              yaw: 50,
              type: "scene",
              text: "Ir a Sala 104",
              sceneId: "sala104",
            },

            {
              pitch: -10,
              yaw: 200,
              cssClass: "room-label-hotspot",
              createTooltipFunc: (hotSpotDiv) => {
                hotSpotDiv.innerHTML = "Secretaría y Contabilidad";
              },
            },

            {
              pitch: -10,
              yaw: 60,
              cssClass: "room-label-hotspot clickable-label",
              createTooltipFunc: (hotSpotDiv) => {
                hotSpotDiv.innerHTML = "DAAD";

                hotSpotDiv.addEventListener("click", () => {
                  window.open(
                    "https://www.daad.cl/es/",
                    "_blank",
                    "noopener,noreferrer"
                  );
                });
              },
            },

            {
              pitch: -10,
              yaw: 250,
              cssClass: "room-label-hotspot",
              createTooltipFunc: (hotSpotDiv) => {
                hotSpotDiv.innerHTML = "Conserjería e Impresiones";
              },
            },
          ],
        },

        sala104: {
          title: "Sala 104",
          type: "equirectangular",
          panorama: "/panoramas/104.jpg",

          hotSpots: [
            {
              pitch: -10,
              yaw: 25,
              type: "scene",
              text: "Volver a Pasillo Chico",
              sceneId: "pasilloChico",
            },
          ],
        },
      },
    });

    viewer.on("scenechange", (sceneId) => {
      setSceneName(sceneId);
      setShowInfo(true);
    });

    return () => {
      viewer.destroy();
    };
  }, []);

  const renderInfo = () => {
    if (sceneName === "marketing") {
      return (
        <>
          <h2>Sala de Equipo Marketing</h2>

          <p>
            <strong>Personas encargadas:</strong> Cristian y Belen
          </p>

          <p>
            <strong>Computadoras:</strong> 2
          </p>

          <p>
            <strong>Información adicional:</strong> Etc.
          </p>
        </>
      );
    }

    if (sceneName === "entrada") {
      return (
        <>
          <h2>Salón de Entrada</h2>

          <p>
            Este es el salón principal de entrada de Heidelberg Center.
          </p>

          <p>
            Desde aquí se puede acceder a diversos sectores, salas y espacios
            del edificio.
          </p>

          <p>
            <strong>Accesos:</strong> áreas comunes, oficinas y salas.
          </p>
        </>
      );
    }

    if (sceneName === "afuera") {
      return (
        <>
          <h2>Entrada Principal</h2>

          <p>
            Acceso principal a Heidelberg Center para América Latina.
          </p>

          <p>
            <strong>Estacionamiento:</strong> 2 automóviles.
          </p>

          <p>
            <strong>Acceso:</strong> entrada principal al edificio.
          </p>

          <p>
            Desde este sector se puede ingresar directamente al salón de
            entrada.
          </p>
        </>
      );
    }

    if (sceneName === "pasilloChico") {
      return (
        <>
          <h2>Pasillo Chico</h2>

          <p>
            Pasillo de circulación interior con acceso a distintas salas y
            dependencias.
          </p>

          <p>
            Desde este sector se puede acceder a la Sala 104, Secretaría y
            Contabilidad, DAAD, Conserjería e Impresiones.
          </p>

          <div className="info-section">
            <h3>DAAD Chile</h3>

            <p>
              Dentro del Heidelberg Center para América Latina se encuentra
              también la oficina del DAAD Chile, vinculada al intercambio
              académico y a la cooperación entre Alemania y Chile.
            </p>

            <p>
              Selecciona la etiqueta <strong>DAAD</strong> dentro del recorrido
              para visitar su sitio web oficial.
            </p>
          </div>
        </>
      );
    }

    if (sceneName === "sala104") {
      return (
        <>
          <h2>Sala 104</h2>

          <p>
            <strong>Capacidad:</strong> 18 alumnos.
          </p>

          <p>
            <strong>Equipamiento:</strong> Smart Board.
          </p>

          <p>
            <strong>Uso:</strong> clases, reuniones académicas y actividades de
            capacitación.
          </p>

          <p>
            <strong>Características:</strong> sala equipada para presentaciones,
            trabajo audiovisual y apoyo digital.
          </p>

          <p>
            <strong>Conectividad:</strong> acceso a red y recursos digitales.
          </p>
        </>
      );
    }

    return null;
  };

  return (
    <div className="app">
      <header className="main-header">
        <img
          src="/logo/heidelberg-logo.png"
          alt="Heidelberg Center"
          className="center-logo"
        />

        <div className="header-text">
          <h1>Heidelberg Center para América Latina</h1>
          <p>Tour Virtual</p>
        </div>
      </header>

      <main className="tour-area">
        <div className="viewer-wrapper">
          <div id="panorama" className="panorama-viewer" />

          {showInfo && <div className="info-box">{renderInfo()}</div>}

          <button
            className={`info-button ${showInfo ? "info-open" : ""}`}
            onClick={() => setShowInfo((prev) => !prev)}
            title="Información"
          >
            i
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;