import React from "react";
import { Navigate } from "react-router-dom";
import styles from "./Main/styles.module.css";

const DataFacebak = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

    return(
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>fakebook</h1>
                <button className={styles.white_btn} onClick={handleLogout}>
                    Logout
                </button>
            </nav>

            <h1>Data Facebak</h1>
        </div>
    )
};

export default DataFacebak;
