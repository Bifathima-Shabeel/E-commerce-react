function Header({ setSearchQuery }) {
    const handleSearch = (value) => {
        setSearchQuery(value); 
    };

    return (
        <header className="bg-light py-3 border-bottom">
            <div className="container d-flex justify-content-between align-items-center px-0">
                <div className="d-flex align-items-center">
                    <img
                        src="/images/logo.jpg"
                        alt="Logo"
                        style={{ width: "100px", height: "auto" }}
                    />
                    <h1 className="ms-2 mb-0 fs-4">E-Shoppee</h1>
                </div>
                <div className="flex-grow-1 mx-4">
                    <form className="d-flex">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search Products"
                            onChange={(e) => handleSearch(e.target.value)}
                            aria-label="Search"
                        />
                        <button type="submit" className="btn btn-warning ms-2">
                            <i className="bi-search"></i>
                        </button>
                    </form>
                </div>
                <div>
                    <button className="btn btn-outline-warning">Login</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
