import React, {useEffect, useState ,memo} from "react"

// verifação se ele e igual ou não , se for ele não atualiza a pagina
const areEqual = (prevProps, nexProps) => {
    return prevProps.loading === nexProps.loading
}

function TwitterHooks (props) {
    const {loading} = props
    const [tweet, settweet] = useState('title')
    //  Este método é executado uma vez em um ciclo de vida de um componente e será após a primeira renderização
    //componentDidMount
    useEffect(() => {
        const { posts, loading } = props
        console.log('componentDidMount',posts)
        console.log('componentDidMount:loading',loading)
    }, [])

    //componentDidUpdate
    useEffect(() => {
       console.log('componentDidUpdate',loading) 
    },[loading])
    
    //ComponentWillUnmount
    useEffect(() => {
        return () => (
         console.log('componentWillUnmount: fui removido') 
        )
     },[])

     //shouldComponentUpdate

    const handletweet = () => {
        settweet ('Tweet atualizado')
    }

    console.log('Tweet atualizado',tweet)
        return (
            <div>
                <button onClick={handletweet}>Re-render</button>
                test
            </div>
        ) 
}

export default memo(TwitterHooks, areEqual)