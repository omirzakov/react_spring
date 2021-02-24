import React, { useState } from "react";

function Footer () {
    const [year, setYear] = useState(new Date().getFullYear());

    return (
    <footer class="py-5 bg-dark">
        <div class="container">
            <p class="m-0 text-center text-white">Copyright © Your Website { year }</p>
        </div>
    </footer>
    )
}

export default Footer;