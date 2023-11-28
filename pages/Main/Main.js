import { ImportExport } from '@material-ui/icons'
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
 import { TransitionEffect } from '/Users/sanketsaini/Downloads/developer-portfolio-master/src/components/TransitionEffect/TransitionEffect.jsx';

import { Navbar, Footer, Landing, About, Skills, Education, Contacts, Projects, Achievement} from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        
        <div>
            <TransitionEffect />
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>
            
            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Achievement />
            <Contacts />
            <Footer />
            
            
        </div>
    )
}

export default Main
