import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceSearch = ({ setFind }) => {

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  function voiceSearching(){
      if(listening)setFind(transcript)
  }
  voiceSearching()

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className='voiceFlex'>
    {/* <div className="voiceSearch"> */}
      {/* <button onClick={()=>ActivateVoiceSearch()} className='voiceSearchBtn'>Voice Search</button> */}

              <div className="voiceSearch">             
                <p className='mic' style={{marginRight:"10px"}}>Microphone: {listening ? 'on' : 'off'}</p>
                <button onClick={SpeechRecognition.startListening} className='micBtn' style={{marginRight:"10px"}}>Start</button>
                <button onClick={SpeechRecognition.stopListening} className='micBtn'>Stop</button>
                {/* <button onClick={resetTranscript} className='micBtn'>Reset</button> */}
                </div>

      {/* <p>{transcript}</p> */}
    {/* </div> */}
    </div>
  );
};
export default VoiceSearch;