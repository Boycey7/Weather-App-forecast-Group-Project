import React from "react";
const Footer = () => {
    return (
        <div className="z-10 grid items-center justify-center text-center">
            <div className="flex items-center justify-center space-x-3 text-center">
            
                <div>
                    <p>Jake Boyce</p>
                </div>
                <div className="flex space-x-1">
                    <a
                        href="https://www.linkedin.com/in/jake-boyce-dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/images/linkedin-icon.png" 
                            alt="LinkedIn Jake Boyce"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a
                        href="https://github.com/Boycey7"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/images/github-icon.png" 
                            alt="GitHub Jake Boyce"
                            width={30}
                            height={30}
                        />
                    </a>
                </div>
                
                <div>
                    <p>Max Brookman-Byrne</p>
                </div>
                <div className="flex space-x-1">
                    <a
                        href="https://www.linkedin.com/in/max-brookman-byrne-8b58998b/" // Replace with Max's LinkedIn link
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/images/linkedin-icon.png" 
                            alt="LinkedIn Max Brookman-Byrne"
                            width={30}
                            height={30}
                        />
                    </a>
                    <a
                        href="https://github.com/infinitemax" // Replace with Max's GitHub link
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/images/github-icon.png" 
                            alt="GitHub Max Brookman-Byrne"
                            width={30}
                            height={30}
                        />
                    </a>
                </div>
            </div>
            <div className="flex items-center justify-center text-center">
                <p>© 2023 All Rights Reserved.</p>
            </div>
        </div>
    );
};
  
  export default Footer;
  