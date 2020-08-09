import React from 'react';
import Link from 'next/link';
import Router from 'next/router';


const indexPage = () => {
    return (
        <div>
            <h1>The Main Page</h1>
            <h3><Link href="/authPage">Go to Auth page</Link></h3>
            <button onClick={()=> Router.push("/authPage")}>Go to Auth page</button>
        </div>
    )
}

export default indexPage;