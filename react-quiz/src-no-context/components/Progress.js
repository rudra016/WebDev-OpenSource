function Progress({index,numQuestion,points,maxPossibleValue,answer}) {
    return (
        <header className="progress">
            <progress max={numQuestion} value={index+Number(answer!=null)}/>
            <p>Question&nbsp;<strong>{index+1}</strong>/{numQuestion}</p>
            <p><strong>{points}/{maxPossibleValue}</strong></p>
        </header>
    )
}

export default Progress
