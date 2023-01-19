import React, { Component } from "react";

class Twitter extends Component {

    state = {
        tweet: 'title'
    }

    //  Este método é executado uma vez em um ciclo de vida de um componente e será após a primeira renderização
    componentDidMount() {
        const { posts, loading } = this.props
        console.log('componentDidMount',posts)
        console.log('componentDidMount:loading',loading)
    }

    // é invocado imediatamente após alguma atualização ocorrer.
    componentDidUpdate (prevProps) {
        const { loading } = this.props
        if (this.props.loading !== prevProps.loading) {
            console.log('componentDidUppdate:loading',loading)
        }
    }

    //  é invocado imediatamente antes que um componente seja desmontado e destruído. Qualquer limpeza necessária deve ser realizada neste método,
    // como invalidar timers, cancelar requisições de rede, ou limpar qualquer subscrição que foi criada no
    componentWillUnmount() {
        console.log('componentWillUnmount: fui removido')
    }

   /*  tweet = () => {
        setState ({
            tweet: true
        })
    } */
    // Retorna um valor booleano, falso ou true
    shouldComponentUpdate (nextState, nextProps) {
        return this.state.tweet !== nextState.tweet || nextProps.loading !== this.props.loading
    }


    render () {
        const {posts} = this.props 
        console.log('render',posts)
        return (
            <div>
                test
            </div>
        )
    }
}

export default Twitter