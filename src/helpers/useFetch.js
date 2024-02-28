import { useEffect, useState } from "react"

export const useFetch = () => {
    
    const url = '/data.json'

    const [state, setState] = useState({
        data: null,
        errors: null
    })

    const {data, errors} = state

    const getFetch = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()

            setState({
                data,
                errors: null
            })

        } catch (error) {
            setState({
                data: null, 
                errors: error
            })
        }
    }

    useEffect(() => {
        getFetch()
    }, [])
    
    return { data, errors }
}
