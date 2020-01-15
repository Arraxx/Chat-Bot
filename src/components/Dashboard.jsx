import React from 'react'
import { Link } from "react-router-dom";

function dashboard() {
    return (
        <div style={{ marginTop: "100px" }}>
            <Link to="/Bot">
                <button>
                    Bot
                </button>
            </Link>
        </div>
    )
}

export default dashboard
