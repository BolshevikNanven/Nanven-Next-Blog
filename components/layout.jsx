import Header from './Header'
import Menu from './Menu'
import React,{useState} from 'react'


const Layout = ({children}) =>{

    const [is_MenuOpen,switch_MenuOpen]=useState(false);
    const [is_Darkmode,switch_Darkmode]=useState(false);


    return(
        <>
            <Header isMenuOpen={is_MenuOpen} switchMenuOpen={()=>{switch_MenuOpen(!is_MenuOpen)}}
            isDarkmode={is_Darkmode} switchDarkmode={()=>{switch_Darkmode(!is_Darkmode)}}/>
            <div className='base'>
                <Menu isMenuOpen={is_MenuOpen} switchMenuOpen={()=>{switch_MenuOpen(!is_MenuOpen)}}/>
                <div className='main'>
                    {children}
                </div>
            </div>
        </>

    );
}

export default Layout;