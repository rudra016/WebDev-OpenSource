import React from 'react'
import useGame from './Stores/useGame'

const Interface = () => {
    const restart = useGame((state) => { return state.restart })
    const phase = useGame((state) => { return state.phase });

    return (
        <div className='Interface' >Interface
            <div className="time">0.00</div>
            {phase === "ended" ? <div className="restart" onClick={restart} >
                Restart
            </div> : null}
        </div>
    )
}

export default Interface