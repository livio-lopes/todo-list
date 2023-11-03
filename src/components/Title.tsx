import ITitle from "../types/iTitle"


function Title(props: ITitle) {
    const { title } = props

    return (
        <h1>{title}</h1>
    )
}

export default Title