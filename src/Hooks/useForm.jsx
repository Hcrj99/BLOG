const { useState } = require("react");

export const UseForm = ( objetoInicial = {}) => {

    const [formulario, setFormulario] = useState(objetoInicial);


    const seriaLizarFormulario = (formulario) => {
        const fromData = new FormData(formulario);

        const objetoCompleto = {};  

        for (let [name, value] of fromData) {
            objetoCompleto[name] = value;
        };

        return objetoCompleto;
    };


    const enviado = (e) => {
        e.preventDefault();

        let curso =seriaLizarFormulario(e.target);

        setFormulario(curso);
    };

    const cambiado = ({ target }) => {
        const { name, value } = target;

        setFormulario({
            ...formulario,
            [name]:value
        });
    }

    return {
        formulario,
        enviado,
        cambiado,
    }
}