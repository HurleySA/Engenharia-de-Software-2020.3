import React from 'react'

import Logo from '../../static/images/logo.svg'

import styles from './NotFound.module.css'
import '../../App.css'

function NotFound(){
    return(
        <div className = {styles.notFound}>
            <div className = {styles.logoContainer}>
        
              <img src={Logo} alt="Tchimo Logo" />
                     
            </div>

            <div className={styles.introductionContainer}> 
                <h1 className = {styles.noticeError}>
                    ERRO 404
                </h1>

                <p className={styles.introduction}> 
                   Página não encontrada, visse?
                </p>
            </div>
            
        </div>
    )

}

export default NotFound;