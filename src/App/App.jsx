import './App.css';
import { useState } from 'react';
import ClockFace from '../ClockFace';

const App = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const [totalSeconds, setTotalSeconds] = useState(10);
    const [millisecondsLeft, setMillisecondsLeft] = useState(totalSeconds * 1000);


    const secondsLeft = millisecondsLeft / 1000;

    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [isModalOpenMobile, setIsModalOpenMobile] = useState(false);

    const handleOpenModal = () => {
        // const modal = document.getElementsByClassName("modal");
        // const widthWindow = modal.style.clientWidth;
        // console.log(widthWindow);
        // if (widthWindow < 1000) {
        //     setIsModalOpenMobile(true);
        // }
        // else {
            setIsModalOpen(true);
        // }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleApplySettings = () => {
        const resultSeconds = hours * 3600 + minutes * 60 + seconds;
        setTotalSeconds(resultSeconds);
        setMillisecondsLeft(resultSeconds * 1000);
        handleCloseModal(resultSeconds)
    }

    const resultSeconds = () => {
        console.log(totalSeconds);
        setTotalSeconds(totalSeconds - 1);
    };

    const clickStart = () => {
        setInterval(resultSeconds, 1000);
    };

    const handleCancelSettings = () => {
        setHours(Math.floor(totalSeconds / 3600));
        setMinutes(Math.floor(totalSeconds / 60));
        setSeconds(Math.floor(totalSeconds % 60));
        handleCloseModal();
    }

    const stopPropagation = (event) => {
        event.stopPropagation();
    };

    const handleChangeHours = (event) => {
        const value = +event.target.value;
        if (value < 24) {
            setHours(value);
        } else {
            setHours(23);
        }
    };

    const handleChangeMinutes = (event) => {
        const value = +event.target.value;
        if (value < 60) {
            setMinutes(value);
        } else {
            setMinutes(59);
        }
    };

    const handleChangeSeconds = (event) => {
        const value = +event.target.value;
        if (value < 60) {
            setSeconds(value);
        } else {
            setSeconds(59);
        }
    };

    return (
        <>
            {isModalOpen && (
                <div className="modal" onClick={handleCloseModal}>
                    <div className="content" onClick={stopPropagation}>
                        <div className="header"/>
                        <div className="inputs">
                            <div className="textInput">
                                <span className="textBeforeInput">Hours:</span>
                                <input className="input" type="number" value={hours.toString()}
                                       onChange={handleChangeHours}/>
                            </div>
                            <div className="textInput">
                                <span className="textBeforeInput">Minutes:</span>
                                <input className="input" type="number" value={minutes.toString()}
                                       onChange={handleChangeMinutes}/>
                            </div>
                            <div className="textInput">
                                <span className="textBeforeInput">Seconds:</span>
                                <input className="input" type="number" value={seconds.toString()}
                                       onChange={handleChangeSeconds}/>
                            </div>
                        </div>
                        <div className="textInput">
                            <div className="btnTime applyBtn" onClick={handleApplySettings}>Apply</div>
                            <div className="btnTime cancelBtn" onClick={handleCancelSettings}>Cancel</div>
                        </div>
                    </div>
                </div>
            )}
            {/*{isModalOpenMobile && (*/}
            {/*    <div className="modalMobile"></div>*/}
            {/*)}*/}
            <div className="container">
                <div className="wrapper">
                    <ClockFace clickHandler={handleOpenModal} totalSeconds={secondsLeft}/>
                    <div className="controls">
                        <button className="btn startBtn" onClick={clickStart}>Start</button>
                        <button className="btn resetBtn">Reset</button>
                    </div>
                    <div className="progressWrapper">
                        <div className="progressValue"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;