import React, {Component} from 'react'
import axios from 'axios'
import Main from '../templates/Main'

const headerProps = {
    icon: "users",
    title: "Usuários",
    subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir"
}

const baseUrl = "http://localhost:3001/users"
const initialState = {
    user: {name: '', emali:''},
    list: []
}

export default class UserCrud extends Component {

    /** Inicializa o state do componente */
    state = { ...initialState }


    /** Methodo utilizado para inicializar o objeto user da state do componente. */
    clear(){
        this.setState({ user: initialState.user })
    }

    /** Methodo utilizado tanto para salvar quanto para atualizar um usuário no banco */
    save(){
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}`: baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = getUpdateList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    /** Função que retorna uma no lista com base na exitente tirando o user se existe
     * e adicionando novo usuário caso a operação seja um PUT
     */
    getUpdateList(user){
        const list = this.state.list.filter(u => u.id !== user.id)
        list.unshift(user)
        return list
    }

    render(){
        return (
            <Main { ...headerProps }>
                Cadastro de usuários
            </Main>
        )
    }
}