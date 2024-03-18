import { useState } from "react";
import { categorias } from "../Categoria";
import styles from "./Form.module.css";

function Form() {

    const [url, setUrl] = useState('');
    const [categoria, setCategoria] = useState('');
    const [videos, setVideos] = useState([]);
    const [erros, setErros] = useState('');

    function valideUrl(url) {
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/
    
        if(!regex.test(url) || url.length < 43) {
            setErros('ERRO: URL inválida!')
            return false
        } else {
            return url.substring(32, 43) // id do video
        }
    }

    function onSave(e) {
        e.preventDefault()
        console.log(url, categoria)

         //validar categoria
         if(!categoria || categoria === '-') {
            setErros('ERRO: Escolha uma categoria')
            return
        } else {
            setErros('')
        }

        //validar url
        const urlVideo = valideUrl(url)
        if(urlVideo && categoria){
            //salvar os dados
            const novoVideo = { url, categoria }
            setVideos([...videos, novoVideo])
            localStorage.setItem('videos', JSON.stringify([...videos, novoVideo]))
            //limpar form
            setUrl('')
            setCategoria('')
        } else {
            setErros('ERRO: URL inválida')
        }


    }

    return(
        <section className={styles.container}>
            <h2>Cadastro vídeo</h2>
            <form onSubmit={onSave}>
                <div>
                    <label>URL do vídeo</label>
                    <input
                        type="text"
                        placeholder="Digite a URL do vídeo"
                        required="required"
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                        minLength="43"
                        maxLength="43"
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select
                        required="required"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <option value="-">Selecione uma Categoria</option>
                        { categorias.map(item => {
                            return <option value={item}>{item}</option>
                        }) }
                    </select>
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
                <div>
                    { erros }
                </div>
            </form>
        </section>
    )
}

export default Form;