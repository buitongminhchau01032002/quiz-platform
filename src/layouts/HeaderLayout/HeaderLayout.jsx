import Header from '../components/Header/Header';

function HeaderLayout({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    );
}

export default HeaderLayout;
