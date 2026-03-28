const Header = ({title})=>{
    // here
    return(
        <header>    
            <h1>{title}</h1>
        </header>
    )
}

// default props
Header.defaultProps = {
    title: "Default Title"
}

export default Header;