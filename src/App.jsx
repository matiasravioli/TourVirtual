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
        /* =========================
           EXTERIOR
        ========================= */

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

        /* =========================
           ENTRADA - PRIMER PISO
        ========================= */

        entrada: {
          title: "Salón de Entrada",
          type: "equirectangular",
          panorama: "/panoramas/entrada.jpg",

          hotSpots: [
            {
              pitch: -10,
              yaw: 180,
              type: "scene",
              text: "Salir al exterior",
              sceneId: "afuera",
            },

            {
              pitch: -5,
              yaw: 77,
              type: "scene",
              text: "Ir al Pasillo del Primer Piso",
              sceneId: "pasilloPiso1",
            },

            {
              pitch: -10,
              yaw: -60,
              type: "scene",
              text: "Subir al Segundo Piso",
              sceneId: "areaCentralPiso2",
            },

            {
              pitch: -10,
              yaw: 200,
              type: "scene",
              text: "Ir a Sala de Estar",
              sceneId: "salaEstar",
            },
          ],
        },

        /* =========================
           PASILLO - PRIMER PISO
        ========================= */

        pasilloPiso1: {
          title: "Pasillo - Primer Piso",
          type: "equirectangular",
          panorama: "/panoramas/pasillo-piso1.jpg",

          hotSpots: [
            {
              pitch: -10,
              yaw: -90,
              type: "scene",
              text: "Volver a Entrada",
              sceneId: "entrada",
            },

            {
              pitch: -10,
              yaw: 10,
              type: "scene",
              text: "Ir a Sala 104",
              sceneId: "sala104",
            },

            {
              pitch: -10,
              yaw: 160,
              cssClass: "room-label-hotspot",
              createTooltipFunc: (hotSpotDiv) => {
                hotSpotDiv.innerHTML = "Secretaría y Contabilidad";
              },
            },

            {
              pitch: -10,
              yaw: 20,
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
              yaw: 210,
              cssClass: "room-label-hotspot",
              createTooltipFunc: (hotSpotDiv) => {
                hotSpotDiv.innerHTML = "Conserjería e Impresiones";
              },
            },
          ],
        },

        /* =========================
           SALA 104
        ========================= */

        sala104: {
          title: "Sala 104",
          type: "equirectangular",
          panorama: "/panoramas/104.jpg",

          hotSpots: [
            {
              pitch: -10,
              yaw: 25,
              type: "scene",
              text: "Volver al Pasillo",
              sceneId: "pasilloPiso1",
            },
          ],
        },

        /* =========================
           SALA DE ESTAR
        ========================= */

        salaEstar: {
          title: "Sala de Estar",
          type: "equirectangular",
          panorama: "/panoramas/sala-estar.jpg",

          hotSpots: [
            {
              pitch: -80,
              yaw: 120,
              type: "scene",
              text: "Subir al Segundo Piso",
              sceneId: "pasilloPiso2B",
            },

            {
              pitch: -5,
              yaw: 7,
              type: "scene",
              text: "Volver a Entrada",
              sceneId: "entrada",
            },

            {
              pitch: -5,
              yaw: -110,
              cssClass: "room-label-hotspot",
              createTooltipFunc: (hotSpotDiv) => {
                hotSpotDiv.innerHTML = "Baño Hombres";
              },
            },

            {
              pitch: -10,
              yaw: -5,
              cssClass: "room-label-hotspot",
              createTooltipFunc: (hotSpotDiv) => {
                hotSpotDiv.innerHTML = "Baño Mujeres";
              },
            },
          ],
        },

        /* =========================
           ÁREA CENTRAL - SEGUNDO PISO
        ========================= */

        areaCentralPiso2: {
          title: "Área Central - Segundo Piso",
          type: "equirectangular",
          panorama: "/panoramas/area-central-piso2.jpg",

          hotSpots: [
            {
              pitch: -20,
              yaw: -130,
              type: "scene",
              text: "Bajar a Entrada",
              sceneId: "entrada",
            },

            {
              pitch: -5,
              yaw: -55,
              type: "scene",
              text: "Continuar por el Pasillo",
              sceneId: "pasilloPiso2A",
            },
          ],
        },

        /* =========================
           PASILLO A - SEGUNDO PISO
        ========================= */

        pasilloPiso2A: {
          title: "Pasillo - Segundo Piso A",
          type: "equirectangular",
          panorama: "/panoramas/pasillo-piso2-a.jpg",

          hotSpots: [
            {
              pitch: -10,
              yaw: 0,
              type: "scene",
              text: "Volver al Área Central",
              sceneId: "areaCentralPiso2",
            },

            {
              pitch: -10,
              yaw: 98,
              type: "scene",
              text: "Continuar por el Pasillo",
              sceneId: "pasilloPiso2B",
            },

            {
              pitch: -10,
              yaw: 115,
              cssClass: "room-label-hotspot",
              createTooltipFunc: (hotSpotDiv) => {
                hotSpotDiv.innerHTML = "Baño Hombres";
              },
            },

            {
              pitch: -10,
              yaw: -75,
              cssClass: "room-label-hotspot",
              createTooltipFunc: (hotSpotDiv) => {
                hotSpotDiv.innerHTML = "Baño Mujeres";
              },
            },

            {
              pitch: -10,
              yaw: 150,
              cssClass: "room-label-hotspot clickable-label",

              createTooltipFunc: (hotSpotDiv) => {
                hotSpotDiv.innerHTML = "GEO";

                hotSpotDiv.addEventListener("click", () => {
                  window.open(
                    "https://www.hcla.uni-heidelberg.de/es/programas-academicos/geociencias",
                    "_blank",
                    "noopener,noreferrer"
                  );
                });
              },
            },

            {
              pitch: -10,
              yaw: -90,
              type: "scene",
              text: "Ir a Sala 203",
              sceneId: "sala203",
            },

            {
              pitch: -10,
              yaw: 105,
              type: "scene",
              text: "Ir a Sala 206",
              sceneId: "sala206",
            },
          ],
        },

        /* =========================
           PASILLO B - SEGUNDO PISO
        ========================= */

        pasilloPiso2B: {
          title: "Pasillo - Segundo Piso B",
          type: "equirectangular",
          panorama: "/panoramas/pasillo-piso2-b.jpg",

          hotSpots: [
            {
              pitch: -10,
              yaw: 90,
              type: "scene",
              text: "Volver al Pasillo Anterior",
              sceneId: "pasilloPiso2A",
            },

            {
              pitch: -15,
              yaw: 45,
              type: "scene",
              text: "Bajar a Sala de Estar",
              sceneId: "salaEstar",
            },

            {
              pitch: -10,
              yaw: 0,
              type: "scene",
              text: "Subir al Tercer Piso",
              sceneId: "tercerPiso",
            },

            {
              pitch: -10,
              yaw: -50,
              cssClass: "room-label-hotspot clickable-label",

              createTooltipFunc: (hotSpotDiv) => {
                hotSpotDiv.innerHTML = "Coordinación de LL.M.";

                hotSpotDiv.addEventListener("click", () => {
                  window.open(
                    "https://www.hcla.uni-heidelberg.de/es/programas-academicos/international-law",
                    "_blank",
                    "noopener,noreferrer"
                  );
                });
              },
            },

            {
              pitch: -10,
              yaw: -100,
              cssClass: "room-label-hotspot clickable-label",

              createTooltipFunc: (hotSpotDiv) => {
                hotSpotDiv.innerHTML = "Coordinación ABELL";

                hotSpotDiv.addEventListener("click", () => {
                  window.open(
                    "https://www.hcla.uni-heidelberg.de/es/educacion-continua-abell",
                    "_blank",
                    "noopener,noreferrer"
                  );
                });
              },
            },
          ],
        },

        /* =========================
           TERCER PISO
        ========================= */

        tercerPiso: {
          title: "Tercer Piso",
          type: "equirectangular",
          panorama: "/panoramas/tercer-piso.jpg",

          hotSpots: [
            {
              pitch: -10,
              yaw: 180,
              type: "scene",
              text: "Bajar al Segundo Piso",
              sceneId: "pasilloPiso2B",
            },

            {
              pitch: -10,
              yaw: 0,
              cssClass: "room-label-hotspot",
              createTooltipFunc: (hotSpotDiv) => {
                hotSpotDiv.innerHTML = "Biblioteca";
              },
            },

            {
              pitch: -10,
              yaw: 45,
              cssClass: "room-label-hotspot",
              createTooltipFunc: (hotSpotDiv) => {
                hotSpotDiv.innerHTML = "Soporte IT";
              },
            },

            {
              pitch: -10,
              yaw: 90,
              cssClass: "room-label-hotspot",
              createTooltipFunc: (hotSpotDiv) => {
                hotSpotDiv.innerHTML = "Contaduría";
              },
            },
          ],
        },

        /* =========================
           SALA 203
        ========================= */

        sala203: {
          title: "Sala 203",
          type: "equirectangular",
          panorama: "/panoramas/203.jpg",

          hotSpots: [
            {
              pitch: -10,
              yaw: 180,
              type: "scene",
              text: "Volver al Pasillo",
              sceneId: "pasilloPiso2A",
            },
          ],
        },

        /* =========================
           SALA 206
        ========================= */

        sala206: {
          title: "Sala 206",
          type: "equirectangular",
          panorama: "/panoramas/206.jpg",

          hotSpots: [
            {
              pitch: -10,
              yaw: 180,
              type: "scene",
              text: "Volver al Pasillo",
              sceneId: "pasilloPiso2A",
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

          <p>Desde este sector se puede ingresar directamente al edificio.</p>
        </>
      );
    }

    if (sceneName === "entrada") {
      return (
        <>
          <h2>Salón de Entrada</h2>

          <p>
            Punto principal de acceso y distribución dentro del Heidelberg
            Center.
          </p>

          <p>
            Desde aquí puedes acceder a distintas dependencias del primer piso,
            a la Sala de Estar o subir al segundo piso.
          </p>

          <p>
            <strong>Accesos:</strong> áreas comunes, oficinas, salas y
            escaleras.
          </p>
        </>
      );
    }

    if (sceneName === "pasilloPiso1") {
      return (
        <>
          <h2>Pasillo - Primer Piso</h2>

          <p>
            Pasillo de circulación interior con acceso a distintas oficinas y
            dependencias del Heidelberg Center.
          </p>

          <p>
            Desde este sector puedes acceder a la Sala 104, Secretaría y
            Contabilidad, DAAD y Conserjería e Impresiones.
          </p>

          <div className="info-section">
            <h3>DAAD Chile</h3>

            <p>
              Dentro del Heidelberg Center para América Latina se encuentra
              también la oficina del DAAD Chile.
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
            <strong>Capacidad:</strong> 18 personas.
          </p>

          <p>
            <strong>Equipamiento:</strong> Smart Board.
          </p>

          <p>
            <strong>Uso:</strong> clases, reuniones académicas, capacitaciones y
            presentaciones.
          </p>

          <p>Sala equipada para actividades presenciales y apoyo audiovisual.</p>
        </>
      );
    }

    if (sceneName === "salaEstar") {
      return (
        <>
          <h2>Sala de Estar</h2>

          <p>
            Espacio común ubicado en el primer piso, destinado al descanso,
            encuentro y permanencia de estudiantes, visitantes y colaboradores.
          </p>

          <p>
            Desde este sector puedes regresar al Salón de Entrada o subir hacia
            el segundo piso.
          </p>

          <p>
            <strong>Servicios cercanos:</strong> baños para hombres y mujeres.
          </p>
        </>
      );
    }

    if (sceneName === "areaCentralPiso2") {
      return (
        <>
          <h2>Área Central - Segundo Piso</h2>

          <p>
            Área principal de distribución y circulación del segundo piso del
            Heidelberg Center.
          </p>

          <p>
            Desde aquí se puede continuar hacia las distintas oficinas,
            pasillos y dependencias de este nivel.
          </p>
        </>
      );
    }

    if (sceneName === "pasilloPiso2A") {
      return (
        <>
          <h2>Pasillo - Segundo Piso</h2>

          <p>
            Sector de circulación con acceso a distintas salas, oficinas y
            servicios del segundo piso.
          </p>

          <p>
            Desde este sector se encuentran las salas 203 y 206, servicios
            sanitarios y dependencias vinculadas a GEO.
          </p>
        </>
      );
    }

    if (sceneName === "pasilloPiso2B") {
      return (
        <>
          <h2>Pasillo - Segundo Piso</h2>

          <p>
            Continuación del recorrido por las dependencias del segundo piso.
          </p>

          <p>
            Desde este sector puedes bajar hacia la Sala de Estar, continuar
            hacia el pasillo anterior o subir al tercer piso.
          </p>

          <div className="info-section">
            <h3>Coordinaciones</h3>

            <p>
              En este sector se encuentran la Coordinación de LL.M. y la
              Coordinación ABELL.
            </p>

            <p>
              Puedes seleccionar sus respectivas etiquetas dentro del recorrido
              para acceder a más información.
            </p>
          </div>
        </>
      );
    }

    if (sceneName === "tercerPiso") {
      return (
        <>
          <h2>Tercer Piso</h2>

          <p>
            En este nivel se encuentran distintas dependencias y servicios del
            Heidelberg Center.
          </p>

          <p>
            <strong>Biblioteca:</strong> disponible para todos los estudiantes
            dentro de los horarios de funcionamiento del Center.
          </p>

          <p>
            <strong>Otros servicios:</strong> Soporte IT y Contaduría.
          </p>
        </>
      );
    }

    if (sceneName === "sala203") {
      return (
        <>
          <h2>Sala 203</h2>

          <p>Sala ubicada en el segundo piso del Heidelberg Center.</p>

          <p>
            <strong>Información:</strong> pendiente de completar.
          </p>
        </>
      );
    }

    if (sceneName === "sala206") {
      return (
        <>
          <h2>Sala 206</h2>

          <p>Sala ubicada en el segundo piso del Heidelberg Center.</p>

          <p>
            <strong>Información:</strong> pendiente de completar.
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