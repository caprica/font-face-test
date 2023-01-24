import './App.css'
import { CSS } from './css'
import { FontInfo } from 'FontInfo'

function App() {
    const weights = [
        300,
        400,
        500,
        600,
        700,
        800,
    ]

    document.fonts.onloading = (event: Event) => {
        console.log('fonts loaded!')
        console.log(event.type)
    }

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <div>
                { weights.map(weight => (
                    <FontInfo key={weight} family='Matter' weight={weight.toString()} />
                ))}
            </div>
            <div>
<pre style={{ position: 'fixed' }}>{CSS}</pre>
            </div>
        </div>
    )
}

export default App
