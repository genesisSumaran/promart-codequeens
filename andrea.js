// Crear los estilos para #andrea-avatar
const avatarStyles = `
    position: fixed;
    bottom: 0px;
    left: 0px;
    z-index: 9999;
    width: 220px;
    height: auto;
    animation: float 3s ease-in-out infinite;
`;

const avatarImgStyles = `
    width: 100%;
    height: 100%;
`;

const floatAnimation = `
    @keyframes float {
        0% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(-30px);
        }

        100% {
            transform: translateY(0);
        }
    }
`;

const styleSheet = document.createElement("style");
document.head.appendChild(styleSheet);

styleSheet.innerHTML = `
    ${floatAnimation}
    #andrea-avatar {
        ${avatarStyles}
    }

    #andrea-avatar img {
        ${avatarImgStyles}
    }
`;

// Crear el div para el avatar
const avatarDiv = document.createElement("div");
avatarDiv.id = "andrea-avatar";

// Crear la imagen para el avatar
const avatarImg = document.createElement("img");
avatarImg.src = "/assets/img/andrea.png"; // Reemplaza con la ruta correcta de la imagen
avatarImg.alt = "Avatar Andrea";

// Añadir la imagen dentro del div
avatarDiv.appendChild(avatarImg);

// Agregar el avatar al body del documento
document.body.appendChild(avatarDiv);