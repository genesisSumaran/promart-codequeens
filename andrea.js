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

    /* Media Query para dispositivos móviles */
    @media (max-width: 767px) {
        #andrea-avatar {
            width: 120px;  /* Reducir tamaño en móviles */
        }
    }
`;

const avatarDiv = document.createElement("div");
avatarDiv.id = "andrea-avatar";

const avatarImg = document.createElement("img");
avatarImg.src = "./assets/img/andrea.png";
avatarImg.alt = "Avatar Andrea";

avatarDiv.appendChild(avatarImg);

document.body.appendChild(avatarDiv);