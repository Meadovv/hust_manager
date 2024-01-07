import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
    return (
        <>
            <div style={{
                display: 'flex',
                width: '100%',
                height: '100vh',
                flexDirection: 'column'
            }}>
                <Header />
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout