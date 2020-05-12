import React, { useState } from "react";
import './MoodToggler.css';

function MoodToggler(){
    const [isHappy, setIsHappy] = useState(true);
    const toggleIsHappy = () => setIsHappy(!isHappy);
    const styles = { color: isHappy ? 'green' : 'red' };
    return <h3 
        className="MoodToggler"
        style={styles}
        onClick={toggleIsHappy}>{isHappy ? ":)" : ":("}
    </h3>
}

export default MoodToggler;