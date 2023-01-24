
interface Props {
    family: string
    weight: string
}

const sample = 'The quick brown fox jumped over the lazy dog'

export const FontInfo = ({ family, weight }: Props) => {

    const styles = {
        fontFamily: family,
        fontWeight: weight
    };

    return (
        <div>
            <h1 style={styles}>h1 {family} {weight}</h1>
            <div>
                <h2 style={styles}>h2 {sample}</h2>
                <h3 style={styles}>h3 {sample}</h3>
                <h4 style={styles}>h4 {sample}</h4>
                <h5 style={styles}>h5 {sample}</h5>
                <h6 style={styles}>h6 {sample}</h6>
                <p style={styles}>p {sample}</p>
                <ul>
                    <li style={styles}>li {sample}</li>
                    <li style={styles}>li {sample}</li>
                </ul>
            </div>
        </div>
    )
}
