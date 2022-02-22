import * as React from 'react';
import { useRef, useState } from 'react';
import Reward, { RewardConfig, RewardElement } from 'react-rewards';
import { ResearchMenu } from './research-link';

export const Question: React.FC = () => {
    const [isMice, setIsMice] = useState<boolean | null>(null);

    const confRef = useRef<RewardElement>(null);

    const squakClicked = () => {
        setIsMice(true);
        confRef.current.rewardMe();
    };

    const noClicked = () => {
        setIsMice(false);
        confRef.current.punishMe();
    };

    const browserWidth = window.innerWidth;
    
    const config : RewardConfig  = {
        angle: 15, 
        startVelocity: Math.sqrt(browserWidth * 1.5), 
        lifetime: 100,
        emoji: ["🐭", "🐹", "🐁", "🎉", "👍"],
    };
    //console.log('velocity', config.startVelocity);
    
    return (
        <div className="container pt-5">
            <div className="d-flex justify-content-center my-4">
                <h1 className="display-2">Type 1 Diabetes Cure</h1>
            </div>
            <div className="d-flex justify-content-center my-4">
                <h3>{isMice === null ? "Are you a mice?" : <span>&nbsp;&nbsp;</span>}</h3>
            </div>
            <Reward ref={confRef} type="emoji" config={config}>
                <div className="d-flex justify-content-around px-5">
                    {isMice === null && 
                        <>
                            <button type="button" className="btn btn-lg btn-outline-success" style={{minWidth : 100}} onClick={squakClicked}>Squeak</button>
                            <button type="button" className="btn btn-lg btn-outline-danger" style={{minWidth : 100}} onClick={noClicked}>No</button>
                        </>
                    }
                    {isMice === true && <span className="text-success mt-5">Congratulations you have got cured in several ways!</span>}
                    {isMice === false && <span className="text-danger mt-5">Cure is still 5 years away!</span>}
                </div>
            </Reward>
            {isMice === false && <ResearchMenu />}
        </div>
    );
}