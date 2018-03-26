import React from 'react';

function NotFound(){
    (() => window.scrollTo(0, 0))();
    return(
        <div className="container-wrap">
            <section className="content-height">
                <h1>Страница не найдена</h1>
            </section>
        </div>
    );
}

export default NotFound;